const button = document.querySelector('.click');
const colors = document.querySelector('.color');
const main = document.querySelector('.main');

button.addEventListener('click',function(){
    const color1 = generateRandom();
    const color2 = generateRandom();
    const color3 = generateRandom();
    const mainColor = `rgb(${color1},${color2},${color3})`;
    main.style.backgroundColor = mainColor;
    colors.textContent = mainColor;
});

function generateRandom(){
    return Math.floor(Math.random()*256)
}