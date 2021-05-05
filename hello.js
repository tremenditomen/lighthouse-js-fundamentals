/*const sayHello = function (name){
  console.log("Hello " + name);
return

}
sayHello('jeff');
sayHello('El presidente')
sayHello('Eduardo')*/
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);