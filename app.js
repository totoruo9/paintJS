const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;
ctx.strokStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

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

const onMouseDown = (e) => {
    painting = true;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}