<!-- Decorative background: blueprint grid + drifting lime aurora.
     Pure CSS (gradients, transform-only animation) — no canvas, no filter blur.
     Falls back to a static composition under prefers-reduced-motion. -->
<div class="bg" aria-hidden="true">
	<div class="aurora a1"></div>
	<div class="aurora a2"></div>
	<div class="aurora a3"></div>
	<div class="aurora a4"></div>
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

	/* ---------- aurora: soft lime glows, slowly drifting ---------- */
	.aurora {
		position: absolute;
		border-radius: 50%;
		will-change: transform;
	}

	.a1 {
		width: 64vw;
		height: 64vw;
		top: -14vw;
		left: -10vw;
		background: radial-gradient(
			circle,
			rgba(201, 242, 79, 0.34) 0%,
			rgba(201, 242, 79, 0.12) 45%,
			transparent 78%
		);
		animation: drift1 32s ease-in-out infinite alternate;
	}

	.a2 {
		width: 50vw;
		height: 50vw;
		top: -9vw;
		right: -13vw;
		background: radial-gradient(
			circle,
			rgba(201, 242, 79, 0.26) 0%,
			rgba(201, 242, 79, 0.08) 50%,
			transparent 76%
		);
		animation: drift2 26s ease-in-out infinite alternate;
	}

	.a3 {
		width: 54vw;
		height: 54vw;
		bottom: -20vw;
		left: 12vw;
		background: radial-gradient(
			circle,
			rgba(201, 242, 79, 0.18) 0%,
			rgba(201, 242, 79, 0.06) 50%,
			transparent 74%
		);
		animation: drift3 38s ease-in-out infinite alternate;
	}

	/* subtle cool counter-tint — makes the lime pop, adds depth */
	.a4 {
		width: 38vw;
		height: 38vw;
		right: -6vw;
		bottom: -10vw;
		background: radial-gradient(
			circle,
			rgba(124, 148, 255, 0.12) 0%,
			rgba(124, 148, 255, 0.04) 50%,
			transparent 72%
		);
		animation: drift4 44s ease-in-out infinite alternate;
	}

	@keyframes drift1 {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(6vw, 4vh, 0);
		}
	}
	@keyframes drift2 {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-5vw, 6vh, 0);
		}
	}
	@keyframes drift3 {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(4vw, -5vh, 0);
		}
	}
	@keyframes drift4 {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-3vw, -4vh, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.aurora {
			animation: none;
		}
	}

	/* ---------- blueprint grid ---------- */
	.grid {
		position: absolute;
		inset: 0;
		background-image:
			repeating-linear-gradient(90deg, rgba(201, 242, 79, 0.08) 0 1px, transparent 1px 80px),
			repeating-linear-gradient(0deg, rgba(201, 242, 79, 0.08) 0 1px, transparent 1px 80px),
			repeating-linear-gradient(90deg, rgba(201, 242, 79, 0.14) 0 1px, transparent 1px 320px),
			repeating-linear-gradient(0deg, rgba(201, 242, 79, 0.14) 0 1px, transparent 1px 320px),
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cpath d='M159 150 v4 M158 152 h4' stroke='%23c9f24f' stroke-opacity='0.26' fill='none'/%3E%3C/svg%3E");
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
