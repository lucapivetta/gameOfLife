class Board {
 constructor(width, height) {
  this._width = width;
  this._height = height
  this._matrix = [];
 }

 get width() {
  return this._width;
 }
 get height() {
  return this._height;
 }
 get matrix() {
  return this._matrix;
 }

 generate(side) {
  const columns = Math.floor(this._width / side);
  const row = Math.floor(this._height / side);
  for (let i = 0; i < columns; i++) {
   this.matrix[i] = [];
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
   canvasContext.lineTo(i, canvas.height);
  }

  canvasContext.stroke();
 }

 changeSquareState(obj, side) {
  this.matrix[Math.trunc(obj.x / side)][Math.trunc(obj.y / side)].changeState();
 }

 gameOfLife(side) {
  let matrixBuffer=this.chargeMatrix(side);
 
 const columns = Math.floor(this._width / side);
  const row = Math.floor(this._height / side);
  
  for (let i = 0; i < columns; i++) {
   for (let j = 0; j < row; j++) {
    let num = this.cellAlive(i, j);
    if ((this.matrix[i][j].isAlive) && num < 2) {
     matrixBuffer[i][j]=! matrixBuffer[i][j];
    } else if ((this.matrix[i][j].isAlive) && (num >= 2 || num <= 3)) {} else if ((this.matrix[i][j].isAlive) && num > 3) {
     matrixBuffer[i][j]=! matrixBuffer[i][j];
    } else if ((!this.matrix[i][j].isAlive) && num === 3) {
     matrixBuffer[i][j]=! matrixBuffer[i][j];
    }

   }
  }
  for (let i = 0; i < columns; i++) {
   for (let j = 0; j < row; j++) {
   this.matrix[i][j].isAlive=matrixBuffer[i][j];
	}
   }
 }
 
 chargeMatrix(side){
 let matrixBff=[];
	const columns = Math.floor(this._width / side);
  const row = Math.floor(this._height / side);
  for(let i = 0; i < columns;i++)
	matrixBff[i]=[];
  for (let i = 0; i < columns; i++) 
   for (let j = 0; j < row; j++) 
    matrixBff[i][j] = this.matrix[i][j].isAlive;
	
return matrixBff;
 }
 cellAlive(x, y) {
  let counter = 0;
  for (let i = x - 1; i <= x + 1; i++) {
   for (let j = y - 1; j <= y + 1; j++) {
    try {
	
     if (this.matrix[i][j].isAlive)
      counter++;
    } catch (error) {
	 if(error instanceof RangeError)
		console.log("error");
    }
   }
  }
  if(this.matrix[x][y].isAlive)
	counter--;
  return counter;
 }
}