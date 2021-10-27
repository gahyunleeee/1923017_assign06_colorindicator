let myvector ;
let gravityx = 0.5;
let gravityy = 0.1;

function setup() {
  createCanvas(800, 500);
  myvector = new myClass () ;

}

function draw() {
  background(230,195,204,40);
  gravity01 = createVector(gravityx, gravityy);
  myvector.addForce(gravity01);

  stroke (217,230,158);
  strokeWeight(5);
  line(myvector.pos.x, myvector.pos.y, mouseX, mouseY);

  myvector.update();
  myvector.show();

  // let print01 = print ('color code is '+int(myvector.pos.x/2)+', ' +      int(myvector.pos.y/2) + ', ' + int(myvector.pos.x/4));
  textSize (20);
  fill(0);
  textAlign(CENTER);
  text ('color code is ' + int(myvector.pos.x/2)+', ' + int(myvector.pos.y/2) + ', ' + int(myvector.pos.x/4),145,30);

  stroke(5);
  strokeCap(SQUARE);
  line (20,40,270,40);
}

function keyPressed () {
  if(keyCode === 65) { //'A'left
    gravityx = - 0.5;
    gravityy = 0;
  }
  if(keyCode === 87) { //'W'up
    gravityx = 0;
    gravityy = -0.5;
  }
    if(keyCode === 68) { //'D'left
    gravityx = 0.5 ;
    gravityy = 0 ;
  }
    if(keyCode === 83) { //'S'down
    gravityx = 0;
    gravityy = 0.5;
  }
    if(keyCode === 32) { //'space' reset
    gravityx = 0.5;
    gravityy = 0.1;
  }

  if(keyCode === 78) { //'n' new background
      let red01 = random(0,255);
      let green01 = random(0,255);
      let blue01 = random(0,255);
     background(red01,green01,blue01);

    }
    if(keyCode === 82) { //'r' reset
       background(230,195,204);
     }


}
