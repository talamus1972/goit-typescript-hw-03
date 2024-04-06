class Key {
   private signature = Math.random()
    getSignature =()=>this.signature
}

class Person {
    private key = new Key();
    getKey =()=> this.key
constructor(key: any)
}

class abstract House {
    door = "true" | "fulse"
}

class MyHouse {
    
}

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};