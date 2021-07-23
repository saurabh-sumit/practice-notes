sampleCode --- 
for flattening 1 level of deep array
arr=[].concat(...arr)
for creating array of desire length and suitable value
let arrayBucket = Array.from({length:10},() =>[]);

--- ranking ladder(hacker rank)
function getRankObject(arr){
	let rankObj = {};
	let i = 1;
	let j;
	rankObj[i] = arr[0];
	for (i=1,j=1;j<arr.length;j++)
	{
		if(arr[j-1]!==arr[j])
			{
			i++;
			rankObj[i]=arr[j];
			
		}
	
	}
	return rankObj;
}

function gettingRank(obj,num){
	let res = 0;
for([key,value] of Object.entries(obj, num)){
	;
		if(num>=value){
			return Number(key);
		}
		res++;
}
return res+1;
}
function finalRes(scores, alice){
let rankObj = getRankObject(scores);
let res = [];
for(let val of alice){
	res.push(gettingRank(rankObj,val))
}
return res;
}
[100,100,50,40,40,20,10]
[5,25,50,120]



function getRank(score,uniqScore){
	for (let i = 0;i<=uniqScore.length;i++){
		if(score>uniqScore[i]){
			return i;
		 }
		 
	}
}
------------
re-writing log function
function log(){
	//let args = Array.prototype.slice.call(arguments);
	let args = [...arguments];
	args.unshift("app");
	console.log.apply(console, args);
}

const arr = arr1.slice()
const arr = Array.from(arr);
---------
call apply and bind
const student  = {
	 firstName : "sumit",
	 LastName :"saurabh",
	 getName : function(){ return (this.firstName + this.LastName);}
}

function dispalyName (occupation){
	console.log(this.getName() +"is a "+ occupation );

}

const callOcccup = dispalyName.bind(student);
callOcccup("doctor");
const callOccup1  = dispalyName.call(student,"doctor");

apply will get the input value as an array and call will take separately;
bind will create a new function and it can be called according to our need with or without parameters as needed. It doesn't call on that time but it can be called later.
-------------


function checkAnagram(str1,str2)
{

// let str1 = "qwerty";
// let str2 = "asdfgg";

str1 = str1.split("");
str2 = str2.split("");

if(str1.length!==str2.length){
  return false;
}

for(let char of str1){
  if(str2.includes(char)){
    let index = str2.indexOf(char);
    str2.splice(index,1)
  }
}
  if(str2.length===0){
    return true;
  }
  else{
    return false;
  }

}

------------------------ creating objects by function :- 
function userCreate(name,age){
	const newUser = {};
	newUser.name = name;
	newUser.age = age;
	newUser.increment = function(){
		newUser.age++;
	}
	return newUser;
}

const user1 = userCreate("asd",12);

-----------
if we are putting any function object.create then it will link to it as 

const newUser = Object.Create(functionName)

------- cretaing objects from new keyword

function userCreate(name,age){
	this.name = name;
	this.age = age;
}

userCreate.prototype.increment = function(){
	this.age++;
}
userCreate.prototype.print = function(){
	console.log(this.age);
}

const user1 = new userCreate("sumit",12);

it wll create a new object and ten it will return te object also;

----class in Js
class UserCreate{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	increment(){
		this.age++;
	}
	print(){
		console.log(this.age);
	}
}
-------- call, apply bind ex :-
call - is basically trick of borrowing functions. we use it to pass the reference basically. the first parameter will always be the reference.
define two objects in which one will have property and other will not have . then u can call the func of last object by calling the other object
 
 obj1.increment.call(obj2,"name");
 here name can be optional if the functions doesn't has any parameter.
------------
--Bind Pollyfill

function.prototype.myBind = function(...args){
	let obj = this;
	let params = args.slice(1);
	return function(...args2){
		obj.apply(args[0],[...params,args2])

	}
}
----------
class createStack{
  constructor(size){
    this.size=size;
    this.value = new Array(this.size); // creatig stack of size length
  }

  push(newValue)
  {
    // this.value.push(newValue);

    for(let i=0;i<this.value.length;i++){ 
      if(!this.value[i]){
        this.value[i] = newValue;
        return this.value;
      }
    }
    return ("size exceeded"); // if size is exceeded then it will return message so
  }
  pop(){
    if(!this.value[0]){
      return ("stack Empty");
    }
    let newArray = new Array(1)
    newArray.unshift(...this.value.splice(1,this.size))
    this.value = newArray;
    return this.value; // trying to maintain the size as same 
    
  }
}

--------------
let arr = [1,[2,3,[4,5,[7,8]]]]
functio

function flattenArr(arr){
let flag = false;
  for (let val of arr){

    if(Array.isArray(val)){
    	flag = true;
      arr = [].concat(...arr);
    }
  }
  if(flag){
  	flattenArr(arr)
  }
  else{
  	debugger;
  	// console.log(arr);
  	return arr;
  }
}
---------
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum) // logs 6

------- generalise functions
function copyArrayAndmanipulate(array,inst){
	const output = [];
	for (i=0;i<array.length;i++){
		output.push(inst(array[i]));
	}
	return output;
}

const multiplyBy2 = (val)=>val*2;
copyArrayAndmanipulate([1,2,3],multiplyBy2);
-----------------------------------------------------------
promise1
.then(value => { return value + ' and bar'; })
.then(value => { return value + ' and bar again'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });

-----------------------------------------
  let promise1 = new Promise(()=>{
    console.log("first this");
  })
  promise1.then(console.log("this is then"),console.log("error"))
  .then(console.log("at last"))
  .finally(console.log("this id done finally"));
----------------
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1
  return result * 2;

}).then(function(result) {

  console.log(result); // 2
  return result * 3;

}).then(function(result) {

  console.log(result); // 6
  return result * 4;

});
------ 
debounce

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);

-----
throttling
const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);
--------
const getDetails = fetch(url)
										.then((response)=>{
											if (response.ok) return response.json();
											else throw new error("error");
										}
										.then(data => setData(data));
										.catch(error)=> setError(error.msg);

										) 
--------------------------------			
async function getData(id){
  let value = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  let detail = await value.json();
  let finalRes = await fetch(`https://jsonplaceholder.typicode.com/users/${detail.id}`);
  let finalDetails = await finalRes.json();
  console.log(finalDetails);
}							
--------------
let id = 1;
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(value=> value.json())
 .then(res =>fetch(`https://jsonplaceholder.typicode.com/users/${res.id}`))
.then(value=>value.json())
 .then(res => console.log(res))
 --------------------------------
 Optional chaining :- 
 let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing (no such method)
alert( user?.address?.street )
--------------------
function cloneArray(arr){
 function getElements(arr){
  let tempArr = [];
    for(let val of arr){
      if(!(Array.isArray(val))){
      tempArr.push(val);
      }
      else 
    {
      tempArr.push(getElements(val));
    }
    
}
return tempArr;
}


let newArr = [];
for (let val of arr){
  if(!(Array.isArray(val))){
      newArr.push(val)
  }
  else{
      newArr.push(getElements(val))
  }
} 
console.log(newArr);
}
---------------
