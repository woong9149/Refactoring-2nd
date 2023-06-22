/**
 * 예제1. 두 서브클래스에서 같은 일을 수행하는 메서드
 */
class Employee extends Party
{
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party
{
  get totalAnnualcost() {
    return this.monthlyCost * 12;
  }
}