/**
 * 예제2. 공통 코드가 나중에 올 때
 */

class Employee
{
  constructor(name) {
  }
  get isProvileged(){}
  assignCar(){}
}

class Manager extends Employee
{
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행한다.
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}