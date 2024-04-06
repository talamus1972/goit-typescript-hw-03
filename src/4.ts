class Key {
    private signature = Math.random()
    getSignature =(): number =>this.signature
}

class Person {
    private key = new Key();
    getKey =()=> this.key
constructor(){}
}

abstract class  House {
    door = boolean
    key

    abstract OpenDoor = (key)=> this.key
}

class MyHouse {

}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};