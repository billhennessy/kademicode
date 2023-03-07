queries.addTableDef("pointFees","PointFeeTable","loadPointFees")
.addHeader ("Participant ID")
.addHeader("Email")
.addHeader("First Name")
.addHeader("Last Name")
.addHeader("Organization")
.addHeader("Points")
.addHeader("Points Source")
.addHeader("Reason")
.addHeader("Date Issued")
.addHeader("Fee (points * .03)")

/*
issuedDate	
issuedForProfileEmail	
issuedForProfileFirstName	
issuedForProfileSurName	
issuedForProfileId	
issuedToOrgTitle	
numPoints	
pointsSource	
reason	
rewardName
*/



function loadPointFees(result, rf) {
    var pageSize = 100;
    var resp = queryService.runQuery("PointFee", 0, pageSize);
    var numRows = 0;
    log.info('result {}', formatter.docsText(result));
    resp.useHits(function(hit){
        var org = formatter.toString(hit.fields.issuedToOrgTitle);
        
        result.addCell(hit.fields.issuedForProfileId.value);
        result.addCell(hit.fields.issuedForProfileEmail.value);
        result.addCell(hit.fields.issuedForProfileFirstName.value);
        result.addCell(getValue(hit.fields.issuedForProfileSurName));
    //    result.addCell(hit.fields.issuedForProfileId.value);
        result.addCell(getValue(hit.fields.issuedToOrgTitle));
        result.addCell(hit.fields.numPoints.value);
        result.addCell(hit.fields.pointsSource.value);
        result.addCell(hit.fields.reason.value);
        result.addCell(formatter.formatDate(hit.fields.issuedDate.value));
        result.addCell(formatter.toDecimal(hit.fields.numPoints.value * .03, 4));
        
        result.flush();
        numRows++;
    });
    result.flush();
    result.numRows = numRows;
}

function getValue(field) {
    if( field == null ) {
        return "";
    }
    return field.value;
}