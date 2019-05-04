class Square{
    constructor(x,y,isAlive,side){
        this._x=x;
        this._y=y;
        this._isAlive=isAlive;
        this._side=side;
    }
    get isAlive(){return this._isAlive;}
    set isAlive(x){this._isAlive=x;}
    get x(){return this._x;}
    get y(){return this._y;}
    get side(){return this._side;}

    changeState(){
        this.isAlive=!this.isAlive;
    }
    display(canvasContext){
        if(this._isAlive) canvasContext.fillStyle = 'black';
        else canvasContext.fillStyle = 'white';
        canvasContext.fillRect(this.x, this.y, this.side, this.side);
    }
}