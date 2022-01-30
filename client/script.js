import { strings } from './languages.js';
document.title = strings.title;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let screen = 'start';

function redraw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#282828';
    ctx.fillRect(0, 0, width, height);
    if (screen == 'start') {
        ctx.fillStyle = '#fff';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(strings.title, width / 2, height * 0.3);
    }
}

addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    redraw();
});

function updateScreen() {
    redraw();
    requestAnimationFrame(updateScreen);
}

updateScreen();