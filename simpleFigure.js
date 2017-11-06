const path = require('path')
let THREE = require('./node_modules/three')
//set the scene size

let WIDTH = 1000;
let HEIGHT = 1000;

// set camera attributes
const VIEW_ANGLE = 90;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Get the DOM element to attach to
const container =
    document.querySelector('#container');

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );

const scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);




// Set up the sphere vars
const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

// Create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
const sphere = new THREE.Mesh(

  new THREE.SphereGeometry(
    RADIUS,
    SEGMENTS,
    RINGS),

  sphereMaterial);

// Move the Sphere back in Z so we
// can see it.
sphere.position.z = -300;

// Finally, add the sphere to the scene.
scene.add(sphere);


// create the sphere's material
const sphereMaterial =
  new THREE.MeshLambertMaterial(
    {
      color: 0xCC0000
    });


// create a point light
const pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

function keyControl(evt) {
    var rotationChanged = true;
	switch (evt.keyCode) {
	    case 37: rotateY -= 0.05; break;        // left arrow
	    case 39: rotateY +=  0.05; break;       // right arrow
	    case 38: rotateX -= 0.05; break;        // up arrow
	    case 40: rotateX += 0.05; break;        // down arrow
	    case 13: rotateX = rotateY = 0; break;  // return
	    case 36: rotateX = rotateY = 0; break;  // home
	    default: rotationChanged = false;
	}
	if (sphere && rotationChanged) {
       sphere.rotation.set(rotateX,rotateY,0);
       render();
	   evt.preventDefault();
	}
}


function update () {
  // Draw!
  renderer.render(scene, camera);
  window.human.rotation.x += window.xrotation;
  window.human.rotation.y += window.yrotation;
  // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);
