<script lang="ts">
	import { t } from '$lib/i18n.svelte';
</script>

<section class="section contact" id="contact">
	<span class="mono-label" data-reveal>Contact — 06</span>
	<h2 class="cta" data-reveal>
		{t('contact.h1')}<br /><em>{t('contact.h2')}</em>
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
		<a
			class="gh"
			href="https://www.linkedin.com/in/ilhaam-ghiffari-3b3b27217"
			target="_blank"
			rel="noreferrer noopener"
			data-cursor
			>linkedin.com/in/ilhaam-ghiffari</a
		>
	</div>

	<footer class="foot mono-label">
		<span>© 2026 Ilhaam Ghiffari</span>
		<span class="mid">{t('contact.foot2')}</span>
		<span>Aceh, Indonesia</span>
		<a href="#top" class="top-link" data-cursor>↑</a>
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
		letter-spacing: -0.025em;
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
		font-size: clamp(16px, 2vw, 22px);
		letter-spacing: 0.06em;
		padding-bottom: 8px;
		border-bottom: 1px solid var(--line);
		transition:
			border-color 0.3s ease,
			color 0.3s ease;
	}

	@media (hover: hover) {
		.mail:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
	}

	.arw {
		display: inline-block;
		transition: transform 0.3s ease;
	}

	@media (hover: hover) {
		.mail:hover .arw {
			transform: translate(3px, -3px);
		}
	}

	.gh {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.12em;
		color: var(--muted);
		transition: color 0.3s ease;
	}

	@media (hover: hover) {
		.gh:hover {
			color: var(--ink);
		}
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
		opacity: 0.85;
	}
	
	.top-link {
		font-family: var(--font-mono);
		font-size: 14px;
		color: var(--muted);
		transition: color 0.3s ease;
		text-decoration: none;
	}
	
	@media (hover: hover) {
		.top-link:hover {
			color: var(--accent);
		}
	}

	@media (max-width: 700px) {
		.mid {
			display: none;
		}
	}
</style>
