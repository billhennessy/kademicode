
function hardcodedDate(){
  return '06-29-2022';
}

function springOrderDate(){
    return '03-22-2022';
}

function defaultDataSerie(){
  return 'product-sales-data' //'ao-integration-tests-data-series';
}

/**
 * Find sales record by amount, userName, and serialNumber  
 */
 function findSalesRecord(dataSeries, amount, userName, serialNumber) {
  var fieldOrdinal = dataSeries.findFieldOrdinal('serialNumber');

  var crit = services.criteriaBuilders.get('salesDataRecord')
      .eq('series', dataSeries)
      .eq('field' + fieldOrdinal, serialNumber)
      .eq('amount', formatter.toBigDecimal(amount));

  var results = crit.execute(100);

  if (formatter.isNotEmpty(results)) {
      for (var i = 0; i < results.size(); i++) {
          var record = results.get(i);

          if (record.salesBy.entityName === userName) {
              log.info("findSalesRecord: serialNumber={} records={} Found={}", serialNumber, results, record);
              return record
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

