class shape {
    constructor(_Length) {
        this._Length = _Length;
    }
    calculateArea() {}
    calculateParameter() {}
}

class rectangle extends shape {
    constructor(_Length, _Width) {
        super(_Length);
        this._Width = _Width;
    }
    calculateParameter() {
        return ((this._Length + this._Width) * 2);
    }
    calculateArea() {
        return (this._Length * this._Width);
    }
    toString() {
        console.log(`The Area of rectangle is ${this.calculateArea()} The Parameter ${this.calculateParameter()} `)
    }
}

class square extends shape {
    constructor(_Length) {
        super(_Length);
    }
    calculateParameter() {
        return (this._Length * 4);
    }
    calculateArea() {
        return (this._Length * this._Length);
    }
    toString() {
        console.log(`The Area of square is ${this.calculateArea()} The Parameter ${this.calculateParameter()} `)
    }
}

class circle extends shape {
    constructor(_Length) {
        super(_Length);
    }
    calculateArea() {
        return (Math.PI * this._Length * this._Length);
    }
    calculateParameter() {
        return (2 * Math.PI * this._Length);
    }
    toString() {
        console.log(`The Area of circle is ${this.calculateArea()} The Parameter ${this.calculateParameter()} `)
    }
}

export {
    circle,
    square,
    rectangle
}