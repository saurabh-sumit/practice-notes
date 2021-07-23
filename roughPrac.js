function output(arr){

arr.sort((a,b)=>a-b);
let res = []
for(let i=0;i<arr.length;i++){
    let temp = arr[i];
    let j=0,k=arr.length;
    while(j<k){
    if(i!==j && k!==i)
    {
        if(temp + arr[j] + arr[k] === 0)
        {
        res.push([arr[i],arr[j],arr[k])
        break;
        }
    else if(temp + arr[j] + arr[k] > 0){
    k--;
    }
    else{
    j++
    }
}
}

    }
    console.log(res);
}
  
  output([-1,2,3,4,5,0,-4,-7]);
  

  let promise1 = new Promise(()=>{
    console.log("first this");
  })
  promise1.then(console.log("this is then"),console.log("error"))
  .then(console.log("at last"))
  .finally(console.log("this id done finally"));


  function test(arr){
    let count = 1;

    return function(){
let newarr = [...arr];
        if(count%3===0){
            
            newarr.sort((a,b)=>a-b)

        }
       else if(count%2===0){
       
            newarr.sort((a,b)=>b-a)
        }
        else{
            newArr = newArr;
        }
        count++;
        console.log(count);
        console.log(newarr);
    }
}
----------------

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(today, limit) {
    // write your code in JavaScript (Node.js 8.9.4)
    let todayDate = new Date(today);
    // [0].getElementsByTagName('td')[1].innerHTML;
    let result = 0;
    let tableRows = document.getElementsByTagName('tr');
    let rowsArray = [...tableRows];
    rowsArray.map((row)=>{
        let duration;
        let color = row.style;
        let borrowedDate = new Date(row.getElementsByTagName('td')[1].innerHTML);
        let returnDate = new Date(row.getElementsByTagName('td')[2].innerHTML);
        if(returnDate){
            duration = returnDate-borrowedDate;
        }
        else{
            duration = todayDate-borrowedDate;
        }

        if(duration>7 && color !== 'background-color: red'){
            result++;
        }
        else if(duration <= 7  && color === 'background-color: red'){
            result ++;
        }


    })
    return result;
}

--
use 'strict';
msg = "good";
function convert(){
    msg = "bad";
    console.log(msg);
  }
convert()
console.log(msg);
let msg;
------------
function betterFunct(){
let cache ={};
return function(val){
    let res = cache[val]?cache[val]:val*val*val;
    cache[val] = res;
    console.log(cache);
    return res;
}

}
const mul = betterFunct();
mul(5);
------
function merge(arrL,arrR){
let m = arrL.length;
let n = arrR.length;
let i=0,j=0,k=0;
let newArr = [];
while(i<(m+n)){
    if(j<m && k<n){


    if(arrL[j]>arrR[k]){
        newArr[i] = arrR[k];
        i++;
        k++;
    }
    else{
        newArr[i] = arrL[j];
        i++;
        j++;
    }
}
else if(j>=m){
    newArr[i] = arrR[k];
        i++;
        k++;
    }
else{
    newArr[i] = arrL[j];
        i++;
        j++;
}


}
return newArr;
}


function mergeSort(arr){
    if(arr.length<=1)return arr;
    let mid = Math.floor(arr.length/2);
    let arrL = mergeSort(arr.slice(0,mid));
    let arrR = mergeSort(arr.slice(mid));
    return merge(arrL,arrR);
}
----
console.log(a,b);
let a = 5;
