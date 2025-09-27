const cBtn = document.getElementById("lang");

const consol = document.getElementById("cmd");
const banner = document.getElementById("banner");

const box = document.getElementById("cmd-box");

cBtn.addEventListener('click', toggleConsole);

let cmdOpen = false;

function toggleConsole() {
    if (cmdOpen) {
        consol.style.display = "none";
        banner.style.display = "block";
    } else {
        consol.style.display = "block";
        banner.style.display = "none";
        box.focus();
    }
    cmdOpen = !cmdOpen;
}

box.addEventListener("keyup", handleCmd)

function handleCmd(event) {
    if (event.key === "Enter") {
        parseCmd(box.value.trim());
        box.value = "";
    }
}

function parseCmd(text) {
    if (text === "draw") {
        toggleDraw();
    }
} 


// draw

// const drawBtn = document.getElementById('toggleDrawBtn');
const canvas = document.getElementById('drawCanvas');
let drawing = false;
let ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function getPointerPos(e) {
  // Support both touch and mouse
  if (e.touches) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}

// Drawing handlers
function startDrawing(e) {
  if (canvas.style.display === 'none') return;
  drawing = true;
  const p = getPointerPos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.lineCap = 'round';
  e.preventDefault();
}

function draw(e) {
  if (!drawing) return;
  const p = getPointerPos(e);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  e.preventDefault();
}

function stopDrawing() {
  if (!drawing) return;
  drawing = false;
  ctx.closePath();
}

// Enable drawing only when active
function enableDrawing() {
  canvas.style.display = '';
  canvas.style.pointerEvents = 'auto';
}

function disableDrawing() {
  canvas.style.display = 'none';
  canvas.style.pointerEvents = 'none';
}

let active = false;

function toggleDraw() {
  active = !active;
  if (active) enableDrawing();
  else disableDrawing();
}

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Touch events
canvas.addEventListener('touchstart', startDrawing, {passive: false});
canvas.addEventListener('touchmove', draw, {passive: false});
canvas.addEventListener('touchend', stopDrawing);