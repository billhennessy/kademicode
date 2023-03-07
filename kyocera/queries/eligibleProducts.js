var eligibleProducts = queries.addTableDef("eligibleProductsTable", "Eligible Products Table", "loadEligibleProducts")
    .addHeader('Model')
    .addHeader('DSR Points')
    .addHeader('Manager Points')

    
function loadEligibleProducts(result, rf) {
   var resp = queryService.runQuery("eligibleProducts", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        log.info('Fields = {}', hit.fields);
        result.addCell(formatter.format(hit.fields.title));
        result.addCell(formatter.format(hit.fields.productField1));
        result.addCell(formatter.format(hit.fields.productField2));
        result.flush();
        numRows++;        
    });
    result.flush();
    result.numRows = numRows;
}