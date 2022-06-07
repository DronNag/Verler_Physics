class Linker {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        this.wd;
        
        this.show = function () {
            strokeWeight = 6;
           line(this.first.currx, this.first.curry, this.second.currx, this.second.curry);
        }
        this.upd = function () {
           this.dx=(this.second.currx-this.first.currx);
            this.dy=(this.second.curry-this.first.curry);
            this.distance = dist(this.first.currx,this.first.curry,this.second.currx,this.second.curry);
            
            this.diff = (this.wd - this.distance);
            //if(distance != 0){
            this.percent = this.diff /abs(this.distance);
            //}

            this.offsetX = this.dx * this.percent/2;
            this.offsetY = this.dy * this.percent/2;

            if(this.first.pinned==false){
            this.first.currx -= this.offsetX;
			this.first.curry -= this.offsetY;
            }

            if(this.second.pinned==false){
			this.second.currx += this.offsetX;
			this.second.curry += this.offsetY;
            }
            
        }
    }
}