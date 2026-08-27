/* =========================================================================
   MAXTRON RACING CLUB — THREE.JS 3D SPEED-LINES BACKGROUND
   ========================================================================= */

(function () {
  const container = document.getElementById('threeBg');
  if (!container) return;

  let scene, camera, renderer;
  let particlesGeometry, particlesMaterial, particleSystem;
  let speedLines = [];
  const lineCount = 120;
  const particleCount = 400;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040406, 0.0025);

    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 200;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x0f5acc, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00d2ff, 1.5);
    dirLight.position.set(0, 0, 1);
    scene.add(dirLight);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      linewidth: 1
    });

    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const length = Math.random() * 150 + 50;
      const x = (Math.random() - 0.5) * 450;
      const y = (Math.random() - 0.5) * 450;
      const zStart = Math.random() * -600;
      const zEnd = zStart + length;

      const positions = new Float32Array([
        x, y, zStart,
        x, y, zEnd
      ]);

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.Line(geometry, lineMaterial);
      line.userData = { zSpeed: Math.random() * 5 + 4, zStart, zEnd, length, x, y };
      scene.add(line);
      speedLines.push(line);
    }

    particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 600;
      particlePositions[i + 1] = (Math.random() - 0.5) * 600;
      particlePositions[i + 2] = Math.random() * -600;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);

    const particleTexture = new THREE.CanvasTexture(canvas);

    particlesMaterial = new THREE.PointsMaterial({
      size: 3,
      map: particleTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x0f5acc
    });

    particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
  }

  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 1.5;
    mouseY = (event.clientY - windowHalfY) / 1.5;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX * 0.25;
    camera.position.y = -targetY * 0.25;
    camera.lookAt(new THREE.Vector3(0, 0, -100));

    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    const scrollSpeedBoost = scrollPercent * 6;

    speedLines.forEach((line) => {
      const positions = line.geometry.attributes.position.array;
      const speed = line.userData.zSpeed + scrollSpeedBoost;

      line.userData.zStart += speed;
      line.userData.zEnd += speed;

      if (line.userData.zStart > 220) {
        line.userData.x = (Math.random() - 0.5) * 450;
        line.userData.y = (Math.random() - 0.5) * 450;
        line.userData.zStart = -600;
        line.userData.zEnd = line.userData.zStart + line.userData.length;
      }

      positions[0] = line.userData.x;
      positions[1] = line.userData.y;
      positions[2] = line.userData.zStart;
      positions[3] = line.userData.x;
      positions[4] = line.userData.y;
      positions[5] = line.userData.zEnd;

      line.geometry.attributes.position.needsUpdate = true;
    });

    const positions = particleSystem.geometry.attributes.position.array;
    for (let i = 2; i < positions.length; i += 3) {
      positions[i] += 1.2 + (scrollSpeedBoost * 0.5);
      if (positions[i] > 200) {
        positions[i] = -600;
        positions[i - 2] = (Math.random() - 0.5) * 600;
        positions[i - 1] = (Math.random() - 0.5) * 600;
      }
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.rotation.z += 0.0008;

    renderer.render(scene, camera);
  }
})();
