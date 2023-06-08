/**
 * 9-1 예시 1
 */
function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass //가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) { //두 번째 힘을 반영해 다시 계산
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime
      + 0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}

/**
 *  -  리팩터링 연습
 *  - acc변수 쪼개기
 *  - 디펜시브 프로그래밍
 *  - result 쪼개기
 *
 */
function getDistanceTravelled(scenario, time) {

  const primaryAcceleration = scenario.primaryForce / scenario.mass //가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.min(time, scenario.delay);
  const primaryResult = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리

  const secondaryTime = time - scenario.delay;

  if (secondaryTime <= 0) return primaryResult;

  const primaryVelocity = primaryAcceleration * scenario.delay;
  const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
  const secondaryResult = primaryVelocity * secondaryTime
    + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;

  return primaryResult + secondaryResult;
}

function distanceTravelledSample(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration
      = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

// 테스트 데이터
const scenario = {
  primaryForce: 10,
  secondaryForce:12,
  mass: 15,
  delay: 7
}

const time = 24;

console.log(getDistanceTravelled(scenario, time));


/**
 * 9-1 예시 2
 */
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

/**
 *  -  리팩터링 연습
 *  - result 변수 추가해서 inputValue 쪼개기
 */
function getDiscount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result =  inputValue - 2;

  if (quantity > 100) result = inputValue - 1;

  return result
}

