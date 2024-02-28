const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create an empty array to store the shapes
const shapes = [];

// Add an event listener for the mousedown event
canvas.addEventListener('mousedown', function (e) {
  // Start drawing a new shape
  const shape = {
    type: 'rectangle', // or 'polygon'
    startX: e.offsetX,
    startY: e.offsetY,
    points: [],
  };

  // Add the new shape to the shapes array
  shapes.push(shape);
});

// Add an event listener for the mousemove event
canvas.addEventListener('mousemove', function (e) {
  // If we're currently drawing a shape, update its points
  if (shapes.length > 0) {
    const shape = shapes[shapes.length - 1];
    shape.points.push({ x: e.offsetX, y: e.offsetY });
  }
});

// Add an event listener for the mouseup event
canvas.addEventListener('mouseup', function (e) {
  // If we're currently drawing a shape, finish it
  if (shapes.length > 0) {
    const shape = shapes[shapes.length - 1];
    shape.points.push({ x: e.offsetX, y: e.offsetY });

    // Draw the shape on the canvas
    drawShape(shape);
  }
});

// Draw a shape on the canvas
function drawShape(shape) {
  ctx.beginPath();

  if (shape.type === 'rectangle') {
    ctx.rect(
      shape.startX,
      shape.startY,
      shape.points[shape.points.length - 1].x - shape.startX,
      shape.points[shape.points.length - 1].y - shape.startY
    );
  } else if (shape.type === 'polygon') {
    for (let i = 0; i < shape.points.length; i++) {
      ctx.lineTo(shape.points[i].x, shape.points[i].y);
    }
    ctx.closePath();
  }

  ctx.fill();
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function showData(){
  console.log(shapes, "test");
}
// Add an event listener for the clear button
/*document.getElementById('clearButton').addEventListener('click', function () {
  clearCanvas();
  shapes = [];
});
*/
document.getElementById('showButton').addEventListener('click', function(){
  showData();
})
