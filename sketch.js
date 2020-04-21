var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7,stick8,stick9,stick10,stick11,stick12,stick13,stick14,stick15,stick16,stick17,stick18,stick19,stick20,stick21;


function setup() {
  createCanvas(800,400);
   box1= createSprite(400, 375, 50, 50);
   box2= createSprite(300, 375, 50, 50);
   box3= createSprite(500, 375, 50, 50);
    box4=createSprite(600, 375, 50, 50);
   box5= createSprite(100, 375, 50, 50);
   box6=  createSprite(200, 375, 50, 50);
   
   stick1=  createSprite(400, 360, 100, 20);
  stick2= createSprite(300, 360, 100, 20);
  stick3= createSprite(500, 360, 100, 20);
  stick4= createSprite(600, 360, 100, 20);
  stick5= createSprite(100, 360, 100, 20);
  stick6= createSprite(200, 360, 100, 20);
 
 
  box7= createSprite(450, 335, 50, 50);
 box8= createSprite(350, 335, 50, 50);
 box9= createSprite(550, 335, 50, 50);
  box10=createSprite(150, 335, 50, 50);
  box11=createSprite(250, 335, 50, 50);
  
 stick7= createSprite(450, 310, 100, 20);
 stick8= createSprite(350, 310, 100, 20);
 stick9= createSprite(550, 310, 100, 20);
 stick10= createSprite(150, 310, 100, 20);
  stick11=createSprite(250, 310, 100, 20);
  
 box12= createSprite(500, 295, 50, 50);
 box13= createSprite(400, 295, 50, 50);
 box14= createSprite(200, 295, 50, 50);
  box15=createSprite(300, 295, 50, 50);
 
 stick12= createSprite(500, 260, 100, 20);
  stick13=createSprite(400, 260, 100, 20);
  stick14=createSprite(200, 260, 100, 20);
  stick15=createSprite(300, 260, 100, 20);

 box16= createSprite(450, 245, 50, 50);
 box17= createSprite(250, 245, 50, 50);
  box18=createSprite(350, 245, 50, 50);


  
  stick16=createSprite(450, 210, 100, 20);
  stick17=createSprite(250, 210, 100, 20);
  stick18=createSprite(350, 210, 100, 20);



  box19=createSprite(300, 195, 50, 50);
  box20=createSprite(400, 195, 50, 50);

  
 stick19= createSprite(300, 160, 100, 20);
 stick20= createSprite(400, 160, 100, 20);


  box21=createSprite(350, 130, 70, 70);
 
  

}

function draw() {
  background("red");  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
   box21.display();
   stick1.display();
   stick2.display();
   stick3.display();
   stick4.display();
   stick5.display();
   stick6.display();
   stick7.display();
   stick8.display();
   stick9.display();
   stick10.display();
   stick11.display();
   stick12.display();
   stick13.display();
   stick14.display();
   stick15.display();
   stick16.display();
   stick17.display();
   stick18.display();
   stick19.display();
   stick20.display();
   stick2s1.display();
  drawSprites();
}