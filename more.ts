/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
// // type aliases
// type PlusType = (x: number, y: number) => number
// function sum(x: number, y: number): number {
//   return x + y
// }
// const sum2: PlusType  = sum

// type NameResolver = () => string
// type NameOrResolver = string | NameResolver
// function getName(n: NameOrResolver): string {
//   if (typeof n === 'string') {
//     return n
//   } else {
//     return n()
//   }
// }

// // type assertion

// function getLength(input: string | number) : number {
//   // const str = input as String
//   // if (str.length) {
//   //   return str.length
//   // } else {
//   //   const number = input as Number
//   //   return number.toString().length
//   // }
//   if((<string>input).length) {
//     return (<string>input).length
//   } else {
//     return input.toString().length
//   }
// }
// 类型别名
type PlusType =(x:number,y:number)=>number
function sum(x:number,y:number) :number{
  return x+y;
}
// const sum2:(x:number,y:number) =>number =sum
 const sum2:PlusType =sum


 type NameResolver =()=>string
 type NameOrResolver =string |NameResolver
 function getName(n:NameOrResolver):string{
   if(typeof n ==='string') {
     return n;
   }else{
     return n();
   }
 }
//  类型断言

function getLength(input:string |number):number {
  // const str  = input as String
  // if(str.length) {
  //   return str.length
  // }else{
  //   const number = input as Number
  //   return number.toString().length;
  // }

  if(<string>input) {
    return (<string>input).length
  }else{
    return input.toString().length
  }
}