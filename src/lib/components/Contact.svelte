<section class="section contact" id="contact">
	<span class="mono-label" data-reveal>Contact — 06</span>
	<h2 class="cta" data-reveal>
		Have a project,<br />or an <em>opening?</em>
	</h2>

	<div class="cta-row" data-reveal>
		<a class="mail" href="mailto:ghiffariilhaam@gmail.com" data-cursor
			>ghiffariilhaam@gmail.com <span class="arw">↗</span></a
		>
		<a
			class="gh"
			href="https://github.com/IlhaamGhiffari"
			target="_blank"
			rel="noreferrer noopener"
			data-cursor
			>github.com/IlhaamGhiffari</a
		>
	</div>

	<footer class="foot mono-label">
		<span>© 2026 Ilhaam Ghiffari</span>
		<span class="mid">Built with SvelteKit · Deployed via GitHub Actions</span>
		<span>Aceh, Indonesia</span>
	</footer>
</section>

<style>
	.contact {
		padding-top: calc(var(--section-y) * 1.4);
		padding-bottom: calc(var(--section-y) * 0.9);
	}

	.cta {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(48px, 8.5vw, 128px);
		line-height: 1.0;
		letter-spacing: -0.015em;
		margin-top: 26px;
	}

	.cta em {
		font-style: italic;
		color: var(--accent);
	}

	.cta-row {
		margin-top: clamp(36px, 6vh, 64px);
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 18px 44px;
	}

	.mail {
		font-family: var(--font-mono);
		font-size: clamp(14px, 1.6vw, 19px);
		letter-spacing: 0.06em;
		padding-bottom: 8px;
		border-bottom: 1px solid var(--line);
		transition:
			border-color 0.3s ease,
			color 0.3s ease;
	}

	.mail:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.arw {
		display: inline-block;
		transition: transform 0.3s ease;
	}

	.mail:hover .arw {
		transform: translate(3px, -3px);
	}

	.gh {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.12em;
		color: var(--muted);
		transition: color 0.3s ease;
	}

	.gh:hover {
		color: var(--ink);
	}

	.foot {
		margin-top: clamp(64px, 10vh, 120px);
		padding-top: 22px;
		border-top: 1px solid var(--line);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px 28px;
		font-size: 10px;
		opacity: 0.55;
	}

	@media (max-width: 700px) {
		.mid {
			display: none;
		}
	}
</style>
