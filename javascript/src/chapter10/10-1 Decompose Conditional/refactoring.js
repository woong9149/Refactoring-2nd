/**
 * 예시1. 여름철이면 할인율이 달라지는 어떤 서비스의 요금 계산
 */
if (summer())
  charge = summerCharge();
else
  charge = regularCharge();

// 취향에 따라 삼항연산자도 가능
// charge = summer() ? summerCharge() : regularCharge();

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}