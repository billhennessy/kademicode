load('/integration/ao-common.js');

function prepare() {
  pipeline.addInfo('PREPARE', 'Gardner File for' + hardcodedDate() );
  var defaultDataSerieName = defaultDataSerie();
  pipeline.addInfo('PREPARE', 'using dataseries = ' + defaultDataSerieName);
  pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries(defaultDataSerieName);  
}

function finishImport() {
  pipeline.addInfo('FINISHED', 'Gardner for ' + hardcodedDate()  );
}

function processRow(colA, colB, colC, colD, colE, colF, colG, colH, colI, colJ, colK, colL, colM, colN, colO, colP, colQ, colR, colS, colT, colU, colV, colW, colX, colY, colZ, colAA, colAB, colAC, colAD, colAE, colAF, colAG, colAH, colAI, colAJ, colAK, colAL, colAM, colAN, colAO, colAP, colAQ, colAR, colAS, colAT, colAU, colAV, colAW, colAX, colAY, colAZ, colBA, colBB, colBC, colBD, colBE, colBF, colBG) {

  var isMaintKitOrOil = colC === 'Maint Kit' || colC === 'Oil' ? true : false ;
  
  pipeline.addInfo('PREPARE',  ' isMaintKitOrOil = ' + isMaintKitOrOil + ' ' );

  var attributedTo = colA; // ??? it should be colBE = Primary Salesperson Email or colN = Customer Email (b2b)
  var dollarsAmount = 0;
  var unitsAmount = 0;

  var periodFrom = hardcodedDate(); // Feb 28th or Feb 1st
  var productSku = colC === 'Other' ? 'Standard' : colC;
  var transactionId = 'pr-946-w-63';
  var distributor = 'Gardner';
  
  var saleMonth = hardcodedDate().split('-')[0];
  
  switch (saleMonth) {
      case '01': // Selecting Col from Juanary
          dollarsAmount = colD;
          unitsAmount = colP;
        break;
      case '02':  // Selecting Col from Febrary
          dollarsAmount = colE;
          unitsAmount = colQ;
        break;
      case '03': // Selecting Col from March
          dollarsAmount = colF;
          unitsAmount = colR;
        break;
      case '04': // Selecting Col from April
          dollarsAmount = colG;
          unitsAmount = colS;
        break;
      case '05': // Selecting Col from May
          dollarsAmount = colH;
          unitsAmount = colT;
        break;
      case '06':  // Selecting Col from June
          dollarsAmount = colI;
          unitsAmount = colU;
        break;
      case '07':  // Selecting Col from July
          dollarsAmount = colJ;
          unitsAmount = colV;
        break;  
      case '08':  // Selecting Col from August
          dollarsAmount = colK;
          unitsAmount = colW;
        break;  
      case '09':  // Selecting Col from September
          dollarsAmount = colL;
          unitsAmount = colX;
        break;  
      case '10':  // Selecting Col from October
          dollarsAmount = colM;
          unitsAmount = colY;
        break;  
      case '11':  // Selecting Col from November
          dollarsAmount = colN;
          unitsAmount = colZ;
        break;  
      case '12':  // Selecting Col from December
          dollarsAmount = colO;
          unitsAmount = colAA;
        break;
      default:
        pipeline.addInfo('PREPARE',  'No selecting column at all' );
  } 
  
  
  if( dollarsAmount === 0){
    return;
  }

  // pipeline.addInfo('PREPARE',  ' ' + attributedTo + ' ' + dollarsAmount + ' ' + productSku);

  // // Create a new record

  var attributedToProfile = services.userManager.findOrg(formatter.toString(attributedTo));

  if (formatter.isNull(attributedToProfile)) {
       pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with userID: ' + attributedTo);
       return;
  }

  addDolarsRecord( attributedToProfile, dollarsAmount, periodFrom, productSku, distributor );

  if(isMaintKitOrOil){
    addUnitsRecord( attributedToProfile, unitsAmount, periodFrom, productSku, distributor );
  }
  
}

function addDolarsRecord( attributedToProfile, dollarsAmount, periodFrom, productSku, distributor ){

  var dm = services.dataSeriesManager;
  var db = dm.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toBigDecimal( dollarsAmount.charAt(0) === '$' ? dollarsAmount.substring(1) : dollarsAmount );
  db.periodFrom   = formatter.parseDateWithPattern(periodFrom, 'MM-dd-yyyy');
  db.attributedTo = attributedToProfile;
  db.productSku   = formatter.toString(productSku);


   var fields = formatter.newMap();
   fields.put('distributor', formatter.toString(distributor));
   db.fields = fields;
  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Create a new Dollars sales record with id: ' + newRecord.id);  

}

function addUnitsRecord( attributedToProfile, unitsAmount, periodFrom, productSku, distributor ){

  var dm = services.dataSeriesManager;
  var db = dm.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toBigDecimal( unitsAmount );
  db.periodFrom   = formatter.parseDateWithPattern(periodFrom, 'MM-dd-yyyy');
  db.attributedTo = attributedToProfile;
  db.productSku   = formatter.toString(productSku + ' Units');
  

   var fields = formatter.newMap();
   fields.put('distributor', formatter.toString(distributor));
   db.fields = fields;
  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Create a new Unit sales record with id: ' + newRecord.id);  

}