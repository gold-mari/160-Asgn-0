// The rendering context we refer to throughout.
let context = undefined;
// The scalar ALL vectors are multiplied by before drawing,
let zoomScalar = 20;

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
    drawVector(v1, "red");

    let v2 = new Vector3([document.getElementById('v2-x').value, 
                          document.getElementById('v2-y').value, 0]);
    drawVector(v2, "blue");
}

function handleDrawOperationEvent()
{
    clearBackground();

    let v1 = new Vector3([document.getElementById('v1-x').value, 
                          document.getElementById('v1-y').value, 0]);
    drawVector(v1, "red");

    let v2 = new Vector3([document.getElementById('v2-x').value, 
                          document.getElementById('v2-y').value, 0]);
    drawVector(v2, "blue");

    let v3 = undefined, v4 = undefined;
    let scalar = document.getElementById('opScalar').value;
    switch (document.getElementById('opType').value) {
        case "add":
            v3 = v1.add(v2);
            drawVector(v3, "green");
            break;
        case "sub":
            v3 = v1.sub(v2);
            drawVector(v3, "green");
            break;
        case "mul":
            v3 = v1.mul(scalar);
            v4 = v2.mul(scalar);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case "div":
            v3 = v1.div(scalar);
            v4 = v2.div(scalar);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case "mag":
            console.log(`Magnitude v1 = ${v1.magnitude()}`);
            console.log(`Magnitude v2 = ${v2.magnitude()}`);
            break;
        case "norm":
            v3 = v1.normalize();
            v4 = v2.normalize();4
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case "angle":
            console.log(angleBetween(v1, v2));
            break;
        default:
            break;
    }
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
    let vectorCorrected = [center[0]+vector.elements[0]*zoomScalar, center[1]-vector.elements[1]*zoomScalar];

    context.beginPath();
    context.moveTo(center[0], center[1]);
    context.lineTo(vectorCorrected[0], vectorCorrected[1]);
    context.strokeStyle = color;
    context.stroke();
}

function angleBetween(vector1, vector2)
{
    // Note that dot(v1, v2) = v1.magnitude() * v2.magnitude() * cos(alpha).
    // Therefore, cos(alpha) = dot(v1, v2) / (v1.magnitude() * v2.magnitude()).
    // And so: alpha = arccos(dot(v1, v2) / (v1.magnitude() * v2.magnitude())).
    // ================

    let alphaRadians = Math.acos(Vector3.dot(vector1, vector2) / (vector1.magnitude()*vector2.magnitude()));
    // Convert to degrees.
    return alphaRadians * (180 / Math.PI);
}