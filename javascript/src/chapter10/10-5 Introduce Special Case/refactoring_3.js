/**
 * 변환 함수 이용(JSON 문서)
 */
{
  "name": "애크미 보턴",
  "location": "Malden MA",
  // 더 많은 현장(site) 정보
  "customer": {
  "name": "애크미 산업",
    "billingPlan": "plan-451",
    "paymentHistory": {
    "weeksDelinquentInLastYear": 7
    // 중략
  },
  // 중략
}
}

// 고객이 알려지지 않은 경우
{
  "name": "애크미 보턴",
  "location": "Malden MA",
  "customer": "미확인 고객"
}


function enrichSite(aSite) {
  const result = _.cloneDeep(aSite) //  깊은 복사
  const unknownCustomer = {
    isUnknown: true,
    name: "거주자",
    billingPlan: CustomElementRegistry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    }
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;

  return result;
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite); // 깊은 복사
const aCustomer = site.customer;
...
const customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;