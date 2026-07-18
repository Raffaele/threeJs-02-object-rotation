import * as THREE from 'three';

import { loadBackground } from './loadBackground';
import { continuouslyRender } from './continuouslyRender';
import { createSun } from './createSun';
import { createPlanet } from './createPlanet';

const SYSTEM_CENTER = new THREE.Vector3(0, 0, 0);

function setup() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222255);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 4, 8);
  camera.lookAt(SYSTEM_CENTER);

  const sunLight = new THREE.PointLight(0xffffff, 100, 1000);
  sunLight.position.copy(SYSTEM_CENTER);
  scene.add(sunLight);

  const { support: mercury } = createPlanet(SYSTEM_CENTER, 0.1, 2, 0xaaaaaa);
  scene.add(mercury);

  const { support: venus } = createPlanet(SYSTEM_CENTER, 0.18, 3, 0xffaa00);
  scene.add(venus);

  const { support: earth, planet: earthPlanet } = createPlanet(SYSTEM_CENTER, 0.2, 4, 0x0000ff);
  scene.add(earth);

  const { support: moon } = createPlanet(earth.position, 0.05, 0.4, 0x888888);
  earth.add(moon);

  const { support: mars } = createPlanet(SYSTEM_CENTER, 0.15, 5, 0xff0000);
  scene.add(mars);

  const { support: jupiter } = createPlanet(SYSTEM_CENTER, 0.5, 7, 0xffaa00);
  scene.add(jupiter);

  const { support: saturn } = createPlanet(SYSTEM_CENTER, 0.4, 9, 0xffff00);
  scene.add(saturn);

  const { support: uranus } = createPlanet(SYSTEM_CENTER, 0.3, 11, 0x00ffff);
  scene.add(uranus);

  const { support: neptune } = createPlanet(SYSTEM_CENTER, 0.3, 13, 0xffaaff);
  scene.add(neptune);

  const sun = createSun(SYSTEM_CENTER);
  scene.add(sun);

  continuouslyRender(() => {
    mercury.rotation.y += 0.018;
    venus.rotation.y += 0.01;
    earth.rotation.y += 0.007;
    moon.position.set(earthPlanet.position.x, earthPlanet.position.y, earthPlanet.position.z);
    moon.rotation.y += 0.035;
    mars.rotation.y += 0.005;
    jupiter.rotation.y += 0.002;
    saturn.rotation.y += 0.001;
    uranus.rotation.y += 0.0005;
    neptune.rotation.y += 0.0002;
    renderer.render(scene, camera);
  });
}

setup();
