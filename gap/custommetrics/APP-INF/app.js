controllerMappings.newMetricTypeBuilder()
        .id("pre-associates-count")
        .title("Returns number of members in Pre-Associates")
        .description("Custom for Gap")
        .fields(null)   // leave null for now, we'll add fields later
        .applicableEntities(null)  // leave null for now, means that any type of entity (profile or org) can be used
        .calcFn("calcPreAssoc") // this is the name of a function you will create below to calculate the value
        .build();     // build the MetricType instance and register it with the app
        
function calcPreAssoc(entity, ruleParams, startDate, endDate) {
    log.info("calcMySimpleMetric");
    var um = services.userManager;
    var pre = um.numMembers(um.group('pre-associates'))
    return pre;    // just a constant value for now, we will make this dynamic later
}

controllerMappings.newMetricTypeBuilder()
        .id("associates-count")
        .title("Returns number of members in Associates")
        .description("Custom for Gap")
        .fields(null)   // leave null for now, we'll add fields later
        .applicableEntities(null)  // leave null for now, means that any type of entity (profile or org) can be used
        .calcFn("calcAssoc") // this is the name of a function you will create below to calculate the value
        .build();     // build the MetricType instance and register it with the app
        
function calcAssoc(entity, ruleParams, startDate, endDate) {
    log.info("calcMySimpleMetric");
    var um = services.userManager;
    var pre = um.numMembers(um.group('associates'))
    return pre;    // just a constant value for now, we will make this dynamic later
}




controllerMappings.newMetricTypeBuilder()
        .id("my-metric-perc-type")
        .title("Percentage result from 2 other metrics")
        .description("Calculates a percentage from numerateor and divisor metrics")
        .fields([
            formatter.newExtraField("numeratorMetric", true).optionsFn(lookupMetricsList),
            formatter.newExtraField("divisorMetric", true).optionsFn(lookupMetricsList),
            ])   
        .applicableEntities(null) 
        .calcFn("calcPercentageMetric") 
        .build(); 
        
function calcPercentageMetric(entity, ruleParams, startDate, endDate, calcContext) {
    log.info("calcMySimpleMetric");
    var qm = services.queryManager;
    var mNum = qm.metric(ruleParams.numeratorMetric);
    var mDiv = qm.metric(ruleParams.divisorMetric);
    // evalulate each metric
    var cc1 = qm.newCalcContext();
    var numResult = qm.calcMetric(mNum, entity, startDate, endDate, cc1 );
    calcContext.attributes.numResult = numResult; // save to the CalcContext so can be used in front end
    var cc2 = qm.newCalcContext();
    var divResult = qm.calcMetric(mDiv, entity, startDate, endDate, cc2 );
    calcContext.attributes.divResult = divResult; // save to the CalcContext so can be used in front end
    log.info("calcPercentageMetric: {} / {} = {}", numResult, divResult);
    var finalResult = numResult/divResult;
    // TODO: defensive checks for zero and nulls etc. If all ok do division and x 100 to get a percentage value
    return finalResult;    // just a constant value for now, we will make this dynamic later
}

function lookupMetricsList() {
    var list = formatter.newArrayList();
    services.queryManager.metrics.forEach(function(m) {
        list.add(m.id);
    });
    return list;    
}

/* KCode to show the metrics */
controllerMappings.addFieldV2("registrationTracker", "Percent of Pre-Associates in Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("registration-percentage");
    var finalResult = qm.calcMetric(metric) * 100;
    
    return finalResult;
});

/* KCode to show the metrics */
controllerMappings.addFieldV2("preAssociateCount", "Number of Pre-Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("pre-associates-count");
    var finalResult = qm.calcMetric(metric);
    
    return finalResult;
});

/* KCode to show the metrics */
controllerMappings.addFieldV2("associatesCount", "Number of Associates", "String", null, function (root, profile, vars) {
    var qm = services.queryManager;
    var metric = qm.metric("associates-count");
    var finalResult = qm.calcMetric(metric);
    
    return finalResult;
});
