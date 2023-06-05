// 레코드 구조에서 데이터를 읽어 들이는 단순한 주문 클래스
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

highPriorityCount = order.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;


