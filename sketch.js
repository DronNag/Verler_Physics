// How many columns and rows?
var cols = 12;
var rows = 12;
var initx=50;
var inity=10;

var wind=0;

// This will be the 2D array
var grid = new Array(cols);
var stick = new Array(cols-1);

var	bounce = 0.9;
var	gravity = 0.12;
var	friction = 0.9;
var nupd=3;

// Width and height of each cell of grid
var w=20;
var h=20;

function setup() {
  createCanvas(400, 400);

  // Making a 2D array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
    if( i < cols){
    stick[i] = new Array(rows-1);
    }
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
      if(j<rows-1){
      stick[i][j] = new Array();
      }
    }
  }
  
  for (var i = 0; i < cols-1; i++) {
    for (var j = 0; j < rows-1; j++) {
      stick[i][j][0]=new Linker(grid[i][j],grid[i+1][j]);
      stick[i][j][0].wd=w;
      stick[i][j][1]=new Linker(grid[i][j],grid[i][j+1]);
      stick[i][j][1].wd=w;
      //stick[i][j][2]=new Linker(grid[i][j],grid[i+1][j+1]);
      //stick[i][j][2].wd=w*sqrt(2);
      //stick[i][j][3]=new Linker(grid[i+1][j],grid[i][j+1]);
      //stick[i][j][3].wd=w*sqrt(2);
      if(i==cols-2 && j!=rows-2){
        stick[i][j][2]=new Linker(grid[i+1][j],grid[i+1][j+1]);
        stick[i][j][2].wd=w;
      }
      if(i!=cols-2 && j==rows-2){
        stick[i][j][2]=new Linker(grid[i][j+1],grid[i+1][j+1]);
        stick[i][j][2].wd=w;
      }
      if(i==cols-2 && j==rows-2){
        stick[i][j][2]=new Linker(grid[i+1][j],grid[i+1][j+1]);
        stick[i][j][2].wd=w;
        stick[i][j][3]=new Linker(grid[i][j+1],grid[i+1][j+1]);
        stick[i][j][3].wd=w;
      }
    }
  }

  grid[0][0].pinned=true;
  grid[11][0].pinned=true;
  //grid[11][11].pinned=true;
  //grid[0][11].pinned=true;
  //grid[5][0].pinned=true;
}

function draw() {
  
  // Draw current state of everything
  background(220);
  //text(trackstick[18],120,100);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].upd(wind);
      grid[i][j].cpt();
    }
  }
  for( var a =0 ; a<nupd ; a++){
  for (var i = 0; i < cols-1; i++) {
    for (var j = 0; j < rows-1; j++) {
      for(k=0;k<stick[i][j].length;k++){
        stick[i][j][k].upd();
      }
    }
  }
}
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(color(0,255,0));
      if(i<cols-1 && j<rows-1){
      for(k=0;k<stick[i][j].length;k++){
        stick[i][j][k].show();
      }
    }
    }
  }
  wind=pow(-1,floor(random(0,2)))*random(0,10)/10;
}