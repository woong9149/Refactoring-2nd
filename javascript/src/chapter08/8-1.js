//예시: 중첩 함수를 최상위로 옮기기

// function trackSummary(points) {
//   const totalTime = calculateTime();
//   const totalDistance = calculateDistance();
//   const pace = totalTime / 60 / totalDistance;
//   return {
//     time: totalTime,
//     distance: totalDistance,
//     pace: pace
//   };
//
//   function calculateDistance() { // 총 거리 계산
//     let result = 0;
//     for(let i = 1; i < points.length; i++) {
//       result += distance(points[i-1], points[i]);
//     }
//     return result;
//   }
//
//   function distance(p1, p2){} // 두 지점의 거리 계산
//   function radians(degrees){} // 라디안 값으로 변환
//   function calculateTime() {} // 총 시간 계산
// }

function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  };

  // function calculateDistance() { // 총 거리 계산
  //   return top_calculateDistance(points);
  // }

  function calculateTime() {} // 총 시간 계산
}

function totalDistance(points) {
  let result = 0;
  for(let i = 1; i < points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;
}

function distance(p1, p2){ // 두 지점의 거리 계산
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) +
    Math.cos(radians(p1.lat)) +
    Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees){ // 라디안 값으로 변환
  return (degrees * Math.PI) / 180;
}

//예시: 다른 클래스로 옮기기
// class Account
// {
//   get bankCharge() { // 은행 이자 계산
//     let result = 4.5;
//     if (this._daysOverdrawn > 0) result += this.overdraftCharge;
//     return result;
//   }
//
//   get overdraftCharge() { // 초과 인출 이자 계산
//     if(this.type.isPremium) {
//       const baseCharge = 10;
//       if (this.daysOverdrawn <= 7)
//         return baseCharge;
//       else
//         return baseCharge + (this.daysOverdrawn - 7) * 0.85;
//     }
//     else
//       return this.daysOverdrawn * 1.75;
//   }
// }

class Account
{
  get bankCharge() { // 은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.dayOverdrawn);
    return result;
  }

  // get overdraftCharge() { // 초과 인출 이자 계산
  //   return this.type.overdraftCharge(this.dayOverdrawn);
  // }
}

class AccountType
{
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      if (this.isPremium) {
        const baseCharge = 10;
        if (daysOverdrawn <= 7)
          return baseCharge;
        else
          return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
      else
        return daysOverdrawn * 1.75;
    }
  }
}

// 소스 컨텍스트에서 가져와야 할 데이터가 많다면? => account 자체를 넘김
class Account
{
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}

class AccountType
{
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    }
    else
      return account.daysOverdrawn * 1.75;
  }
}