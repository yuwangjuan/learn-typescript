/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
// 函数声明
// function add(x:number,y:number,z:number =10):number {
//   if(typeof z ==='number') {
//     return x+y+z;
//   }else{
//     return x+y;
//   }
 
// }
// let results =add(2,3);

// 函数表达式
const add = function(x:number,y:number,z:number =10):number {
  if(typeof z ==='number') {
    return x+y+z;
  }else{
    return x+y;
  }
 
}
// 声明函数类型返回值
const add2:(x:number,y:number,z?:number)=>number = add
let strs ='str'
