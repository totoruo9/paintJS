const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const startPainting = () => {
    painting = true;
}

const stopPainting = () =>{
    painting = false;
}

const onMouseMove = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

const handleColorClick = (e) => {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

const handleRangeChange = (e) => {
    const size = e.target.value;
    ctx.lineWidth = size;
}

const handleModeClick = (e) => {
    if(filling) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = 'Paint';
    }
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener('click', handleModeClick);
}