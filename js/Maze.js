class Maze {
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "Blue";
        wallGroup.add(this.body);
     
    }
    
}    