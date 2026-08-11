<script lang="ts">
	import { onMount } from 'svelte';
	import { credentials, projects, skills } from '$lib/data';

	let lines = $state<string[]>([]);
	let input = $state('');
	let booted = $state(false);
	let inputEl: HTMLInputElement;

	onMount(() => boot());

	const boot = () => {
		if (booted) return;
		booted = true;
		const intro = [
			'$ whoami',
			'ilhaam — platform engineer, aceh ID',
			'',
			'welcome to my interactive resume',
			"type 'help' to see commands"
		];
		let i = 0;
		const t = setInterval(() => {
			if (i < intro.length) {
				lines = [...lines, intro[i]];
				i++;
			} else {
				clearInterval(t);
			}
		}, 200);
	};

	const run = (cmd: string) => {
		lines = [...lines, `$ ${cmd}`];
		switch (cmd.trim().toLowerCase()) {
			case 'help':
				lines = [
					...lines,
					'available commands:',
					'  whoami              about me',
					'  ls                  list files',
					'  cat <file>          read a file',
					'    skills.txt        what i work with',
					'    projects.md       selected projects',
					'    certs.txt         certifications',
					'    contact.txt       reach me',
					'  repo                github profile',
					'  clear               clear the terminal'
				];
				break;
			case 'whoami':
				lines = [
					...lines,
					'ilhaam — platform engineer from aceh, indonesia',
					's.kom informatics (usyiah) · gpa 3.77',
					'open for internship: devops / infra / product security'
				];
				break;
			case 'ls':
				lines = [...lines, 'about.txt  skills.txt  projects.md  certs.txt  contact.txt'];
				break;
			case 'cat skills.txt':
				lines = [...lines, skills.join('  ·  ')];
				break;
			case 'cat projects.md':
				lines = [...lines, ...projects.map((p) => `- ${p.title} (${p.year})`)];
				break;
			case 'cat certs.txt':
				lines = [...lines, ...credentials.map((c) => `- ${c.name} — ${c.issuer} (${c.year})`)];
				break;
			case 'cat contact.txt':
				lines = [
					...lines,
					'email:    ghiffariilhaam@gmail.com',
					'github:   github.com/IlhaamGhiffari',
					'linkedin: linkedin.com/in/ilhaam-ghiffari'
				];
				break;
			case 'repo':
				lines = [...lines, 'https://github.com/IlhaamGhiffari'];
				break;
			case 'clear':
				lines = [];
				break;
			default:
				lines = [...lines, `command not found: ${cmd} — try 'help'`];
		}
	};

	const submit = () => {
		if (!input.trim()) return;
		run(input);
		input = '';
	};
</script>

<div class="term" role="presentation" onclick={() => inputEl?.focus()}>
	<div class="bar">
		<span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
		<span class="mono-label">ilhaam@portfolio: ~</span>
	</div>
	<div class="body">
		{#each lines as l}
			<p class={l.startsWith('$') ? 'cmd' : ''}>{l}</p>
		{/each}
		<form
			onsubmit={(e) => {
				e.preventDefault();
				submit();
			}}
		>
			<span class="prompt">$</span>
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
		border-radius: 10px;
		background: rgba(12, 12, 14, 0.75);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		overflow: hidden;
		font-family: var(--font-mono);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 12px 16px;
		border-bottom: 1px solid var(--line);
	}

	.dots {
		display: flex;
		gap: 6px;
	}

	.dots i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #2a2a2e;
	}

	.dots i:nth-child(1) {
		background: #ff5f56;
		opacity: 0.7;
	}
	.dots i:nth-child(2) {
		background: #ffbd2e;
		opacity: 0.7;
	}
	.dots i:nth-child(3) {
		background: #27c93f;
		opacity: 0.7;
	}

	.body {
		padding: 16px;
		height: 320px;
		overflow-y: auto;
		font-size: 12px;
		line-height: 1.75;
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
		margin-right: 8px;
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
