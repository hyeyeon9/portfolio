import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import styles from './LaptopThree.module.css';
import ProjectCarousel from './ProjectCarousel';
import { useSound } from '../../hooks/useSound';
import { useBGM } from '../../hooks/useBGM';
import type { Project } from '../../types';

interface Props {
  projects: Project[];
  scrollProgress: number;
}

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function LaptopThree({ projects, scrollProgress }: Props) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollProgress);
  const dockedRef = useRef(false);
  const rafRef = useRef(0);
  const [docked, setDocked] = useState(false);
  const { click, hover } = useSound();
  const { toggle: toggleBGM, isPlaying: bgmPlaying } = useBGM();

  useEffect(() => { scrollRef.current = scrollProgress; }, [scrollProgress]);

  /* ── Three.js scene ──────────────────────────────────────── */
  useEffect(() => {
    const mount = canvasRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 1.1, 5.8);
    camera.lookAt(0, 0.15, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    /* lights */
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(4, 7, 5);
    sun.castShadow = true;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xb0c8ff, 0.45);
    fill.position.set(-5, 2, -2);
    scene.add(fill);

    const glow = new THREE.PointLight(0x4f8cff, 0, 5);
    glow.position.set(0, 1, 2.5);
    scene.add(glow);

    /* shadow catcher */
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.5;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    /* materials */
    const silver = new THREE.MeshStandardMaterial({ color: 0xd2d6e0, metalness: 0.4, roughness: 0.5 });
    const dark   = new THREE.MeshStandardMaterial({ color: 0x1a1d26, roughness: 0.85 });
    const hinge  = new THREE.MeshStandardMaterial({ color: 0x9aa0b2, metalness: 0.7, roughness: 0.3 });
    const kb     = new THREE.MeshStandardMaterial({ color: 0xbbbfd0, roughness: 0.95 });
    const screen = new THREE.MeshStandardMaterial({
      color: 0x080c18,
      emissive: new THREE.Color(0x1a3aff),
      emissiveIntensity: 0,
      roughness: 0.05,
    });

    /* ── Laptop group ── */
    const laptop = new THREE.Group();
    scene.add(laptop);

    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.16, 2.05), silver);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptop.add(baseMesh);

    const kbMesh = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.02, 1.62), kb);
    kbMesh.position.set(0, 0.09, 0.08);
    laptop.add(kbMesh);

    const tpMesh = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.015, 0.62), hinge);
    tpMesh.position.set(0, 0.09, 0.63);
    laptop.add(tpMesh);

    /* lid group — pivot at hinge */
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.08, -1.025);
    laptop.add(lidGroup);

    const lidBody = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.14, 1.9), silver);
    lidBody.position.set(0, 0, 0.95);
    lidBody.castShadow = true;
    lidGroup.add(lidBody);

    const bezel = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.02, 1.76), dark);
    bezel.position.set(0, -0.08, 0.95);
    lidGroup.add(bezel);

    /* screen plane: normal → -Y, faces camera when lid is 90° open */
    const screenGeo = new THREE.PlaneGeometry(2.62, 1.56);
    screenGeo.rotateX(-Math.PI / 2);
    const screenMesh = new THREE.Mesh(screenGeo, screen);
    screenMesh.position.set(0, -0.085, 0.95);
    lidGroup.add(screenMesh);

    const logoGeo = new THREE.CircleGeometry(0.16, 32);
    const logoMat = new THREE.MeshStandardMaterial({ color: 0xc2c6d2, metalness: 0.8, roughness: 0.2 });
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.rotation.x = Math.PI;
    logo.position.set(0, 0.08, 0.95);
    lidGroup.add(logo);

    const hingeGeo = new THREE.CylinderGeometry(0.055, 0.055, 2.7, 16);
    const hingeMesh = new THREE.Mesh(hingeGeo, hinge);
    hingeMesh.rotation.z = Math.PI / 2;
    lidGroup.add(hingeMesh);

    lidGroup.rotation.x = -0.06;

    /* ── Animate ── */
    let t = 0;
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      t += 0.012;

      const sp = scrollRef.current;

      // Phase 1 (sp 0→0.5): zoom in + lid opens
      const phase1 = Math.min(1, sp / 0.5);
      const eased1 = easeInOutQuad(phase1);

      // Phase 2 (sp 0.5→1.0): screen fills viewport
      const phase2 = Math.min(1, Math.max(0, (sp - 0.5) / 0.5));
      const eased2 = easeInOutQuad(phase2);

      /* laptop: scale + float */
      const sc = 0.48 + 0.52 * eased1 + 0.45 * eased2;
      laptop.scale.setScalar(sc);
      laptop.position.y = -0.35 * (1 - eased1) + Math.sin(t * 0.7) * 0.055 * eased1 * (1 - eased2);
      laptop.rotation.y = (1 - eased1) * 0.22 + Math.sin(t * 0.4) * 0.012 * eased1 * (1 - eased2);
      laptop.rotation.x = (1 - eased1) * 0.14;

      /* lid: fully open (90°) by sp=0.5 */
      const lidP = Math.max(0, Math.min(1, (sp - 0.06) / 0.44));
      const lidE = easeInOutQuad(lidP);
      lidGroup.rotation.x = -lidE * (Math.PI / 2); // exactly -90°

      /* glow */
      glow.intensity = lidE * 2.2;
      screen.emissiveIntensity = lidE * 0.55;

      /* ── overlay: direct DOM manipulation ── */
      const overlayEl = overlayRef.current;
      const mountEl   = canvasRef.current;
      if (overlayEl && mountEl) {
        const vw = mountEl.clientWidth;
        const vh = mountEl.clientHeight;

        // Initial size: matches the visible laptop screen
        const w0 = Math.min(vw * 0.54, vh * 0.6);
        const h0 = w0 * (1.56 / 2.62); // screen plane aspect ratio
        const x0 = (vw - w0) / 2;
        const y0 = vh * 0.43 - h0 / 2;

        const w = w0 + (vw - w0) * eased2;
        const h = h0 + (vh - h0) * eased2;
        const x = x0 * (1 - eased2);
        const y = y0 * (1 - eased2);
        const r = 8 * (1 - eased2);

        // Fade in as phase1 nears completion
        const opa = phase1 >= 0.82 ? Math.min(1, (phase1 - 0.82) / 0.18) : 0;

        overlayEl.style.left            = `${x}px`;
        overlayEl.style.top             = `${y}px`;
        overlayEl.style.width           = `${w}px`;
        overlayEl.style.height          = `${h}px`;
        overlayEl.style.borderRadius    = `${r}px`;
        overlayEl.style.opacity         = String(opa);
        overlayEl.style.pointerEvents   = eased2 >= 0.7 ? 'auto' : 'none';
      }

      /* docked state: used only to hide the scroll hint */
      const nowDocked = eased2 >= 0.7;
      if (nowDocked !== dockedRef.current) {
        dockedRef.current = nowDocked;
        setDocked(nowDocked);
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const handleBGM = useCallback(() => {
    toggleBGM();
    click();
  }, [toggleBGM, click]);

  return (
    <div className={styles.wrapper}>
      <div ref={canvasRef} className={styles.canvas} />

      {/* HTML overlay — position & size driven by rAF */}
      <div ref={overlayRef} className={styles.screenOverlay}>
        <ProjectCarousel projects={projects} fullscreen={docked} />
      </div>

      <p className={`${styles.hint} ${docked ? styles.hintHidden : ''}`}>
        스크롤하면 노트북이 열립니다
      </p>

      <button
        className={styles.bgmBtn}
        onClick={handleBGM}
        onMouseEnter={hover}
        aria-label={bgmPlaying ? 'BGM 끄기' : 'BGM 켜기'}
      >
        {bgmPlaying ? '🔊 BGM ON' : '🔇 BGM'}
      </button>
    </div>
  );
}
