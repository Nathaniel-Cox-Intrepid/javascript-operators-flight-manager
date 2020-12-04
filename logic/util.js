function Util() {
  const isPositiveInteger = (i) => i >= 0 && Number.isInteger(i);
  const sum = (xs) => xs.reduce((acc, cur) => acc + cur, 0);
  const assert = (test, message) => {
    if (!test) throw new Error(message);
  };
  const calculateTotalDistributedPassengers = (obj) => sum(Object.values(obj));
  const calculateTotalNumberOfPassengers = sum;

  return {
    isPositiveInteger,
    sum,
    assert,
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
  };
}

module.exports = Util();
