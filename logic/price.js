"use strict";

function Prices() {
  const calculateFinalPrice = (
    basePrice,
    passengerVariation,
    flightVariation
  ) => {
    const withPassengerAdjustment = adjustByPercentage(
      basePrice,
      passengerVariation
    );
    const withFlightAdjustment = adjustByPercentage(
      withPassengerAdjustment,
      flightVariation
    );
    return withFlightAdjustment.toFixed(2);
  };

  const adjustByPercentage = (base, percent) => (percent / 100) * base + base;

  const calculateDefaultFinalPrice = (basePrice, passengerType, flightType) => {
    passengerType = passengerType.toLowerCase();
    flightType = flightType.toLowerCase();

    const variations = {
      regular: -5,
      vip: 5,
      economy: -3,
      business: 10,
    };

    return calculateFinalPrice(
      basePrice,
      variations[passengerType],
      variations[flightType]
    );
  };

  const calculateTotalFinalPrice = (
    seats,
    passengerType,
    flightType,
    basePrice
  ) => calculateDefaultFinalPrice(basePrice, passengerType, flightType) * seats;

  return {
    calculateFinalPrice,
    calculateDefaultFinalPrice,
    calculateTotalFinalPrice,
  };
}

module.exports = Prices();
