// 예시2. 고객ID를 키로 사용하고 고객 정보를 저장한 해시맵 데이터
customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}


