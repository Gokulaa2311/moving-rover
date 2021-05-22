canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_img_array=["nasa_img_1.jpg", "nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
rover_X=10;
rover_Y=10;
background_image=nasa_mars_img_array[random_number];
console.log("background_image="+ background_image);
rover_image="rover.png";


function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadRover;
rover_imgTag.src=rover_image;

}

function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="38"){
up();
console.log("up");

}

if(keypressed=="40"){
    down();
    console.log("down");
    
}

if(keypressed=="37"){
    left();
    console.log("left");
    
}

if(keypressed=="39"){
    right();
    console.log("right");
    
}
     
    

}


function up(){
  if(rover_Y >=0){
      rover_Y=rover_Y-10;
      console.log("when up arrow is pressed, X="+ rover_X + "| Y="+ rover_Y);
      uploadBackground();
      uploadRover(); 
  }

}

function down(){
    if(rover_Y <= 500){
        rover_Y=rover_Y+10;
        console.log("when up arrow is pressed, X="+ rover_X + "| Y="+ rover_Y);
        uploadBackground();
        uploadRover(); 
    }
  
  }

  function left(){
    if(rover_X >=0){
        rover_X=rover_X-10;
        console.log("when up arrow is pressed, X="+ rover_X + "| Y="+ rover_Y);
        uploadBackground();
        uploadRover(); 
    }
  
  }

  function right(){
    if(rover_X <=700){
        rover_X=rover_X+10;
        console.log("when up arrow is pressed, X="+ rover_X + "| Y="+ rover_Y);
        uploadBackground();
        uploadRover(); 
    }
  
  }