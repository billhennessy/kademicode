/* awards a configurable bonus for orders placed between specified days of the month */
function doProcessWeek(record, ruleParams){
    log.info("doProcessWeek 1: ID={} saleDate={}", record.id, record.periodFrom)
    var start = ruleParams.start;
    var end = ruleParams.end;
    var points = ruleParams.points;
    var minOrder = ruleParams.minOrder;
    var dayOfMonth = formatter.getDayOfMonth(record.periodFrom)
    log.info("dayOfMonth: {}", dayOfMonth)
    var bonus = 0;
    if((dayOfMonth >= start && dayOfMonth <= end) && record.amount >= minOrder){
        bonus = points;
    }
        
    return bonus;
}

function isIncludedWeek(record, ruleParams){
    return true;
}


/* applies a multiplier to items ordered online above a minimum amount */
function doProcessOnline (record, ruleParams ) {
    log.info("isIncludedOnline 1: ID={} orderNumber={} amount={}", record.id, record.field1, record.amount)
    var minAmount = ruleParams.minAmount;
    var amount = record.amount;
    var recordSource = record.field1;
    var ruleSource = ruleParams.sourceCode;
   
    log.info("isIncludedOnline 2: recordSource={} ruleSource={}", recordSource, ruleSource)
    var bonus = 0;
    
    if(amount >= minAmount && recordSource === ruleSource ){
        bonus = ruleParams.multiplier * amount;
    }
    return bonus;
}


function isIncludedOnline(record, ruleParams){
    

    return true; 
}

/**
 * Bonus points for large orders
 * 
 */
 
function doProcessSize (record, ruleParams ) {
    
    var amount = formatter.toDouble(record.amount);
    var minAmount = formatter.toInteger(ruleParams.minAmount);
    var bonusPoints = formatter.toInteger(ruleParams.bonusAmount);
    var bonusMultiplier = formater.toDouble(ruleParams.bonusMultiplier);
    var type = formatter.toString(ruleParams.bonusType);
    var bonus = 0.0;
    var net = amount - minAmount;

    log.info("doProcessSize: amount={} minAmount={}",amount ,minAmount )
    
    if ( type === 'Multiplier' ) {
        bonus = amount * bonusMultiplier;
    } else if ( type === 'Points') {
        if ( amount >= minAmount ) {
            bonus = bonusPoints;
        }
    } 
   
    return bonus;
}


function isIncludedProcessSize(record, ruleParams){
    
 
    return true; 
}

