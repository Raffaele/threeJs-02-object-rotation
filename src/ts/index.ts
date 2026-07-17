import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { loadBackground } from './loadBackground';
import { continuouslyRender } from './continuouslyRender';
import { createSun } from './createSun';

const SYSTEM_CENTER = new THREE.Vector3(0, 0, 0);

function setup() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  loadBackground(scene);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.update();

  const sun = createSun(SYSTEM_CENTER);
  scene.add(sun);

  continuouslyRender(() => renderer.render(scene, camera));
}

setup();
