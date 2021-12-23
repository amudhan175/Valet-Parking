canvas=document.getElementById("valet_parking");
ctx=canvas.getContext("2d");

carwidth=75;
carheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx=5;
cary=225;

function add() {
	bgimgtag=new Image();
    bgimgtag.onload=uploadBackground;
    bgimgtag.src=background_image;
    carimgtag=new Image();
    carimgtag.onload=uploadgreencar;
    carimgtag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(bgimgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(carimgtag,carx,cary,carwidth,carheight);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary>=0){
        cary=cary-10;
        console.log("up arrow is pressed x="+carx+",y="+cary);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(cary<=500){
        cary=cary+10;
        console.log("down arrow is pressed x="+carx+",y="+cary);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(carx>=0){
        carx=carx-10;
        console.log("left arrow is pressed x="+carx+",y="+cary);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(carx<=700){
        carx=carx+10;
        console.log("right arrow is pressed x="+carx+",y="+cary);
        uploadBackground();
        uploadgreencar();
    }
}
