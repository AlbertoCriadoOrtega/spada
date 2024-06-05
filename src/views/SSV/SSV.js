import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/*
 * componente del modelos 3D
 */
const SSV = () => {
  /*
   * animacion de la escena
   */
  useEffect(() => {
    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Tamaño de la ventana del navegador
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Capas de sombra
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Crear la escena
    document.body.appendChild(renderer.domElement);

    // Crear la cámara
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(4, 1, 7);

    // Control de la camara
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

    // Crear el suelo
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
    });

    //crear textura
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Crear la luz
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 15, 10);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // Crear la luz
    const spotLight2 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight2.position.set(-25, 15, 0);
    spotLight2.castShadow = true;
    spotLight2.shadow.bias = -0.0001;
    scene.add(spotLight2);

    // Crear la luz
    const spotLight3 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight3.position.set(25, 15, 0);
    spotLight3.castShadow = true;
    spotLight3.shadow.bias = -0.0001;
    scene.add(spotLight3);

    // Crear la luz
    const spotLight4 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight4.position.set(0, 0, -25);
    spotLight4.castShadow = true;
    spotLight4.shadow.bias = -0.0001;
    scene.add(spotLight4);

    // Crear la luz
    const spotLight5 = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight5.position.set(0, 0, 25);
    spotLight5.castShadow = true;
    spotLight5.shadow.bias = -0.0001;
    scene.add(spotLight5);

    // Cargar el modelo
    const loader = new GLTFLoader().setPath("/SSV/");
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

    // Escuchar los eventos de redimensionamiento
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animar
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

  return (
    <>
      <a
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
        }}
      >
        <i className="bi bi-arrow-left">VOLVER</i>
      </a>
    </>
  );
};

export default SSV;
