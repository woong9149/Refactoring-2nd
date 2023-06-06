//예시
// const pricingPlan = retrievePricingPlan();
// const order = retrieveOrder();
// let charge;
// const chargePerUnit = pricingPlan.unit;

const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// 예시2: 조건문이 있을 때의 슬라이드
// let result;
// if (availableResources.length === 0) {
//   result = createREsource();
//   allocatedResources.push(result);
// } else {
//   result = availableResources.pop();
//   allocatedResources.push(result);
// }
//
// let result;
// if (availableResources.length === 0) {
//   result = createREsource();
//   allocatedResources.push(result);
// } else {
//   result = availableResources.pop();
//   allocatedResources.push(result);
// }
// return result;
let result;
if (availableResources.length === 0) {
  result = createResource();
} else {
  result = availableResources.pop();
  allocatedResources.push(result);
}

let result;
if (availableResources.length === 0) {
  result = createREsource();
} else {
  result = availableResources.pop();
  allocatedResources.push(result);
}
return result;