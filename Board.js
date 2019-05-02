class Board {
    constructor(width, height) {
        this._width = width;
        this._height = height
        this._matrix = [];
    }

    get width() { return this._width; }
    get height() { return this._height; }
    get matrix() { return this._matrix; }

    generate(side) {
        const columns = Math.floor(this._width / side);
        const row = Math.floor(this._height / side);
        console.log(this.matrix);
        for (let i = 0; i < columns; i++) {
            this.matrix[i]=[];
            for (let j = 0; j < row; j++) {
                this.matrix[i][j] = new Square((i * side), (j * side), false, side);
            }
        }

    }

    display(canvas, canvasContext, side) {
        const columns = Math.floor(this._width / side);
        const row = Math.floor(this._height / side);

        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < columns; i++)
            for (let j = 0; j < row; j++)
                this.matrix[i][j].display(canvasContext);

        this.drawGrid(canvas, canvasContext, side);
    }

    drawGrid(canvas, canvasContext, side) {
        canvasContext.strokeStyle = 'black';
        for (let i = 0; i <= canvas.height; i += side) {
            canvasContext.moveTo(0, i);
            canvasContext.lineTo(canvas.width, i);
        }
        for (let i = 0; i <= canvas.width; i += side) {
            canvasContext.moveTo(i, 0);
            canvasContext.lineTo(i, canvas.height)
        }

        canvasContext.stroke();
    }
}