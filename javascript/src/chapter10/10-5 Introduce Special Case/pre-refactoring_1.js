/**
 * 클래스 이용(전력회사의 현장 인프라 설치 서비스)
 */
class Site {
  constructor() {}

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor() {}

  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
}

// 클라이언트1
const aCustomer = site.customer;
let customerName;
if (aCUstomer === '미확인 고객') {
  customerName = '거주자';
} else {
  customerName = aCustomer.name;
}

// 클라이언트2
const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트3
if (aCustomer !== '미확인 고객') {
  aCustomer.billingPlan = newPlan;
}

// 클라이언트4
const weeksDelinquent = aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;