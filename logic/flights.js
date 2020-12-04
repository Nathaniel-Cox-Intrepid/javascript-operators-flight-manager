const { isPositiveInteger, sum, assert } = require("../logic/util");

function Flights() {
  function calculateNumberOfFlights(numPassengers, capacity) {
    assert(
      isPositiveInteger(numPassengers),
      "The number of passengers must be a positive integer value"
    );
    assert(
      isPositiveInteger(capacity),
      "The capacity of the flight must be a positive integer value"
    );
    const flights = Math.floor(numPassengers / capacity);
    return numPassengers % capacity === 0 ? flights : flights + 1;
  }

  function checkAircraftRevision(limit, distances) {
    const totalDistance = sum(distances);
    assert(
      totalDistance <= limit,
      "The total distance cannot be greater than the limit"
    );
    if (totalDistance <= limit / 2) {
      return "The revision needs to be done within the next 3 months";
    } else if (totalDistance <= limit * 0.75) {
      return "The revision needs to be done within the next 2 months";
    } else {
      return "The revision needs to be done within the next month";
    }
  }

  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
