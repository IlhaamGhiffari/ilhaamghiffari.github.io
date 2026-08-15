<script lang="ts">
	import { onMount } from 'svelte';
	import { prefersReduced } from '$lib/motion';

	let canvas: HTMLCanvasElement;

	const VERT = `
		attribute vec2 a_pos;
		void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
	`;

	const FRAG = `
		precision mediump float;
		uniform vec2 u_res;
		uniform float u_time;
		uniform vec2 u_mouse;

		float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
		float noise(vec2 p){
			vec2 i = floor(p); vec2 f = fract(p);
			vec2 u = f*f*(3.0-2.0*f);
			return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), u.x),
			           mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
		}
		float fbm(vec2 p){
			float v = 0.0; float a = 0.5;
			for(int i=0;i<4;i++){ v += a*noise(p); p = p*2.03 + vec2(11.3, 7.1); a *= 0.5; }
			return v;
		}

		void main(){
			vec2 uv = gl_FragCoord.xy / u_res.xy;
			float aspect = u_res.x / u_res.y;
			vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
			vec2 m = (u_mouse - 0.5) * 0.35;
			float t = u_time * 0.05;

			float f1 = fbm(p*1.6 + vec2(t, -t*0.5) + m);
			float f2 = fbm(p*2.6 - vec2(t*0.6, t*0.4) - m*1.4);
			float field = f1*0.65 + f2*0.35;

			float band = smoothstep(0.42, 0.92, field);
			vec3 lime = vec3(0.788, 0.949, 0.310);
			vec3 cool = vec3(0.45, 0.56, 1.0);
			vec3 col = mix(cool, lime, band);

			float d = length(vec2((uv.x-0.5)*1.2, (uv.y-0.42)*1.6));
			float vig = 1.0 - smoothstep(0.25, 1.15, d);

			float intensity = band * vig * 0.26;
			gl_FragColor = vec4(col, intensity);
		}
	`;

	function initAurora(canvas: HTMLCanvasElement): (() => void) | undefined {
		const gl = canvas.getContext('webgl', {
			alpha: true,
			antialias: false,
			premultipliedAlpha: true
		});
		if (!gl) return undefined;

		const compile = (type: number, src: string) => {
			const s = gl.createShader(type)!;
			gl.shaderSource(s, src);
			gl.compileShader(s);
			if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
				const info = gl.getShaderInfoLog(s);
				gl.deleteShader(s);
				throw new Error(info || 'shader compile failed');
			}
			return s;
		};

		const prog = gl.createProgram()!;
		gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
		gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
		gl.linkProgram(prog);
		if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('program link failed');
		gl.useProgram(prog);

		const buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buf);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
		const aPos = gl.getAttribLocation(prog, 'a_pos');
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

		const uRes = gl.getUniformLocation(prog, 'u_res');
		const uTime = gl.getUniformLocation(prog, 'u_time');
		const uMouse = gl.getUniformLocation(prog, 'u_mouse');

		gl.disable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE); // additive glow

		const mouse = { x: 0.5, y: 0.5 };
		let raf = 0;
		let running = true;

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
			const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
				gl.viewport(0, 0, w, h);
			}
		};

		const onMove = (e: MouseEvent) => {
			mouse.x = e.clientX / window.innerWidth;
			mouse.y = e.clientY / window.innerHeight;
		};

		const render = (time: number) => {
			resize();
			gl.clearColor(0, 0, 0, 0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.uniform2f(uRes, canvas.width, canvas.height);
			gl.uniform1f(uTime, time * 0.001);
			gl.uniform2f(uMouse, mouse.x, mouse.y);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			if (running && !prefersReduced) raf = requestAnimationFrame(render);
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('resize', resize);

		if (prefersReduced) {
			render(0); // single static frame — no motion
		} else {
			raf = requestAnimationFrame(render);
		}

		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('resize', resize);
			gl.deleteBuffer(buf);
			gl.deleteProgram(prog);
			gl.getExtension('WEBGL_lose_context')?.loseContext();
		};
	}

	onMount(() => {
		try {
			const cleanup = initAurora(canvas);
			if (!cleanup) canvas.style.display = 'none'; // no WebGL → grid-only fallback
			return cleanup;
		} catch {
			canvas.style.display = 'none';
		}
	});
</script>

<div class="bg" aria-hidden="true">
	<canvas class="aurora-canvas" bind:this={canvas}></canvas>
	<div class="grid"></div>
	<div class="vignette"></div>
	<span class="tag t1 mono-label">GITOPS — SYNCED</span>
	<span class="tag t2 mono-label">INFRA-AS-CODE</span>
	<span class="tag t3 mono-label">SVELTEKIT · STATIC</span>
</div>

<style>
	.bg {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		overflow: hidden;
	}

	.aurora-canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
	}

	/* ---------- blueprint grid ---------- */
	.grid {
		position: absolute;
		inset: 0;
		background-image:
			repeating-linear-gradient(90deg, rgba(201, 242, 79, 0.06) 0 1px, transparent 1px 80px),
			repeating-linear-gradient(0deg, rgba(201, 242, 79, 0.06) 0 1px, transparent 1px 80px),
			repeating-linear-gradient(90deg, rgba(201, 242, 79, 0.1) 0 1px, transparent 1px 320px),
			repeating-linear-gradient(0deg, rgba(201, 242, 79, 0.1) 0 1px, transparent 1px 320px),
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cpath d='M159 150 v4 M158 152 h4' stroke='%23c9f24f' stroke-opacity='0.16' fill='none'/%3E%3C/svg%3E");
		background-size:
			80px 100%,
			100% 80px,
			320px 100%,
			100% 320px,
			320px 320px;
	}

	/* ---------- vignette: darkens edges, keeps the hero lit ---------- */
	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse at 50% 38%,
			transparent 60%,
			rgba(0, 0, 0, 0.3) 100%
		);
	}

	/* ---------- mono corner labels ---------- */
	.tag {
		position: absolute;
		font-size: 9px;
		letter-spacing: 0.16em;
		color: rgba(201, 242, 79, 0.45);
		user-select: none;
	}

	.t1 {
		top: 88px;
		right: var(--gutter);
	}
	.t2 {
		top: 46%;
		left: var(--gutter);
	}
	.t3 {
		right: var(--gutter);
		bottom: 28px;
	}

	@media (max-width: 640px) {
		.tag {
			display: none;
		}
	}
</style>
