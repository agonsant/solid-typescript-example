/**
 * Many client-specific interfaces are better than one general-purpose interface.
 */

interface RoadVehicle {
  drive(): string;
}

interface AirVehicle {
  fly(): string;
}

class FutureCar implements RoadVehicle, AirVehicle {
  drive() {
    return 'Driving Car.';
  }

  fly() {
    return 'Flying Car.'
  }
}

class Car implements RoadVehicle {
  drive() {
    return 'Driving Car.';
  }
}

class Airplane implements AirVehicle {
  fly() {
    return 'Flying Airplane.';
  }
}
