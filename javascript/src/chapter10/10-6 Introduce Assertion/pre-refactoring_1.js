/**
 * 할인과 관련한 예시
 */
class Customer {
  applyDiscount(aNumber) {
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}