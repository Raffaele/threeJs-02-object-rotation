import * as THREE from 'three';

export function createSun(position: THREE.Vector3): THREE.Mesh {
  const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.position.copy(position);

  return sun;
}