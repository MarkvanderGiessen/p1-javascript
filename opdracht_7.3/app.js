let h1 = document.getElementById("h1");
let amount= 0;

function clicker(){
    if(amount>9){
        amount=0;
        h1.innerText=amount;
    }else{
        amount+=1;
        h1.innerText=amount;
    }
}