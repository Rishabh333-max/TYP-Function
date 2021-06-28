// function add(temp1,temp2){
//     var temp3=temp1+temp2;
//     console.log(temp3);
//     return temp3;
// }
// var addition=add(30,80);
// console.log(addition);

// function subtract(temp1,temp2){
//     var temp3=temp1-temp2;
//     console.log(temp3);
//     return temp2;
// }
// var subtraction=subtract(40,5);
// console.log(subtraction)



// function add(temp1){
//     let a=20;
//     var temp3=temp1+a;
//     console.log(temp3);
//     return "RISHABH"
// }var addition=add(22);
// console.log(addition);

// function subtract(temp1,temp2){
// var temp3=temp1-temp2;
// console.log(temp3)
// return "KHUSHI";
// }
// console.log(subtract(1,1))

// function Rishabh(){
//     console.log("hey");
// }
// var atom=Rishabh();
// console.log(atom)


// var obj={
//     fun:myfun
//     }
//     function myfun(){
//         console.log("hey")
//         console.log("hello")
//     }
//     obj.fun()
//     console.log(obj.fun())


// var obj={
//     fun:myfun
//     }
//     function myfun(){
//         console.log("hey")
//         console.log("hello")
//         var arr=[2,3,4,5,5,6]
//         console.log(arr.reverse())
//         var omg={
//             name:"Rishabh",
//             class:12
//         }
//         console.log(omg)
//         console.log(omg.name)
//     }
//     obj.fun()
    

// var obj={
//     fun:[1,2,3,4,7,9],
//     fun2:myfun
//     }
//     function myfun(){
//         console.log("hey")
//         console.log("hello")
//     }
//     obj.fun.splice(0,2,"ambesh")
//     console.log(obj.fun)
//     obj.fun2()
//     console.log(obj.fun2())

    
   
    


// var addition=add(1,2)
// console.log(addition);
// function add(temp1,temp2){
// temp3=temp1+temp2;
// console.log(temp2);
// return temp3
// }


// function myfun(){
//     console.log("start")
//     var i=80;
//     if(i==0){
//         return "right"
//     }
//     else{
//         return "wrong"
//     }
// }
// var fun=myfun();
// console.log(fun);


// var obj={
// name:"Ambesh"
// }
// obj.myfun=function(val){
//     console.log("hey",val)
//     return val;

// }
// var temp=obj.myfun(4);
// console.log(temp)
// console.log(obj.name)


// function add(param1,param2){
//     var addition=param1+param2;
//     console.log(addition);
    // console.log(arguments)      //argument se pta lgjaata hai ki actual kitne parameter pass hue h
// }
// add(2,3,4,5,6,7,8,9,0)


// immidiately invoke function expression(IIFE)------->

// -->Bina function ko call kiye function call hojae i.e. IIFE
// 1)Normal function
// function name(){

// }

// 2)IIFE function
// (function name(temp){
//     var student="Rishabh";
//     console.log(student,temp)
// console.log()
// })(10)

//anonymous function--->ek funtion jiska koi naam na ho!
// ye anonymous bs IIFE k syntax p work krega
// (function (temp){
//     console.log(temp);
// })(10)


// var Rishabh=function(){
//     console.log("hey");
// }
// console.log(Rishabh)
// console.log(Rishabh())



// var Rishabh=function(){
//     console.log("hey");
// }
// Rishabh();


// isme hosting variable ki hori h isiliye fxn call ni hoga
// console.log(temp)
// var temp=function(){
//     console.log("hey");
// }
// console.log(temp)


// isme hosting function ki hogi qki isko phle fxn dikhjaega
// test();
// function test(){
//     console.log("HEY")
    
// }
// test();


// function People(){
//     console.log("hey")

// } 
// var Person=People("Rishabh")
// console.log(Person)


// function People(){
//     console.log("hey");
//     return "khushi";
// }
// var Person=People("Rishabh");
// console.log(Person)

// Higher order function(HOF)--->
// koi function dusre function ko as a parameter pass kre ya catch kre i.e.HOF

// function sayHello(temp){
// console.log(temp);
// temp();
// }
// function hi(){
//     console.log("hi")
// }
// sayHello(hi);


// function add(temp){
//     console.log(temp)
//     temp();

// }
// function subtract(){
//     console.log("hey");
// }
// add(subtract);


// function ram(temp){
// console.log(temp)
// temp();
// }
// function shyam(){
//     console.log("Hey Ram How Are You");
// }
// ram(shyam)



// function getName(temp1){
// console.log(temp1)
// return "ambesh"
// }
// var get=getName(5);
// console.log(get);
// var getName2=(temp)=>{
//     console.log(temp);
//     return temp
// }

// getName2(1);
// console.log(getName2());


// example of a type of variable who is not a function
// getName2();
// var getName=function(){

// }
// var getName2=()=>{
//     console.log("Hello");
// }




// PURE FUNCTION--------->pure function vo function hota hai jisme jo return kia h vo refresh krne k baad change nhi hoga!

// function RollNo(temp){
//     return temp;
// }
// console.log(RollNo(20));

// IMPURE FUNCTION------->impure function vo function hota hai jisme jo return kia vo refresh krne k baad baar baar change hota h!

// function mix(num){
//     return num+(Math.random()*100)
// }
// var result=mix(2);
// console.log(result)


// var a=11;
// function myfun(val){
//     console.log(val);
//     val();
//     console.log(a);
// }
// function print(){
//     console.log("print");
//     {
//         var a=10;
//         console.log(a);
//     }
//     fun(a);
// }
// myfun(print);
// console.log(a);

// function fun(a){
//     console.log(a);
//     {
//         console.log(a);
//     }
// }


// IIFE + RECURSION + AN0NYMOUS---------->

// (function(val){
//     if(val>0){
//         console.log(val);
//         arguments.callee(--val)
//     }
//     console.log(val)

// })(11);





