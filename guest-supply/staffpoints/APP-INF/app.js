controllerMappings
        .adminController()
        .path("/staffPointsApp/")
        .enabled(true)
        .defaultView(views.templateView("staffPoints-app/staffPointSettings.html"))
        .addMethod("POST", "handleStaffPoints")
        .build();
        
controllerMappings
        .websiteController()
        .path("/staffPoints/")
        .enabled(true)
        .defaultView(views.templateView("staffPoints-app/staffPointsComponent.html"))
        .build();    
        
        

/* Order Header Transform */
var orderHeaderAmount = controllerMappings.newTableActionHandlerBuilder()
    .id('orderHeaderAmount')
    .title('Order Header Import Actions')
    .description('Determine amount for order header records')
    .processRowFn('doProcessRow')
    .transformRowFn('doTransformRow');
//orderHeaderAmount.field("amount", "Calc Amount?", true);

orderHeaderAmount.build();        

/**
 * 
 * @param {+} row 
 * @param {*} params 
 * @param {*} rowContext 
 * @param {*} importContext 
 * @returns 
 * Column mappings
0	Business Unit
1	Invoice No
2	Account No
3	Sales ID
4	Invoice Date
5	Sales
6	Salesman GP$
7	Actual GP$
8	Back Order
9	Drop Shipment
10	Discount
11	Freight
12	Misc
13	Rebate
14	Restock
15	Sold To
16	Ship To
17	Invoice Type
18	Invoice Group
19	Order No
20	Source
21	Surcharge
 */

function doTransformRow(row, params, rowContext, importContext){
  
   var fieldMappings = rowContext.fieldMappings;
   var salesAmount = formatter.toDouble(row[5]); 
   var freight = formatter.toDouble(row[11]);
   var salesTeam = formatter.toString(row[16]);
   
    var amount = adjustAmount(salesAmount, freight);

    log.info("doTransformRow: sales: {} -freight: {}, amount: {}", salesAmount, freight, amount);
    row.set(5,amount);
    row.add(salesAmount);
    row.set(21, salesTeam);
    
    return row;
}

function adjustAmount(sales, freight){
    var adjusted = formatter.toDouble(sales-freight);
    return adjusted;
}



function doProcessRow(row, params, rowContext, importContext){
    var fieldMappings = rowContext.fieldMappings;
    log.info('doProcessRow: row: {}, params: {}', row, params);
    if (fieldMappings && formatter.isNotEmpty(fieldMappings)) {
        var typeMap = formatter.newArrayList();
        typeMap.add(22);
        // typeMap.add(23); 
        fieldMappings.put('salesAmount', typeMap);
       // fieldMappings.put('salesTeam', typeMap);
       
       
       // Code to Check & Reset Points Allocations
       resetPointsAlloc(formatter.toString(row[19]));
    }
}


/**
 * Order Detail Table Uploader
 * Looks up Ship To ID from invoice data
 */



var orderDetailShipTo = controllerMappings.newTableActionHandlerBuilder()
    .id('orderDetailShipTo')
    .title('Order Detail Import Actions')
    .description('Looks up order header values for order detail records')
    .transformRowFn('doTransformDetailRow')
    .processRowFn('doProcessDetailRow');
orderDetailShipTo.build();        

/**
 * 
 * @param {+} row 
 * @param {*} params 
 * @param {*} rowContext 
 * @param {*} importContext 
 * @returns 
 * Column mappings
0	Business Unit
1	Invoice No
2	Account No
3	Product ID
4	 Qty Order 
5	 Qty Sold 
6	 Price 
7	 Sales 
8	 Salesman GP$ 
9	 Actual GP$ 
10	BackOrder
11	DropShip
12	 Discount 
13	 Misc 
14	 Rebate 
15	 Restock 
16	Order No
17	Order Line
18	 Surcharge 
 */

function doTransformDetailRow(row, params, rowContext, importContext){
  
   var fieldMappings = rowContext.fieldMappings;
   var dsm = services.dataSeriesManager;
   var ds = dsm.dataSeries('invoiceData');
   log.info('doTransformDetailRow: dataSeries: {}', ds.name);
   var invoiceData = getOrderRecord(ds, formatter.toString(row[16]));
   
   if(formatter.isNotEmpty(invoiceData)){
   var attributedTo = invoiceData.salesBy;
   var periodFrom = invoiceData.periodFrom;
    row.add(attributedTo);
    row.add(periodFrom);
    return row;
   }
   return;
}

