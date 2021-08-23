import "./style.css";
import * as THREE from 'three';

// Sizes
const sizes = {
    "width": 800,
    "height": 600
};

let canvas = document.getElementById("webgl");

// Scene
const Scene = new THREE.Scene();

// Group
let Group = new THREE.Group();

// Objects
const CubeOne = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({"color": 0xff0000})
);

CubeOne.position.x = 1;

const CubeTwo = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({"color": 0xff0000})
);

CubeTwo.position.x = -1;

Group.add(CubeOne);
Group.add(CubeTwo);

// Add Mesh to the Scene using add() method
Scene.add(Group);

// Axes helper
const AxesHelper = new THREE.AxesHelper();
// Add AxesHelper to the Scene
Scene.add(AxesHelper);


// Camera (field of view z axis, the aspect ratio)
const PerspectiveCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// Position the Camera by changing value of z, y, x property
PerspectiveCamera.position.z = 3;


// Add Camera to the Scene using add() method
Scene.add(PerspectiveCamera);

// Renderer
const Renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

// Set size for the renderer
Renderer.setSize(sizes.width, sizes.height);

// Render the scene
Renderer.render(Scene, PerspectiveCamera);