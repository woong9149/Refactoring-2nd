/**
 *  예시1. 사람 목록을 훑으면서 악당을 찾는 코드
 */

checkForMiscreants(people);

function checkForMiscreants(people) {
  for (const p of people) {
      if (p === '조커') {
        sendAlert();
        return;
      }
      if (p === '사루만') {
        sendAlert();
        return;
      }
  }
}

// 더 가다듬기

function checkForMiscreantsAlt(people) {
  if (people.some((p) => ['조커', '사루만'].includes(p))) sendAlert();
}