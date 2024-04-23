
const btnvar=document.getElementById('btn');
function Toggle(){
    if(btnvar.style.color=="red"){
        btnvar.style.color="grey"
    }else{
        btnvar.style.color="red"
    }
}


const addButton = document.getElementById('.add-btn');
function Clicked(){
    console.log("Item added");
}
