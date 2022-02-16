export default class Object {

    private _x: number = 0
    private _y: number = 0

    private maxX: number = 0
    private maxY: number = 0

    width: number = 0
    height: number = 0

    set x (value: number) {
        this._x = value
        this.maxX = value + this.width
    }

    set y (value: number) {
        this._y = value
        this.maxY = value + this.height
    }
}