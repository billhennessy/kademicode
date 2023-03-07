var gudairAccreditationTable = queries.addTableDef("orgNoMembership", "Orgs with no member", "orgNoMembership")
    .addHeader('Organization')
    .addHeader('OrgID')
    .addHeader('Address')
    .addHeader('City')
    .addHeader('State');

function orgNoMembership(start, maxRows, rowsResult, rootFolder) {
    
    var fc = formatter.newFormContext();
    
    var pageSize = 5000;

    var paramOrgType = fc.cleanedParam("orgType");

    var sm = services.searchManager;
    var qm = services.queryManager;
    var om = services.organisationManager;

    var profileQuery = {
        "size" : 0,
        "aggregations" : {
            "orgsToFilter" : {
                "terms": {
                    "size": 30000,
                    "field": "directOrgIds"
                }
            }
            
        }
    };

    var profileJsonStr = qm.preProcessQuery(JSON.stringify(profileQuery));
    var profiles = sm.search(profileJsonStr, "profile");

    var aggs= profiles.aggregations.asMap();
    var aggBuckets = aggs.orgsToFilter.buckets;
    
    var orgsWithMems = [];
    //log.info("aggs: {}", formatter.docsText(aggs));
    formatter.foreach(aggBuckets, function(buckets) {
        if (orgsWithMems.indexOf(buckets.key) === -1) {
            orgsWithMems.push(buckets.key);
        }
        
    });
    
    var orgQuery = {
        "stored_fields":     [
            "orgId",
            "orgTypes",
            "orgTitle",
            "address",
            "addressLine2",
            "addressState",
            "city"
        ],
        
        "query": {
            "bool" : {
                "must": {
                    "term" : { "orgTypes" : paramOrgType }
                },
                "must_not": {
                    "terms": {
                        "orgId": orgsWithMems
                    }
                }
                
            }
        }
    }; 
    
    var orgJsonStr = qm.preProcessQuery(JSON.stringify(orgQuery));
    
    var orgs = sm.search(orgJsonStr, pageSize, "org");
    var orgCount = 0;
    
    rowsResult.maxRows(orgs.hits.totalHits);
    orgs.useHits(function(hit) {
        if (orgCount++ >= start) {
            var orgId = hit.fields.orgId.value;
            rowsResult.addCell(formatter.format(hit.fields.orgTitle));
            rowsResult.addCell(formatter.format(orgId));
            rowsResult.addCell(formatter.format(hit.fields.address));
            rowsResult.addCell(formatter.format(hit.fields.addressLine2));
            rowsResult.addCell(formatter.format(hit.fields.city));
            rowsResult.addCell(formatter.format(hit.fields.addressState));
            rowsResult.addRow();
            
            if (maxRows !== null && rowsResult.rows.size() > maxRows) {
                log.info("loadContactRequests: reached max rows {}", maxRows);
                
                orgs.breakUseHits();
            }
        }
    });
}