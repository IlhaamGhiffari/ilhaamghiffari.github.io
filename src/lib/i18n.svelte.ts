export type Lang = 'en' | 'id';

export const lang = $state<{ value: Lang }>({ value: 'en' });

const dict: Record<Lang, Record<string, string>> = {
	en: {
		'nav.work': 'Work',
		'nav.about': 'About',
		'nav.blog': 'Blog',
		'nav.contact': 'Contact',
		'nav.resume': 'Resume',
		'hero.ctaWork': 'Selected work',
		'hero.ctaAbout': 'About',
		'hero.status': 'Open for internship — 2026',
		'about.big1': 'I question',
		'about.big2': 'the defaults',
		'about.big3': 'for a living.',
		'about.p1': "I'm Ilhaam — platform engineer, S.Kom in Informatics from Universitas Syiah Kuala. I build cloud infrastructure that actually ships, most of it on a student cloud budget. That sounds like a constraint. It's honestly a great teacher: cost awareness, GitOps discipline, and a cluster that's stopped when it's not being demoed.",
		'about.p2': 'Recently, my team placed Top 20 at the Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding) — forecasting food prices for disaster resilience.',
		'fact.education': 'Education',
		'fact.gpa': 'GPA',
		'fact.status': 'Status',
		'fact.languages': 'Languages',
		'fact.statusValue': 'Open for internship — DevOps / Infra / Product Security',
		'about.creds': 'Credentials',
		'blog.head1': 'Writing — 01',
		'work.head1': 'Selected work — 03',
		'contact.h1': 'Have a project,',
		'contact.h2': 'or an opening?',
		'term.welcome1': 'ilhaam — platform engineer',
		'term.welcome2': 'welcome to my interactive resume',
		'term.welcome3': "type 'help' to see commands",
		'term.helpIntro': 'available commands:',
		'term.whoami1': 'ilhaam — platform engineer',
		'term.whoami2': 's.kom informatics (usyiah) · gpa 3.77',
		'term.whoami3': 'open for internship: devops / infra / product security',
		'term.notFound': "command not found: {cmd} — try 'help'",
		'cs.back': '← All work',
		'cs.problem': 'Problem',
		'cs.approach': 'Approach',
		'cs.results': 'Results',
		'cs.stack': 'Stack',
		'cs.visitLive': 'Live demo — on request ↗',
		'cs.repoNote': 'Repo: private — publish planned',
		'cs.readPost': 'Read the write-up →',
		'cs.archLabel': 'Architecture — Azure AKS + GitOps'
	},
	id: {
		'nav.work': 'Proyek',
		'nav.about': 'Tentang',
		'nav.blog': 'Blog',
		'nav.contact': 'Kontak',
		'nav.resume': 'Resume',
		'hero.ctaWork': 'Proyek pilihan',
		'hero.ctaAbout': 'Tentang saya',
		'hero.status': 'Terbuka untuk internship — 2026',
		'about.big1': 'Mempertanyakan',
		'about.big2': 'standar bawaan',
		'about.big3': 'sudah jadi keseharian saya.',
		'about.p1': 'Saya Ilhaam — platform engineer, S.Kom Informatika dari Universitas Syiah Kuala. Saya membangun infrastruktur cloud yang beneran rilis, dan sebagian besar pakai budget cloud mahasiswa. Kedengarannya memang terbatas, tapi jujur ini guru yang hebat: bikin lebih sadar biaya, disiplin pakai GitOps, dan terbiasa mematikan cluster kalau tidak sedang didemokan.',
		'about.p2': 'Baru-baru ini, tim saya masuk Top 20 di Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding) — memprediksi harga pangan untuk ketahanan bencana.',
		'fact.education': 'Pendidikan',
		'fact.gpa': 'IPK',
		'fact.status': 'Status',
		'fact.languages': 'Bahasa',
		'fact.statusValue': 'Terbuka untuk internship — DevOps / Infra / Product Security',
		'about.creds': 'Sertifikasi',
		'blog.head1': 'Tulisan — 01',
		'work.head1': 'Proyek pilihan — 03',
		'contact.h1': 'Ada proyek,',
		'contact.h2': 'atau info lowongan?',
		'term.welcome1': 'ilhaam — platform engineer',
		'term.welcome2': 'selamat datang di resume interaktif saya',
		'term.welcome3': "ketik 'help' untuk melihat daftar perintah",
		'term.helpIntro': 'perintah yang tersedia:',
		'term.whoami1': 'ilhaam — platform engineer',
		'term.whoami2': 's.kom informatika (usk) · ipk 3.77',
		'term.whoami3': 'terbuka untuk internship: devops / infra / product security',
		'term.notFound': "perintah tidak ditemukan: {cmd} — coba ketik 'help'",
		'cs.back': '← Semua proyek',
		'cs.problem': 'Masalah',
		'cs.approach': 'Pendekatan',
		'cs.results': 'Hasil',
		'cs.stack': 'Stack',
		'cs.visitLive': 'Live demo — tersedia jika diminta ↗',
		'cs.repoNote': 'Repo: private — ada rencana di-publish',
		'cs.readPost': 'Baca write-up →',
		'cs.archLabel': 'Arsitektur — Azure AKS + GitOps'
	}
};

export function t(key: string): string {
	return dict[lang.value][key] ?? key;
}

export function setLang(l: Lang) {
	lang.value = l;
	if (typeof document !== 'undefined') {
		document.documentElement.lang = l;
	}
	try {
		localStorage.setItem('lang', l);
	} catch {
		/* private mode etc. */
	}
}

export function toggleLang() {
	setLang(lang.value === 'en' ? 'id' : 'en');
}

if (typeof localStorage !== 'undefined') {
	const saved = localStorage.getItem('lang');
	if (saved === 'en' || saved === 'id') lang.value = saved;
}
