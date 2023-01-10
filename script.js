
var myGamePiece;
var myGamePiece2;
function startGame() {
    myGamePiece = new component(100, 100, "purple", 600, 0);
    myGamePiece2 = new component(100, 100, "orange", 400, 0);
    myGameArea.start();
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1330;
        this.canvas.height = 625;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.1;
  this.gravitySpeed = 0.1;
  this.bounce = 0;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
  this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
  }
    }
    
    document.addEventListener("keydown", function(event) {
  if (event.key == "d") {
      moveObjectByX(1);
  } else if(event.key == "a") {
      moveObjectByX(-1);
  } else if(event.key == " ") {
      myGamePiece.gravity = -0.05;
      myGamePiece.gravitySpeed = -5;
      setTimeout(function() {myGamePiece.gravity = 0.3;}, 500);
  }
});

document.addEventListener("keyup", function(event) {
 if (event.key == "d") {
      myGamePiece.speedX = 0;
  } else if(event.key == "a") {
      myGamePiece.speedX = 0;
  }
});

function moveObjectByX(y) {
    myGamePiece.speedX = 5 * y;
}
    
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    myGamePiece2.newPos();
}
