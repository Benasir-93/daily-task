class UberCalculator {
    constructor(distance, surgeMultiplier) {
      this.distance = distance;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice() {
      const baseFare = 60;
      const costPerKilometer = 12;
      const costPerMinute = 2;
  
      const distanceCost = this.distance * costPerKilometer;
      const timeCost = 10 * costPerMinute; // Assuming 10 minutes of travel time
      const totalFare = (baseFare + distanceCost + timeCost) * this.surgeMultiplier;
  
      return totalFare;
    }
  }
  
  const distance = 10; // Distance in km
  const surgeMultiplier = 1.2; // Surge multiplier
  
  const calculator = new UberCalculator(distance, surgeMultiplier);
  const price = calculator.calculatePrice();
  console.log("Uber Price: Rs." + price);
  