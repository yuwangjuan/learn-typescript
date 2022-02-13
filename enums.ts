/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 16:30:12
 */
// const enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// }
// const value = 'UP'
// if (value === Direction.Up) {
//   console.log('go up!')
// }

enum Direction {
  Up ="UP",
  Down="DOWN",
  Left="LEFT",
  Right="RIGHT",
}

console.log(Direction.Up)
const value ='UP'
if(value ===Direction.Up) {
  console.log('go up!')
}