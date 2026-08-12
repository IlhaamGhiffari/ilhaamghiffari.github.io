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
		'about.big1': 'Engineer by trade,',
		'about.big2': 'curious',
		'about.big3': 'by default.',
		'about.p1': "I'm Ilhaam — a platform engineer from Aceh, Indonesia, with a S.Kom in Informatics from Universitas Syiah Kuala (GPA 3.77). I build cloud infrastructure that ships: Terraform, Kubernetes, GitOps with ArgoCD, CI/CD secured by OIDC, and observability on top.",
		'about.p2': 'Recently, my team placed Top 20 at the Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding) — forecasting food prices for disaster resilience.',
		'fact.location': 'Location',
		'fact.education': 'Education',
		'fact.gpa': 'GPA',
		'fact.status': 'Status',
		'fact.languages': 'Languages',
		'fact.statusValue': 'Open for internship — DevOps / Infra / Product Security',
		'about.creds': 'Credentials',
		'blog.head1': 'Writing — 01',
		'work.head1': 'Selected work — 04',
		'contact.h1': 'Have a project,',
		'contact.h2': 'or an opening?',
		'contact.foot2': 'Built with SvelteKit · Deployed via GitHub Actions',
		'term.welcome1': 'ilhaam — platform engineer, aceh ID',
		'term.welcome2': 'welcome to my interactive resume',
		'term.welcome3': "type 'help' to see commands",
		'term.helpIntro': 'available commands:',
		'term.whoami1': 'ilhaam — platform engineer from aceh, indonesia',
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
		'hero.ctaWork': 'Proyek terpilih',
		'hero.ctaAbout': 'Tentang',
		'hero.status': 'Terbuka untuk magang — 2026',
		'about.big1': 'Insinyur platform,',
		'about.big2': 'penasaran',
		'about.big3': 'secara alami.',
		'about.p1': 'Saya Ilhaam — platform engineer dari Aceh, Indonesia, S.Kom Informatika Universitas Syiah Kuala (IPK 3.77). Saya membangun infrastruktur cloud yang benar-benar berjalan: Terraform, Kubernetes, GitOps dengan ArgoCD, CI/CD yang diamankan OIDC, dan observability di atasnya.',
		'about.p2': 'Baru-baru ini tim saya masuk Top 20 Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding) — memprediksi harga pangan untuk ketahanan bencana.',
		'fact.location': 'Lokasi',
		'fact.education': 'Pendidikan',
		'fact.gpa': 'IPK',
		'fact.status': 'Status',
		'fact.languages': 'Bahasa',
		'fact.statusValue': 'Terbuka untuk magang — DevOps / Infra / Product Security',
		'about.creds': 'Sertifikasi',
		'blog.head1': 'Tulisan — 01',
		'work.head1': 'Proyek terpilih — 04',
		'contact.h1': 'Punya proyek,',
		'contact.h2': 'atau lowongan?',
		'contact.foot2': 'Dibangun dengan SvelteKit · Deploy via GitHub Actions',
		'term.welcome1': 'ilhaam — platform engineer, aceh ID',
		'term.welcome2': 'selamat datang di resume interaktif saya',
		'term.welcome3': "ketik 'help' untuk daftar perintah",
		'term.helpIntro': 'perintah yang tersedia:',
		'term.whoami1': 'ilhaam — platform engineer dari aceh, indonesia',
		'term.whoami2': 's.kom informatika (usyiah) · ipk 3.77',
		'term.whoami3': 'terbuka untuk magang: devops / infra / product security',
		'term.notFound': "perintah tidak dikenal: {cmd} — coba 'help'",
		'cs.back': '← Semua proyek',
		'cs.problem': 'Masalah',
		'cs.approach': 'Pendekatan',
		'cs.results': 'Hasil',
		'cs.stack': 'Teknologi',
		'cs.visitLive': 'Demo live — sesuai permintaan ↗',
		'cs.repoNote': 'Repo: privat — rencana publish',
		'cs.readPost': 'Baca artikel →',
		'cs.archLabel': 'Arsitektur — Azure AKS + GitOps'
	}
};

export function t(key: string): string {
	return dict[lang.value][key] ?? key;
}

export function setLang(l: Lang) {
	lang.value = l;
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
