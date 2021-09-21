class Digger {
    constructor(){
        this.body = createSprite(50,45,50,50);
        this.body.shapeColor = "yellow";
        this.body.addImage(digger);
        this.body.scale = 0.15;
        
    }

    move (){
            if(keyDown(RIGHT_ARROW)){
                this.body.x += 5;
            }

            else if(keyDown(LEFT_ARROW)){
                this.body.x -= 5;
            }

           else if(keyDown(UP_ARROW)){
                this.body.y -= 5;
            }

           else if(keyDown(DOWN_ARROW)){
                this.body.y += 5;
            }

            this.body.collide(edges);
    }  

    hit (){
        
       if(keyWentDown("space") && this.body.isTouching(monster1.body)){
           monster1.health--;
       }

    }
}

//health of monster will decrease 