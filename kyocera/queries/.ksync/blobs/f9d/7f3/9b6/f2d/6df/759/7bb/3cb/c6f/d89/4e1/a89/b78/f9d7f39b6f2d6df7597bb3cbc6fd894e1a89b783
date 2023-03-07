/**
 * Award point based on Product field values
 */
 function doProcessDSR(record, ruleParams){
    log.info("doProcessDSR 1: ID={} productSku={} serialNumber={}", record.id, record.productSku, record.field2);
    var points = 0;
    var dsrPoints = record.findProductSku().product.field1;
    log.info("doProcessDSR 2: Product={}", dsrPoints);
   
   return dsrPoints;
}

function isIncludedDSR(record, ruleParams){


    return isCertified(record, ruleParams);
}

/**
 * Award point based on Product field values
 */
function doProcessManager(record, ruleParams){
    log.info("doProcessManager 1: ID={} productSku={} serialNumber={}", record.id, record.productSku, record.field2);
    var mgrPoints = 0;
    mgrPoints = record.findProductSku().product.field2;
    log.info("doProcessManager 2: Product={}", mgrPoints);
   
   return mgrPoints;
}

function isIncludedManager(record, ruleParams){
    // TODO: Figure out how to return false if the claiming DSR has not completed training on the model claimed
    return isCertified(record, ruleParams);
}

/**
 * Verifies participant has completed module required to claim this product. 
 * TODO: After deleting sales record, mark serial number record as unclaimed.
 * @param {*} record 
 * @param {*} ruleParams 
 * @returns 
 */
function isCertified(record, ruleParams){
    log.info("isCertfied 1: productSku={} serialNumber={}", record.productSku, record.field2);
    var product = formatter.formatAsCleanId(record.productSku);
    log.info("isCertified: cleanSku={}", product)
    var um = services.userManager;
    var thisProfile = um.findByName(record.salesBy.entityName);
    log.info("isCertified 2: profile={}", thisProfile);
    var mems = um.membershipList(thisProfile);
    // var modules = services.learningManager.findEnrolementsForUser ( thisProfile, services.websiteManager.findWebsiteByName('participant-portal'), 'kyocera', 'product-certifications' );
    //   log.info("isIncludedDSR: modules={}", modules);
    //   for(i=0;i<modules.length;i++){
    //       log.info(i, modules[i]);
    //   }
    
    log.info("isIncludedDSR: membership={}", mems);

    if(!mems.containsGroup(product)){
        var dm = services.dataSeriesManager;
        dm.resetPointsAllocations(record);
       // dm.deleteRecord(record);
       // TODO: Determine whether DSRs and Managers should get points for claims started before DSR completed product training.
        log.info("isCertified: recordId: {} reset complete", record.id)
    }
   

   return mems.containsGroup(product);
}
