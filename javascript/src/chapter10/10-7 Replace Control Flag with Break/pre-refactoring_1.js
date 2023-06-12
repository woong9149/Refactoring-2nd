/**
 *  예시1. 사람 목록을 훑으면서 악당을 찾는 코드
 */

let found = false;

for (const p of people) {
  if (!found) {
    if (p === '조커') {
      sendAlert();
      found = true;
    }
    if (p === '사루만') {
      sendAlert();
      found = true;
    }
  }
}