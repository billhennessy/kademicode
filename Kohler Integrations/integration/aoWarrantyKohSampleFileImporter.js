load('/integration/ao-common.js');

var rowCount = 0;
var dateManager = DateManagerV1;

function prepare() {
  pipeline.addInfo('PREPARE', 'todo ... add information here');
  var defaultDataSerieName = 'warranty-registrations';
  pipeline.addInfo('PREPARE', 'using dataseries = ' + defaultDataSerieName);
  pipeline.attributes.dataSeries = services.dataSeriesManager.dataSeries(defaultDataSerieName);  
}

function finishImport() {
  pipeline.addInfo('FINISHED', 'todo ... add info here');
}

//function processRow(BusinessEntityID,BusinessEntityName,EquipmentLine,EquipmentApplication,OwnerType1,SerialNumber,TrueModelModel,RegistrationDate,RegistrationType1,RegistrationType2,OwnerType2) {

  function processRow(attributedTo, b, c, d, customerType, serialNumber, g, saleDate, registrationType) {  
  rowCount++;
  
  // var attributedTo = BusinessEntityID;
  // var amount = 1;
  // var periodFrom = RegistrationDate; // Please, check the date format
  // var productSku = 'warranty';
  // var RegistrationType = RegistrationType1;
  // var CustomerType = OwnerType1;
  // var serialNumber = SerialNumber;

  attributedTo = formatter.toString(attributedTo);
  serialNumber = formatter.toString(serialNumber);
  customerType = formatter.toString(customerType);
  saleDate = formatter.toString(saleDate);
  registrationType = formatter.toString(registrationType);
  amount = formatter.toInteger(1);
 
  log.info("DO RegistrationImporter.js: attributedTo={}, serialNumber={}, amount={}", attributedTo, serialNumber, amount);

  if( amount ===0){
    return;
  }
  
  /* TODO: Add dupe-checking on serial number */

  
  
  // pipeline.addInfo('PREPARE',  ' ' + attributedTo + ' ' + amount + ' ' + productSku);
  pipeline.addInfo('PREPARE',  'rowCount ' + rowCount + ' ' + saleDate + ' ' );
  

  // // Create a new record

  var attributedToProfile = services.organisationManager.findOrg(attributedTo);

  if (formatter.isNull(attributedToProfile)) {
       pipeline.addFailure('PROFILE-NOT-FOUND', 'Unable to locate a profile with userID: ' + attributedTo);
       return;
  }

  var dm = services.dataSeriesManager;
  var db = dm.newDataPoint();
  
  db.series       = pipeline.attributes.dataSeries;
  db.amount       = formatter.toBigDecimal(amount);
  db.periodFrom   = formatter.parseDateWithPattern(saleDate, 'MM-dd-yyyy');
  db.attributedTo = attributedToProfile;
  

  var fields = formatter.newMap();

  fields.put('registration-type', formatter.toString(registrationType));
  fields.put('customer-type', formatter.toString(customerType));
  fields.put('serialNumber', formatter.toString(serialNumber));
   db.fields = fields;
   
// Find an existing Record
var salesRecord = findSalesRecord(db.series, amount, attributedTo, serialNumber);

if (salesRecord) {
    // Found record, so we reset points allocation
    resetSalesRecordPointsAllocation(salesRecord);

    // Then delete record
    deleteSaleRecord(salesRecord);
}

  
  var newRecord = dm.insertDataPoint(db);

  pipeline.addInfo('CREATED', 'Create a new sales record with id: ' + newRecord.id);  

}

