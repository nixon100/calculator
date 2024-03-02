function dis(val) { 
	
  
  let isNumber=(value) =>{
  return typeof value == 'number';
}
if (document.getElementById("result").value){
  document.getElementById("result").value += val


}else {
  if (isNumber(val) || (val == "(") || (val == ")")){
  
  document.getElementById("result").value += val

}else {
  alert("Only numbers and parentheses are allowed")
}
}
} 
function myFunction(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").value += event.key;
      console.log(event.key) 
		} 
function clr() { 
			document.getElementById("result").value = "" 
		} 
function solve() { 
			let x = document.getElementById("result").value 
			let y = eval(x)
			document.getElementById("result").value = y 
		}

// DOM
	let arraysyb=["(",")","%","c"]
  let math =["/","*","-","+"]
  let arraynum =[1,2,3,4,5,6,7,8,9,0,".","="];
  arraynum1 =0;
  let math1 = 0;
  


const  tbl = document.createElement("table");
const tblbody = document.createElement("tbody");
const row = document.createElement("tr")
const cell = document.createElement("td")

cell.setAttribute("colspan", "3")
const inputElement = document.createElement("input")
inputElement.setAttribute("type", "text")
inputElement.setAttribute("id","result")
cell.appendChild(inputElement)
row.appendChild(cell)
tblbody.appendChild(row)
tbl.appendChild(tblbody)


        
for(let i=0; i<5; i++){
    const row = document.createElement("tr");
    for(let j=1; j<=4; j++){
        
       if (i==0){
       
      
        const cell = document.createElement("td")
       
        const inputElement = document.createElement("input")
        inputElement.setAttribute("type" , "button")
        inputElement.setAttribute("value" , arraysyb[j-1])


		if(j==4) {
		inputElement.onclick = function() {
         clr();
         };
         
		}else {
		inputElement.onclick = function() {
         dis(arraysyb[j-1]);
         }}

        cell.appendChild(inputElement)
        row.appendChild(cell)
    }
    
    
    if (i!==0){
        const cell = document.createElement("td")
       
       const inputElement = document.createElement("input")
       inputElement.setAttribute("type" , "button")
   
    if (j==4){
        inputElement.setAttribute("value" , math[math1])
        let yes = math1
		inputElement.onclick = function() {
         dis(math[yes]);
         };
		math1 += 1;
       }else {
        inputElement.setAttribute("value" , (arraynum[arraynum1]))
		    let yes = arraynum1
	
		if(i==4 && j==3){
		    inputElement.onclick = function() {
        solve();
         };
		}else {
			inputElement.onclick = function() {
         dis(arraynum[yes]);
         }
		}
	    arraynum1 += 1;
		}
      cell.appendChild(inputElement)
      row.appendChild(cell)
    }
    }   
tblbody.appendChild(row);
}
tbl.appendChild(tblbody)
document.body.appendChild(tbl)
