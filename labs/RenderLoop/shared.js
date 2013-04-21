// Init Variables
var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
var fps = 0, lastUpdate = Date.now(), now = lastUpdate;
var xPos = 160, yPos = 120, xMove = 1, yMove = -1;

// Init context
context.fillStyle = '#eaeaea';
context.font ='32pt Helvetica bold';
context.textBaseline = 'top';

function renderContent() {
  context.clearRect(0, 0, 320, 240);
  context.fillText(fps + ' FPS', xPos, yPos);
  xPos += xMove; yPos += yMove;
  if (xPos < 10 || xPos > 280) { xMove = -xMove; }
  if (yPos < 10 || yPos > 200) { yMove = -yMove; }
}

function updateFPS() {
  fps = Math.floor(1000 / ((now = Date.now()) - lastUpdate));
  lastUpdate = now;
}
