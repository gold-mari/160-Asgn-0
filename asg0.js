let context = undefined;

// DrawRectangle.js
function main()
{
    // Retrieve <canvas> element <- (1)
    const canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG <- (2)
    context = canvas.getContext('2d');
    
    // // Draw a blue rectangle <- (3)
    // context.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
    // context.fillRect(120, 10, 150, 150); // Fill a rectangle with the color

    let v1 = new Vector3([1, 1, 0]);
    
    v1.mul(20);
    drawVector(v1, "red");
}

function drawVector(vector, color)
{
    console.log(vector.elements + ` of the color ${color}`);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(vector.elements[0], vector.elements[1]);
    context.stroke();
}