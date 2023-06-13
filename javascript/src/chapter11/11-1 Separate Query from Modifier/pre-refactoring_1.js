/**
 * 예시1. 이름 목록을 훑어 악당을 찾는 함수
 *  악당을 찾으면 그 사람의 이름을 반환하고 경고를 울린다.(가장 먼저 찾은 악당만 취급한다.)
 */
function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms();
      return '조커';
    }
    if (p === '사루만') {
      setOffAlarms();
      return '사루만';
    }
  }
  return '';
}
