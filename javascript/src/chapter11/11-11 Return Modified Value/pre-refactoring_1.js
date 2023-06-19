/**
 * 예제1. GPS 위치 목록으로 다양한 계산을 수행하는 코드
 */
let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;

//calculateAscent 안에서 totalAscent가 갱신됨이 드러나지 않고 있다.
calculateAscent();
calculateTime();
calculateDistance();

const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}
