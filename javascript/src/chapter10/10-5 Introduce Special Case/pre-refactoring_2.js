/**
 * 객체 리터럴 이용(전력회사의 현장 인프라 설치 서비스)
 */
class Site {
  get customer() { return this._customer; }
}

class Customer {
  get name() {...}
  get billingPlan() {...}
  set billingPlan(arg) {...}
  get paymentHistory() {...}
}

// 클라이언트 1
const aCustomer = site.customer;
// ...
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (aCustomer === "미확인 고객") ?
  CustomElementRegistry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer) ?
  0 : aCustomer.paymentHistory.weeksDelinquentInLastyear;