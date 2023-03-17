/* awards a configurable bonus for orders placed between specified days of the month */

function doProcessEssentials(record, ruleParams) {
    log.info("doProcessEssentials 1: ID={} saleDate={}, amount={}", record.id, record.periodFrom, record.amount);
    var multiplier = ruleParams.multiplier;
    var kpr =  record.field1;
    var sku = record.productSku;
    log.info("doProcessessentials: kpr: {}, sku: {}", kpr, sku);
    var points = 0.0;
    
    if (!isSkuEligible(sku)){
        log.info('Prodcut not eligible: {}', sku);
        record.field4 = sku + ' not eligible. ';
        return 0.0;
    }
    if ( eligibleKprs(kpr)){
         points = record.amount * multiplier;
        
    } else {
        log.info('Ineligible KPR {}', kpr);
        record.field4 = 'Ineligible KPR: ' + kpr;
    }

    return points;
}

function isIncludedEssentials(record, ruleParams) {
    log.info( ' isIncludedEssential +');
    var seller = formatter.toString(record.salesBy.entityName);
    log.info (' doProcessEssentials > seller={}', seller);
    if ( seller === '0' ){
        log.info( 'Unassigned');
        return false;
    }
    return true; //isInRange;
}

function eligibleKprs( kpr ){
    var eligible = false;
switch(kpr) {
  case '59021':
      log.info('Good KPR');
      eligible = true;
    break;
  case '59022':
      log.info('Good KPR');
    eligible =  true;
    break;
case '65995':
    log.info('Good KPR');
    eligible =  true;
    break;
case '65997':
    log.info('Good KPR');
    eligible =  true;
    break;
case '69178':
    log.info('Good KPR');
    eligible =  true;
    break;
case '69181':
    log.info('Good KPR');
    eligible =  true;
    break;
case '69184':
    log.info('Good KPR');
    eligible =  true;
    break;
case 'Q0022960': 
    log.info('Good KPR');
    eligible =  true;
    break;
case 'Q0022962':
    log.info('Good KPR');
    eligible =  true;
    break;
case 'Q0036659':
    log.info('Good KPR');
    eligible =  true;
    break;
case 'Q0036678':
    log.info('Good KPR');
    eligible =  true;
    break;
 default:
 log.info(eligible);
    
} 
    
return eligible;

}

function isSkuEligible(sku){
    
    if(sku === 'MUUTO'){
        return false;
    }
    return true;

}