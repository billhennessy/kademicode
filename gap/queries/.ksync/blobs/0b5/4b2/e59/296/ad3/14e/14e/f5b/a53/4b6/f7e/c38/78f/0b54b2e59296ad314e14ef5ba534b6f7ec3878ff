
// GAP

function doProcessGapOnePoint(record, ruleParams) {
    return 1;
}

function isIncludedGapOnePoint(record, ruleParams) {
    
    var thisProfile = services.userManager.findByName(record.salesBy.entityName);
    var mems = services.userManager.membershipList(thisProfile);

    return mems.containsGroup("gap");
}

// Banana republic

function doProcessBnrOnePoint(record, ruleParams) {
    return 1;
}

function isIncludedBnrOnePoint(record, ruleParams) {
    
    var thisProfile = services.userManager.findByName(record.salesBy.entityName);
    var mems = services.userManager.membershipList(thisProfile);

    return mems.containsGroup("banana-republic");
}

// Athleta

function doProcessAthOnePoint(record, ruleParams) {
    return 1;
}

function isIncludedAthOnePoint(record, ruleParams) {
    
    var thisProfile = services.userManager.findByName(record.salesBy.entityName);
    var mems = services.userManager.membershipList(thisProfile);

    return mems.containsGroup("athleta");
}


// Old navy

function doProcessOnyOnePoint(record, ruleParams) {
    return 1;
}

function isIncludedOnyOnePoint(record, ruleParams) {
    
    var thisProfile = services.userManager.findByName(record.salesBy.entityName);
    var mems = services.userManager.membershipList(thisProfile);

    // log.info("Mems {}", formatter.toJson(mems));
    
    log.info("Mems {}", mems.containsGroup("old-navy"));

    return mems.containsGroup("old-navy");
    
    // return true;
}