// Functions

// function showMessage(){

// 	console.log("Hello");
// 		console.log("Hello");

// 	console.log("Hello");

// 	console.log("Hello");


// }

// showMessage();

// showMessage();
// showMessage();
// showMessage();

// function calculateinterest(amount, duration, rateofinterest){
// // function calculateinterest(){

// 	interest= amount*duration*rateofinterest/100
// 	console.log(" interest calculation")
// 	console.log(interest)

// }

// calculateinterest(10000,12,5)
// calculateinterest(102000,16,4)
// calculateinterest()


// function showMessage(abc){
// 	console.log(abc);
// }

// showMessage("python");
// showMessage("java");
// showMessage("javascript");
// showMessage(1);

// subject="python"
// showMessage(subject);
// 

// function showMessage(string){
// 	console.log("The Subject is " +string);
// }

// showMessage("python");

// showMessage("java");
// showMessage("javascript");
// showMessage("scala");

// function showMessage(string1,string2){
// 	console.log( string2 , string1);
// }

// showMessage("python","selenium");
// showMessage("java","selenium");
// showMessage("javascript","selenium");
// showMessage("scala","selenium");


// function id(x){
// 	area=x*2
//     return area;
// }



// y= id(10)
// console.log("price is "+(y*100))
//     z=id(20)

// x=id(40)
// x=id(100)
// console.log(y);

// console.log(z);




// var y = id(10);
// var y = id(100);
// 
// console.log(y);





// 
// Three main role of the functions
// 1) Non method function (normal function)
//  example
//  function id(x){
// 	return x;
// }

// 2) Constructor
// new Date()
// var myarray= new Array()



// function vs method
// when a function is property of an object it called method

// obj.method()

// Parameter vs Argument
// function helloworld(st1,st2){//parmeters
// console.log(st1+st2);
// }

// helloworld("hello","world");//arguments

// Defining a function
// 1) using a function expression

// // // =========================
// function add (x,y){
// 	return x+y;
// }

// var z = add(3,4);
// console.log(typeof z);
// console.log(z);

// console.log(typeof add);

//############################

// var a = function(){
// 	console.log("function variable")
// }

// a()
// 
// var functionVariable = function (x,y){
// 	console.log(x+y);
//     return x+y;
// };

// // functionVariable(34,4)
// // var res=functionVariable(34,4)
// // console.log(res)

// // console.log(typeof functionVariable);
// // // add(3,5)
// var z=functionVariable(3,4)
// functionVariable(3,4);
// console.log(z);

// ====================================

// function add(x,y){
// 	return x+y
// }

// add(3,4)
// y=add(3,4)
// console.log(y);

// x=add(2,3)
// console.log(add(2,3));
// console.log(x);

// console.log(typeof add);
// done till here for raja
// ==================================
// var add=function(x,y){
// 	return x+y;
//  }

// console.log(add instanceof Function);

// ===================================
// // hoisting

// function foo(){
// 	console.log("hello World");
// }

// foo();
// // -------------

// foo();
// function foo(){
// 	console.log("hello World");
// }

// console.log(a)
// a=10
// //hoisting is applicable for functions only
// var foo;
// // foo();
// foo=function(){
// 	console.log("hello world");
// };

// foo();

// Hoisting is performed for functions , and partially for variable 
// in above code the foo is a variable so exeuction will throw an error
// The function declaration has 2 advantage over function variable
// 1) they are hoisted , so you can call them before they appear
// 2) They have a name

// ########### parameters in function

// function sayHello(name, timeofDay){
// console.log("hello " + name);

// console.log("Time is " +timeofDay);
// }

// sayHello("Ashok", "afternoon");
// sayHello("Ashok");


// var a=10;
// if(!a){
// 	console.log(a)
// }

// else{
// 		console.log("parameter missing")

// }

// function sayHello(mandatory, optional){
// 	if (!mandatory){
// 		throw new Error("Missing parameter:mandatory");
// 		console.log("parameter missing")
// 	}
// 	else{
// 	console.log("hello " + optional);
//      console.log("Time is " +mandatory);	
// 	}
// }

// sayHello(mandatory='',"ashok");
// 
// sayHello('',"ashok");
// if(!optional){

// }

// function sayHello(mandatory, optional){
// 	if (!optional){
// 		// throw new Error("Missing parameter:mandatory");
// 		optional="ashok"
// 		console.log("parameter missing")
// 	}
//     console.log(mandatory+optional);

// }

// sayHello("hello","varun");
// sayHello("hello");



//As javascript does not handle the parameter , we need to provide check
//in out code for mandatory optional or default parameters
//
//Calling a function from function

