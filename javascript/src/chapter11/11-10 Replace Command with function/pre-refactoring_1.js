/**
 * 예제1. 작은 명령 객체
 */
class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

// 호출자
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;