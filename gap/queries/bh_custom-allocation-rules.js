function doProcessGapPoints(record, ruleParams) {
    return ruleParams.points;
}

function isIncludedGapPoints(record, ruleParams) {
    
    var um = services.userManager;
    var thisProfile = um.findByName(record.salesBy.entityName);
    var mems = um.membershipList(thisProfile);

    return mems.containsGroup(ruleParams.brandId);
}