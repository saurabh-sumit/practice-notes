CSS: - 
absolute. - it is out of the flow of page. it is taken wrt to immediate parent element which as any position defined.
relative - wrt itself position, even the left place will not be taken by any outer comp.

grid - 
.container {
	display: grid | inline-grid;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  column-gap: 10px;
  row-gap: 15px;
  justify-items: start | end | center | stretch;
}

flex - 
.container{
	display: flex; 
	flex-direction: row | row-reverse | column | column-reverse;
	flex-wrap: nowrap | wrap | wrap-reverse;
	

}

for centering things
margin: 0;
    background: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }