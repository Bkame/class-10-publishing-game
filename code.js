var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(200, 100,400,5);
var boundary2 = createSprite(200, 240,400,5);

var ep = createSprite(380, 170,60,140);
ep.shapeColor='yellow'

var sp = createSprite(20, 170,60,140);
sp.shapeColor='lightblue'

var sam = createSprite(20, 180,20,20);
sam.shapeColor='green'

var car1 = createSprite(100, 110,10,10);
car1.shapeColor='red'
var car2 = createSprite(170, 110,10,10);
car2.shapeColor='red'
var car3 = createSprite(250, 110,10,10);
car3.shapeColor='red'
var car4 = createSprite(330, 110,10,10);
car4.shapeColor='red'
var car5 = createSprite(80, 220,10,10);
car5.shapeColor='red'
var car6 = createSprite(150, 220,10,10);
car6.shapeColor='red'
var car7 = createSprite(230, 220,10,10);
car7.shapeColor='red'
var car8 = createSprite(310, 220,10,10);
car8.shapeColor='red'

car1.velocityY=3
car2.velocityY=3
car3.velocityY=3
car4.velocityY=3

car5.velocityY=-3
car6.velocityY=-3
car7.velocityY=-3
car8.velocityY=-3

var lives=0  ;
playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3", true);

var edges
function draw() {
background("white");
drawSprites();
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
car5.bounceOff(boundary1);
car5.bounceOff(boundary2);
car6.bounceOff(boundary1);
car6.bounceOff(boundary2);
car7.bounceOff(boundary1);
car7.bounceOff(boundary2);
car8.bounceOff(boundary1);
car8.bounceOff(boundary2);
textSize(25);

text("lives= "+lives, 15, 390);

if (keyDown("left")) {
  sam.x-=5
  
}
if (keyDown("right")) {
  sam.x+=5
  
}
edges=createEdgeSprites();

sam.collide(edges);
if (sam.isTouching(car1) ||sam.isTouching(car2) || sam.isTouching(car3) || 
sam.isTouching(car4) || sam.isTouching(car5) || sam.isTouching(car6) || sam.isTouching(car7) || sam.isTouching(car8)) {
sam.x=20
 sam.y=180 
 lives+=1
}

if (sam.isTouching(ep)) {
 sam.setVelocity(0,0)
textSize(35);
text("sam won the game", 50, 50);
 
 
}



}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
