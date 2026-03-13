function toggleTheme(){

document.body.classList.toggle("light")

}


const text = "Frontend Web Developer";

let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();