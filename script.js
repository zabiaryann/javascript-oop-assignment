// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
/******************************************************************/
//Car class 
class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    //getMake method
    getMake(){
        return('This car is made by toyoa '+this.make);
    }
    //getModel method
    getModel(){
        return('Model of the car is '+this.model);
    }
    //getYear method
    getYear(){
        return('Year of this is car is '+this.year);
    }
    //getColor method
    getColor(){
        return('Color of this car is '+this.color);
    }
}
    //instaces of the car
    let car1 = new Car('Toyta', 'lexus','2021', 'Darkblack');
    let car2 = new Car('Benz', 'sports','2022', 'Red');
    let car3 = new Car('BMW', 'X5','2023', 'Blue');
    let car4 = new Car('Rangerove', 'RoyalRyce','2019', 'LightLimon');

//diplay the data
console.log(car1.getColor());
console.log(car2.getYear());
console.log(car3.getModel());
console.log(car4.getMake());

//End of Assignment
/**************************************************************/