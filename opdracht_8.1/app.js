let h1= document.getElementById("h1")
let input1= document.getElementById("getal_1")
let input2= document.getElementById("getal_2")
function multiply(){
if(input1.value <1 && input2.value <1){
    h1.innerText = "het is te laag"
} else{
    let answer =input1.value * input2.value;
h1.innerText= answer
}
};
function divide(){
    if(input1.value <1 && input2.value <1){
        h1.innerText = "het is te laag"
    } else{
        let answer =input1.value / input2.value;
        h1.innerText= answer
    }
};
function add(){
    if(input1.value <1 && input2.value <1){
        h1.innerText = "het is te laag"
    } else{
        let answer = Number(input1.value) + Number(input2.value);
        h1.innerText= answer
    }
};
function minus(){
    if(input1.value <1 && input2.value <1){
    h1.innerText = "het is te laag"
    } else{
        let answer =input1.value - input2.value;
        h1.innerText= answer
    }
};
