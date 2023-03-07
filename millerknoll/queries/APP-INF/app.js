controllerMappings
        .websitePortletController()
        .portletSection('myPerfSummary')
        .templatePath('/theme/apps/perfsummary/myPerfSummary.html')
        .method('populateSummary')
        .enabled(true)
        .build();

function populateSummary(){
    
}  

var orgUploader = controllerMappings.newTableActionHandlerBuilder()
    .id('orgUploader')
    .title('Organization Import Actions')
    .description('Imports and updates orgs')
    //.validateRowFn('doValidatePropertyRow')
    .transformRowFn('doTransformOrgRow')
    .processRowFn('doProcessOrgRow');
    
    orgUploader.field("defaultOrgType", "Default Org Type", true).optionsFn(function () {
        var list = formatter.newArrayList();
        formatter.foreach(services.organisationManager.allOrgTypes, function(orgType){
            list.add(orgType.name);
        });
        
        return list;
    });
    orgUploader.field("orgTypeField", "Org Type Field No.", true)
    orgUploader.build();  


    function doTransformOrgRow(row, params, rowContext, importContext){
      
      
        var defaultOrgType = params.defaultOrgType;
        if ( formatter.isNotEmpty(defaultOrgType) ) {
            row.add(defaultOrgType); //Add the org type to the end of row data 
        }
        
        return row;
    }
    
    function doProcessOrgRow(row, params, rowContext, importContext){
        var fieldMappings = rowContext.fieldMappings;
        var position = formatter.toInteger(params.orgTypeField);
    
        if (fieldMappings && formatter.isNotEmpty(fieldMappings)) {
            var typeMap = formatter.newArrayList();
            typeMap.add(position); //The index of the org type in row data
            fieldMappings.put('orgTypeName', typeMap);
        }
    }
    
    /**
     * ProductSKU Upload Actions
     * 
     * /
     */
     
     var skuUploader = controllerMappings.newTableActionHandlerBuilder()
    .id('skuUploader')
    .title('Sku Import Actions')
    .description('Imports and updates Skus')
    //.validateRowFn('doValidatePropertyRow')
    .transformRowFn('doTransformSkuRow')
    //.processRowFn('doProcessSkuRow');
    
    skuUploader.field("sourceField", "Source Field No.", true)
    skuUploader.field("destField", "Destination Field No.", true)
    skuUploader.build();  


    function doTransformSkuRow(row, params, rowContext, importContext){
      
      
        //var defaultOrgType = params.defaultOrgType;
        var productCode = formatter.safeGet(row, params.sourceField)
        log.info("productCode: {}", productCode);
        if ( formatter.isNotEmpty(productCode) ) {
           // row.add(productCode); //Add the org type to the end of row data 
           row.set(params.destField, formatter.cleanString(productCode)); 
        }
        
        return row;
    }
    
    function doProcessSkuRow(row, params, rowContext, importContext){
        var fieldMappings = rowContext.fieldMappings;
        var position = formatter.toInteger(params.orgTypeField);
    
        if (fieldMappings && formatter.isNotEmpty(fieldMappings)) {
            var typeMap = formatter.newArrayList();
            typeMap.add(position); //The index of the org type in row data
            fieldMappings.put('productSku', typeMap);
        }
    }
    
    
    /**
     * SALES DATA UPLOADER
     * 
     * */
    var salesUploader = controllerMappings.newTableActionHandlerBuilder()
    .id('salesUploader')
    .title('Sales Import Actions')
    .description('Imports and updates Sales data')
    //.validateRowFn('doValidatePropertyRow')
    .transformRowFn('doTransformSalesRow')
//.processRowFn('doProcessSalesRow');

//skuUploader.field("skuField", "SKU Field No.", true)
salesUploader.build();
    
    function doTransformSalesRow(row, params, rowContext, importContext) {
        var orderNumber = formatter.safeGet(row, 7);
        var sku = formatter.safeGet(row, 9);
        var seller = formatter.safeGet(row, 10);
    
        // Check for existing record for this dealer
        var dataSeries = services.dataSeriesManager.dataSeries('essentials-sales');
        var salesRecord = findSalesRecord(dataSeries, orderNumber, seller, sku);
        if (salesRecord) {
            // Found record, so we reset points allocation
            log.info('Resetting sales record: {}', orderNumber);
            resetSalesRecordPointsAllocation(salesRecord);
            // Then delete record
            log.info('Deleting sales record: {}', orderNumber);
            deleteSaleRecord(salesRecord);
        }
    
    
        return row;
    }
    
   
    /**
     * DSR LOADER ACTIONS
     */
    var dsrUploader = controllerMappings.newTableActionHandlerBuilder()
    .id('dsrUploader')
    .title('DSR Import Actions')
    .description('Imports and updates DSRs')
    .transformRowFn('doTransformDSRRow')
    //.processRowFn('doProcessSalesRow');
    dsrUploader.build();  


    function doTransformDSRRow(row, params, rowContext, importContext){
       
        var status = formatter.toString(row[6]);
        log.info( 'doTransformDSRRow => status: {}', status );
        if ( status === 'I' ) {
           
           return;
        }
        
        return row;
    }
    
    
    /**
     * HELPER FUNCTIONS
     */
function createDate(date) {
  log.info('Date => {}', date);
  
  
  var newDate = formatter.formatDateWithPattern(date, 'MM/dd/yyyy');
  log.info('newDate => {}', newDate);
  return newDate;
}


/**
* Find sales record by orderNumber, seller, and sku
*/
function findSalesRecord(dataSeries, orderNumber, userId, sku) {

    log.info('findSalesRecord: orderNumber: {}, seller: {}, sku: {}', orderNumber, userId, sku);
    // var um = services.userManager; 

    var crit = services.criteriaBuilders.get('salesDataRecord')
        .eq('series', dataSeries)
        .eq('productSku', sku)
        .eq('field2', orderNumber);
    log.info('findSalesRecord > seller: {}, orderNumber: {}, sku: {}', userId, orderNumber, sku);
   
    var results = crit.execute(100);
    log.info('Results: {}', results);
    if (formatter.isNotEmpty(results)) {
        for (var i = 0; i < results.size(); i++) {
            var record = results.get(i);
            if (record.salesBy.entityName === userId) {
                log.info("findSalesRecord: orderNumber={} records={} Found={}", orderNumber, results, record);
                return record;
            }
         
        }
    }

    return null;
}

/**
* Reset points allocations from record
*/
function resetSalesRecordPointsAllocation(record) {
    var pointsList = record.findPointsAllocation();
    log.info("resetSalesRecordPointsAllocation found points list: {}", pointsList);
    if (formatter.isNotEmpty(pointsList)) {
        pointsList.forEach(function (pa) {
            log.info("resetSalesRecordPointsAllocation reset ok for point: {}", pa);
            services.dataSeriesManager.resetPointsAllocation(pa, false);
        });
    }
}

/**
* Delete sales record
*/
function deleteSaleRecord(record) {
    services.criteriaBuilders.getBuilder("salesDataRecord").delete(record);
    log.info("deleteSaleRecord: {}", record);
}
