const colors=['red','blue',"black",'cyan','aqua','magenta','pink','orange','steelblue','purple','firebrick'];

const button=document.querySelector('.click');
const color=document.querySelector('.color');
const main=document.querySelector('.main');

button.addEventListener('click',function(){
    const BackColor = generateRandom();
    main.style.backgroundColor = colors[BackColor];
    color.textContent = colors[BackColor];
})

function generateRandom(){
    return Math.floor(Math.random()*colors.length)
}