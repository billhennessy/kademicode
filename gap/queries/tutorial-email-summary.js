var gudairAccreditationTable = queries.addTableDef("emailSummaryTable", "Email Summary Table", "loadEmailSummary")
    .addHeader('Domain')
    .addHeader('Subject')
    .addHeader('sendStatus')
    .addHeader('sendStatusDate');
    
function loadEmailSummary(result, rf) {
    
    
    var resp = queryService.runQuery("raffleWinners", result.start, result.maxRows);
    
    
    var fc = formatter.newFormContext();
    
    var pageSize = 5000;

    var paramOrgType = fc.cleanedParam("orgType");

    var sm = services.searchManager;
    var qm = services.queryManager;
    var om = services.organisationManager;
    
    var profileQuery = {
      "stored_fields": [
        "customerId",
        "customerFirstName",
        "customerSurName",
        "customerName",
        "orderedDate",
        "customerMemberships.orgTitle",
        "productTitle"
      ],
      "query": {
        "bool": {
          "must": [
            {
              "range": {
                "orderedDate": {
                  "gte": "$startDate",
                  "lte": "$endDate"
                }
              }
            },
            {
              "term": {
                "customerMemberships.group": "240103"
              }
            }
          ]
        }
      },
      "size": 10000
    };

    var profileJsonStr = qm.preProcessQuery(JSON.stringify(profileQuery));
    var profiles = sm.search(profileJsonStr, "productorders");
    
    log.info("Program ID: {}", formatter.docsText(profiles));
    

    var numRows = 0;
    resp.useHits(function(hit){
        
        result.addCell(getValue(hit.fields.customerFirstName));
        // log.info("Program ID: {}", formatter.toJson(hit.fields.customerFirstName.value));
        result.flush();
        numRows++;        
        
    });
    
    var numRows = 0;
    for( var i=0; i<5; i++) {
        result.addCell("hello world !!!, " + i);
        result.flush();        
        numRows++;                
    }
    
    
    result.flush();
    result.numRows = numRows;
}

function getValue(field) {
    if( field == null ) {
        return "";
    }
    return field.value;
}