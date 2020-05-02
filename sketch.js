function setup() {

  //create the canvas
  createCanvas(displayWidth-500, displayHeight - 200);
  //createSprite(400, 200, 50, 50);

  //create the maze boundary
  object1 = createSprite(50, 100, 30, 1200);
  object2 = createSprite(685, 700, 1300, 30);
  object3 = createSprite(1350, 115, 30, 1200);
  object4 = createSprite(685, 10, 1300, 30);


  object5 = createSprite(125, 400, 125, 10);
  object6 = createSprite(550, 125, 10, 200);
  object7 = createSprite(510, 300, 500, 10);
  object8 = createSprite(190, 190, 10, 225);
  object9 = createSprite(240, 80, 100, 10);
  object10 = createSprite(295, 150, 10, 150);
  object11 = createSprite(365, 225, 150, 10);
  object12 = createSprite(440, 150, 10, 150);
  object13 = createSprite(375, 125, 10, 100);
  object14 = createSprite(240, 125, 10, 100);
  object15 = createSprite(265, 340, 10, 75);
  object16 = createSprite(120, 125, 30, 10);
  object17 = createSprite(120, 200, 30, 10);
  object18 = createSprite(120, 275, 30, 10);
  object19 = createSprite(690, 395, 10, 200);
  object20 = createSprite(620, 380, 150, 10);
  object21 = createSprite(550, 420, 10, 75);
  object22 = createSprite(500, 455, 100, 10);
  object23 = createSprite(295, 125, 10, 100);
  object24 = createSprite(445, 500, 10, 100);
  object25 = createSprite(365, 260, 100, 10);
  object26 = createSprite(500, 180, 10, 100);
  object27 = createSprite(230, 550, 150, 10);
  object28 = createSprite(250, 525, 10, 150);
  object29 = createSprite(350, 400, 100, 10);
  object30 = createSprite(300, 635, 150, 10);
  object31 = createSprite(1100, 80, 150, 10);
  object32 = createSprite(1025, 130, 10, 150);
  object33 = createSprite(950, 200, 150, 10);
  object34 = createSprite(880, 270, 10, 150);
  object35 = createSprite(880, 350, 150, 10);
  object36 = createSprite(750, 150, 250, 10);
  object37 = createSprite(750, 80, 150, 10);
  object38 = createSprite(900, 65, 10, 75);
  object39 = createSprite(925, 200, 10, 100);
  object40 = createSprite(1200, 300, 10, 150);
  object41 = createSprite(1200, 150, 150, 10);
  object42 = createSprite(1100, 400, 10, 200);
  object43 = createSprite(1100, 220, 100, 10);
  object44 = createSprite(1000, 300, 100, 10);
  object45 = createSprite(950, 450, 10, 100);
  object46 = createSprite(1200,375,100,10);
  object47 = createSprite(1300,300,75,10);
  object48 = createSprite(1250,65,10,75);
  object49 = createSprite(600,65,10,75);
  object50 = createSprite(700,200,10,100);
  object51 = createSprite(630,250,50,10);
  object52 = createSprite(650,220,10,50);
  object53 = createSprite(800,180,10,50);
  object54 = createSprite(775,250,50,10);
  object55 = createSprite(110,500,10,200);
  object56 = createSprite(775,450,10,150);
  object57 = createSprite(750,575,200,10);
  object58 = createSprite(650,595,10,50);
  object59 = createSprite(850,540,10,75);
  object60 = createSprite(870,430,75,10);
  object61 = createSprite(1025,440,50,10);
  object62 = createSprite(1080,575,230,10);
  object63 = createSprite(1030,545,10,65);
  object64 = createSprite(1190,570,10,100);
  object65 = createSprite(1210,450,100,10);
  object66 = createSprite(1250,570,10,140);
  object67 = createSprite(900,630,300,10);
  object68 = createSprite(520,570,10,100);
  object69 = createSprite(610,470,10,100);


  player = createSprite(100,50,20,20);


  

}

