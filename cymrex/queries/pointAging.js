queries.addTableDef("pointAging","PointAgingReport","loadPointAging")
.addHeader ("Profile Name")
.addHeader("Number of Points")
.addHeader("Issued Date")
.addHeader("Expiry")
.addHeader("Age (in days)")
.addHeader("Time to expiry")

/*
issuedForProfileName	
numPoints	
issuedDate	
expiryDate
*/



function loadPointAging(result, rf) {
    var pageSize = 100;
    var resp = queryService.runQuery("pointaging", 0, pageSize);
    var numRows = 0;
    //log.info('result {}', formatter.docsText(result));
    resp.useHits(function(hit){
        var issued = formatter.toDate(hit.fields.issuedDate.value);
        var expiry = formatter.toDate(getValue(hit.fields.expiryDate));
        var daysAging = formatter.formatAge ( issued )
        var expiryTime = formatter.formatAge( expiry )
        result.addCell(getValue(hit.fields.issuedForProfileName));
        result.addCell(hit.fields.numPoints.value);
        result.addCell(hit.fields.issuedDate.value);
        result.addCell(getValue(hit.fields.expiryDate));
        result.addCell(daysAging);
        result.addCell(expiryTime);
        
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