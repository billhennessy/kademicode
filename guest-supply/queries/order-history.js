queries.addTableDef("orderSummaryTable", "Order Summary Table", "loadOrderSummary")
    .addHeader("Order Number")
    .addHeader("Order Date")
    .addHeader("Amount")
    .addHeader("Points")
    .addHeader("Reason")

    
    
function loadOrderSummary(result, rf) {
    var resp = queryService.runQuery("OrderHeaderData", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        result.addCell(hit.fields.orderNumber);
        result.addCell(formatter.formatDate(hit.fields.periodFrom.value));
        result.addCell(hit.fields.amount.value);
        result.addCell(hit.fields.points);
        result.addCell(hit.fields.pasName);

        
        result.flush();
        numRows++;
    });
    result.flush();
    result.numRows = numRows;
}