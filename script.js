const addItem= document.getElementById("addItemBtn");
const list = document.getElementById("list");
const removebtn = document.getElementById("removeLastBtn");
const userInput = document.getElementById("userInput");



let numbb= 0;

addItem.addEventListener("click", ()=>{

let newList = document.createElement("li");


if(userInput.value === ""){ 

       alert("you did not write");
}else {
          newList.textContent = userInput.value;
                    list.appendChild(newList);
}

 
})

removebtn.addEventListener("click", ()=>{
 

 if (list.lastChild) {
    list.lastChild.remove();
    
  } else {
    console.log("No items to remove");
  }

})