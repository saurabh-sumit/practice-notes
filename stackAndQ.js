enq -> add at first
dqeu -> delete the last

Trees: - 
HTML DOM
Network Routing
AI
Folders in operating sys
computer file system

Trees: - 

class Node{
	constructor(val){
		this.value = val;
		this.left = null;
		this.right = null;
	}
}
Binary search tree

class bst{
	constructor(){
		this.root = null;
	}
	insert(value){
		var newNode = new Node(value);
		
		if(this.root===null){
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while(true){
			if(value ===current.value) return undefined;
		if(value<current.value){
			
			if(current.left===null){
				current.left = newNode;
				return this;
			}
			current = current.left;
		}
		else {
			
			if(current.right===null){
				current.right = newNode;
				return this;
			}
			current = current.right;
		}
		
	}
}
searcing a value
search(value){
	if(this.root.value===null){
		return null;
	}
	let current = this.root;
	while(true){
		if(!current) return null;
		if (value===current.value) return current;
	if(value<current.value)
		{
			current = current.left;
		}
		else
		{
			current = current.right;
		}
}
}
}

BST Breadth First Search:-

bfs(value){
	var queue = [];
	var node = this.root;
	var data = [];
	queue.push(node);

	while(!queue.length){
		node = queue.shift;
		data.push(node.value);
		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);
	}
	}
	dfs(){ //pre order
		var data = [];
		traverse(node){
			
			data.push(node);
			if(node.left) traverse(node.left)
			if(node.right) traverse(node.right)
}
		
		traverse (this.root)
		return data;
	}

	dfs(){ //post order
		var data = [];
		traverse(node){
			
			
			if(node.left) traverse(node.left)
			if(node.right) traverse(node.right)
				data.push(node);
}
		
		traverse (this.root)
		return data;
	}

	dfs(){ //In order
		var data = [];
		traverse(node){
			
			
			if(node.left) traverse(node.left)
			if(node.right) traverse(node.right)
				data.push(node);
}
		
		traverse (this.root)
		return data;
	}
	DFS - in order- will be in ascending order
	DFS - pre order - will be used to construct a tree from array

	Heaps: - 
	Binary Heaps - Roots are always greater
	can ave atmost two child. left is filled first.
	left child = 2n+1
	right child = 2n+2
	root = math.floor((n-1)/2)
	Adding to the max binary heap :- place at the last of the heap and then bubble up

	class MaxBinaryHeap {
		constructor(){
			this.values = [];
		}
		insert(element){
			this.values.push(element);
			this.bubbleUp();
		}
		bubbleUp(){
			console.log("code run");
			let idx = this.values.length-1;
			let rootIdx;
			while(idx>0){
				rootIdx = Math.floor((idx-1)/2);
				let change = false;
				let parent = this.values[rootIdx];
				let curElement = this.values[idx]; 
				if (parent < curElement){
					this.values[rootIdx] = curElement;
					this.values[idx] = parent;
					change = true;
					idx = rootIdx;
				}
				if (!change){
					break;
				}

			}
		}
		delete(){
			let maxElement = this.values[0];
			
			let lastElement = this.values.pop();
			this.values[0] = lastElement;
			
			this.bubbleDown();
		}
			bubbleDown(){
			let currIdx  = 0;
			let length = this.values.length;
			while(currIdx<length-1){
				let leftCh = currIdx*2+1;
				let rightCh   = currIdx*2+2;
				let temp;
				if(this.values[leftCh]>this.values[currIdx]){
					temp = this.values[currIdx]
					this.values[currIdx] = this.values[leftCh]
					this.values[leftCh] = temp
					
				}
				if(this.values[rightCh]>this.values[currIdx]){
					temp = this.values[currIdx]
					this.values[currIdx] = this.values[rightCh]
					this.values[rightCh] = temp
					
				}
				currIdx++;


				
			}
		}

		}
	

	Removing from Heap: - 
	max element from max binary heap, and min from min binary heap
let heap = new MaxBinaryHeap();
heap.values=[41,39,33,18,27,12]

Priority Queue : -
here each element has a priority associated with it.
className = node
properties: - 
values:,
priority
enqueue - method accepts a value and priority and 
dequeue -  removes root element and re arrange it 
it is min heap 



------- Hash Table
it provide solution for key value pair data structure.

class HashTable{
	constructor(size = 53){
		this.keyMap = new Array(size);
	}
	_hash(key){
		let total = 0;
		let WEIERD_PRIME = 31;
		for (let i=0; i<key.length; i++){
			let char = key[i];
			let value = char.charCodeAt(0);
			total = (total*WEIERD_PRIME + value)% this.keyMap.length;
		}
		return total;
	}
	set(key,value){
		let index = this._hash(key);
		if(!this.keyMap[index]){
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key,value]);
		return 

	}
	get(key){
		let index = this._hash(key);
		if(this.keyMap[index]){
			for(let i=0;i<this.keyMap[index].length;i++){
				if(this.keyMap[index][i][0]===key){
					return this.keyMap[index][i][1];
				}
			}
			return undefined;
		}
	}

}


