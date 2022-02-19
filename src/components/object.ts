export default class Object {

    name: string = ""

    private _x: number = 0
    private _y: number = 0

    maxX: number = 0
    maxY: number = 0

    width: number = 0
    height: number = 0

    velocity = {
        x: 0,
        y: 0
    }

    set x (value: number) {
        this._x = value
        this.maxX = value + this.width
    }
    
    get x (): number {
        return this._x
    }

    set y (value: number) {
        this._y = value
        this.maxY = value + this.height
    }

    get y (): number {
        return this._y
    }
}