// get the canvas tag using .getElementById() method
const myCanvas = document.getElementById("my-canvas");

// context has all the methods for drawing things
const ctx = myCanvas.getContext("2d");

function drawBackground(){
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, 1000, 500);

    // add some text
    ctx.fillStyle = "green";
    ctx.font = "30px Arial";
    ctx.fillText("Cool game :) ", 800, 50);
}
// drawBackground();

const fireballImg = new Image();
const supermanImg = new Image();

// "src" has has to point as the image is used in HTML file
fireballImg.src = "./images/fireball.png";
supermanImg.src = "./images/superman.png";

let fireballX = 800;
let fireballY = 200;

let supermanX = 0;
let supermanY = 200;


// fireballImg.onload = function(){
//     // ctx.drawImage(whichImage, x, y, width, height);
//     ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);
// }

// supermanImg.onload = function(){
//     // ctx.drawImage(whichImage, x, y, width, height);
//     ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
// }

// move the superman!

document.onkeydown = function(event){
    // console.log(event.keyCode);
    switch(event.keyCode){
        case 37:// left
            supermanX -= 10;
            break;
        case 39: // right
            supermanX += 10;
            break;
        case 38: // up
            supermanY -= 10;
            break; 
        case 40: // down
            supermanY += 10;
            break;
    }

}

// animate the canvas 

function drawingLoop(){
    // erase the whole canvas before drawing everything again

    //            x  y  width height
    //            ^  ^    ^    ^
    //            |  |    |    |
    ctx.clearRect(0, 0, 1000, 500);

    drawBackground();

    // start moving fireball by changing it X coordinate in every loop call
    fireballX -= 5;

    // when the fireball disappears from the canvas
    if(fireballX < -50){
        // set its x again to fireballX=1000
        fireballX = 1000;
        // and for each ball pick random Y in range 0 to 500 (which is height of the canvas)
        fireballY = Math.floor(Math.random() * 500);
    }

    // ctx.drawImage(whichImage, x, y, width, height);
    ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);

    // ctx.drawImage(whichImage, x, y, width, height);
    ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);


    // re-draw the whole sceen
    requestAnimationFrame(function(){
        // sets up a recursive loop (function calls itself multiple times)
        drawingLoop();
    });

}

// call drawingLoop() to start looping (after this point it will recursively call itself)
drawingLoop();
