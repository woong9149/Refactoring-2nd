//예시
// class Customer
// {
//   constructor(name, discountRate) {
//     this._name = name;
//     this._discountRate = discountRate;
//     this._contract = new CustomerContract(dateToday());
//   }
//
//   get disCountRate() {return this._discountRate;}
//   becomePreferred(){
//     this._duscountRate += 0.03;
//     //다른 멋진 일들
//
//   }
//   applyDiscount(amount) {
//     return amount.subtract(amount.multiply(this._discountRate));
//   }
// }
//
// class CustomerContract
// {
//   constructor(startDate) {
//     this._startDate = startDate;
//   }
// }

class Customer
{
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get disCountRate() {return this._contract._discountRate;}
  _setDiscountRate(aNumber) {this._contract._discountRate = aNumber;}
  becomePreferred(){
    this._setDiscountRate(this._discountRate += 0.03);
    //다른 멋진 일들

  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract
{
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {return this._discountRate;}
  set discountRate(arg) {this._discountRate = arg;}
}

//예시: 공유 객체로 이동하기
// class Account
// {
//   constructor(number, type, interestRate) {
//     this._number = number;
//     this._type = type;
//     this._interestRate = interestRate;
//   }
//
//   get interestRate() {return this._interestRate;}
// }
//
// class AccountType
// {
//   constructor(nameString) {
//     this._name = nameString;
//   }
// }

class Account
{
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {return this._type._interestRate;}
}

class AccountType
{
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {return this._interestRate;}
}