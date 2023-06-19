/**
 * 예제1. 전역 테이블에서 배송지의 배송 규칙을 알아내는 코드
 */
try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: e.code });
  } else {
    throw e;
  }
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문처리 오류: ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country];

  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  //관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  // 더 관련 없는 코드
}