function doProcessDetailRow(row, params, rowContext, importContext){
    var fieldMappings = rowContext.fieldMappings;
    if (fieldMappings && formatter.isNotEmpty(fieldMappings)) {
        var typeMap = formatter.newArrayList();
        typeMap.add(19); //The index of the org type in row data
        typeMap.add(20);
        fieldMappings.put('attributedTo', typeMap);
        fieldMappings.put('periodFrom', typeMap);
        
        
        // This is the Code for Resetting Allocations -- Not Yet Tested within the Detail Uploader
        /*
        resetPointsAlloc(formatter.toString(row[16]));
       */
       
    }
}

/**
 * Find invoice record by orderNumber
 */
function getOrderRecord(dataSeries, orderNumber) {
    var fieldOrdinal = dataSeries.findFieldOrdinal('ordernumber');
    log.info('getOrderRecord: fieldOrdinal: {}', fieldOrdinal)
    if (formatter.isNotEmpty(fieldOrdinal)) {
        var crit = services.criteriaBuilders.get('salesDataRecord')
            .eq('series', dataSeries)
            .eq('field' + fieldOrdinal, orderNumber);

        var results = crit.execute(100);

        if (formatter.isNotEmpty(results)) {
            for (var i = 0; i < results.size(); i++) {
                var record = results.get(i);
                log.info("getOrderRecord: orderNumber={} records={} Found={}", orderNumber, results, record);
                return record;

            }
        }
    }

    return;
}
  
  /**
 * Find order detail record by orderNumber and orderLine
 */
 function findDetailRecord(dataSeries, orderNumber, orderLine) {
    var fieldOrdinal1 = dataSeries.findFieldOrdinal('orderNumber');
    var fieldOrdinal2 = dataSeries.findFieldOrdinal('orderline');
  
    var crit = services.criteriaBuilders.get('salesDataRecord')
        .eq('series', dataSeries)
        .eq('field' + fieldOrdinal1, orderNumber)
        .eq('field' + fieldOrdinal2, orderLine);
  
    var results = crit.execute(100);
  
    if (formatter.isNotEmpty(results)) {
        for (var i = 0; i < results.size(); i++) {
            var record = results.get(i);
  
            if (record.salesBy.entityName === attributedTo) {
                log.info("findDetailRecord: orderNumber={} records={} Found={}", orderNumber, results, record);
                return record
            }
        }
    }
  
    return null;
  }
  
/**
 * Finds Point Allocations & Sales Records via Order Number, then Removes them if they exist
*/
function resetPointsAlloc(orderNumber) {
    //var orderNumberId = formatter.toString(row[19]);
    var orderNumberId = orderNumber;
       
    transactionManager.runInTransaction(function() {
        var fc = formatter.newFormContext();
        var pointAllocIds = formatter.newArrayList();

        var deleteSales = fc.booleanParam("deleteSales", true);
        var dsm = services.dataSeriesManager;

        // Gets Sales Invoice Data from Criteria -- Field3 is a custom field for "Order Number"
        var invoiceDataSeries = services.criteriaBuilders.get("salesDataRecord").eq("field3",orderNumberId).sortAsc("id");
        var searchInvoiceResults = invoiceDataSeries.execute(200);

        //log.info("searchInvoiceResult Size: {}", searchInvoiceResults.size());

        for (var x = 0; x < searchInvoiceResults.size(); x++) {
            var currentSalesId = searchInvoiceResults[x].id;
            currentSalesId = formatter.toString(currentSalesId);

            log.info("SalesId: {}", currentSalesId);

            // Searches the Points Allocation table for the Sales ID and returns the Point Allocation ID
            if(formatter.isNotEmpty(currentSalesId)) {
                var pointAllocDataSeries = services.criteriaBuilders.get("pointsAllocation");
                pointAllocDataSeries = pointAllocDataSeries.eq("salesDataRecordIds", currentSalesId);
                var pointAllocItem = pointAllocDataSeries.executeSingle();
                
                log.info("PointAllocItem: {}", pointAllocItem);
            
                if(formatter.isNotEmpty(pointAllocItem)) {
                    pointAllocIds.add(pointAllocItem.id);
                }
            }

        }
        log.info("PointAllocRecordIds: {}", pointAllocIds);

        formatter.foreach(pointAllocIds, function(id){
            var alloc = dsm.findPointsAllocation(id);
            log.info("Points Alloc Found: {}", alloc);
            if (formatter.isNotEmpty(alloc)) {
                log.info("resettingPointsAllocation: alloc: {}, deleteSales: {}", alloc, deleteSales);
                dsm.resetPointsAllocation(alloc, deleteSales);
            }
        });
    });
    
    return;
}

