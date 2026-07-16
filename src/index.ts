import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const universeTextureLoader = new THREE.CubeTextureLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const stars1Url = new URL('./imgs/stars.jpg', import.meta.url).toString();

const scene = new THREE.Scene();
universeTextureLoader.load(
  [stars1Url, stars1Url, stars1Url, stars1Url, stars1Url, stars1Url],
  (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
  },
  undefined, (error) => {
    console.error('Error loading texture:', error);
  });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);


function continuuouslyRender(callback: () => void) {
  callback();
  requestAnimationFrame(() => continuuouslyRender(callback));
}

continuuouslyRender(() => renderer.render(scene, camera));

