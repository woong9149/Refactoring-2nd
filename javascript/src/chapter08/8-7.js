// 예시1: 전체 급여와 가장 어린 나이를 계산하는 코드
// let youngest = people[0] ? people[0].age : Infinity;
// let totalSalary = 0;
//
// for (const p of people) {
//   if (p.age < youngest) youngest = p.age;
//   totalSalary += p.salary;
// }
//
// return `최연소: ${youngest}, 총급여: ${totalSalary}`;

return `최연소: ${youngestAge()}, 총급여: ${totalSalary()}`;

function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
  return Math.min(...people.map((p) => p.age));
}