/**
 * 예시1. OR 사용하기
 */
function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability(anEmployee)) return 0;
  //장애수단

  function isNotEligibleForDisability() { // 장애 수당 적용 여부 확인
    return anEmployee.seniority < 2
      || anEmployee.monthsDisabled > 12
      || anEmployee.isPartTime;
  }
}


