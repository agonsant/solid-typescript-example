interface Vehicle {
  drive(): string;
  fly(): string;
}

class FutureCar implements Vehicle {
  drive(): string {
    return 'Driving Car.';
  }

  fly(): string {
    return 'Flying Car.';
  }
}

class Car implements Vehicle {
  drive(): string {
    return 'Driving Car.';
  }

  fly(): string {
    throw new Error('Not implemented method.');
  }
}

class Airplane implements Vehicle {
  drive(): string {
    throw new Error('Not implemented method.');
  }

  fly(): string {
    return 'Flying Airplane.';
  }
}

export { };