// var f=function(){
// 	console.log("hello");
// };

// f()


// function a(){
// f()
// }

// a()


// var executor= function(f1){
// f1();
// console.log(f1)
// };
// 
// executor("javascript")

// executor(f);

// ================================
// var f= function(name){
// 	console.log("hello " +name );

// };

// f("python")

// var executor=function(fn,name){
// 	fn(name);//f("python")
		// console.log("hello " +name +fn );

// }
// executor("datascience","python ");


// executor(f,"python");
// =======================================

// var myObj={ testProp: true};

// myObj.name="ashok"
// myObj.surname="sharma"

// myObj.myMethod= function(){
// 	console.log("Function in object");
// }

// console.log (myObj);
// console.log (myObj.name);

// myObj.myMethod();
// =====================
// var person = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     getFullName: function() {
//         console.log (person.firstName + " " + person.lastName)
//                // return (person.firstName + " " + person.lastName)

//     }
// }
// var fullName=person.getFullName();
// console.log(fullName)
// person.getFullName();
// =============================
// var person = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     getFullName: function() {
//         return person.firstName + " " + person.lastName// here person is used so other object will also use the person only
//         // return firstName + " " + lastName

//     }
// }
// // var fullName=person.getFullName();
// // console.log(fullName);

// var person2=person;
// // console.log(person2);

// person={};
// console.log(person)
// // console.log(person2);
// var person2 = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     getFullName: function() {
//         return person.firstName + " " + person.lastName// here person is used so other object will also use the person only
//         // return firstName + " " + lastName

//     }
// }


// var fullNamePerson2 = person2.getFullName();
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(fullNamePerson2);

// -----------This operator
// var person = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     getFullName: function() {
//         return this.firstName + " " + this.lastName
//     }
// }
// var person2=person;
// var person2 = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     getFullName: function() {
//         return this.firstName + " " + this.lastName
//         // return person2.firstName + " " + person2.lastName

//     }
// }

// person={};
// var fullNamePerson2=person2.getFullName();
// console.log(fullNamePerson2);
// ================================================

// var person = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     "getFullName": function() {
//         return this.firstName + " " + this.lastName
//     },
//     "address":{"street":"1st cross",
//                 "state":"karnataka"},
//     "city":"bangalore"}

// var fullName=person.getFullName();
// console.log(fullName);

// var person2=person;
// person={};

// console.log(person.getFullName());

// isFromState("karnataka");


// var person = {
//     "firstName": "ashok",
//     "lastName": "sharma",
//     "getFullName": function () {
//         return this.firstName + " " + this.lastName
//     },
//     "address": {
//         "street": "1st cross",
//         "state": "karnataka",
//         "city": "bangalore",},
//     "isFromState": function (stateName) {
//         return(this.address.state === stateName); 
//     }
// }



// var fullName=person.getFullName();
// console.log(fullName);
// var person2 = person;
// person = {};
// console.log(person2.getFullName());
// console.log(person2.isFromState("andhra"));
// console.log(person2.isFromState("karnataka"));

// =====================================



// function myFunction(a,b, c, d, e){
//      console.log(arguments);

// 	return arguments.length;
// }

// var paramCount=myFunction(2,3,100, "python","java");
// console.log(paramCount);

// ====================
// function argTest(){
// 	console.log(arguments);
//     console.log(arguments.length);

// }
// argTest(1,"java","selenium","python","javaScript");


// =====================
// function myFunction(a,b, c, d, e){
//      console.log(arguments);

// 	return arguments.length;
// }
// var txt= myFunction.toString();
// console.log(txt);

// =======================
// function args(a,b,c,d){
// 	console.log(arguments);
// 	return a+b+c+d;
// }

// var x =args(11,2,3,4)
// console.log(x);


// done for RAJA
// -------------------------
// function logArgs(){
// 	for (var i=0;i<arguments.length;i++){
// 		console.log(i+'. '+arguments[i]);
// 	}

// }
// logArgs("hello","world");
// ----------------

// function findMax() {
//     var max = -Infinity;
//     for(var i = 0; i < arguments.length; i++){
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// x= findMax(1,123,500,115,44,88);
// console.log(x);

// =========================

// function sumAll() {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// x= sumAll(1,123,500,115,44,88);
// console.log(x);

// ==================
// function(){
// 	var a =10;
// 	var b =20;
//     console.log(a+b);
// }

// fn();
// ----------------------------
(function(){
	var a =10;
	var b =20;
    console.log(a+b);
})();

// Hoising is applicable for functions only
// f()
// function f() {
//     console.log(bar);  // undefined
//     var bar = 'abc';
//     console.log(bar);  // abc
// }
// f();