import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SSV() {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(4, 1, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.69;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 15, 10);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    const spotLight2 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight2.position.set(-25, 15, 0);
    spotLight2.castShadow = true;
    spotLight2.shadow.bias = -0.0001;
    scene.add(spotLight2);

    const spotLight3 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight3.position.set(25, 15, 0);
    spotLight3.castShadow = true;
    spotLight3.shadow.bias = -0.0001;
    scene.add(spotLight3);

    const spotLight4 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight4.position.set(0, 0, -25);
    spotLight4.castShadow = true;
    spotLight4.shadow.bias = -0.0001;
    scene.add(spotLight4);

    const spotLight5 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight5.position.set(0, 0, 25);
    spotLight5.castShadow = true;
    spotLight5.shadow.bias = -0.0001;
    scene.add(spotLight5);

    const loader = new GLTFLoader().setPath("/SS3/");
    loader.load(
      "scene.gltf",
      (gltf) => {
        const mesh = gltf.scene;

        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        mesh.position.set(0, 0, -1);
        scene.add(mesh);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      // Clean up
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}
