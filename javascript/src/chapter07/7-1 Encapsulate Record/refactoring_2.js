// 예시2. 고객ID를 키로 사용하고 고객 정보를 저장한 해시맵 데이터
customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}

// 캡술화
function getRawDataOfCustomers() {return customerData;}
function setRawDataOfCustomers(arg) {customerData = arg;}

getRawDataOfCustomers()[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}

// 전체 데이터 구조를 표현하는 클래스 정의, 반환하는 함수 새로 만들기
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}

function getCustomerData() {return customerData;}
function getRawDataOfCustomers() {return customerData._data;}
function setRawDataOfCustomers(arg) {customerdata = new CustomerData(arg);}

getCustomerData().setUsage(customerID, year, month, amount);

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usage[year][month] = amount;
}

// 읽기 처리 1.읽는 코드를 모두 독립 함수로 추출한 다음 고객 데이터 클래스로 옮기는 방법
class CustomerData
{
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return {laterAmount: later, charge: later - earlier};
}

// 읽기 처리 2.rawData() 메서드를 사용하여 내부 데이터를 복제해서 제공하는 방법
class CustomerData
{
  get rawData() {
    return _.cloneDeep(this._data);
  }
}

function compare(customerID, laterYear, month) {
  const later = getCustomerData().rawData()[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, charge: later - earlier};
}