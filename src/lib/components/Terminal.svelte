<script lang="ts">
	import { onMount } from 'svelte';
	import { projects, skills } from '$lib/data';
	import { t } from '$lib/i18n.svelte';

	let lines = $state<string[]>([]);
	let input = $state('');
	let booted = $state(false);
	let inputEl: HTMLInputElement;

	onMount(() => {
		boot();
	});

	const boot = () => {
		if (booted) return;
		booted = true;
		lines = ['$ whoami', t('term.welcome1'), t('term.welcome2'), t('term.welcome3')];
	};

	const run = (cmd: string) => {
		lines = [...lines, `ilhaam@lab:~$ ${cmd}`];
		switch (cmd.trim().toLowerCase()) {
			case 'help':
				lines = [
					...lines,
					'available commands:',
					'  whoami    who is behind this shell',
					'  stack     the platform stack',
					'  projects  selected projects',
					'  status    current availability',
					'  contact   reach me',
					'  clear     clear the terminal'
				];
				break;
			case 'whoami':
				lines = [...lines, t('term.whoami1'), t('term.whoami2'), t('term.whoami3')];
				break;
			case 'stack':
				lines = [...lines, skills.join('  ·  ')];
				break;
			case 'projects':
				lines = [...lines, ...projects.map((p) => `- ${p.title} (${p.year}) — ${p.tags.slice(0, 3).join(' · ')}`)];
				break;
			case 'status':
				lines = [...lines, t('term.whoami3')];
				break;
			case 'contact':
				lines = [
					...lines,
					'email:    ghiffariilhaam@gmail.com',
					'github:   github.com/IlhaamGhiffari',
					'linkedin: linkedin.com/in/ilhaam-ghiffari'
				];
				break;
			case 'clear':
				lines = [];
				break;
			default:
				lines = [...lines, t('term.notFound').replace('{cmd}', cmd)];
		}
	};

	const submit = () => {
		if (!input.trim()) return;
		run(input);
		input = '';
	};
</script>

<div
	class="term"
	role="button"
	tabindex="-1"
	onclick={() => inputEl?.focus()}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			inputEl?.focus();
		}
	}}
>
	<div class="body" data-lenis-prevent>
		{#each lines as l}
			<p class={l.startsWith('$') || l.startsWith('ilhaam@') ? 'cmd' : ''}>{l}</p>
		{/each}
		<form
			onsubmit={(e) => {
				e.preventDefault();
				submit();
			}}
		>
			<span class="prompt">ilhaam@lab:~$</span>
			<input
				bind:this={inputEl}
				bind:value={input}
				placeholder="type 'help'"
				aria-label="Terminal input"
				autocomplete="off"
				spellcheck="false"
			/>
		</form>
	</div>
</div>

<style>
	.term {
		border: 1px solid var(--line);
		background: var(--bg-soft);
		overflow: hidden;
		font-family: var(--font-mono);
	}

	.body {
		padding: 20px 22px;
		height: 320px;
		overflow-y: auto;
		font-size: 12px;
		line-height: 1.8;
	}

	.body p {
		margin: 0;
		white-space: pre-wrap;
		color: var(--muted);
	}

	.body p.cmd {
		color: var(--ink);
	}

	.prompt {
		color: var(--accent);
		margin-right: 10px;
	}

	form {
		display: flex;
		align-items: center;
	}

	input {
		flex: 1;
		background: transparent;
		border: 0;
		outline: none;
		color: var(--ink);
		font-family: var(--font-mono);
		font-size: 12px;
		caret-color: var(--accent);
	}

	input::placeholder {
		color: var(--muted);
		opacity: 0.5;
	}
</style>
