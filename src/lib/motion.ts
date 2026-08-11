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
		duration: 1.05,
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
		const type = el.getAttribute('data-reveal');
		if (type === 'clip') {
			gsap.fromTo(
				el,
				{ clipPath: 'inset(0 0 100% 0)' },
				{
					clipPath: 'inset(0 0 0% 0)',
					duration: 1.1,
					ease: 'power4.out',
					scrollTrigger: { trigger: el, start: 'top 88%' }
				}
			);
		} else {
			gsap.from(el, {
				y: 20,
				opacity: 0,
				duration: 0.9,
				ease: 'expo.out',
				scrollTrigger: { trigger: el, start: 'top 88%' }
			});
		}
	});

	gsap.utils.toArray<HTMLElement>('[data-reveal-children]').forEach((parent) => {
		gsap.from(parent.children, {
			y: 32,
			opacity: 0,
			duration: 0.9,
			ease: 'expo.out',
			stagger: 0.06,
			scrollTrigger: { trigger: parent, start: 'top 85%' }
		});
	});
}

export function initPreloader(onComplete: () => void) {
	if (prefersReduced) {
		onComplete();
		return;
	}

	const preloader = document.createElement('div');
	preloader.className = 'preloader-line';
	preloader.style.position = 'fixed';
	preloader.style.top = '50%';
	preloader.style.left = '0';
	preloader.style.width = '100%';
	preloader.style.height = '2px';
	preloader.style.backgroundColor = 'var(--accent)';
	preloader.style.transform = 'scaleX(0)';
	preloader.style.transformOrigin = 'left';
	preloader.style.zIndex = '999';

	document.body.appendChild(preloader);
	document.body.style.overflow = 'hidden';

	const tl = gsap.timeline({
		onComplete: () => {
			preloader.remove();
			document.body.style.overflow = '';
			onComplete();
		}
	});

	tl.to(preloader, {
		scaleX: 1,
		duration: 0.7,
		ease: 'power2.inOut'
	}).to(
		preloader,
		{
			opacity: 0,
			duration: 0.3
		},
		'+=0.1'
	);
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
