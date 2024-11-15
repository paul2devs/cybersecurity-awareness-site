import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BackgroundAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined' && mountRef.current) {
      // Store the current mount point to avoid React warning
      const currentMount = mountRef.current;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });

      // Renderer configuration
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Cybersecurity-themed particle system
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);

      // Generate particle positions and colors
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
        colorArray[i] = Math.random(); // Random color intensity
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      // Particle material with glowing effect
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      // Create particle system
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Network-like connection lines
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(particlesCount * 3 * 2);
      const lineColors = new Float32Array(particlesCount * 3 * 2);

      for (let i = 0; i < particlesCount; i++) {
        const idx1 = i * 6;
        const idx2 = idx1 + 3;

        // Randomly connect some particles
        if (Math.random() < 0.1) {
          linePositions[idx1] = posArray[i * 3];
          linePositions[idx1 + 1] = posArray[i * 3 + 1];
          linePositions[idx1 + 2] = posArray[i * 3 + 2];

          const randomConnectionIndex = Math.floor(Math.random() * particlesCount);
          linePositions[idx2] = posArray[randomConnectionIndex * 3];
          linePositions[idx2 + 1] = posArray[randomConnectionIndex * 3 + 1];
          linePositions[idx2 + 2] = posArray[randomConnectionIndex * 3 + 2];

          // Assign colors to lines
          lineColors[idx1] = 0.2; // Low intensity blue
          lineColors[idx1 + 1] = 0.5; // Medium intensity green
          lineColors[idx1 + 2] = 1; // High intensity blue

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

      // Camera positioning
      camera.position.z = 50;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate particles
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

        // Rotate connection lines
        linesMesh.rotation.x += 0.0003;
        linesMesh.rotation.y += 0.0003;

        // Update controls
        controls.update();

        // Render scene
        renderer.render(scene, camera);
      };

      animate();

      // Responsive handling
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        
        // Safely remove renderer and meshes
        if (currentMount) {
          currentMount.removeChild(renderer.domElement);
        }
        
        scene.remove(particlesMesh);
        scene.remove(linesMesh);
        
        // Dispose of geometries and materials
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        
        // Dispose of renderer
        renderer.dispose();
      };
    }
  }, []); // Empty dependency array ensures this runs once on mount

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