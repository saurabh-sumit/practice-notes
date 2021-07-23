document.body.childNodes - will give list and we can access all the child nodes with index . these are read only. they are live.
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
document.getElementById - only on document
document.querySelectorAll - can run on any elements
document.getElementsByTagName('div');
elem.getElementsByClassName(className)
innerHTML
onmouseover
document.createElement('div');

--------
document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...dispatch on elem!
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);
