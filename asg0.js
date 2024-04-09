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

    handleDrawEvent();
}

function handleDrawEvent()
{
    clearBackground();

    let v1 = new Vector3([document.getElementById('v1-x').value, 
                          document.getElementById('v1-y').value, 0]);
    v1.mul(20);
    drawVector(v1, "red");
}

function clearBackground()
{
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "black";
    context.fill();
}

function drawVector(vector, color)
{
    let center = [context.canvas.width/2, context.canvas.height/2];
    let vectorCorrected = [center[0]+vector.elements[0], center[1]-vector.elements[1]];

    context.beginPath();
    context.moveTo(center[0], center[1]);
    context.lineTo(vectorCorrected[0], vectorCorrected[1]);
    context.strokeStyle = color;
    context.stroke();
}