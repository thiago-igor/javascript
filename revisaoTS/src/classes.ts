class Person {
    readonly id: number;
    protected name: string;
    private age: number;


    constructor(id: number, name: string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string{ // definindo oq sera retornado
        return this.name;
    }


}

// Mesma coisa que a de cima
class PersonRefact { // De forma simplificada
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ){}

}

const persons = new Person(1, 'Thiago', 22);


class Employee extends Person{  // herança de classes 
    constructor(id: number, name: string, age:number){
        super(id, name, age);
    }

}
