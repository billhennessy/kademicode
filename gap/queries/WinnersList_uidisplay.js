queries.addTableDef("AllwinnersAllBrandsAllWeeks", "AllwinnersAllBrandsAllWeeks", "loadAllwinnersAllBrandsAllWeeks")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadAllwinnersAllBrandsAllWeeks(result, rf) {
    var resp = queryService.runQuery("orders", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        
        // ordersTable
        // Orders
        
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}


queries.addTableDef("FirstPlaceGapWeek1", "FirstPlaceGapWeek1", "loadFirstPlaceGapWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceGapWeek1(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Gap-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}

 
queries.addTableDef("ThirdPlaceGapWeek3", "ThirdPlaceGapWeek3", "loadThirdPlaceGapWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
 
function loadThirdPlaceGapWeek3(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Gap-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){        
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }    
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceGapWeek3", "FourthPlaceGapWeek3", "loadFourthPlaceGapWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
 
function loadFourthPlaceGapWeek3(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Gap-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceGapWeek4", "FirstPlaceGapWeek4", "loadFirstPlaceGapWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
 
function loadFirstPlaceGapWeek4(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Gap-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceGapWeek4", "SecondPlaceGapWeek4", "loadSecondPlaceGapWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
 
function loadSecondPlaceGapWeek4(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Mastercard-Digital-Prepaid-Card-Gap-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceGapWeek4", "ThirdPlaceGapWeek4", "loadThirdPlaceGapWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceGapWeek4(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Gap-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceGapWeek4", "FourthPlaceGapWeek4", "loadFourthPlaceGapWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceGapWeek4(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Gap-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){        
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceGapWeek5", "FirstPlaceGapWeek5", "loadFirstPlaceGapWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceGapWeek5(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Gap-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){    
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceGapWeek5", "SecondPlaceGapWeek5", "loadSecondPlaceGapWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceGapWeek5(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Mastercard-Digital-Prepaid-Card-Gap-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceGapWeek5", "ThirdPlaceGapWeek5", "loadThirdPlaceGapWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceGapWeek5(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Gap-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceGapWeek5", "FourthPlaceGapWeek5", "loadFourthPlaceGapWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceGapWeek5(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Gap-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("GrandPrizeGapGrandPrize", "GrandPrizeGapGrandPrize", "loadGrandPrizeGapGrandPrize")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadGrandPrizeGapGrandPrize(result, rf) {
    var resp = queryService.runQuery("6700-Grand-Prize-Music-Trip-for-Two-Gap-Grand-Prize", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceBananaRepublicWeek1", "FirstPlaceBananaRepublicWeek1", "loadFirstPlaceBananaRepublicWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceBananaRepublicWeek1(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Banana-Republic-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceBananaRepublicWeek1", "SecondPlaceBananaRepublicWeek1", "loadSecondPlaceBananaRepublicWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceBananaRepublicWeek1(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Banana-Republic-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceBananaRepublicWeek1", "ThirdPlaceBananaRepublicWeek1", "loadThirdPlaceBananaRepublicWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceBananaRepublicWeek1(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Banana-Republic-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceBananaRepublicWeek1", "FourthPlaceBananaRepublicWeek1", "loadFourthPlaceBananaRepublicWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceBananaRepublicWeek1(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Banana-Republic-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceBananaRepublicWeek2", "FirstPlaceBananaRepublicWeek2", "loadFirstPlaceBananaRepublicWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceBananaRepublicWeek2(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Banana-Republic-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceBananaRepublicWeek2", "SecondPlaceBananaRepublicWeek2", "loadSecondPlaceBananaRepublicWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceBananaRepublicWeek2(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Banana-Republic-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceBananaRepublicWeek2", "ThirdPlaceBananaRepublicWeek2", "loadThirdPlaceBananaRepublicWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceBananaRepublicWeek2(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Banana-Republic-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceBananaRepublicWeek2", "FourthPlaceBananaRepublicWeek2", "loadFourthPlaceBananaRepublicWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceBananaRepublicWeek2(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Banana-Republic-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceBananaRepublicWeek3", "FirstPlaceBananaRepublicWeek3", "loadFirstPlaceBananaRepublicWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceBananaRepublicWeek3(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Banana-Republic-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }        
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceBananaRepublicWeek3", "SecondPlaceBananaRepublicWeek3", "loadSecondPlaceBananaRepublicWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceBananaRepublicWeek3(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Banana-Republic-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceBananaRepublicWeek3", "ThirdPlaceBananaRepublicWeek3", "loadThirdPlaceBananaRepublicWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceBananaRepublicWeek3(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Banana-Republic-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceBananaRepublicWeek4", "FirstPlaceBananaRepublicWeek4", "loadFirstPlaceBananaRepublicWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceBananaRepublicWeek4(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Banana-Republic-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceBananaRepublicWeek4", "SecondPlaceBananaRepublicWeek4", "loadSecondPlaceBananaRepublicWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceBananaRepublicWeek4(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Banana-Republic-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceBananaRepublicWeek4", "ThirdPlaceBananaRepublicWeek4", "loadThirdPlaceBananaRepublicWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceBananaRepublicWeek4(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Banana-Republic-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceBananaRepublicWeek4", "FourthPlaceBananaRepublicWeek4", "loadFourthPlaceBananaRepublicWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceBananaRepublicWeek4(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Banana-Republic-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceBananaRepublicWeek5", "FirstPlaceBananaRepublicWeek5", "loadFirstPlaceBananaRepublicWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceBananaRepublicWeek5(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Banana-Republic-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceBananaRepublicWeek5", "SecondPlaceBananaRepublicWeek5", "loadSecondPlaceBananaRepublicWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceBananaRepublicWeek5(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Banana-Republic-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceBananaRepublicWeek5", "ThirdPlaceBananaRepublicWeek5", "loadThirdPlaceBananaRepublicWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceBananaRepublicWeek5(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Banana-Republic-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceBananaRepublicWeek5", "FourthPlaceBananaRepublicWeek5", "loadFourthPlaceBananaRepublicWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceBananaRepublicWeek5(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Banana-Republic-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("GrandPrizeBananaRepublicGrandPrize", "GrandPrizeBananaRepublicGrandPrize", "loadGrandPrizeBananaRepublicGrandPrize")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadGrandPrizeBananaRepublicGrandPrize(result, rf) {
    var resp = queryService.runQuery("5000-Grand-Prize-Theater-Trip-Banana-Republic-Grand-Prize", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceOldNavyWeek1", "FirstPlaceOldNavyWeek1", "loadFirstPlaceOldNavyWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceOldNavyWeek1(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Old-Navy-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceOldNavyWeek1", "SecondPlaceOldNavyWeek1", "loadSecondPlaceOldNavyWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceOldNavyWeek1(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Old-Navy-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceOldNavyWeek1", "ThirdPlaceOldNavyWeek1", "loadThirdPlaceOldNavyWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceOldNavyWeek1(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Old-Navy-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceOldNavyWeek1", "FourthPlaceOldNavyWeek1", "loadFourthPlaceOldNavyWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceOldNavyWeek1(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Old-Navy-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceOldNavyWeek2", "FirstPlaceOldNavyWeek2", "loadFirstPlaceOldNavyWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceOldNavyWeek2(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Old-Navy-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceOldNavyWeek2", "SecondPlaceOldNavyWeek2", "loadSecondPlaceOldNavyWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceOldNavyWeek2(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Old-Navy-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceOldNavyWeek2", "ThirdPlaceOldNavyWeek2", "loadThirdPlaceOldNavyWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceOldNavyWeek2(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Old-Navy-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}
    


queries.addTableDef("FourthPlaceOldNavyWeek2", "FourthPlaceOldNavyWeek2", "loadFourthPlaceOldNavyWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceOldNavyWeek2(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Old-Navy-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceOldNavyWeek3", "FirstPlaceOldNavyWeek3", "loadFirstPlaceOldNavyWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceOldNavyWeek3(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Old-Navy-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceOldNavyWeek3", "SecondPlaceOldNavyWeek3", "loadSecondPlaceOldNavyWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceOldNavyWeek3(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Old-Navy-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceOldNavyWeek3", "ThirdPlaceOldNavyWeek3", "loadThirdPlaceOldNavyWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceOldNavyWeek3(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Old-Navy-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}
    


queries.addTableDef("FourthPlaceOldNavyWeek3", "FourthPlaceOldNavyWeek3", "loadFourthPlaceOldNavyWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceOldNavyWeek3(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Old-Navy-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceOldNavyWeek4", "FirstPlaceOldNavyWeek4", "loadFirstPlaceOldNavyWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceOldNavyWeek4(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Old-Navy-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceOldNavyWeek4", "SecondPlaceOldNavyWeek4", "loadSecondPlaceOldNavyWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceOldNavyWeek4(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Old-Navy-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceOldNavyWeek4", "ThirdPlaceOldNavyWeek4", "loadThirdPlaceOldNavyWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceOldNavyWeek4(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Old-Navy-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceOldNavyWeek4", "FourthPlaceOldNavyWeek4", "loadFourthPlaceOldNavyWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceOldNavyWeek4(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Old-Navy-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceOldNavyWeek5", "FirstPlaceOldNavyWeek5", "loadFirstPlaceOldNavyWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceOldNavyWeek5(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Old-Navy-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceOldNavyWeek5", "SecondPlaceOldNavyWeek5", "loadSecondPlaceOldNavyWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceOldNavyWeek5(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Ticketmaster-Gift-Card-Old-Navy-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceOldNavyWeek5", "ThirdPlaceOldNavyWeek5", "loadThirdPlaceOldNavyWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceOldNavyWeek5(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Old-Navy-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceOldNavyWeek5", "FourthPlaceOldNavyWeek5", "loadFourthPlaceOldNavyWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceOldNavyWeek5(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Old-Navy-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("GrandPrizeOldNavyGrandPrize", "GrandPrizeOldNavyGrandPrize", "loadGrandPrizeOldNavyGrandPrize")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadGrandPrizeOldNavyGrandPrize(result, rf) {
    var resp = queryService.runQuery("7000-Grand-Prize-World-Series-Tickets-for-Two-Old-Navy-Grand-Prize", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceBananaRepublicWeek3", "FourthPlaceBananaRepublicWeek3", "loadFourthPlaceBananaRepublicWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceBananaRepublicWeek3(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Banana-Republic-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek1", "FirstPlaceAthletaWeek1", "loadFirstPlaceAthletaWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek1(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            
            log.info("OrgTitles {} ", getValue(hit.fields.customerMembershipOrgTitles));
            
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceAthletaWeek1", "SecondPlaceAthletaWeek1", "loadSecondPlaceAthletaWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceAthletaWeek1(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Spafinder-Gift-Card-Athleta-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceAthletaWeek1", "ThirdPlaceAthletaWeek1", "loadThirdPlaceAthletaWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceAthletaWeek1(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceAthletaWeek1", "FourthPlaceAthletaWeek1", "loadFourthPlaceAthletaWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek1(result, rf) {
    var resp = queryService.runQuery("Fourth-Place-50-Cash-Prize-Athleta-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek2", "FirstPlaceAthletaWeek2", "loadFirstPlaceAthletaWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek2(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceAthletaWeek2", "SecondPlaceAthletaWeek2", "loadSecondPlaceAthletaWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceAthletaWeek2(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceAthletaWeek2", "ThirdPlaceAthletaWeek2", "loadThirdPlaceAthletaWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceAthletaWeek2(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceAthletaWeek2", "FourthPlaceAthletaWeek2", "loadFourthPlaceAthletaWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek2(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Athleta-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek3", "FirstPlaceAthletaWeek3", "loadFirstPlaceAthletaWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek3(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceAthletaWeek3", "SecondPlaceAthletaWeek3", "loadSecondPlaceAthletaWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceAthletaWeek3(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Spafinder-Gift-Card-Athleta-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceAthletaWeek3", "ThirdPlaceAthletaWeek3", "loadThirdPlaceAthletaWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceAthletaWeek3(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceAthletaWeek3", "FourthPlaceAthletaWeek3", "loadFourthPlaceAthletaWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek3(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Athleta-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek4", "FirstPlaceAthletaWeek4", "loadFirstPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek4", "FirstPlaceAthletaWeek4", "loadFirstPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceAthletaWeek4", "SecondPlaceAthletaWeek4", "loadSecondPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Spafinder-Gift-Card-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceAthletaWeek4", "ThirdPlaceAthletaWeek4", "loadThirdPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceAthletaWeek4", "FourthPlaceAthletaWeek4", "loadFourthPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceAthletaWeek4", "FourthPlaceAthletaWeek4", "loadFourthPlaceAthletaWeek4")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek4(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Athleta-Week-4", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceAthletaWeek5", "FirstPlaceAthletaWeek5", "loadFirstPlaceAthletaWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceAthletaWeek5(result, rf) {
    var resp = queryService.runQuery("230-First-Place-Smartwatch-Athleta-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceAthletaWeek5", "SecondPlaceAthletaWeek5", "loadSecondPlaceAthletaWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceAthletaWeek5(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Spafinder-Gift-Card-Athleta-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceAthletaWeek5", "ThirdPlaceAthletaWeek5", "loadThirdPlaceAthletaWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceAthletaWeek5(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Athleta-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}
    


queries.addTableDef("FourthPlaceAthletaWeek5", "FourthPlaceAthletaWeek5", "loadFourthPlaceAthletaWeek5")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceAthletaWeek5(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Athleta-Week-5", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("GrandPrizeAthletaGrandPrize", "GrandPrizeAthletaGrandPrize", "loadGrandPrizeAthletaGrandPrize")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadGrandPrizeAthletaGrandPrize(result, rf) {
    var resp = queryService.runQuery("8000-Grand-Prize-Spa-Trip-for-two-Athleta-Grand-Prize", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceGapWeek1", "SecondPlaceGapWeek1", "loadSecondPlaceGapWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceGapWeek1(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Mastercard-Digital-Prepaid-Card-Gap-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceGapWeek1", "ThirdPlaceGapWeek1", "loadThirdPlaceGapWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceGapWeek1(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Gap-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceGapWeek1", "FourthPlaceGapWeek1", "loadFourthPlaceGapWeek1")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceGapWeek1(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Gap-Week-1", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceGapWeek2", "FirstPlaceGapWeek2", "loadFirstPlaceGapWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceGapWeek2(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Gap-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceGapWeek2", "SecondPlaceGapWeek2", "loadSecondPlaceGapWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceGapWeek2(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Mastercard-Digital-Prepaid-Card-Gap-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("ThirdPlaceGapWeek2", "ThirdPlaceGapWeek2", "loadThirdPlaceGapWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadThirdPlaceGapWeek2(result, rf) {
    var resp = queryService.runQuery("100-Third-Place-100-Cash-Prize-Gap-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FourthPlaceGapWeek2", "FourthPlaceGapWeek2", "loadFourthPlaceGapWeek2")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFourthPlaceGapWeek2(result, rf) {
    var resp = queryService.runQuery("50-Fourth-Place-50-Cash-Prize-Gap-Week-2", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("FirstPlaceGapWeek3", "FirstPlaceGapWeek3", "loadFirstPlaceGapWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadFirstPlaceGapWeek3(result, rf) {
    var resp = queryService.runQuery("250-First-Place-250-Ticketmaster-Gift-Card-Gap-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
    });
    result.flush();
    result.numRows = numRows;
}



queries.addTableDef("SecondPlaceGapWeek3", "SecondPlaceGapWeek3", "loadSecondPlaceGapWeek3")
    .addHeader('First Name')
    .addHeader('Last Name')
    .addHeader('Store');
 
function loadSecondPlaceGapWeek3(result, rf) {
    var resp = queryService.runQuery("150-Second-Place-150-Mastercard-Digital-Prepaid-Card-Gap-Week-3", result.start, result.maxRows);
    var numRows = 0;
    resp.useHits(function(hit){
        if(!formatter.isEmpty(getValue(hit.fields.customerMembershipOrgTitles))){
            result.addCell(getValue(hit.fields.customerFirstName));
            result.addCell(getValue(hit.fields.customerSurName));
            result.addCell(getValue(hit.fields.customerMembershipOrgTitles));
            result.flush();
            numRows++;
        }
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