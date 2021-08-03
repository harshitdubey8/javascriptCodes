class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log("Starting");
  }

  stop() {
    console.log("Stopping");
  }
}

const vehicle = new Vehicle("Petrol");

class Car extends Vehicle {
  constructor(type, model) {
    super(type);
    this.model = model;
  }

  start() {
    super.start();
    console.log("Car is starting");
  }

  whatModel() {
    console.log(this.model);
  }
}

new Car("Petrol", "audi").start();
