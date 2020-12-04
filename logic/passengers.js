"use strict";

const { sum, assert } = require("../logic/util");

function Passengers() {
  function checkFlightCapacity(capacity, passengerCounts) {
    const totalPassengers = sum(passengerCounts);
    assert(
      totalPassengers < capacity,
      "Number of passengers should not exceed capacity"
    );

    return totalPassengers;
  }

  function distributeAllSeatsToAllPassengers(
    vipPassengers,
    regPassengers,
    numFlights,
    busSeatsPerFlight,
    econSeatsPerFlight
  ) {
    // Ideally I'd try to find a less imperative solution,
    // but I'm not sure whether a functional/declarative
    // solution in JavaScript would actually be any simpler/clearer.

    // I'd love feedback on how this could be improved, but I
    // find this solution pretty simple even if it is a bit
    // too verbose
    let availableBusSeats = numFlights * busSeatsPerFlight;
    let availableEconSeats = numFlights * econSeatsPerFlight;

    let vipPassengersWithBusinessSeats = 0;
    let vipPassengersWithEconomySeats = 0;
    let regularPassengersWithBusinessSeats = 0;
    let regularPassengersWithEconomySeats = 0;

    // Assign VIP passengers to business seats
    while (vipPassengers > 0 && availableBusSeats > 0) {
      vipPassengersWithBusinessSeats++;
      vipPassengers--;
      availableBusSeats--;
    }

    // Assign VIP passengers to economy seats
    while (vipPassengers > 0 && availableEconSeats > 0) {
      vipPassengersWithEconomySeats++;
      vipPassengers--;
      availableEconSeats--;
    }

    // Assign regular passengers to business seats
    while (regPassengers > 0 && availableBusSeats > 0) {
      regularPassengersWithBusinessSeats++;
      regPassengers--;
      availableBusSeats--;
    }

    // Assign regular passengers to economy seats
    while (regPassengers > 0 && availableEconSeats > 0) {
      regularPassengersWithEconomySeats++;
      regPassengers--;
      availableEconSeats--;
    }

    return {
      vipPassengersWithBusinessSeats,
      vipPassengersWithEconomySeats,
      regularPassengersWithBusinessSeats,
      regularPassengersWithEconomySeats,
    };
  }

  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
