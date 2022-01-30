import { strings } from './languages.js';
import { Line } from './line.js';
document.title = strings.title;
const line = new Line(10, 10, 100, 100);
line.addPoint(0, 0);
line.addPoint(100, 100);
line.addPoint(100, 200);
line.addPoint(300, 500);
addEventListener('mousemove', e => {
    line.points[4].x = e.clientX;
    line.points[4].y = e.clientY;
    line.color = e.clientX > window.innerWidth / 2 ? 'red' : 'blue';
});