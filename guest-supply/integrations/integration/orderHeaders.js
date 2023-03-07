load('/integration/common.js');

function prepare() {
  pipeline.addInfo('PREPARE', 'Guest Supply Order Header');
  var defaultDataSeriesName = defaultDataSeries('headers');
  pipeline.addInfo('PREPARE', 'using dataseries = ' + defaultDataSeriesName);
  pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries(defaultDataSeriesName);  
}

function finishImport() {
  pipeline.addInfo('FINISHED', 'todo ... add info here');
}

function processRow(BusinessUnit,InvoiceNo,AccountNo,SalesID,InvoiceDate, Sales , SalesmanGP$ , ActualGP$ ,BackOrder,DropShipment, Discount , Freight , Misc , Rebate , Restock , Restock2 ,ShipTo,InvoiceType,InvoiceGroup,OrderNo,Source) {
 
  var dataSeries = services.dataSeriesManager.dataSeries(defaultDataSeries('headers'));
  var dm1 = services.dateManagerV1; 

   /** 
  * Clean up dashes 
  */
  var sales = isNaN(Sales) ? 0.00 : formatter.toDecimal(Sales, 2);
  var freight = isNaN(Freight) ? 0.00 : formatter.toDecimal(Freight, 2);
  //var discount =isNaN(Discount) ? 0.00 : formatter.toDecimal(Discount, 2);
  //var rebate = isNaN(rebate) ? 0.00 : formatter.toDecimal(Rebate, 2);
  
  pipeline.addInfo('RECORD', 'sales='+sales +', freight='+freight);
  
  var attributedTo = formatter.toString(ShipTo); 
  var amount = formatter.toDecimal(sales - freight, 2); //Freight charges don't count
  var periodFrom = dm1.parseDate(InvoiceDate); 
  //var productSku = 'Maint Kit Units';
  /* Extra Fields */
  var orderNumber =formatter.toString(OrderNo);
  var invoiceNumber = formatter.toString(InvoiceNo);
  var accountNumber = formatter.toString(AccountNo);
  var source = formatter.toString(Source);


 // Find an existing Record
 
    var salesRecord = findSalesRecord(dataSeries, orderNumber, amount, attributedTo);

    if (salesRecord) {
        // Found record, so we reset points allocation
        resetSalesRecordPointsAllocation(salesRecord);

        // Then delete record
        deleteSaleRecord(salesRecord);
    }
    
if( amount === 0){
    return;
  }

   pipeline.addInfo('PREPARE',  ' ' + attributedTo + ' ' + amount + ' ' + orderNumber);

  // // Create a new record

  var attributedToProfile = services.userManager.findOrg(formatter.toString(attributedTo));

  if (formatter.isNull(attributedToProfile)) {
       pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with ShipTo: ' + attributedTo);
       return;
  }

  var dm = services.dataSeriesManager;
  var db = dm.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toDecimal(amount, 2);
  db.periodFrom   = dm1.parseDate(periodFrom);
  db.attributedTo = attributedToProfile;
  //db.productSku   = formatter.toString(productSku);

  var fields = formatter.newMap();

  fields.put('orderNumber', formatter.toString(orderNumber));
  fields.put('invoiceNumber', formatter.toString(invoiceNumber));
  fields.put('accountNumber', formatter.toString(accountNumber));
  //fields.put('freight', formatter.toDecimal(freight, 2));
  fields.put('source', formatter.toString(source));
   db.fields = fields;
  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Created a new order header record with id: ' + newRecord.id + ', amount: ' + amount + ', property ID ' + attributedTo);  
  
}
