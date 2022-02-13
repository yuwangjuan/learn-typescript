/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
// }
// let viking: Person = {
//   id: 1234,
//   name: 'viking',
// }

// interface
// 定义对象interface
// 1.对象的形状进行描述
// 2.对class 进行抽象
// 3.Duck Typing(鸭子类型)

interface Person {
  readonly id:number;//只读
  name:string;
  age?:number; //?可选,可有可无
}
let viking:Person  = {
  id:1234,
  name:'viking',
  age:20
}
