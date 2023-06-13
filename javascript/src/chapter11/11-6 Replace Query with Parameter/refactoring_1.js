/**
 * 예제1. 실내 온도 제어 시스템
 */
// 전역객체 thermostat
const thermostat = {
  selectedTemperature: 15,
  currentTemperature: 20,
};

if (thePlan.targetTemperature(thermostat.selectedTemperature) >
  thermostat.currentTemperature)
  setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) <
  thermostat.currentTemperature)
  setToCool();
else setOff();

class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}