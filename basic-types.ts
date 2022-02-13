/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
let isDone:boolean=false;
let age:number =20;
let binaryNumber :number =0b111
let firstName:string ='viking'
let message:string =`hello ${firstName},age is ${age}`;
let u:undefined =undefined;
let n:null =null;
let num:number =undefined;
let notSure:any = 4
notSure ="maybe is a string"
notSure =true
notSure.getName()
let numberorString:number|string//可以是number或者string
numberorString='abc'
// 数组
let arrOfNumbers:number[]=[1,2,3,4]
arrOfNumbers.push(5)
function test(){
  console.log(arguments)//类数组

}
// 元祖Tuple
let user:[string,number] =['viking',20]
user =['molly',2]


