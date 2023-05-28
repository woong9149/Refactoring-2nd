/**
 * 예시1. 여름철이면 할인율이 달라지는 어떤 서비스의 요금 계산
 */

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
  charge = quantity * plan.summerRate;
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;




function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}




