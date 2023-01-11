const objects = [new object(100, 100, "purple", 400, 0), new object(100, 100, "purple", 900, 0)];
var player = objects[0];
function startGame() {
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

function object(width, height, color, x, y, gravity, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.color = color;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.1;
  this.gravitySpeed = 0.1;
  this.bounce = 0;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitCollision();
    }
  this.hitCollision = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        var rockSide = myGameArea.canvas.width - this.width;
        var rock = objects[1];
        if((this.x) == rock.x - rock.width) {
            this.color = "orange";
        }
        if(this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
        if(this.y < 0) {
            this.y = 0;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
  }
    }
    
    document.addEventListener("keydown", function(event) {
  if (event.key == "d") {
      moveObjectByX(5);
  } else if(event.key == "a") {
      moveObjectByX(-5);
  } else if(event.key == " " && player.y == myGameArea.canvas.height - player.height) {
      player.gravity = -0.05;
      player.gravitySpeed = -6;
      setTimeout(function() {player.gravity = 0.45;}, 300);
  } else if(event.key == "5") {
      alert(player.y);
  }
});

document.addEventListener("keyup", function(event) {
 if (event.key == "d" && player.speedX > 0) {
      player.speedX = 0;
  } else if(event.key == "a" && player.speedX < 0) {
      player.speedX = 0;
  }
});

function moveObjectByX(y) {
    player.speedX = 2.5 * y;
}
    
function updateGameArea() {
    myGameArea.clear();
    objects[0].newPos();
    objects[0].update();
    objects[1].newPos();
    objects[1].update();
}
