export type Project = {
	index: string;
	title: string;
	desc: string;
	tags: string[];
	year: string;
	href?: string;
	external?: boolean;
	note?: string;
};

export const projects: Project[] = [
	{
		index: '01',
		title: 'Golden Path',
		desc: 'Production platform on Azure AKS, deployed GitOps-style. Terraform for infrastructure, GitHub Actions + OIDC for CI/CD, Trivy in the pipeline, Prometheus/Grafana for observability.',
		tags: ['Terraform', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'OIDC', 'Trivy', 'Prometheus'],
		year: '2026',
		href: 'https://ilhaamghiffari.tech',
		external: true,
		note: 'LIVE'
	},
	{
		index: '02',
		title: 'Debit Andalan · Krueng Aceh',
		desc: 'F.J. Mock modeling support for a civil engineering study — Q95 debit andalan for the Indrapuri sub-DAS from NASA POWER climatology (FAO-56 ETo, rainfall series), validated against reference examples.',
		tags: ['Hydrology', 'F.J. Mock', 'FAO-56', 'ETo', 'Python'],
		year: '2025–26',
		note: 'COLLABORATION'
	},
	{
		index: '03',
		title: 'Aceh Resilience Monitor',
		desc: 'Top 20 — Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding). Food-price forecasting on PIHPS data with Prophet, MAPE 12.38%.',
		tags: ['Prophet', 'Forecasting', 'Datathon', 'Python'],
		year: '2026',
		href: 'https://github.com/aceh-resilience-monitor',
		external: true
	},
	{
		index: '04',
		title: 'DermaScan',
		desc: 'Bangkit 2024 ML capstone — machine-learning based skin-disease screening application (Dermascan-C241-PS084).',
		tags: ['Machine Learning', 'TensorFlow', 'Bangkit'],
		year: '2024',
		href: 'https://github.com/Dermascan-C241-PS084',
		external: true
	}
];

export const marqueeItems = [
	'KUBERNETES',
	'TERRAFORM',
	'ARGOCD',
	'CI/CD',
	'GITOPS',
	'DOCKER',
	'PROMETHEUS',
	'GRAFANA',
	'OIDC',
	'F.J. MOCK',
	'ETo FAO-56',
	'DEBIT ANDALAN',
	'PYTHON',
	'PROPHET'
];

export const facts: [string, string][] = [
	['LOCATION', 'Aceh, Indonesia'],
	['EDUCATION', 'S.Kom Informatics — Universitas Syiah Kuala'],
	['GPA', '3.77 / 4.00'],
	['STATUS', 'Open for internship — DevOps / Infra / Product Security'],
	['LANGUAGES', 'Indonesian (native) · English (professional)']
];

export const skills = [
	'Terraform',
	'Kubernetes',
	'ArgoCD',
	'GitHub Actions',
	'Docker',
	'Prometheus',
	'Grafana',
	'OIDC',
	'Python',
	'MongoDB',
	'Streamlit',
	'Prophet',
	'F.J. Mock',
	'ETo FAO-56',
	'Git',
	'Linux'
];

export const timeline: { when: string; what: string; where?: string }[] = [
	{ when: '2026', what: 'Top 20 Datathon — AI Impact Challenge', where: 'Microsoft Elevate × Dicoding' },
	{ when: '2026', what: 'S.Kom Informatics, GPA 3.77', where: 'Universitas Syiah Kuala' },
	{ when: '2025–26', what: 'Hydrological modeling support — F.J. Mock, Q95', where: 'Civil engineering study, Krueng Aceh' },
	{ when: '2024', what: 'ML Cohort — Bangkit Academy', where: 'DermaScan capstone' },
	{ when: 'Intern', what: 'IT Staff', where: 'BWS Sumatera I — Streamlit dashboard, MongoDB' },
	{ when: 'Academic', what: 'Lab Assistant', where: 'Big Data Lab, USK' }
];
