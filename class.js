// Write a “person” class to hold all the details in javascript

class person {
    constructor (firstName, lastName, age, gender, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    displayDetails(){
        console.log(`Name:${this.firstName} ${this.lastName}`);
        console.log(`Age:${this.age}`);
        console.log(`Gender:${this.gender}`);
        console.log(`Address:${this.address}`);

    }
}
const person1 = new person("Lekkaiya", "Raja", 24, "Male", "Trichy,Tamil Nadu,621213");
person1.displayDetails();