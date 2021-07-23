
Frequency counter: -
-----------------------
function validAnagram(first ,second)
{
   if(first.length !== second.length)
    {
        return false;
    }
     const lookup = {};
    for(i=0;i<first.length;i++)
    {
        let letter = first[i];
		lookup[letter] = lookup[letter]?lookup[letter]+1:1;
    }
	for(i=0;i<second.length;i++)
	{
	let letter = second[i];
	if(!lookup[letter])
	{
	return false;
	}
	else 
	{
	lookup[letter]-=1;
	}
}
return true;
}

Multiple Pointer:  -
---------------------------
function sumZero(arr){
	let left=0;
	let right = arr.length-1;
	while(left<right){
		let sum = arr[left] + arr[right];
		if(sum===0){
			return[arr[left],arr[right]];
		}
		sum>0?right--:left++;

	}return false;
}

function countUniqueValues(arr){
	let i = 0;
	for (j=0;j<arr.length;j++){
		if(arr[i]!==arr[j]){
			i++;
			arr[i]=arr[j];
		}
	}
	return i+1;
} 

helper recursion -
function collectingOdd(arr){
	let result = [];
	function helper(num){
		if(arr.length===0)return;

	}
} 
-----------
linear search

function linearSearch(arr=[],val){
	for (i=0;i<arr.length;i++){
		if(arr[i]===val){
			return i;
		}
	}
		return -1;
	
}

------- binary search
function binarySearch(arr,val){
	let first = 0
	let last = arr.length-1;
	let mid = Math.floor((first + last) /2);

	while(arr[mid]!==val && first<=last){
	
	if(val>arr[mid])first = mid+1;
	else last = mid-1;
		
	
	mid =Math.floor((first + last) /2);

}
return arr[mid]===val?mid:-1;
}

------- 
searching string stretch
function findString(bigString,smallString){
	let result = 0;
	for(i=0;i<bigString.length;i++){
		if(bigString[i]===smallString[0]){
			let m=i;
			for (j=0;j<smallString.length;j++){
				if(smallString[j]===bigString[m]){
					m++;
				}
				else break;
			}
			if(j===smallString.length) result++;
		}
	}
	return result;
}
----------
Bubble Sort : - Basically we have to select the greatest no and put it to last;
function bubbleSort(arr){
	const swap = (arr,idx1,idx2) =>{[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]};
	for(i=arr.length;i>0;i--){
		for(j=0;j<i-1;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1)
			}
			}
		}
		return arr;
	}

	making it more better optimized
function bubbleSort(arr){
	let noSwap;
	const swap = (arr,idx1,idx2) =>{[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]};
	for(i=arr.length;i>0;i--){
		noSwap = true;
		for(j=0;j<i-1;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1)
				noSwap = false;
			}
			}
			if(noSwap) break;
		}
		return arr;
	}

	-------- selection Sort -- in this we get the smallest no and put tat in the start position.
	function selectionSort(arr){
		let min ;
		for (i=0;i<arr.length;i++){
			min = arr[i];
			for(j=i+1;j<arr.length;j++){
			if(arr[j]<min){
				temp = min;
				min = arr[j];
				arr[j] = temp;
			}
		}
		arr[i]=min;
		
		}
		return arr;
	}
	------ Insertion Sort o(n2) -- keep shifting arr 1 place later untill u find place to put the key.
	function insertionSort(arr){
		for(i=1;i<arr.length;i++){
			let currentElement = arr[i];
			for (j=i-1;j>=0 && arr[j]>currentElement;j--){
				arr[j+1] = arr[j];
			}
			arr[j+1] = currentElement
		}
		return arr;
	}
	---------Merge Sort(o(nlog(n))
	function merge(arr1,arr2){
let newArr = [];
let m=0,n=0;
	for(i=0;i<arr1.length+arr2.length;i++){
	if(m<arr1.length && n<arr2.length){
		if(arr1[m]>arr2[n]){
			newArr[i] = arr2[n];
			n++;
		}
		else{
			newArr[i] = arr1[m];
			m++;
		}
		}
		else if(m<arr1.length)
		{
			newArr[i] = arr1[m];
			m++
		}
		else
		{
			newArr[i] = arr2[n];
			n++;
		}
	}
	return newArr
}
function mergeSort(arr){
	if(arr.length<=1)return arr;
	let mid=Math.floor(arr.length/2);
	let left =mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left,right);

}

-----quick Sort--> nlogn
function pivot(arr=[],start = 0,end = arr.length-1){
const swap = (arr,idx1,idx2) =>{
	
	[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
	let pivot = arr[start];
	pivotIndex = start
	for(let i = start+1;i<=end;i++){
		if(pivot>arr[i]){

			pivotIndex++;
			swap(arr,pivotIndex,i)
		}

	}
	
	swap(arr,start,pivotIndex);
	return pivotIndex;
}

function quickSort(arr,start=0,end=arr.length-1){
if(start<end){
	let pivotIndex = pivot(arr,start,end);
	quickSort(arr,start,pivotIndex-1)
	quickSort(arr,pivotIndex+1,end)
	}
	return arr;

}
-------quick Sort by taking last element as pivot
function pivot(arr=[],start = arr.length-1,end = 0){
const swap = (arr,idx1,idx2) =>{
	
	[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
	let pivot = arr[start];
	pivotIndex = start
	for(let i = start-1;i>=end;i--){
		if(pivot<arr[i]){

			pivotIndex--;
			swap(arr,pivotIndex,i)
		}

	}
	
	swap(arr,start,pivotIndex);

	return pivotIndex;

}


function quickSort(arr,start=arr.length-1,end=0){
if(start>end){
	let pivotIndex = pivot(arr,start,end);
	quickSort(arr,pivotIndex-1,end)
	quickSort(arr,start,pivotIndex+1)
	}
	return arr;

}

radix Sort:
function getDigit(num,place){
	num = Math.floor(num/(Math.pow(10,place-1)));
	return(num%10)
}


function digitCount(num,count=0){
	if(num>0){
	return(digitCount(Math.floor(num/10),++count))
	}
	else{
	return count;
	}
}

function digitCount(num){
let count = 0;
	while(num>0){
	count++
	num  = Math.floor(num/10);

	}
	return count;
}

function maxDigit(num){
	let maxDigits = 0;
	for(i=0;i<num.length;i++){
		maxDigits = Math.max(maxDigits,digitCount(num[i]))
	}
	return maxDigits;
}
	
function radixSort(num){
	let maxDigits = maxDigit(num);
	for(k =0;k<maxDigits;k++){
		let arrayBucket = Array.from({length:10},() =>[]);
		for(i =0;i<num.length;i++){
			let digit= getDigit(num[i],k);
			arrayBucket[digit].push(num[i]);
		}
		num = [].concat(...arrayBucket);
	}
	return num;
}
-----flatten Array by recursion
function flattenArr(arr){
	for(i=0;i<arr.length;i++){
		if(Array.isArray(arr[i])){
			arr=[].concat(...arr);
			return(flattenArr(arr));
		}
	}
	return arr;
}
--------

let str = "this is an island";
function convert(str){

let count = 1;
while(str.includes("is")){
  str = str.replace("is", 'pp'+count++)

}
console.log(str);
}
convert("this is an island");

-------------

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>

<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>


<body>

</body>
</html>
<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
</script>
---------