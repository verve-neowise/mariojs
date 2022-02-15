export class Bounds {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxX = x + width;
        this.maxY = y + height;
    }
    set xPosition(value) {
        this.x = value;
        this.maxX = value + this.width;
    }
    set yPosition(value) {
        this.y = value;
        this.maxY = value + this.height;
    }
    relocate({ x, y }) {
        this.x = x;
        this.y = y;
        this.maxX = x + this.width;
        this.maxY = y + this.height;
    }
    move({ x, y }) {
        this.relocate({
            x: this.x + x,
            y: this.y + y
        });
    }
}
