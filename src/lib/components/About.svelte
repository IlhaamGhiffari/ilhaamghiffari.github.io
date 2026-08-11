<script lang="ts">
	import { credentials, facts, skills, timeline } from '$lib/data';
	import { t } from '$lib/i18n.svelte';
</script>

<section class="section about" id="about">
	<div class="grid">
		<div class="col-label">
			<span class="mono-label" data-reveal>About — 05</span>
			<h2 class="bigline" data-reveal>
				{t('about.big1')}<br /><em>{t('about.big2')}</em> {t('about.big3')}
			</h2>
		</div>

		<div class="col-body">
			<p class="lede" data-reveal>{t('about.p1')}</p>
			<p data-reveal>{t('about.p2')}</p>

			<div class="facts" data-reveal>
				{#each facts as [k, v]}
					<div class="fact">
						<span class="k mono-label">{t('fact.' + k.toLowerCase())}</span>
						<span class="v">{k === 'STATUS' ? t('fact.statusValue') : v}</span>
					</div>
				{/each}
			</div>

			<div class="skills" data-reveal>
				{#each skills as s}
					<span class="chip mono-label">{s}</span>
				{/each}
			</div>

			<div class="credentials" data-reveal>
				<h3 class="mono-label creds-head">{t('about.creds')}</h3>
				<ul>
					{#each credentials as c}
						<li>
							<span class="cname">{c.name}</span>
							<span class="cissuer mono-label">{c.issuer} · {c.year}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="timeline" data-reveal>
				{#each timeline as t}
					<div class="tl-row">
						<span class="when mono-label">{t.when}</span>
						<span class="what">{t.what}</span>
						<span class="where mono-label">{t.where}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: clamp(40px, 6vw, 96px);
		align-items: start;
	}

	.col-label {
		position: sticky;
		top: 110px;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	.bigline {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(36px, 4.8vw, 66px);
		line-height: 1.06;
		letter-spacing: -0.02em;
	}

	.bigline em {
		font-style: italic;
		color: var(--accent);
		text-shadow: 0 0 40px rgba(201, 242, 79, 0.15);
	}

	.col-body {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	.lede {
		font-size: 17px;
		line-height: 1.7;
	}

	.facts {
		margin-top: 18px;
		border-top: 1px solid var(--line);
		display: flex;
		flex-direction: column;
	}

	.fact {
		display: grid;
		grid-template-columns: 130px 1fr;
		gap: 20px;
		padding: 14px 0;
		border-bottom: 1px solid var(--line);
		font-size: 14px;
		transition: color 0.25s ease;
	}
	
	@media (hover: hover) {
		.fact:hover {
			color: var(--ink);
		}
	}

	.skills {
		margin-top: 18px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.chip {
		font-size: 10.5px;
		border: 1px solid var(--line);
		border-radius: 4px;
		padding: 5px 12px;
		transition:
			border-color 0.25s ease,
			color 0.25s ease,
			background 0.25s ease;
	}

	@media (hover: hover) {
		.chip:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
	}

	.credentials {
		margin-top: 30px;
	}

	.creds-head {
		margin-bottom: 12px;
		color: var(--accent);
	}

	.credentials ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.credentials li {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 16px;
		padding: 10px 0;
		border-bottom: 1px solid var(--line);
		font-size: 13.5px;
		flex-wrap: wrap;
	}

	.cissuer {
		font-size: 10px;
		opacity: 0.55;
		white-space: nowrap;
	}

	.timeline {
		margin-top: 26px;
		border-top: 1px solid var(--line);
		position: relative;
		padding-left: 16px;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 1px;
		background: var(--line);
	}

	.tl-row {
		display: grid;
		grid-template-columns: 90px 1fr auto;
		gap: 18px;
		padding: 13px 0;
		border-bottom: 1px solid var(--line);
		font-size: 14px;
		align-items: baseline;
	}

	.when {
		font-size: 10.5px;
		opacity: 0.6;
		color: var(--accent);
		font-feature-settings: 'tnum';
	}

	.where {
		font-size: 10.5px;
		opacity: 0.55;
		text-align: right;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.col-label {
			position: static;
		}
		.tl-row {
			grid-template-columns: 1fr;
			gap: 4px;
		}
		.where {
			text-align: left;
		}
	}
</style>
