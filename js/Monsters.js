class Monster {
    constructor(x,y,type){
        this.body = createSprite(x,y,20,20);
        this.type = type;
        this.hearts = 0;
        this.image = M1Img;
        
    }

   move (){
       //this.body.bounceOff(wallGroup);
   } 

   changeImages2(){


       switch(this.type){
            case 1: this.image = M1Img;
                    this.body.scale = 0.5;
                    this.hearts = 1;
                    break;
            case 2: this.image = M2Img;
                    this.body.scale = 0.5;
                    this.hearts = 2;
                    break;
            case 3: this.image = M3Img;
                    this.body.scale = 0.5;
                    this.hearts = 3;
                    break;
            case 4: this.image = M4Img;
                    this.body.scale = 0.5;
                    this.hearts = 4;
                    break;    
            case 5: this.image = M5Img;
                    this.body.scale = 0.5;
                    this.hearts = 5;
                    break;    
            case 6: this.image = M6Img;
                    this.body.scale = 0.5;
                    this.hearts = 6;
                    break;    
       }
       this.body.addImage(this.image);


       
       fill("red");
       rect(this.body.x,this.body.y-100,this.hearts,10); 
       

   }

   killingMonster(){
          
   }
}