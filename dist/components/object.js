export default class Object {
    constructor() {
        this.name = "";
        this._x = 0;
        this._y = 0;
        this.maxX = 0;
        this.maxY = 0;
        this.width = 0;
        this.height = 0;
        this.velocity = {
            x: 0,
            y: 0
        };
    }
    set x(value) {
        this._x = value;
        this.maxX = value + this.width;
    }
    get x() {
        return this._x;
    }
    set y(value) {
        this._y = value;
        this.maxY = value + this.height;
    }
    get y() {
        return this._y;
    }
}
