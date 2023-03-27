import invoice from '~/test/invoice.json';
import plays from '~/test/plays.json';

function getAmount(_play, _performance) {
  let amount = 0;

  switch (_play.type) {
    case "tragedy":
      amount = 40000;
      if (_performance.audience > 30) {
        amount += 1000 * (_performance.audience - 30);
      }
      break;
    case "comedy":
      amount = 30000;
      if (_performance.audience > 20) { // 관객이 20명 이상이면 1000 + 500 * 초과분
        amount += 10000 + 500 * (_performance.audience - 20);
      }
      amount += 300 * _performance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${_play.type}`);
  }
  return amount;
}

function commonVolumeCredit(audience) {
  return Math.max(audience - 30, 0);
}

function additionalVolumeCreditForComedy(audience) {
  return Math.floor(audience / 5);
}

function getVolumeCredit(play, audience) {
  return ("comedy" === play.type)
    ? commonVolumeCredit(audience) + additionalVolumeCreditForComedy(audience)
    : commonVolumeCredit(audience)
}

function statement () {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US",
    { style: "currency", currency: "USD",
      minimumFractionDigits: 2 }).format;

  for (let performance of invoice.performances) {
    const play = plays[performance.playID];
    let amount = 0;
    amount = getAmount(play, performance);
    volumeCredits = getVolumeCredit(play, performance.audience);
    // print line for this order
    result += ` ${play.name}: ${format(amount/100)} (${performance.audience}석)\n`;
    totalAmount += amount;
  }
  result += `총액 ${format(totalAmount/100)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;
  return result;
}