/**
 * Property uploader
 * Columns
0	Account No
1	Status
2	Cust Type
3	Cust Level
4	Customer Name
5	Street Address 1
6	City
7	State
8	Postal
9	Country
10	Sales ID
11	Default BU
12	Brand ID
13	Group ID
14	Exclusive ID
15	Freight Term Code
16	Sold To Flag
17	Bill To Flag
18	Ship To Flag
19	 Rooms 
 */

var propertyUploaderAction = controllerMappings.newTableActionHandlerBuilder()
    .id('propertyUploader')
    .title('Property Import Actions')
    .description('Imports and updates properties')
    //.validateRowFn('doValidatePropertyRow')
    .transformRowFn('doTransformPropertyRow')
    .processRowFn('doProcessPropertyRow');
    
    propertyUploaderAction.field("defaultOrgType", "Default Org Type", true).optionsFn(function () {
        var list = formatter.newArrayList();
        formatter.foreach(services.organisationManager.allOrgTypes, function(orgType){
            list.add(orgType.name);
        });
        
        return list;
    });
    propertyUploaderAction.build();  

    //MDD: I have modified this, but need to know how to test this
    // function doValidatePropertyRow(row, params, rowContext, importContext){
    //     if (formatter.toString(row[1].toUpperCase()) != "I") {
    //         return row;
    //     }
    // }

    function doTransformPropertyRow(row, params, rowContext, importContext){
      
        var defaultOrgType = params.defaultOrgType;
        if ( formatter.isNotEmpty(defaultOrgType) ) {
            row.add(defaultOrgType); //Add the org type to the end of row data 
        }
        
        return row;
    }
    
    function doProcessPropertyRow(row, params, rowContext, importContext){
        var fieldMappings = rowContext.fieldMappings;
    
        if (fieldMappings && formatter.isNotEmpty(fieldMappings)) {
            var typeMap = formatter.newArrayList();
            typeMap.add(20); //The index of the org type in row data
            fieldMappings.put('orgTypeName', typeMap);
        }
    }
    

/**
 * Guest Supply Metrics
 *  */    

// controllerMappings.newMetricTypeBuilder()
//         .id("online-orders-count")
//         .title("Returns percentage of online orders")
//         .description("Custom for Guest Supplyp")
//         .fields(null)   // leave null for now, we'll add fields later
//         .applicableEntities(null)  // leave null for now, means that any type of entity (profile or org) can be used
//         .calcFn("calcOnlineOrders") // this is the name of a function you will create below to calculate the value
//         .build();     // build the MetricType instance and register it with the app
        
// function calcOnlineOrders(entity, ruleParams, startDate, endDate) {
//     log.info("calcOnlineOrders");
//     var dm = services.dataSeriesManager;
//     var ds = dm.dataSeries()
//     var count = dm.(um.group('pre-associates'))
//     return pre;    // just a constant value for now, we will make this dynamic later
// }

/* KCode to show the metrics */
controllerMappings.addFieldV2("registrationTracker", "Percent of Pre-Associates in Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("registration-percentage");
    var finalResult = qm.calcMetric(metric) * 100;
    
    return finalResult;
});

/* KCode to show the metrics */
controllerMappings.addFieldV2("preAssociateCount", "Number of Pre-Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("pre-associates-count");
    var finalResult = qm.calcMetric(metric);
    
    return finalResult;
});

/* KCode to show the metrics */
controllerMappings.addFieldV2("associatesCount", "Number of Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("associates-count");
    var finalResult = qm.calcMetric(metric);
    
    return finalResult;
});
