// Import commong utils file
load('/integration/common.js');

/*
File Columns:
   
    S - Attributed To
    AF - Amount 
    BH - Date - MM/DD?YYYY
    BI - Product SKU

*/

function prepare() {
    pipeline.addInfo('PREPARE', 'Locate the Data Series Medart Complete');

    // Locate the Data Series where the records will be added to
    pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries('medart-complete');
}

function finishImport() {
    pipeline.addInfo('FINISHED', 'todo ... add info here');

    // Run the Points Allocations
    services.dataSeriesManager.processPointsAllocation(pipeline.attributes.dataSeries, function () { });
}

function processRow(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,attributedTo,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,amount,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,saleDate, productsku) {

    var dataSeries = services.dataSeriesManager.dataSeries('medart-complete');

    // Cleanup data
    //transactionId = formatter.toString(transactionId);
    attributedTo = formatter.toString(attributedTo);
    saleDate = formatter.parseDate(saleDate);
    amount = formatter.toBigDecimal(amount);
    productsku = formatter.toString(productsku);
    

   // Find an existing Record
    // var salesRecord = findSalesRecord(dataSeries, amount, attributedTo);

    // if (salesRecord) {
    //     // Found record, so we reset points allocation
    //     resetSalesRecordPointsAllocation(salesRecord);

    //     // Then delete record
    //     deleteSaleRecord(salesRecord);
    // }

    // Locate the Profile to attribute the sale to
    // var attributedToProfile = services.userManager.findByEmail(attributedTo);
    var attributedToProfile = services.organisationManager.findOrg(attributedTo);

    if (formatter.isNull(attributedToProfile)) {
        // Log an error if the profile is not found
        pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with WarrantyID: ' + attributedTo);
        return;
    }

    // Create a new record
    var db = services.dataSeriesManager.newDataPoint();

    db.series = pipeline.attributes.dataSeries;
    db.amount = amount;
    db.periodFrom = saleDate;
    db.attributedTo = attributedToProfile;
    db.productSku = productsku;

    // Add extra fields
    // var fields = formatter.newMap();
  
    // fields.put('transaction-id', transactionId);
    // db.fields = fields;

    // Process the new record
    var newRecord = services.dataSeriesManager.insertDataPoint(db);
    pipeline.addInfo('CREATED', 'Create a new sales record with id: ' + newRecord.id);
}