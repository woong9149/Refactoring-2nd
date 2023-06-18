/**
 *  예제1. 건강보험 애플리케이션에서 사용하는 점수 계산 함수
 */
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._hightMedicalRiskFlag = false;

    this.scoreSmoking();
    this._certificationGrade = 'regular';
    if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
      this._certificationGrade = 'low';
      this._result -= 5;
    }

    // 비슷한 코드가 한참 이어짐

    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._hightMedicalRiskFlag = true;
    }
  }
}