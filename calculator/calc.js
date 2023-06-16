let input = ""

//function 
function showContent(inputs){
    showCaseArea.textContent = inputs;
    tempAnsDisplay.textContent = eval(inputs);
}

function showTemp(){
    if(tempAnsDisplay.style.display == "none"){
        tempAnsDisplay.style.display = "block";
    }
}

//variables
const showCaseArea = document.getElementById('main');
const tempAnsDisplay = document.getElementById('ans');


const numbers=document.querySelectorAll('.num');
const symbols = document.querySelectorAll('.symb');

//script for numbers

numbers.forEach(function(item){
    item.addEventListener('click',function(e){
        // console.log(item.textContent);
        showTemp();
        const value = item.textContent;
        input += value;
        // console.log(input);
        showContent(input);
    })
});

//script for symbols
symbols.forEach(function(item){
    item.addEventListener('click',function(e){
        showTemp();
        const value = item.textContent;
        input+=value;
        showCaseArea.textContent = input;
    })
})

//submit button
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',function(){

    // console.log(tempAnsDisplay.textContent.length);
    if(tempAnsDisplay.textContent.length > 12){
        showCaseArea.style.fontSize = "30px";
    }

    input = tempAnsDisplay.textContent;
    showCaseArea.textContent = tempAnsDisplay.textContent;
    tempAnsDisplay.textContent = showCaseArea.textContent;
    tempAnsDisplay.style.display = "none";
});

//clear buttons
const clear = document.querySelector('.clear')
clear.addEventListener('click',function(){
    input = ''
    showContent(input);
});

//backspace button
const backSpace = document.querySelector('.back');
backSpace.addEventListener('click',function(){
    input = input.slice(0,input.length-1);
    showContent(input);
})