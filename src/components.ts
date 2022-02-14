
export interface Position {
    x:          number,
    y:          number
}

export class Bounds {

    x:          number;
    y:          number;
    width:      number;
    height:     number;
    maxX:       number;
    maxY:       number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.maxX = x + width
        this.maxY = y + height
    }

    relocate( {x , y } : Position ) {
        this.x = x
        this.y = y
        this.maxX = x + this.width
        this.maxY = y + this.height
    }

    move({ x , y } : Position ) {
        this.relocate( { 
            x:  this.x + x, 
            y : this.y + y 
        })
    }
}

export interface Options {
    canvas: {
        width: number,
        height: number
    }
}

export interface Component {
    name:       string,
    bounds:      Bounds,
    draw:       (context: CanvasRenderingContext2D) => void,
    update:     (options: Options) => void
}