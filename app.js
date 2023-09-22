
// ----- herencia ------

// herencia con class - mucho mejor -

class Person {
   constructor (name, lastName){
      this.name = name
      this.lastName = lastName
      this.age = null
   }
}

class Programer extends Person {
   constructor(name, lastName, language){
      super(name, lastName);
      this.language = language
   }
}

const person = new Person("cloe", "perez")

console.log(person)

const programer = new Programer("josue", "garcia", "python")

console.log(programer)





// herencia con function
/*
function Person() {
   this.name = ""
   this.lastName = ""
}

function Programer() {
   this.language = ""
}

Programer.prototype = new Person()

console.log(Programer)
console.log(Person)

const programer = new Programer()
programer.name = "ryan"
programer.lastName = "perez"
programer.language = "php"

console.log(programer)


const person = new Person();
person.name = "cloe"
person.lastName = "dako"

console.log(person)

*/







//----- encapsulacion ------

/*
function Company(name) {
   let empleados = []
   this.name = name

   this.getEmpleados = function() {
      return empleados
   }

   this.addEmpleados = function(empleado) {
     empleados.push(empleados)
   }

}

const company = new Company ("coca cola")
const company2 = new Company ("pepsi")

console.log(company)
console.log(company2)

company.addEmpleados({name: "ryan"})
company2.addEmpleados({name: "joe"})

console.log(company.getEmpleados())
console.log(company2.getEmpleados())
*/








// ------ composicion ------
/*
const user = {
   name: "ryan",
   lastName: "ray",
   // composicion 
   addres: {
      stret: "124 walsdtret",
      city: "london",
      pais: "Francia"
   }
}
*/






// ----- agregacion ------
/*
const company = {
   name: "Launcher",
   empleados: []
}

class Person {

   constructor(name, lastName){
      this.name = name
      this.lastName = lastName
   }

}

const jhon = new Person("jhon", "ray")
const maria = new Person("maria", "arellano")

// agregacion
company.empleados.push(jhon)
company.empleados.push(maria)

console.log(maria)
console.log(jhon)

console.log(company)

*/






// ----- asociacion ------
/*class Person {

   constructor(name, lastName){
      this.name = name
      this.lastName = lastName
   }

}

const jhon = new Person("jhon", "ray")
const maria = new Person("maria", "arellano")

// relacion
maria.parent = jhon;

console.log(maria)
console.log(jhon)
*/







// ----- class ------

   // funcion normal
/*function Person(){
   this.name = "",
   this.lastName = ""
}*/

// con class ingluido
/*class Person {

   constructor(name, lastName){
      this.name = name
      this.lastName = lastName
   }

   greet() {
      return `hello I am ${this.name} ${this.lastName}`
   }
}

const user = new Person("jhon", "casas")
const user2 = new Person ("juan", "galarza")

console.log(user.greet())
console.log(user2.greet())
*/










//------ Prototype ------

/*
function Person(name, lastName){
   this.name = name,
   this.lastaName = lastName,
   this.displayName = function(){
      return `${this.name} ${this.lastaName}`
   }
}
const jhon = new Person("Jhon", "Perez")
const jose = new Person("jose", "Perez")
const mario = new Person("mario", "ramirez")
const pablo = new Person("pablo", "lilo")

Person.prototype.greet = function(){
   return `hello I am ${this.name}`
}

 console.log(jhon.greet())
 console.log(jose.greet())
 console.log(mario.greet())
 console.log(pablo.greet())
*/




// ------ Object ------
/*
const user = {
   name: "toyer",
   apellido: "perez",
   edad: 20,
   nombreCompleto() {
      return this.name
   }
}
console.log(Object.keys(user))
console.log(Object.values(user))
*/









// ---- constructores -------

/*
const user1 = {
  name: "royer", //propiedades
  apellido: "perez",
  edad: 19,
  nombreCompleto() {   //metodos
   return `${this.name} ${this.apellido}`
}
}


// constructor de objetos
function Person(){
   this.name = ""
   this.apellido = ""
   this.edad = 0
   this.nombreCompleto = function(){
      return `${this.name} ${this.apellido}`
   }
}

const user2 = new Person()
user2.name = "jose"
user2.apellido = "benites"
user2.edad = 20
console.log(user2.nombreCompleto())
*/






// ------ methodos ------

/*

const acount = {
   Number: "2323232322",
   amount: 100,
   deposit(dinero){
      this.amount = this.amount + dinero
   },
   retiro(dinero){
      this.amount = this.amount - dinero
   }
}

acount.deposit(100)
acount.deposit(70)
acount.deposit(10)
console.log(acount)

acount.retiro(80)
acount.retiro(150)
console.log(acount)
*/