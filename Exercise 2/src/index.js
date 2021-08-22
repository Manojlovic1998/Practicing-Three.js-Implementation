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

// Geometry (1, 1, 1) units
const Geometry = new THREE.BoxGeometry(1, 1, 1);

// Material color 0xff0000
const Material = new THREE.MeshBasicMaterial({"color": 0xff0000});

// Mesh
const Mesh = new THREE.Mesh(Geometry, Material);

// Using Mesh inherited property of Object3D called position to move the object
Mesh.position.x = 2;
// Add Mesh to the Scene using add() method
Scene.add(Mesh);

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