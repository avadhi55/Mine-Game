var pc,edges;
var monster1;
var wallGroup, tunnelGroup;
var B1Img,B2Img,B3Img,B4Img,B5Img,B6Img,digger;
var block;
var r ;

function preload (){
  B1Img = loadImage("Images/block.1.png");
  B2Img = loadImage("Images/block.2.png");
  B3Img = loadImage("Images/block.3.png");
  B4Img = loadImage("Images/block.4.png");
  B5Img = loadImage("Images/block.5.png");
  B6Img = loadImage("Images/block.6.png");
  M1Img = loadImage("Images/monster1.png");
  M2Img = loadImage("Images/monster2.png");
  M3Img = loadImage("Images/monster3.png");
  M4Img = loadImage("Images/monster4.png");
  M5Img = loadImage("Images/monster5.png");
  M6Img = loadImage("Images/monster6.png");
  digger= loadImage("Images/DiggerImage.png");
}

function setup() {
  createCanvas(1520,750);
  r = Math.round(random(1,2));
  tunnelGroup = new Group();
  //1 row
  block1 = new Tunnel(257,50,3,"success","silver",2);
  block2 = new Tunnel(480,50,4,"fail",0,0);
  block3 = new Tunnel(703,50,3,"success","silver",0);
  block4 = new Tunnel(926,50,2,"fail",0,0);
  block5 = new Tunnel(1149,50,2,"success","gold",0);
  block6 = new Tunnel(1372,50,5,"fail",0, 0);

  //3 row
  block7 = new Tunnel(50,230,3,"success","silver", 0);
  block8= new Tunnel(257,230,5,"fail",0,0);
  block9 = new Tunnel(480,230,5,"success","gold", 0);
  block10 = new Tunnel(703,230,5,"fail",0,0);
  block11 = new Tunnel(926,230,2,"success","silver",3);
  block12 = new Tunnel(1149,230,3,"fail",0,2);
  block13 = new Tunnel(1372,230,3,"success","gold",6);

  //4 row
  block14 = new Tunnel(50,410,1,"success","silver", 0);
  block15 = new Tunnel(257,410,2,"fail",0,1);
  block16 = new Tunnel(480,410,5,"success","gold", 0);
  block17 = new Tunnel(703,410,5,"fail",0,0);
  block18 = new Tunnel(926,410,3,"fail",0,0);
  block19 = new Tunnel(1149,410,1,"fail","silver", 0);
  block20 = new Tunnel(1372,410,2,"success","silver", 0);
  //5 row
 
  block21 = new Tunnel(50,590,3,"fail",0,0);
  block22 = new Tunnel(257,590,4,"fail",0,0);
  block23 = new Tunnel(480,590,5,"success","silver",4);
  block24 = new Tunnel(926,590,2,"fail",0,0);
  block25 = new Tunnel(703,590,4,"success","gold", 0);
  block26 = new Tunnel(1149,590,2,"success","silver", 0);
  block27 = new Tunnel(1372,590,1,"fail",0,6);
  
  edges = createEdgeSprites();

 
  pc = new Digger();
}

function draw() {
  background(74,20,0); 

  pc.move();
  pc.hit();

  
     

  block1.changeImages();
  block2.changeImages();''
  block3.changeImages();
  block4.changeImages();
  block5.changeImages();
  block6.changeImages();
   
  block7.changeImages();
  block8.changeImages();
  block9.changeImages();
  block10.changeImages();
  block11.changeImages();
  block12.changeImages();
  block13.changeImages();

  block14.changeImages();
  block15.changeImages();
  block16.changeImages();
  block17.changeImages();
  block18.changeImages();
  block19.changeImages();
  block20.changeImages();

  block21.changeImages();
  block22.changeImages();
  block23.changeImages();
  block24.changeImages();
  block25.changeImages();
  block26.changeImages();
  block27.changeImages();
  
  drawSprites();
}