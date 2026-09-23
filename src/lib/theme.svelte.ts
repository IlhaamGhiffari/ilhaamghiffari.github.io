export type Theme = 'dark' | 'light';

export const theme = $state<{ value: Theme }>({ value: 'light' });

function apply(value: Theme) {
	if (typeof document === 'undefined') return;
	document.documentElement.classList.toggle('light', value === 'light');
	const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
	if (meta) meta.content = value === 'light' ? '#f4f2ea' : '#0a0a0b';
}

export function setTheme(t: Theme) {
	theme.value = t;
	apply(t);
	try {
		localStorage.setItem('theme', t);
	} catch {
		/* private mode etc. */
	}
}

export function toggleTheme() {
	setTheme(theme.value === 'dark' ? 'light' : 'dark');
}

// Sync with the inline no-FOUC script in app.html that already set the class.
if (typeof document !== 'undefined') {
	theme.value = document.documentElement.classList.contains('light') ? 'light' : 'dark';
}