function setup() {
    // Create a canvas and attach it to the 'canvas-container' div
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background(255); // Set background to white
}

function draw() {
    // Draw only when the mouse is pressed
    if (mouseIsPressed) {
        fill(0); // Set fill color for drawing
        noStroke(); // No outline
        ellipse(mouseX, mouseY, 20, 20); // Draw an ellipse at the mouse position
    }
}
