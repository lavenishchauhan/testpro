class Person {
    public name:string;
    private type:string;
    protected age:number = 22;
    constructor(private settype:string,name:string, public username:string){
        this.name = name;
      
    }
    printAge(){
        console.log(this.age);
        this.setType('ggg');
    }
    protected setType(type:string){
        this.type = type;
        console.log(this.type);
    }
    callFun(){
        console.log(this.name);
    }
}


class Max extends Person {
    constructor(public username:string){
    super('url','Nik',username);
    this.age = 31;
    }

}

console.log(Person.name);

//const person = new Person('Max','Molik');
//console.log(person);
const max = new Max('username');
console.log(max);



// Getters & Setters

class Plant {
    private _species:string =  "Default1";

  

    get species(){
        return  this._species;
    }

    set species(value:string){
        if(value.length > 3){
            this._species = value;
        } else {
            this.species =  "Default";
        }
    }
}



const plant = new Plant();
console.log(plant.species);
plant.species ='AB';
console.log(plant.species);
// plant.species('jjj')
// console.log(plant);
// console.log('species', plant.species);

class Helpers{

}