import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let lenis: Lenis | null = null;
let rafCb: ((t: number) => void) | null = null;

export const prefersReduced =
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isFinePointer =
	typeof window !== 'undefined' &&
	window.matchMedia('(pointer: fine)').matches;

export function initMotion() {
	if (prefersReduced) return;
	gsap.registerPlugin(ScrollTrigger);

	lenis = new Lenis({
		duration: 1.15,
		smoothWheel: true,
		touchMultiplier: 1.4
	});

	lenis.on('scroll', ScrollTrigger.update);
	rafCb = (time: number) => {
		lenis?.raf(time * 1000);
	};
	gsap.ticker.add(rafCb);
	gsap.ticker.lagSmoothing(0);
}

/** Fade-up reveals for anything tagged data-reveal / data-reveal-children */
export function revealAll() {
	if (prefersReduced) return;

	gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
		gsap.from(el, {
			y: 44,
			opacity: 0,
			duration: 1.1,
			ease: 'power3.out',
			scrollTrigger: { trigger: el, start: 'top 88%' }
		});
	});

	gsap.utils.toArray<HTMLElement>('[data-reveal-children]').forEach((parent) => {
		gsap.from(parent.children, {
			y: 32,
			opacity: 0,
			duration: 0.9,
			ease: 'power3.out',
			stagger: 0.08,
			scrollTrigger: { trigger: parent, start: 'top 85%' }
		});
	});
}

export function cleanupMotion() {
	lenis?.destroy();
	lenis = null;
	if (rafCb) {
		gsap.ticker.remove(rafCb);
		rafCb = null;
	}
	ScrollTrigger.getAll().forEach((st) => st.kill());
}
