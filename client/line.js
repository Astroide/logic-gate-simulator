const RADIUS = 15;
export class Line {
    constructor(x1, y1, x2, y2) {
        this.points = [];
        this.parent = document.body;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }

    get color() {
        return this._color || (this.color = 'black');
    }

    set color(value) {
        this._color = value;
        this.update();
    }

    addPoint(x, y) {
        let line = this;
        this.points.push({
            _x: x,
            _y: y,
            get x() {
                return this._x;
            },
            get y() {
                return this._y;
            },
            set x(value) {
                this._x = value;
                line.update();
            },
            set y(value) {
                this._y = value;
                line.update();
            }
        });
        this.update();
    }

    update() {
        if (this.points.length < 2) return;
        console.log('update');
        if (!this.svg) {
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.style.position = 'fixed';
            this.svg.style.top = '0';
            this.svg.style.left = '0';
            this.svg.setAttribute('width', window.innerWidth);
            this.svg.setAttribute('height', window.innerHeight);
            addEventListener('resize', () => {
                this.svg.setAttribute('width', window.innerWidth);
                this.svg.setAttribute('height', window.innerHeight);
            });
            this.parent.appendChild(this.svg);
            this.shouldRebuildSvg = true;
        }
        if (this.shouldRebuildSvg) {
            this.lines = [];
            this.arcs = [];
            for (let i = 0; i < this.points.length - 1; i++) {
                this.lines.push(document.createElementNS('http://www.w3.org/2000/svg', 'line'));
                this.svg.appendChild(this.lines[this.lines.length - 1]);
            }
            for (let i = 1; i < this.points.length - 1; i++) {
                if (i != this.points.length - 1) {
                    this.arcs.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
                    this.svg.appendChild(this.arcs[this.arcs.length - 1]);
                }
            }
            this.shouldRebuildSvg = false;
        }
        if (this.lines.length != this.points.length - 1) {
            this.shouldRebuildSvg = true;
            this.update();
            return;
        }
        for (let i = 0; i < this.points.length - 1; i++) {
            let start = this.points[i];
            let end = this.points[i + 1];
            let angle = Math.atan2(end.y - start.y, end.x - start.x);
            let length = Math.sqrt(Math.pow(end.y - start.y, 2) + Math.pow(end.x - start.x, 2));
            length -= RADIUS;
            let endX = /*i == (this.points.length - 2) ? end.x : */(start.x + length * Math.cos(angle));
            let endY = /*i == (this.points.length - 2) ? end.y : */(start.y + length * Math.sin(angle));
            let startX, startY;
            if (i != 0) {
                let angle = Math.atan2(end.y - start.y, end.x - start.x) + Math.PI;
                let length = Math.sqrt(Math.pow(end.y - start.y, 2) + Math.pow(end.x - start.x, 2));
                length -= RADIUS;
                startX = end.x + length * Math.cos(angle);
                startY = end.y + length * Math.sin(angle);
            } else {
                startX = start.x;
                startY = start.y;
            }
            this.lines[i].setAttribute('x1', startX);
            this.lines[i].setAttribute('y1', startY);
            this.lines[i].setAttribute('x2', endX);
            this.lines[i].setAttribute('y2', endY);
            this.lines[i].setAttribute('stroke', this._color || 'black');
            this.lines[i].setAttribute('stroke-width', '2');
        }
        for (let i = 1; i < this.points.length - 1; i++) {
            this.arcs[i - 1].setAttribute('fill', 'none');
            this.arcs[i - 1].setAttribute('stroke', this._color || 'black');
            let x = this.points[i].x;
            let y = this.points[i].y;
            let radius = RADIUS;
            let startAngle = Math.atan2(this.points[i - 1].y - y, this.points[i - 1].x - x);
            let endAngle = Math.atan2(this.points[i + 1].y - y, this.points[i + 1].x - x);
            let startX = x + radius * Math.cos(startAngle);
            let startY = y + radius * Math.sin(startAngle);
            let endX = x + radius * Math.cos(endAngle);
            let endY = y + radius * Math.sin(endAngle);
            this.arcs[i - 1].setAttribute('d', `M ${startX} ${startY} Q ${x} ${y} ${endX} ${endY}`);
            this.arcs[i - 1].setAttribute('stroke-width', '2');
        }
    }
}