class Board{
    constructor(width,height){
        this._width=width;
        this._height=height
        this._matrix=[[]];
    }

    get width(){return this._width;}
    get height(){return this._height;}

    generate(side){
        const columns = Math.floor(this._width/side);
        const row=Math.floor(this._height/side);

    }
}