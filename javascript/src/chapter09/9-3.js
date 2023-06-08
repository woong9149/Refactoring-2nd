class ProductionPlan
{
  get production() {
    // assert(this._production === this.calculatedProduction);
    // return this.calculatedProduction;
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  get calculatedProduction() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    // this._production += anAdjustment.amount;
  }
}

// 예시: 소스가 둘 이상일 때
class ProductionPlan
{
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustments = [];
  }

  get production() {
    assert(this._productionAccumulator === this.calculatedProductionAccumulator);
    return this._initialProduction + this._productionAccumulator;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }

}
