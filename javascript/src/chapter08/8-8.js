//예시1: 회사의 지점 사무실 정볼를 CSV 형태로 정리
// function acquireData(input) {
//   const lines = input.split("\n"); //컬렉션
//   let firstLine = true;
//   const result = [];
//
//   for (const line of lines) { //반복문
//     if (firstLine) {
//       firstLine = false;
//       continue;
//     }
//     if (line.trim() === "") continue;
//     const record = line.split(",");
//     if (record[1].trim() === "India") {
//       result.push({ city: record[0].trim(), phone: record[2].trim });
//     }
//   }
//   return result;
// }

function acquireData(input) {
  const lines = input.split("\n");
  return lines
        .slice(1)
        .filter((line) => line.trim() !== "")
        .map((line) => line.split(","))
        .filter((fields) => fields[1].trim() === "India")
        .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim()}));
}