load('/integration/ao-common.js');

function prepare() {
  pipeline.addInfo('PREPARE', 'PES KOH Dealer Sales');
  var defaultDataSerieName = defaultDataSerie();
  pipeline.addInfo('PREPARE', 'using dataseries = ' + defaultDataSerieName);
  pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries(defaultDataSerieName);  
}

function finishImport() {
  pipeline.addInfo('FINISHED', 'todo ... add info here');
}

function processRow(colA, colB, colC, colD, colE, colF, colG, colH, colI, colJ, colK, colL, colM, colN, colO, colP, colQ, colR, colS, colT, colU, colV, colW, colX, colY, colZ, colAA, colAB, colAC, colAD, colAE, colAF, colAG, colAH, colAI, colAJ, colAK, colAL, colAM, colAN, colAO, colAP, colAQ, colAR, colAS, colAT, colAU, colAV, colAW, colAX, colAY, colAZ, colBA, colBB, colBC, colBD, colBE, colBF, colBG, colBH, colBI, colBJ, colBK, colBL) {

  var attributedTo =  colS;
  var amount = colAJ;  // Use colAQ for initial load, then AJ for subsequent months. 
  var periodFrom = hardcodedDate();
  var productSku = colAG;
  var transactionId = 'pr-946-w-63';
  var distributor = 'PES';

  if( amount === 0){
    return;
  }

  // normalizing (see comments on KDMI-21)
  var normalizedProductSku = '';

  if ( productSku == 391 ) {
    pipeline.addInfo('CREATED', 'we have an Oil: ' + colAG);
    normalizedProductSku = 'Oil';
  }else if ( productSku == 381 ) {
    pipeline.addInfo('CREATED', 'we have an Advantage: ' + colAG);
    normalizedProductSku = 'Advantage';
  }else if ( productSku == 394 ){
    pipeline.addInfo('CREATED', 'we have an Maint Kit: ' + colAG);
    normalizedProductSku = 'Maint Kit';
  }else{
    pipeline.addInfo('CREATED', 'we have a Standard: ' + colAG);
    normalizedProductSku = 'Standard';
  }

  // pipeline.addInfo('PREPARE', ' ' + attributedTo +  ' ' + amount + ' ' + productSku);

  // Create a new record

  //var attributedToProfile = services.userManager.findByEmail(formatter.toString(attributedTo));
  var attributedToProfile = services.organisationManager.findOrg(attributedTo);

  if (formatter.isNull(attributedToProfile)) {
       pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with userID: ' + attributedTo);
       return;
  }

  var dm = services.dataSeriesManager;
  var db = dm.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toBigDecimal(amount);
  db.periodFrom   = formatter.parseDateWithPattern(periodFrom, 'MM-dd-yyyy');
  db.attributedTo = attributedToProfile;
  db.productSku   = formatter.toString(normalizedProductSku);

   var fields = formatter.newMap();

   fields.put('distributor', formatter.toString(distributor));
   db.fields = fields;
  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Create a new sales record with id: ' + newRecord.id);  
  
}

