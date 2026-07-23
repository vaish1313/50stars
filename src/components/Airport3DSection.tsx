import React, { useEffect, useRef } from 'react';
import './Airport3DSection.css';

const Airport3DSection: React.FC = () => {
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;

    const loadThree = () => {
      if ((window as any).THREE) {
        init3D();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        init3D();
      };
      document.body.appendChild(script);
    };

    let renderer: any, scene: any, camera: any, group: any;

    const init3D = () => {
      const THREE = (window as any).THREE;
      const wrap = canvasWrapRef.current;
      if (!wrap || wrap.querySelector('canvas')) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, 1, 1, 2000);
      camera.position.set(0, 80, 235);
      camera.lookAt(0, 12, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x141414, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      wrap.insertBefore(renderer.domElement, wrap.firstChild);
      renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border-radius:12px;';

      group = new THREE.Group();
      scene.add(group);
      group.position.x = 2;

      const main: number[] = [], dim: number[] = [], faint: number[] = [], glass: number[] = [];
      function sg(a: number[], x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
        a.push(x1, y1, z1, x2, y2, z2);
      }

      const NT = 10, X0 = -54, DX = 12, zs: number[] = [], yts: number[] = [], ybs: number[] = [];
      for (let j = 0; j <= 12; j++) {
        const z = -20 + (j * 40) / 12;
        const s = Math.sqrt(Math.max(0, 1 - (z / 20) * (z / 20)));
        zs.push(z);
        yts.push(10 + 8 * s);
        ybs.push(10 + 6.3 * s);
      }
      for (let i = 0; i < NT; i++) {
        const x = X0 + i * DX;
        for (let j = 0; j < 12; j++) sg(main, x, yts[j], zs[j], x, yts[j + 1], zs[j + 1]);
        for (let j = 1; j < 11; j++) sg(main, x, ybs[j], zs[j], x, ybs[j + 1], zs[j + 1]);
        sg(main, x, yts[0], zs[0], x, ybs[1], zs[1]);
        sg(main, x, ybs[11], zs[11], x, yts[12], zs[12]);
        for (let j = 1; j < 12; j++) sg(dim, x, yts[j], zs[j], x, ybs[j], zs[j]);
        for (let j = 1; j < 11; j++) sg(dim, x, ybs[j], zs[j], x, yts[j + 1], zs[j + 1]);
        for (const z of [-20, 20]) {
          sg(main, x, 0, z, x, 10, z);
          sg(dim, x - 1.6, 0.12, z - 1.6, x + 1.6, 0.12, z - 1.6);
          sg(dim, x + 1.6, 0.12, z - 1.6, x + 1.6, 0.12, z + 1.6);
          sg(dim, x + 1.6, 0.12, z + 1.6, x - 1.6, 0.12, z + 1.6);
          sg(dim, x - 1.6, 0.12, z + 1.6, x - 1.6, 0.12, z - 1.6);
        }
      }
      for (let i = 0; i < NT - 1; i++) {
        const x = X0 + i * DX, x2 = x + DX;
        sg(main, x, 10, -20, x2, 10, -20);
        sg(main, x, 10, 20, x2, 10, 20);
        if (i < 6) for (const j of [2, 4, 6, 8, 10]) sg(dim, x, yts[j], zs[j], x2, yts[j], zs[j]);
        if (i < 3) for (let j = 1; j < 12; j++) sg(faint, x, yts[j], zs[j], x2, yts[j], zs[j]);
      }
      for (let x = -54; x <= -18; x += 4) sg(glass, x, 0, 20.01, x, 10, 20.01);
      sg(glass, -54, 3.3, 20.01, -18, 3.3, 20.01);
      sg(glass, -54, 6.6, 20.01, -18, 6.6, 20.01);
      sg(faint, -60, 0, -20, 60, 0, -20);
      sg(faint, 60, 0, -20, 60, 0, 20);
      sg(faint, 60, 0, 20, -60, 0, 20);
      sg(faint, -60, 0, 20, -60, 0, -20);
      for (let x = -48; x <= 48; x += 12) sg(faint, x, 0, -20, x, 0, 20);
      const cx = 75, cz = -5;
      for (let a = 0; a < 8; a++) {
        const A = (a * Math.PI) / 4;
        sg(dim, cx + 4 * Math.cos(A), 0, cz + 4 * Math.sin(A), cx + 4 * Math.cos(A), 26, cz + 4 * Math.sin(A));
      }
      for (const y of [0, 13, 26])
        for (let a = 0; a < 16; a++) {
          const A1 = (a * Math.PI) / 8, A2 = ((a + 1) * Math.PI) / 8;
          sg(dim, cx + 4 * Math.cos(A1), y, cz + 4 * Math.sin(A1), cx + 4 * Math.cos(A2), y, cz + 4 * Math.sin(A2));
        }
      for (const y of [26, 31])
        for (let a = 0; a < 16; a++) {
          const A1 = (a * Math.PI) / 8, A2 = ((a + 1) * Math.PI) / 8;
          sg(main, cx + 7 * Math.cos(A1), y, cz + 7 * Math.sin(A1), cx + 7 * Math.cos(A2), y, cz + 7 * Math.sin(A2));
        }
      for (let a = 0; a < 8; a++) {
        const A = (a * Math.PI) / 4;
        sg(main, cx + 7 * Math.cos(A), 26, cz + 7 * Math.sin(A), cx + 7 * Math.cos(A), 31, cz + 7 * Math.sin(A));
      }
      for (let a = 0; a < 4; a++) {
        const A = (a * Math.PI) / 2;
        sg(dim, cx + 7 * Math.cos(A), 31, cz + 7 * Math.sin(A), cx, 35, cz);
      }
      for (const bx of [-30, 0, 30]) {
        sg(dim, bx - 2, 4, 20, bx - 2, 4, 32);
        sg(dim, bx + 2, 4, 20, bx + 2, 4, 32);
        sg(dim, bx - 2, 1.5, 32, bx + 2, 1.5, 32);
        sg(dim, bx - 2, 4, 32, bx + 2, 4, 32);
        sg(dim, bx - 2, 1.5, 32, bx - 2, 4, 32);
        sg(dim, bx + 2, 1.5, 32, bx + 2, 4, 32);
      }
      const mx = -78, mz = 10;
      for (const s of [[-1.5, -1.5], [1.5, -1.5], [1.5, 1.5], [-1.5, 1.5]])
        sg(main, mx + s[0], 0, mz + s[1], mx + s[0], 42, mz + s[1]);
      for (let y = 6; y <= 42; y += 6) {
        sg(dim, mx - 1.5, y, mz - 1.5, mx + 1.5, y, mz - 1.5);
        sg(dim, mx + 1.5, y, mz - 1.5, mx + 1.5, y, mz + 1.5);
        sg(dim, mx + 1.5, y, mz + 1.5, mx - 1.5, y, mz + 1.5);
        sg(dim, mx - 1.5, y, mz + 1.5, mx - 1.5, y, mz - 1.5);
      }
      sg(main, mx, 42, mz, -33, 42, mz);
      sg(main, mx, 42, mz, -92, 42, mz);
      sg(main, mx, 47, mz, mx, 42, mz);
      sg(dim, mx, 47, mz, -55, 42, mz);
      sg(dim, mx, 47, mz, -33, 42, mz);
      sg(dim, mx, 47, mz, -92, 42, mz);
      sg(main, -92, 42, mz, -92, 39, mz);
      sg(main, -92, 39, mz, -89, 39, mz);
      sg(main, -89, 39, mz, -89, 42, mz);
      sg(main, -48, 42, mz, -48, 20, mz);
      sg(main, -52, 18.5, mz, -44, 18.5, mz);
      sg(dim, -48, 20, mz, -52, 18.5, mz);
      sg(dim, -48, 20, mz, -44, 18.5, mz);

      function mkLines(arr: number[], color: number, op: number) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
        return new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: op }));
      }

      group.add(mkLines(main, 0xd8d8d8, 0.85));
      group.add(mkLines(dim, 0xd8d8d8, 0.35));
      group.add(mkLines(faint, 0xd8d8d8, 0.14));
      group.add(mkLines(glass, 0x7fb4d6, 0.4));

      const gpts = [[-100, 0, -48], [100, 0, -48], [100, 0, 48], [-100, 0, 48], [-100, 0, -48]];
      const ggeo = new THREE.BufferGeometry().setFromPoints(gpts.map(p => new THREE.Vector3(p[0], p[1], p[2])));
      const gline = new THREE.Line(
        ggeo,
        new THREE.LineDashedMaterial({ color: 0x5a5a5a, dashSize: 2.5, gapSize: 5, transparent: true, opacity: 0.6 })
      );
      gline.computeLineDistances();
      group.add(gline);

      const callouts = [
        { g: document.getElementById('cg-truss'), el: document.getElementById('lb-truss'), p: new THREE.Vector3(-30, 18, 0), side: 'l', ax: 0, ay: 0 },
        { g: document.getElementById('cg-deck'), el: document.getElementById('lb-deck'), p: new THREE.Vector3(-42, 17.6, -6.7), side: 'r', ax: 0, ay: 0 },
        { g: document.getElementById('cg-col'), el: document.getElementById('lb-col'), p: new THREE.Vector3(-54, 5, 20), side: 'l', ax: 0, ay: 0 },
        { g: document.getElementById('cg-crane'), el: document.getElementById('lb-crane'), p: new THREE.Vector3(-48, 19, 10), side: 'r', ax: 0, ay: 0 }
      ];

      let W = 0, H = 520;
      function fit() {
        if (!wrap || !renderer) return;
        W = wrap.clientWidth;
        H = wrap.clientHeight || 520;
        renderer.setSize(W, H);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();

        for (const c of callouts) {
          if (!c.el) continue;
          const ax = c.side === 'l' ? c.el.offsetLeft + c.el.offsetWidth + 8 : c.el.offsetLeft - 8;
          const ay = c.el.offsetTop + c.el.offsetHeight / 2;
          c.ax = ax;
          c.ay = ay;
        }
      }

      fit();
      window.addEventListener('resize', fit);

      const v = new THREE.Vector3();
      function tick() {
        if (group) group.rotation.y += 0.0036;
        if (renderer && scene && camera) renderer.render(scene, camera);

        if (group && camera) {
          group.updateMatrixWorld();
          for (const c of callouts) {
            if (!c.g || !c.el) continue;
            v.copy(c.p).applyMatrix4(group.matrixWorld).project(camera);
            const px = (v.x * 0.5 + 0.5) * W;
            const py = (-v.y * 0.5 + 0.5) * H;
            
            const ln = c.g.children[0];
            if (ln) {
              ln.setAttribute('x1', c.ax.toString());
              ln.setAttribute('y1', c.ay.toString());
              ln.setAttribute('x2', px.toString());
              ln.setAttribute('y2', py.toString());
            }
            if (c.g.children[1]) {
              c.g.children[1].setAttribute('cx', px.toString());
              c.g.children[1].setAttribute('cy', py.toString());
            }
            if (c.g.children[2]) {
              c.g.children[2].setAttribute('cx', px.toString());
              c.g.children[2].setAttribute('cy', py.toString());
            }
          }
        }

        animId = requestAnimationFrame(tick);
      }
      tick();
    };

    loadThree();

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="airport-3d-section-wrapper">
      <div className="airport-3d-container">
        
        {/* Title Header */}
        <div className="airport-3d-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text" style={{ color: 'var(--color-white)' }}>Interactive 3D Structure</span>
          </div>
          <h2 className="airport-3d-title">
            Airport Terminal Construction <span className="text-orange">3D Wireframe</span>
          </h2>
          <p className="airport-3d-subtitle">
            Interactive structural model detailing roof trusses, metal deck, columns, and erection crane lifts.
          </p>
        </div>

        {/* Interactive 3D Canvas Box */}
        <div className="airport-3d-canvas-wrap" id="wrap3d" ref={canvasWrapRef}>
          {/* Top Left Callout */}
          <div className="lbl lbl-truss" id="lb-truss">
            Steel roof trusses
            <br />
            <span>Fabricated plate &amp; HSS</span>
          </div>

          {/* Top Right Callout */}
          <div className="lbl lbl-deck" id="lb-deck">
            Metal roof deck
            <br />
            <span>Galvanized steel</span>
          </div>

          {/* Bottom Left Callout */}
          <div className="lbl lbl-col" id="lb-col">
            Steel columns
            <br />
            <span>ASTM A992 / A572</span>
          </div>

          {/* Bottom Right Callout */}
          <div className="lbl lbl-crane" id="lb-crane">
            Steel erection in progress
            <br />
            <span>Tower crane lift</span>
          </div>

          {/* Dynamic SVG Connector Lines & Target Circles */}
          <svg id="ov3d" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
            <g id="cg-truss">
              <line stroke="#8A8A8A" strokeWidth="1" />
              <circle r="9" fill="none" stroke="#E05A2B" strokeWidth="2" opacity="0.4" />
              <circle r="5" fill="#141414" stroke="#E05A2B" strokeWidth="3" />
            </g>
            <g id="cg-deck">
              <line stroke="#8A8A8A" strokeWidth="1" />
              <circle r="9" fill="none" stroke="#E05A2B" strokeWidth="2" opacity="0.4" />
              <circle r="5" fill="#141414" stroke="#E05A2B" strokeWidth="3" />
            </g>
            <g id="cg-col">
              <line stroke="#8A8A8A" strokeWidth="1" />
              <circle r="9" fill="none" stroke="#E05A2B" strokeWidth="2" opacity="0.4" />
              <circle r="5" fill="#141414" stroke="#E05A2B" stroke-width="3" />
            </g>
            <g id="cg-crane">
              <line stroke="#8A8A8A" strokeWidth="1" />
              <circle r="9" fill="none" stroke="#E05A2B" strokeWidth="2" opacity="0.4" />
              <circle r="5" fill="#141414" stroke="#E05A2B" strokeWidth="3" />
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Airport3DSection;
