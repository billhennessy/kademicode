/**
 * recognition- BaseRecognition
 * award - RecognitionAward
 * ruleParams - Map
 * result - RecognitionPeriodResult
 *
 */
 function calculatePointsForRule1(recognition, award, ruleParams, result) {
    log.info("calculatePointsForRule1.1: ID={} amount={}", record.id, record.amount);
    
    var field1 = ruleParams.field1;
    var multiplier = formatter.toDouble(field1);
    
    var levelAmount = recognition.levelAmount;
    var achievedAmount = result.achievedValue;
    var ranking = result.ranking;
    if( ranking < 10 ) {
        return (10-ranking) * multiplier;
    } else {
        return null;
    }
}