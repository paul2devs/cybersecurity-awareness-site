import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BackgroundAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mountRef.current) {
      const currentMount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });

      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);

      
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
        colorArray[i] = Math.random();
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(particlesCount * 3 * 2);
      const lineColors = new Float32Array(particlesCount * 3 * 2);

      for (let i = 0; i < particlesCount; i++) {
        const idx1 = i * 6;
        const idx2 = idx1 + 3;

        
        if (Math.random() < 0.1) {
          linePositions[idx1] = posArray[i * 3];
          linePositions[idx1 + 1] = posArray[i * 3 + 1];
          linePositions[idx1 + 2] = posArray[i * 3 + 2];

          const randomConnectionIndex = Math.floor(Math.random() * particlesCount);
          linePositions[idx2] = posArray[randomConnectionIndex * 3];
          linePositions[idx2 + 1] = posArray[randomConnectionIndex * 3 + 1];
          linePositions[idx2 + 2] = posArray[randomConnectionIndex * 3 + 2];

          
          lineColors[idx1] = 0.2; 
          lineColors[idx1 + 1] = 0.5; 
          lineColors[idx1 + 2] = 1; 

          lineColors[idx2] = 0.2;
          lineColors[idx2 + 1] = 0.5;
          lineColors[idx2 + 2] = 1;
        }
      }

      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3
      });

      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      
      camera.position.z = 50;

      
      const animate = () => {
        requestAnimationFrame(animate);

        
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

      
        linesMesh.rotation.x += 0.0003;
        linesMesh.rotation.y += 0.0003;

        
        controls.update();

        
        renderer.render(scene, camera);
      };

      animate();

      
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

     
      return () => {
        window.removeEventListener('resize', handleResize);
        
        
        if (currentMount) {
          currentMount.removeChild(renderer.domElement);
        }
        
        scene.remove(particlesMesh);
        scene.remove(linesMesh);
        
        
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        
        
        renderer.dispose();
      };
    }
  }, []); 

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0 
      }} 
    />
  );
};

export default BackgroundAnimation;