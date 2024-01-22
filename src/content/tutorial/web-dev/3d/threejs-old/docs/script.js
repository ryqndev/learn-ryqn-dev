import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const controls = new OrbitControls(camera, renderer.domElement);

function createScene() {
	camera.left = window.innerWidth / -2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / -2;
	camera.zoom = 0.02 * window.innerWidth;
	camera.position.set(200, 50, 5);

	renderer.shadowMap.enabled = true;
	renderer.setPixelRatio(window.devicePixelRatio);
	scene.background = null;

	loadGLTF();
// 	const size = 100;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

	// const sunlight = new THREE.DirectionalLight(0xffff00);
	// sunlight.position.set(0, 5, 10);
	// sunlight.intensity = 1;
	// sunlight.castShadow = true;
	// scene.add(sunlight);

	// const underbodyLight = new THREE.DirectionalLight(0xffff00);
	// underbodyLight.position.set(0, -10, 5);
	// underbodyLight.intensity = 2;
	// scene.add(underbodyLight);

	const ambientLight = new THREE.AmbientLight(0xffffff);
	ambientLight.intensity = 0.4;
	scene.add(ambientLight);

	const lamplight1 = new THREE.PointLight(0xffff66);
	lamplight1.position.set(1, 8, 5);
	lamplight1.intensity = 1;
	lamplight1.castShadow = true;
	scene.add(lamplight1);

	const lamplight2 = new THREE.PointLight(0xffff66);
	lamplight2.position.set(1, -10, 500);
	lamplight2.intensity = 1;
	scene.add(lamplight2);

	controls.update();
	camera.updateProjectionMatrix();

}

window.addEventListener('load', event => {
	createScene();
	animate();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
});

window.addEventListener('resize', event => {
	camera.left = window.innerWidth / -2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / -2;
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.updateProjectionMatrix();
});

function animate() {
	requestAnimationFrame(animate);
	scene.rotation.y += 0.001;
	renderer.render(scene, camera);
}

function loadGLTF() {
	const loader = new GLTFLoader();
	loader.load(
		'./assets/island/floating island.gltf',
		// called when the resource is loaded
		function (gltf) {
			// scene.add(gltf.scene);

			const geometry = new THREE.PlaneGeometry( 10, 10 );
			// const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
			// const plane = new THREE.Mesh( geometry, gltf. );
			// scene.add( plane );
		},
		// called while loading is progressing
		function (xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
		},
		console.error
	);
}
