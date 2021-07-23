class Node(){
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglylinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val)
	{
		var newNode = new Node(val);
		if(!this.head)
		{
			this.head = newNode;
			this.tail = this.head;
		}
		else
		{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++
		return this;
		}
	}


var list = new SinglylinkedList();
list.push("first");
list.push("second");

-----Delete first node : -
 unshift(){
 	let currentHead = new Node();
 	if(!this.head){
 		return null;
 	}
 	else if(!this.head.next){
 		currentHead = this.head;
 		this.head = null;
 		return currentHead;
 	}
 	else{
 		currentHead = this.head;
 		this.head = this.head..next;
 		return currentHead;
 	}
 }

 ------- Delete Last Node : - 
 pop(){
 	let current = new Node();
 	let prev = new Node();
 	if(!this.head){
 		return null;
 	}
 	else if(!this.head.next){
 		prev = this.head;
 		this.head = null;
 		return prev;
 	}
 	else{
 		prev = this.head;
 		current = this.head.next;
 		while(current.next){
 			prev = current;
 			current = current.next

 		}
 		prev.next  = null;
 		return current
 	}
 }

-------- Add at first
addAtFirst(val){
	let newNode = new Node(val);
	if(!this.head){
 		this.head = newNode;
 	}
 	else{
 		newNode.next = this.head;
 		this.head = newNode;

 	}
 	return this;
}

--------- delete a value : -

deleteValue(val){
	if(!this.head)
	{
		return null;
	}
	else if(head.val === val){
		temp = this.head;
		this.head = this.head.next

	}
	else{
		prev = this.head;
		current = this.head.next;
		while(current.next)}{
			if(current.val===val){
				prev.next = current.next
				return current
			}
		}
	}
}
----- get number at specific position: - 
--- set a node at some specific position : -
-- Reversing the linked list: -
prev = null;
current = head;
while(current.next)
{
	temp = current.next;
	current.next  = prev;
	prev = current;
	current = temp;
}
current.next = prev;
this.head = current;
