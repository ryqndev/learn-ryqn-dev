import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff); // soft white light
scene.add(light);

const light2 = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
scene.add(light2);

camera.position.y = 10;
camera.position.x = 30;
camera.position.z = 20;

const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
    // resource URL
    "assets/island/floating island.gltf",
    // called when the resource is loaded
    function (gltf) {
        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
        console.log("An error happened", error);
    }
);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
