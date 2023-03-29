import invoice from './invoice.json';
import plays from './plays.json';
// const invoice = require('./invoice.json');
// const plays = require('./plays.json');

class CalculateAmount
{
  constructor(_audience) {
    this.audience = _audience;
  }

}

class CalculateComedyAmount extends CalculateAmount
{
  get amount () {
    return 30000 + 300 * this.audience + (this.audience > 20 ? 10000 + 500 * (this.audience - 20) : 0) ;
  }
}

class CalculateTragedyAmount extends CalculateAmount
{
  get amount () {
    return 40000 + (this.audience >30 ? 1000 * (this.audience - 30) : 0) ;
  }
}

function getAmount(_playType, _audience) {
  switch (_playType) {
    case "tragedy":
      return new CalculateTragedyAmount(_audience).amount;
    case "comedy":
      return new CalculateComedyAmount(_audience).amount;
    default:
      throw new Error(`알 수 없는 장르: ${_playType}`);
  }
}

function commonVolumeCredit(audience) {
  return Math.max(audience - 30, 0);
}

function additionalVolumeCreditForComedy(audience) {
  return Math.floor(audience / 5);
}

function getVolumeCredit(_playType, audience) {
  return ("comedy" === _playType)
    ? commonVolumeCredit(audience) + additionalVolumeCreditForComedy(audience)
    : commonVolumeCredit(audience)
}

  function USDFormat(number){
    return new Intl.NumberFormat("en-US",
      {
        style: "currency", currency: "USD",
        minimumFractionDigits: 2
      }).format(number);
  }

function createResultStatement(_customer, _totalAmount, _volumeCredits) {
  return`청구 내역 (고객명: ${_customer})
${getPerformanceDescription()}
총액 ${USDFormat(_totalAmount/100)}
적립 포인트 ${_volumeCredits}점
`;
}

function getPerformanceDescription() {
  let performanceDescription = '';
  for (let performance of invoice.performances) {
    const amount = getAmount(plays[performance.playID].type, performance.audience);
    performanceDescription += ` ${plays[performance.playID].name}: ${USDFormat(amount/100)} (${performance.audience}석)\n`;
  }

  return performanceDescription;
}

function statement () {
  let totalAmount = 0;

  for (let performance of invoice.performances) {
    const amount = getAmount(plays[performance.playID].type, performance.audience);
    totalAmount += amount;
  }

  let volumeCredits = 0;
  for (let performance of invoice.performances) {
    volumeCredits += getVolumeCredit(plays[performance.playID].type, performance.audience);
  }

  return createResultStatement(invoice.customer, totalAmount, volumeCredits);
}

console.log(statement ());
