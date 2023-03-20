export class Person{

    constructor(name){
        this.name = name
    }

    walk(){
        console.log("Walking");
    }
}

const sparsh = new Person("Sparsh")
console.log(sparsh);
sparsh.walk()
console.log(sparsh.name);


class Teacher extends Person{

    constructor(codeName, degree){
        super(codeName)
        this.codeName = codeName
        this.degree = degree
    }

    teach(){
        console.log("Teacher Teaching");
    }
}

const teacher = new Teacher("Dracule Mihawk", "Hello Ji")
console.log(teacher);