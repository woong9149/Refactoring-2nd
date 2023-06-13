/**
 * 예시2. 매개변수를 까다로운 방식으로 사용할 때
 */
function deliveryDate(anOrder, isRush) {
  let result;
  let deliveryTime;
  if (anOrder.deliveryState === 'MA' || anOrder.deliveryState ==='CI')
    deliveryTime = isRush? 1 : 2;
  else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2;
    if (anOrder.deliveryState === 'NH' && !isRush)
      deliveryTime = 3;
  }
  else if (isRush)
    deliveryTime = 3;
  else if (anOrder.deliveryState === 'ME')
    deliveryTime = 3;
  else
    deliveryTime = 4;

  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  if (isRush) result = result.minusDay(1);
  return result;
}

/**
 * 래핑함수들을 독립적으로 정의했지만, 새로운 기능을 추가한 게 아니라 각각이 deliveryDate()의 기능 일부만을 제공한다.
 */
function rushDeliveryData(anOrder) {return deliveryDate(anOrder, true);}
function regularDeliveryDate(anOrder) {return deliveryDate(anOrder, false);}

const aShipment = isRush ? rushDeliveryData(anOrder) : regularDeliveryDate(anOrder);