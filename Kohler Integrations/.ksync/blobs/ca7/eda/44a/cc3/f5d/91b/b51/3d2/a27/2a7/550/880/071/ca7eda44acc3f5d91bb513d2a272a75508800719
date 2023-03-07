load('/integration/ao-common.js');

function prepare() {
  pipeline.addInfo('PREPARE', 'aoMedartKohLoyalPsoAllOthersImporter:1fe131');
  var defaultDataSerieName = defaultDataSerie();
  pipeline.addInfo('PREPARE', 'using dataseries = ' + defaultDataSerieName);
  pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries(defaultDataSerieName);  
}

function finishImport() {
  pipeline.addInfo('FINISHED', 'todo ... add info here');
}

function processRow(colA, colB, colC, colD, colE, colF, colG, colH, colI, colJ, colK, colL, colM, colN, colO, colP, colQ, colR, colS, colT, colU, colV, colW, colX, colY, colZ, colAA, colAB, colAC, colAD, colAE, colAF, colAG, colAH, colAI, colAJ, colAK, colAL, colAM, colAN, colAO, colAP, colAQ, colAR, colAS, colAT, colAU, colAV, colAW, colAX, colAY, colAZ, colBA, colBB, colBC, colBD, colBE, colBF, colBG) {

  var attributedTo = colS;
  var amount = colAF; //Use colAJ for Sept - March
  var periodFrom = springOrderDate(); // Feb 30th or Feb 1st
  var productSku = 'Standard'; //'KOH LOYAL PSO ALL OTHERS';
  var transactionId = 'pr-946-w-63';
  var distributor = 'Medart';
  
  if( amount == 0){
    return;
  }

  // pipeline.addInfo('PREPARE',  ' ' + attributedTo + ' ' + amount + ' ' + productSku);
  
  // // Create a new record

  //var attributedToProfile = services.userManager.findByEmail(formatter.toString(attributedTo));
  var attributedToProfile = services.organisationManager.findOrg(attributedTo);

  if (formatter.isNull(attributedToProfile)) {
       pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with userID: ' + attributedTo);
       return;
  }

  var dm = services.dataSeriesManager;
  var db = services.dataSeriesManager.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toBigDecimal(amount);
  db.periodFrom   = formatter.parseDateWithPattern(periodFrom, 'MM-dd-yyyy');
  db.attributedTo = attributedToProfile;
  db.productSku   = formatter.toString(productSku);

  var fields = formatter.newMap();

  fields.put('distributor', formatter.toString(distributor));
  db.fields = fields;
  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Create a new sales record with id: ' + newRecord.id);  
  
}

