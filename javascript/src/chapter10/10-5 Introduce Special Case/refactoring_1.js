/**
 * 클래스 이용(전력회사의 현장 인프라 설치 서비스)
 */
class Site {
  constructor() {}

  get customer() {
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
  }
}

// 특이 케이스 검사코드. 튀는 케이스가 있는 경우 유지하고, 필요 없는 경우 제거한다.
function isUnknown(arg) {
  if (!(arg instanceof Customer) || arg instanceof UnknownCustomer) {
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }
  return arg === '미확인 고객';
}

class Customer {
  constructor() {}

  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
  get isUnknown() {
    return false;
  }
}

// JS의 서브클래스 규칙과 동적타이핑 덕분에 Customer의 서브클래스로 만들지 않는 것이 낫다.
class UnknownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return '거주자';
  }
  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {
    // 무시한다.
  }
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// 클라이언트1
const aCustomer = site.customer;
const customerName = aCustomer.name; // 이제 customerName 변수를 선언하지 않고 인라인해도 된다.

// 클라이언트2
const plan = aCustomer.billingPlan;

// 클라이언트3

aCustomer.billingPlan = newPlan;

// 클라이언트4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;