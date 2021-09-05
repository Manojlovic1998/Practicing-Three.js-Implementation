import "./style.css";
import * as THREE from "three";
import gsap from 'gsap';


// Sizes
const sizes = {
    "width": 800,
    "height": 600,
};

// Canvas
const canvas = document.getElementById("webgl");

// Scene
const Scene = new THREE.Scene();

// Object
const Geometry = new THREE.BoxGeometry(1, 1, 1);
const Material = new THREE.MeshBasicMaterial({color: 0xff0000});
const Mesh = new THREE.Mesh(Geometry, Material);
Scene.add(Mesh);

// Camera
const PerspectiveCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
PerspectiveCamera.position.z = 3;

Scene.add(PerspectiveCamera);

// Renderer Initiated
const Renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

Renderer.setSize(sizes.width, sizes.height);

// // Clock
// const Clock = new THREE.Clock();

gsap.to(Mesh.position, {duration: 1, delay: 1, x: 2});
gsap.to(Mesh.position, {duration: 1, delay: 2, x: 0});

// Animations
/* This is a request animation frame function
* What it does is that it generates scene for each frame
* It is called once per frame */
function animationFrame() {
    // // Clock
    // let elapsedTime = Clock.getElapsedTime();
    // // Update Object
    // Mesh.rotation.y = elapsedTime;
    // Mesh.position.y = Math.sin(elapsedTime);
    // Mesh.position.x = Math.cos(elapsedTime);

    // Render
    Renderer.render(Scene, PerspectiveCamera);
    window.requestAnimationFrame(animationFrame);
}

animationFrame();