"use strict";

function Util() {
  const isPositiveInteger = (i) => i >= 0 && Number.isInteger(i);
  const sum = (xs) => xs.reduce((acc, cur) => acc + cur, 0);
  const assert = (test, message) => {
    if (!test) throw new Error(message);
  };
  const calculateTotalDistributedPassengers = (obj) => sum(Object.values(obj));
  const calculateTotalNumberOfPassengers = sum;
  const checkInput = (input) => {
    if (!Number(input)) throw new Error("Input must be a number");
  };
  const calculateTotalDistance = (distances) =>
    sum(distances.filter((x) => x > 0));
  const calculateBonusPoints = (
    businessDistances,
    economyDistance,
    businessBonusPercent,
    economyBonusPercent
  ) =>
    (calculateTotalDistance(businessDistances) * businessBonusPercent) / 100 +
    (calculateTotalDistance(economyDistance) * economyBonusPercent) / 100;

  return {
    isPositiveInteger,
    sum,
    assert,
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
    checkInput,
    calculateTotalDistance,
    calculateBonusPoints,
  };
}

module.exports = Util();
