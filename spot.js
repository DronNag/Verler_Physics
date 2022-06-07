class Spot {
  constructor(i, j) {
    // Location
    this.i = i;
    this.j = j;

    this.vx;
    this.vy;

    this.pinned=false;

    this.currx = i * w + initx;
    this.curry = j * h + inity;

    this.oldx = i * w + initx;
    this.oldy = j * h + inity;

    this.show=function(col){
      fill(col);
     rect(this.currx,this.curry, w, h);
     //noStroke();
    }

    this.upd=function(wind){
      if(this.pinned==false){
      this.vx = (this.currx - this.oldx) * friction;
			this.vy = (this.curry - this.oldy) * friction;

			this.oldx = this.currx;
			this.oldy = this.curry;
			this.currx += this.vx;
			this.curry += this.vy;
			this.curry += gravity;
      this.currx += wind;
    }
    }
    this.cpt=function() {
      if(this.pinned==false){
        if(this.currx > width) {
          this.currx = width;
          this.oldx = this.currx + this.vx * bounce;
        }
        else if(this.currx < 0) {
          this.currx = 0;
          this.oldx = this.currx + this.vx * bounce;
        }
        if(this.curry > height) {
          this.curry = height;
          this.oldy = this.curry + this.vy * bounce;
        }
        else if(this.curry < 0) {
          this.curry = 0;
          this.oldy = this.curry + this.vy * bounce;
        }
      }
    }
  }
}