controllerMappings
        .adminController()
        .path("/filesApp/")
        .enabled(true)
        .defaultView(views.templateView("files-app/manageIssuanceFees.html"))
        .addMethod("POST", "handleIssuanceFees", "issuanceFees")
        .build();
 
 /* Metrics and KCodes for reporting registration progress */

 /* This metric returns the number of module enrollments by organization */
 controllerMappings.newMetricTypeBuilder()
        .id("learning-count")
        .title("Modules Enrolled")
        .description("Returns number of learning module enrollment for an organization")
        .fields(null)   
        .applicableEntities(null)  // leave null for now, means that any type of entity (profile or org) can be used
        .calcFn("countModules") // this is the name of a function you will create below to calculate the value
        .build();     // build the MetricType instance and register it with the app
        
function countModules(entity, ruleParams, startDate, endDate) {
    log.info("countModules"); 
    var lm = services.learningManager;
    var pro = lm.findModuleStatuses(entity);
    log.info('countModules: enrollments: {}',pro.length);
    return pro.length; 
}

 /* This metric returns the number of module enrollments by organization */
 controllerMappings.newMetricTypeBuilder()
        .id("complete-count")
        .title("Modules Completed")
        .description("Returns number of learning module completed for an user")
        .fields(null)   
        .applicableEntities(null)  // leave null for now, means that any type of entity (profile or org) can be used
        .calcFn("countComplete") // this is the name of a function you will create below to calculate the value
        .build();     // build the MetricType instance and register it with the app
        
function countComplete(entity, ruleParams, startDate, endDate) {
    log.info("countComplete"); 
    var lm = services.learningManager;
    var um = services.userManager;
    var user = um.findByName(entity.name);
    //var pro = lm.findModuleStatuses(entity);
    log.info('countComplete: {}', formatter.docsText( user.asProfile() ));
    return 1; 
}

// controllerMappings.newMetricTypeBuilder()
//     .id("test-metric")
//     .title("Bill Test")
//     .description("Testing Only")
//     .fields(null)
//     .applicableEntities(null)
//     .calcFn("testCalc")
//     .build();
    
// function testCalc(entity, ruleParams, startDate, endDate) {
//     log.info('testCalc');
//     return 42;
// }

// controllerMappings.newMetricTypeBuilder()
//         .id("my-metric-perc-type")
//         .title("Percentage result from 2 other metrics")
//         .description("Calculates a percentage from numerateor and divisor metrics")
//         .fields([
//             formatter.newExtraField("numeratorMetric", true).optionsFn(lookupMetricsList),
//             formatter.newExtraField("divisorMetric", true).optionsFn(lookupMetricsList),
//             ])   
//         .applicableEntities(null) 
//         .calcFn("calcPercentageMetric") 
//         .build(); 
        
// function calcPercentageMetric(entity, ruleParams, startDate, endDate, calcContext) {
//     log.info("calcMetric");
//     var qm = services.queryManager;
//     var mNum = qm.metric(ruleParams.numeratorMetric);
//     var mDiv = qm.metric(ruleParams.divisorMetric);
//     // evalulate each metric
//     var cc1 = qm.newCalcContext();
//     var numResult = qm.calcMetric(mNum, entity, startDate, endDate, cc1 );
//     calcContext.attributes.numResult = numResult; // save to the CalcContext so can be used in front end
//     var cc2 = qm.newCalcContext();
//     var divResult = qm.calcMetric(mDiv, entity, startDate, endDate, cc2 );
//     calcContext.attributes.divResult = divResult; // save to the CalcContext so can be used in front end
//     log.info("calcPercentageMetric: {} / {} = {}", numResult, divResult);
//     var finalResult = numResult/divResult;
//     // TODO: defensive checks for zero and nulls etc. If all ok do division and x 100 to get a percentage value
//     return finalResult;    // just a constant value for now, we will make this dynamic later
// }

// function lookupMetricsList() {
//     var list = formatter.newArrayList();
//     services.queryManager.metrics.forEach(function(m) {
//         list.add(m.id);
//     });
//     return list;    
// }

// function lookupGroupsList(){
//     var list =  formatter.newArrayList();
//     services.userManager.groups.forEach(function(g){
//         list.add(g.name);
//     });
//     return list;
// }

// /* KCode to show the metrics */
// controllerMappings.addFieldV2("registrationTracker", "Percent of Users Registered", "String", null, function (root, profile, vars) {
//     var qm = services.queryManager;
//     var metric = qm.metric("percent-enrolled");
//     var finalResult = qm.calcMetric(metric);
    
//     return finalResult;
// });

// /* KCode to show the metrics */
// controllerMappings.addFieldV2("participantCount", "Number of members in Participants", "String", null, function (root, profile, vars) {
//     var qm = services.queryManager;
//     var metric = qm.metric("total-participants");
//     var finalResult = qm.calcMetric(metric);
    
//     return finalResult;
// });
    
// /* KCode to show the metrics */
// controllerMappings.addFieldV2("confirmedCount", "Number of members in Confirmed", "String", null, function (root, profile, vars) {
//     var qm = services.queryManager;
//     var metric = qm.metric("confirmed-members");
//     var finalResult = qm.calcMetric(metric);
    
//     return finalResult;
// });

//     /* KCode to show the metrics */
// controllerMappings.addFieldV2("confirmedCount", "Property Has Members", "String", null, function (root, profile, vars) {
//     var qm = services.queryManager;
//     var metric = qm.metric("my-simple-metric-type");
//     var finalResult = qm.calcMetric(metric);
    
//     return finalResult;
// });