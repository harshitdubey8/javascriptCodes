class Person {
  static language = "JS";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log(`${this.name} is walking with ${this.age} others`);
  }

  static whichLanguage() {
    console.log(this.language);
  }

  static useless() {
    console.log("I'm useless");
  }
}

const person = new Person("Harshit", 9);
person.walk();
Person.whichLanguage();

Person.useless();
