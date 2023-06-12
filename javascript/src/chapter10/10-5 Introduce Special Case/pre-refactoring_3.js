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

// 클라이언트
const rawSite = acquireSiteData();
const site = enrichSite(rawSite); // 깊은 복사
const aCustomer = site.customer;
...
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;