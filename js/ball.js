class Ball {
    constructor(){
        this.location = createVector(width/2, height/2);
        this.velocity = createVector(2, 3);
    }

    display() {
        fill(255);
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    move() {
        this.location.add(this.velocity);
    }

    bounce(){
        if(this.location.x<20 || this.location.x>width-20){
            this.velocity.x = this.velocity.x*-1;
        }
        if(this.location.y<20 || this.location.y>height-20){
            this.velocity.y = this.velocity.y*-1;
        }
    }
}