function draw() {

  //clear the background
  background(0);

  object1.shapeColor = "white";
  object2.shapeColor = "white";
  object3.shapeColor = "white";
  object4.shapeColor = "white";

  object5.shapeColor = "yellow";
  object7.shapeColor = "yellow";
  object9.shapeColor = "yellow";
  object11.shapeColor = "yellow";
  object16.shapeColor = "yellow";
  object17.shapeColor = "yellow";
  object18.shapeColor = "yellow";
  object20.shapeColor = "yellow";
  object22.shapeColor = "yellow";
  object25.shapeColor = "yellow";
  object27.shapeColor = "yellow";
  object29.shapeColor = "yellow";
  object30.shapeColor = "yellow";
  object31.shapeColor = "yellow";
  object33.shapeColor = "yellow";
  object35.shapeColor = "yellow";
  object36.shapeColor = "yellow";
  object37.shapeColor = "yellow";
  object41.shapeColor = "yellow";
  object43.shapeColor = "yellow";
  object44.shapeColor = "yellow";
  object46.shapeColor = "yellow";
  object47.shapeColor = "yellow";
  object51.shapeColor = "yellow";
  object54.shapeColor = "yellow";
  object57.shapeColor = "yellow";
  object60.shapeColor = "yellow";
  object61.shapeColor = "yellow";
  object62.shapeColor = "yellow";
  object65.shapeColor = "yellow";
  object67.shapeColor = "yellow";


  object6.shapeColor = "yellow";
  object8.shapeColor = "yellow";
  object10.shapeColor = "yellow";
  object12.shapeColor = "yellow";
  object13.shapeColor = "yellow";
  object14.shapeColor = "yellow";
  object15.shapeColor = "yellow";
  object19.shapeColor = "yellow";
  object21.shapeColor = "yellow";
  object23.shapeColor = "yellow";
  object24.shapeColor = "yellow";
  object26.shapeColor = "yellow";
  object28.shapeColor = "yellow";
  object32.shapeColor = "yellow";
  object34.shapeColor = "yellow";
  object38.shapeColor = "yellow";
  object39.shapeColor = "yellow";
  object40.shapeColor = "yellow";
  object42.shapeColor = "yellow";
  object45.shapeColor = "yellow";
  object48.shapeColor = "yellow";
  object49.shapeColor = "yellow";
  object50.shapeColor = "yellow";
  object52.shapeColor = "yellow";
  object53.shapeColor = "yellow";
  object55.shapeColor = "yellow";
  object56.shapeColor = "yellow";
  object58.shapeColor = "yellow";
  object59.shapeColor = "yellow";
  object63.shapeColor = "yellow";
  object64.shapeColor = "yellow";
  object66.shapeColor = "yellow";
  object68.shapeColor = "yellow";
  object69.shapeColor = "yellow";
  //object6.shapeColor = "yellow";

  player.shapeColor = "blue";


  if (keyDown(LEFT_ARROW)) {
    
    player.velocityX = -3;
    player.velocityY = 0
} else if (keyDown(RIGHT_ARROW)) {
    //player.position(1, 0);
    player.velocityX = 3;
    player.velocityY = 0
} else if (keyDown(UP_ARROW)) {
   // player.position(0, -1);
    player.velocityX = 0;
    player.velocityY = -3;
} else if (keyDown(DOWN_ARROW)) {
    //player.position(0, +1);
    player.velocityX = 0;
    player.velocityY = 3;
}


player.collide(object1);
player.collide(object2);
player.collide(object3);
player.collide(object4);
player.collide(object5);
player.collide(object6);
player.collide(object7);
player.collide(object8);
player.collide(object9);
player.collide(object10);
player.collide(object11);
player.collide(object12);
player.collide(object13);
player.collide(object14);
player.collide(object15);
player.collide(object16);
player.collide(object17);
player.collide(object18);
player.collide(object19);
player.collide(object20);
player.collide(object21);
player.collide(object22);
player.collide(object23);
player.collide(object24);
player.collide(object25);
player.collide(object26);
player.collide(object27);
player.collide(object28);
player.collide(object29);
player.collide(object30);
player.collide(object31);
player.collide(object32);
player.collide(object33);
player.collide(object34);
player.collide(object35);
player.collide(object36);
player.collide(object37);
player.collide(object38);

player.collide(object39);
player.collide(object40);
player.collide(object41);
player.collide(object42);
player.collide(object43);
player.collide(object44);
player.collide(object45);
player.collide(object46);
player.collide(object47);
player.collide(object48);
player.collide(object49);
player.collide(object50);
player.collide(object51);
player.collide(object52);
player.collide(object53);
player.collide(object54);
player.collide(object55);
player.collide(object56);
player.collide(object57);
player.collide(object58);
player.collide(object59);
player.collide(object60);
player.collide(object61);
player.collide(object62);
player.collide(object63);
player.collide(object64);
player.collide(object65);
player.collide(object66);
player.collide(object67);
player.collide(object68);
player.collide(object69);




  
  

  //create draw sprites
  drawSprites();
}