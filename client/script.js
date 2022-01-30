import { strings } from './languages.js';
import { Line } from './line.js';
document.title = strings.title;
const line = new Line(-1000, -1000, 0, 0);
line.addPoint(0, 0);
addEventListener('mousemove', e => {
    line.points[line.points.length - 1].x = e.clientX;
    line.points[line.points.length - 1].y = e.clientY;
});
addEventListener('mousedown', e => {
    line.addPoint(e.clientX, e.clientY);
});