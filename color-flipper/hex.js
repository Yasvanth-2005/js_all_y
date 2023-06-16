
const assests = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const button = document.querySelector('.click');
const colors = document.querySelector('.color');
const main = document.querySelector('.main');

button.addEventListener('click',function(){
    let color='#';
    let i=0;
    while (i<6){
        color+=assests[randomAssest()];
        i+=1;
    }
    main.style.backgroundColor = color;
    colors.textContent = color;
});

function randomAssest(){
    return Math.floor(Math.random()*assests.length);
}
