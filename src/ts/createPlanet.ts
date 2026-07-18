import * as THREE from 'three';

export function createPlanet(rotationCenter: THREE.Vector3, radius: number, distanceFromCenter: number, color: THREE.ColorRepresentation): { support: THREE.Object3D, planet: THREE.Mesh } {
  const planetSupport = new THREE.Object3D();

  const planetGeometry = new THREE.SphereGeometry(radius, 32, 32);
  const planetMaterial = new THREE.MeshStandardMaterial({ color });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  planet.position.set(rotationCenter.x + distanceFromCenter, rotationCenter.y, rotationCenter.z);
  planetSupport.add(planet);
  planetSupport.rotation.y = Math.random() * Math.PI * 2;

  return { support: planetSupport, planet };
}