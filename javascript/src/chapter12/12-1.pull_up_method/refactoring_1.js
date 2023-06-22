/**
 * 예제1. 두 서브클래스에서 같은 일을 수행하는 메서드
 */
class Employee extends Party
{
}

class Department extends Party
{
}

class Party
{
  get annualCost() {
    return this.monthlyCost * 12;
  }

  /**
   *  서브클래스 책임 오류
   *  서브클래스가 monthlyCost()를 구현해야 한다는 걸 알려줌.
    */
  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
}