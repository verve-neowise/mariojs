export default class Object {
    constructor() {
        this._x = 0;
        this._y = 0;
        this.maxX = 0;
        this.maxY = 0;
        this.width = 0;
        this.height = 0;
    }
    set x(value) {
        this._x = value;
        this.maxX = value + this.width;
    }
    set y(value) {
        this._y = value;
        this.maxY = value + this.height;
    }
}
