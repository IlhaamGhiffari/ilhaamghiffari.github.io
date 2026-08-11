<script lang="ts">
	import { facts, skills, timeline } from '$lib/data';
</script>

<section class="section about" id="about">
	<div class="grid">
		<div class="col-label">
			<span class="mono-label" data-reveal>About — 05</span>
			<h2 class="bigline" data-reveal>
				Engineer by trade,<br /><em>curious</em> by default.
			</h2>
		</div>

		<div class="col-body">
			<p class="lede" data-reveal>
				I'm Ilhaam — a platform engineer from Aceh, Indonesia, with a S.Kom in Informatics
				from Universitas Syiah Kuala (GPA 3.77). I build cloud infrastructure that ships:
				Terraform, Kubernetes, GitOps with ArgoCD, CI/CD secured by OIDC, and observability
				on top.
			</p>
			<p data-reveal>
				Recently, my team placed <span class="hl">Top 20</span> at the Datathon AI Impact
				Challenge 2026 (Microsoft Elevate × Dicoding), forecasting food prices for
				disaster resilience.
			</p>

			<div class="facts" data-reveal>
				{#each facts as [k, v]}
					<div class="fact">
						<span class="k mono-label">{k}</span>
						<span class="v">{v}</span>
					</div>
				{/each}
			</div>

			<div class="skills" data-reveal>
				{#each skills as s}
					<span class="chip mono-label">{s}</span>
				{/each}
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
		font-size: clamp(34px, 4.4vw, 62px);
		line-height: 1.06;
		letter-spacing: -0.01em;
	}

	.bigline em {
		font-style: italic;
		color: var(--accent);
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

	.hl {
		color: var(--accent);
		font-weight: 600;
	}

	.facts {
		margin-top: 18px;
		border-top: 1px solid var(--line);
		display: flex;
		flex-direction: column;
	}

	.fact {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 20px;
		padding: 14px 0;
		border-bottom: 1px solid var(--line);
		font-size: 14px;
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
		border-radius: 999px;
		padding: 7px 14px;
		transition:
			border-color 0.25s ease,
			color 0.25s ease,
			background 0.25s ease;
	}

	.chip:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.timeline {
		margin-top: 26px;
		border-top: 1px solid var(--line);
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
