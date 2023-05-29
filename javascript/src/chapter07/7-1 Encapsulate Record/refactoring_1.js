// 예시1. 프로그램 전체에서 널리 사용되는 상수
const organization = {name: "애크미 구스베리", country:"GB"}

//변수 캡슐화 하기
function getRawDataOfOrganization(){return organization;}

result += `<h1>${getRawDataOfOrganization().name}</h1>` // 읽기 예
getRawDataOfOrganization().name = newName; // 쓰기 예

// 레코드를 클래스로 바꾸고 새클래스의 인스턴스를 반환하는 함수 새로 만들기
class Organization
{
  constructor(data) {
    this.name = data.name;
    this.country = data.country;
  }

  get name() {return this.name;}

  set name(aString) {this.name = aString;}

  get country() {return this.country;}

  set country(aCountryCode) {this.country = aCountryCode;}

}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
// function getRawDataOfOrganization(){return organization._data;}
function getOrganization() {return organization}

result += `<h1>${getOrganization().name}</h1>` // 읽기 예
getOrganization().name = newName; // 쓰기 예