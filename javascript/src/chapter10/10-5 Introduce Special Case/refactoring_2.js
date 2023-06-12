/**
 * 클래스 이용(전력회사의 현장 인프라 설치 서비스)
 */
class Site {
  get customer() {
    return (this._customer === "미확인 고객") ? createUnknownCustomer() : this._customer;
  }
}

function isUnknown(arg) {
  return arg.isUnknown;
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: "거주자",
    billingPlan: CustomElementRegistry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}

// 클라이언트 1
const customerName = acustomer.name; // 이름

// 클라이언트 2
const plan = aCustomer.billingPlan; // 요금제

// 클라이언트 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastyear; // 납부 이력