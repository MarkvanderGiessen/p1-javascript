document.getElementById("button");
console.log(document.getElementById("button"));
let button =document.getElementById("text");
console.log(button);
let count = 0;
count = count + 1;
function counter() 
{ count += 1
    console.log(count)
    button.innerText = count + " keer op geklikt"
    document.body.style.backgroundColor = "blue"
}
function counter2() 
{ count -= 1
    console.log(count)
    button.innerText = count + " keer op geklikt"
    document.body.style.backgroundColor = "red"
}
