<script lang="ts">
	import type { Project } from '$lib/data';
	import { t } from '$lib/i18n.svelte';

	let { data }: { data: { project: Project } } = $props();
	const p = $derived(data.project);
	const cs = $derived(p.caseStudy);
</script>

<svelte:head>
	<title>{p.title} — Ilhaam Ghiffari</title>
	<meta property="og:title" content={`${p.title} — Ilhaam Ghiffari`} />
	<meta property="og:description" content={p.desc} />
	<meta property="og:url" content={`https://ilhaamghiffari.codes/work/${p.slug}`} />
</svelte:head>

<section class="section case">
	<a class="back mono-label" href="/#work" data-cursor>{t('cs.back')}</a>

	<header class="head">
		<span class="mono-label">Project {p.index} — {p.year}</span>
		{#if p.note}<span class="note mono-label">{p.note}</span>{/if}
	</header>

	<h1 class="title">{p.title}</h1>
	<p class="desc">{p.desc}</p>

	<div class="links">
		<a class="live" href="https://ilhaamghiffari.tech" target="_blank" rel="noreferrer noopener" data-cursor>
			{t('cs.visitLive')}
		</a>
		<span class="mono-label">{t('cs.repoNote')}</span>
		<a class="post" href="/blog/deploying-golden-path" data-cursor>{t('cs.readPost')}</a>
	</div>

	{#if cs}
		<div class="grid">
			<div class="block" data-reveal>
				<h3 class="mono-label">{t('cs.problem')}</h3>
				<p>{cs.problem}</p>
			</div>
			<div class="block" data-reveal>
				<h3 class="mono-label">{t('cs.approach')}</h3>
				<p>{cs.approach}</p>
			</div>
		</div>

		<div class="diagram" data-reveal>
			<div class="diagram-head mono-label">{t('cs.archLabel')}</div>
			<!-- Architecture diagram: dark theme, semantic colors -->
			<svg viewBox="0 0 920 500" role="img" aria-label="Golden Path architecture diagram">
				<defs>
					<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.5" />
					</pattern>
					<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
						<path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
					</marker>
				</defs>
				<rect width="920" height="500" fill="#020617" />
				<rect width="920" height="500" fill="url(#grid)" />

				<!-- Azure boundary -->
				<rect x="580" y="40" width="300" height="330" rx="12" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="8 4" />
				<text x="595" y="62" fill="#fbbf24" font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="2">AZURE</text>

				<!-- GitHub repo -->
				<rect x="40" y="60" width="180" height="70" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" />
				<rect x="40" y="60" width="180" height="70" rx="6" fill="rgba(30,41,59,0.5)" />
				<text x="55" y="86" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">GitHub Repo</text>
				<text x="55" y="106" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9">app + infra as code</text>

				<!-- GitHub Actions -->
				<rect x="290" y="60" width="240" height="130" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
				<rect x="290" y="60" width="240" height="130" rx="6" fill="rgba(6,78,59,0.4)" />
				<text x="305" y="84" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">GitHub Actions</text>
				<text x="305" y="106" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">→ build image</text>
				<text x="305" y="122" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">→ Trivy scan</text>
				<text x="305" y="138" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">→ push + OIDC deploy</text>
				<text x="305" y="160" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="8">CI / CD pipeline</text>

				<!-- AKS -->
				<rect x="610" y="90" width="240" height="120" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5" />
				<rect x="610" y="90" width="240" height="120" rx="6" fill="rgba(120,53,15,0.3)" />
				<text x="625" y="114" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">Azure AKS</text>
				<text x="625" y="136" fill="#fbbf24" font-family="JetBrains Mono, monospace" font-size="9">pod · app</text>
				<text x="625" y="152" fill="#fbbf24" font-family="JetBrains Mono, monospace" font-size="9">service · ingress</text>
				<text x="625" y="176" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="8">Kubernetes cluster</text>

				<!-- ArgoCD -->
				<rect x="610" y="250" width="240" height="60" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
				<rect x="610" y="250" width="240" height="60" rx="6" fill="rgba(6,78,59,0.4)" />
				<text x="625" y="276" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">ArgoCD</text>
				<text x="625" y="296" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">GitOps sync · self-healing</text>

				<!-- Terraform -->
				<rect x="40" y="230" width="180" height="70" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
				<rect x="40" y="230" width="180" height="70" rx="6" fill="rgba(6,78,59,0.4)" />
				<text x="55" y="256" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">Terraform</text>
				<text x="55" y="276" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">provision Azure infra</text>

				<!-- Prometheus / Grafana -->
				<rect x="290" y="260" width="240" height="80" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
				<rect x="290" y="260" width="240" height="80" rx="6" fill="rgba(6,78,59,0.4)" />
				<text x="305" y="286" fill="#e2e8f0" font-family="JetBrains Mono, monospace" font-size="12">Prometheus · Grafana</text>
				<text x="305" y="306" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9">cluster metrics + dashboards</text>

				<!-- Arrows -->
				<line x1="220" y1="95" x2="290" y2="95" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)" />
				<line x1="530" y1="125" x2="610" y2="125" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)" />
				<line x1="130" y1="230" x2="130" y2="170" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)" />
				<line x1="220" y1="265" x2="290" y2="280" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)" />
				<line x1="730" y1="250" x2="730" y2="210" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)" />
				<line x1="410" y1="260" x2="610" y2="150" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)" />

				<!-- OIDC dashed security flow -->
				<line x1="530" y1="170" x2="620" y2="60" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#arr)" />
				<text x="440" y="50" fill="#fb7185" font-family="JetBrains Mono, monospace" font-size="9">OIDC federation — no long-lived secrets</text>

				<!-- Legend -->
				<rect x="40" y="420" width="840" height="56" rx="8" fill="none" stroke="#1e293b" stroke-width="1" />
				<rect x="56" y="436" width="12" height="12" fill="rgba(30,41,59,0.5)" stroke="#94a3b8" />
				<text x="76" y="446" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9">GitHub / external</text>
				<rect x="240" y="436" width="12" height="12" fill="rgba(6,78,59,0.4)" stroke="#34d399" />
				<text x="260" y="446" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9">CI/CD · GitOps</text>
				<rect x="420" y="436" width="12" height="12" fill="rgba(120,53,15,0.3)" stroke="#fbbf24" />
				<text x="440" y="446" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9">Azure cloud</text>
				<line x1="600" y1="442" x2="630" y2="442" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="4 4" />
				<text x="640" y="446" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9">security / identity</text>
			</svg>
		</div>

		<div class="block results" data-reveal>
			<h3 class="mono-label">{t('cs.results')}</h3>
			<ul>
				{#each cs.results as r}
					<li>{r}</li>
				{/each}
			</ul>
		</div>

		<div class="block" data-reveal>
			<h3 class="mono-label">{t('cs.stack')}</h3>
			<div class="chips">
				{#each cs.stack as s}
					<span class="chip mono-label">{s}</span>
				{/each}
			</div>
		</div>
	{/if}

	<a class="back bottom mono-label" href="/#work" data-cursor>{t('cs.back')}</a>
</section>

<style>
	.case {
		padding-top: calc(var(--section-y) + 60px);
		max-width: 1080px;
	}

	.back {
		display: inline-block;
		margin-bottom: 48px;
		color: var(--muted);
		transition: color 0.25s ease;
	}

	.back:hover {
		color: var(--accent);
	}

	.head {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 18px;
	}

	.note {
		border: 1px solid var(--accent);
		color: var(--accent);
		border-radius: 999px;
		padding: 3px 10px;
		font-size: 9px;
		letter-spacing: 0.18em;
	}

	.title {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(44px, 7vw, 96px);
		line-height: 1.0;
		letter-spacing: -0.02em;
	}

	.desc {
		margin-top: 22px;
		max-width: 640px;
		color: var(--muted);
		font-size: 15.5px;
		line-height: 1.7;
	}

	.links {
		margin-top: 28px;
		display: flex;
		align-items: center;
		gap: 24px;
		flex-wrap: wrap;
	}

	.live {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent);
		border-bottom: 1px solid var(--accent);
		padding-bottom: 4px;
	}

	.post {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink);
		border-bottom: 1px solid var(--line);
		padding-bottom: 4px;
		transition:
			border-color 0.25s ease,
			color 0.25s ease;
	}

	@media (hover: hover) {
		.post:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
	}

	.grid {
		margin-top: clamp(56px, 8vh, 88px);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(28px, 4vw, 56px);
	}

	.block h3 {
		margin-bottom: 14px;
		color: var(--accent);
	}

	.block p {
		font-size: 15px;
		line-height: 1.75;
		color: var(--ink);
	}

	.diagram {
		margin-top: clamp(56px, 8vh, 88px);
	}

	.diagram-head {
		margin-bottom: 14px;
		color: var(--muted);
	}

	.diagram svg {
		width: 100%;
		height: auto;
		border-radius: 10px;
		border: 1px solid var(--line);
	}

	.results {
		margin-top: clamp(56px, 8vh, 88px);
	}

	.results ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.results li {
		padding-left: 22px;
		position: relative;
		font-size: 15px;
		line-height: 1.6;
	}

	.results li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 8px;
		height: 8px;
		background: var(--accent);
		border-radius: 50%;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.chip {
		font-size: 10.5px;
		border: 1px solid var(--line);
		border-radius: 4px;
		padding: 5px 12px;
	}

	.back.bottom {
		margin-top: clamp(64px, 10vh, 100px);
		margin-bottom: 0;
	}

	@media (max-width: 820px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
