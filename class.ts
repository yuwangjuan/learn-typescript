/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
// class Animal {
//   name: string;
//   static categoies: string[] = ['mammal', 'bird']
//   static isAnimal(a) {
//     return a instanceof Animal
//   }
//   constructor(name: string) {
//     this.name = name
//   }
//   run() {
//     return `${this.name} is running`
//   }
// }

// console.log(Animal.categoies)
// const snake = new Animal('lily')
// console.log(Animal.isAnimal(snake))

// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`
//   }
// }

// const xiaobao = new Dog('xiaobao')

// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//     console.log(this.name)
//   }
//   run() {
//     return 'Meow, ' + super.run() 
//   }
// }

// const maomao = new Cat('maomao')

// interface Radio {
//   switchRadio(): void;
// }

// interface Battery {
//   checkBatteryStatus();
// }
// interface RadioWithBattery extends Radio {
//   checkBatteryStatus();
// }
// class Car implements Radio{
//   switchRadio() {

//   }
// }

// class Cellphone implements RadioWithBattery {
//   switchRadio() {

//   }
//   checkBatteryStatus() {

//   }
// }
// public private protected readonly  static(类的属性和方法和实例没太大关系)
class Animal {
 protected name:string;
 static categroies:string[] =['manaman','bird']
 static isAnimal(a) {
   return a instanceof Animal;
 }

  constructor (name:string) {
    this.name = name
  }
  run (){
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(snake.run());
class Dog extends Animal {
  bark(){
    return `${this.name} is barking`
  }
}
const xiaobao  =new Dog('xiaobao')
console.log(xiaobao.run());
console.log(xiaobao.bark());
class Cat extends Animal {
  constructor (name) {
    super(name);
    console.log(this.name)

  }
  run(){
    return `Meow,`+super.run()
  }
}
const maomao  =new Cat('maomao');
console.log(maomao.run())


interface Radio {
  switchRadio():void;
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
// interface Battery {
//   checkBatteryStatus();
// }
class Car  implements Radio{
  switchRadio(){

  }
}

class Cellphone implements RadioWithBattery{
  switchRadio (){

  }
  checkBatteryStatus(){

  }
}