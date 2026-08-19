class Animal{
    move(){
        console.log("animal is moving");
    }
}
class Dog extends   Animal{
    bark(){
        console.log("Dog is barking");

    }
}
const dog1 = new Dog();
dog1.move();
dog1.bark();
