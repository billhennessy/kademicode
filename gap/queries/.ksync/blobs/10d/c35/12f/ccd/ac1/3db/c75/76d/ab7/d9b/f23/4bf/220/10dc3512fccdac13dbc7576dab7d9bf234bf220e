queries.addTableDef("tableConfirmedReport", "Table Confirmed Report", "loadConfirmedReport")
    .addHeader("Employee ID")
    .addHeader("Name")
    .addHeader("Email")
    .addHeader("Store Number")
    .addHeader("Confirmed Date");

    
    
function loadConfirmedReport(result, rf) {
    var resp = queryService.runQuery("confirmedReport", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        log.info('loadConfirmedReport: hit: {}', hit);
        var fullName = formatter.toString(hit.fields.firstName.value) + " " + formatter.toString(hit.fields.surName.value);
        result.addCell(hit.fields.userName.value);
        result.addCell(fullName);
        result.addCell("blank"); //(formatter.toString(hit.fields.email.value));
        result.addCell("blank");//(hit.fields.memberships);
        result.addCell("blank"); //(formatter.formatDate(hit.memberships));
        

        
        result.flush();
        numRows++;
    });
    result.flush();
    result.numRows = numRows;
}