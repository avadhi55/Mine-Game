class Tunnel {
    constructor(x,y, health,outcome,prize,monster){
        this.body = createSprite(x,y,20,20);
        this.health = health;
        this.outcome = outcome;
        this.prize = prize;
        this.monster = monster;
        this.image = B1Img;
        this.hits = 0;
        this.body.addImage(this.image);
        this.body.scale= 0.6;
        this.score = 0;
        tunnelGroup.add(this.body);

    }
    

    changeImages(){

        this.body.addImage(this.image);
            
        if(pc.body.isTouching(this.body)){
            console.log("Health in tunnel.js: "+this.health)
        }

       /*fill("red");
        textSize(30);
        text("Score:"+this.score,120,690);*/


        switch(this.health){
            case 1: switch(this.hits){
                        case 0: break;
                        case 1: this.outcomeSwitch();
                                this.monsterSwitch();
                                break;
                    }
                    break;
            case 2: switch(this.hits){
                    case 0: break;
                    case 1: this.monsterSwitch();
                            this.middleImages();
                            break; 
                    case 2: this.outcomeSwitch();
                            break;
                    }   
                    break;

            case 3: switch(this.hits){
                    case 0: break;
                    case 1: this.middleImages();
                            break;                          
                    case 2: this.monsterSwitch();
                            break;                          
                    case 3: this.outcomeSwitch();
                            break
                    }   
                    break; 
                        
            case 4: switch(this.hits){
                    case 0: break;
                    case 1: this.middleImages();
                            break;
                    case 2: this.monsterSwitch();
                            break; 
                    case 3: this.middleImages();        
                    case 4: this.outcomeSwitch();
                            break;
                    }   
                    break; 
        } //End of switch(this.health)

        if((keyWentDown("h")||keyWentDown("H"))&& pc.body.isTouching(this.body)){
            //this.health--;
            this.hits++;
        }
       

       
    } //End of changeImages()

    outcomeSwitch(){
        switch(this.outcome){
            case "fail":this.image = B4Img;
                        break;
            case "success": switch (this.prize){
                                case "gold":this.image = B5Img;
                                            this.score++;
                                            break;
                                case "silver":this.image = B2Img;
                                              this.score++;
                                            break;
                            }
        }

    }
    
    
    monsterSwitch(){
        switch (this.monster){
            case 0: break;
            case 1 : monster1 = new Monster(this.body.x - 10,this.body.y,1);
                     monster1.changeImages2();
                     break;
            case 2 : monster2 = new Monster(this.body.x -10,this.body.y,2);
                     monster2.changeImages2();
                     break; 
            case 3 : monster3 = new Monster(this.body.x -10,this.body.y,3);
                     monster3.changeImages2();
                     break;
            case 4 : monster4 = new Monster(this.body.x -10,this.body.y,4);
                     monster4.changeImages2();
                     break;
            case 5 : monster5 = new Monster(this.body.x -10,this.body.y,5);
                     monster5.changeImages2();
                     break;
            case 6 : monster6 = new Monster(this.body.x -10,this.body.y,6);
                     monster6.changeImages2();
                     break;       
        }
    }

    //Image we get before the final image
    middleImages(){
        switch(r){
            case 1: this.image = B3Img;
                    break;
            case 2: this.image = B6Img;
                    break;
        } 
    }
    
}    