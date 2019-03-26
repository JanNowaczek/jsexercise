class Person{
    constructor(name){
        this.name = name
    }

    changeName(newName){
        this.name = newName

        return this
    }
}

const person1 = new Person ('Jasiek')