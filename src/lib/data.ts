export type CaseStudy = {
	problem: string;
	approach: string;
	results: string[];
	stack: string[];
};

export type Project = {
	index: string;
	title: string;
	desc: string;
	tags: string[];
	year: string;
	href?: string;
	external?: boolean;
	note?: string;
	slug?: string;
	caseStudy?: CaseStudy;
};

export const projects: Project[] = [
	{
		index: '01',
		title: 'Golden Path',
		desc: 'Production platform on Azure AKS, deployed GitOps-style. Terraform for infrastructure, GitHub Actions + OIDC for CI/CD, Trivy in the pipeline, Prometheus/Grafana for observability.',
		tags: ['Terraform', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'OIDC', 'Trivy', 'Prometheus'],
		year: '2026',
		slug: 'golden-path',
		note: 'ON DEMAND',
		caseStudy: {
			problem:
				'A real platform-engineering showcase — not a toy demo. The goal: a production-grade platform on a public cloud, deployed entirely through GitOps and CI/CD, with real observability. It runs on demand — the cluster is started for demos and stopped afterwards, keeping a student cloud budget near zero.',
			approach:
				'Azure infrastructure provisioned with Terraform (AKS, networking, identity). GitHub Actions builds and ships with OIDC federation — no long-lived cloud credentials. ArgoCD watches the Git repo and syncs the cluster to the declared state. Trivy scans images in the pipeline. Prometheus + Grafana collect and visualize cluster metrics.',
			results: [
				'Phases 1–3 shipped end-to-end on Azure AKS — live demo on request',
				'Push to main → built, scanned, and deployed with zero manual steps',
				'Everything as code: infrastructure, deployment, and configuration',
				'Cloud credentials replaced by short-lived OIDC tokens'
			],
			stack: [
				'Terraform',
				'Azure AKS',
				'Kubernetes',
				'ArgoCD',
				'GitHub Actions',
				'OIDC',
				'Trivy',
				'Prometheus',
				'Grafana'
			]
		}
	},
	{
		index: '02',
		title: 'Aceh Resilience Monitor',
		desc: 'Top 20 — Datathon AI Impact Challenge 2026 (Microsoft Elevate × Dicoding). Food-price forecasting on PIHPS data with Prophet, MAPE 12.38%.',
		tags: ['Prophet', 'Forecasting', 'Datathon', 'Python'],
		year: '2026',
		href: 'https://github.com/aceh-resilience-monitor',
		external: true
	},
	{
		index: '03',
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
	'PYTHON',
	'PROPHET'
];

export const facts: [string, string][] = [
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
	'Git',
	'Linux'
];

export const credentials: { name: string; issuer: string; year: string }[] = [
	{ name: 'Machine Learning Cohort', issuer: 'Bangkit Academy', year: '2024' },
	{ name: 'DevOps, Cloud, and Agile Foundations', issuer: 'IBM', year: '2026' },
	{ name: 'TensorFlow Developer Professional Certificate', issuer: 'DeepLearning.AI', year: '2024' },
	{ name: 'Mathematics for Machine Learning and Data Science', issuer: 'DeepLearning.AI', year: '2024' },
	{ name: 'TensorFlow: Advanced Techniques', issuer: 'DeepLearning.AI', year: '2024' },
	{ name: 'TensorFlow: Data and Deployment', issuer: 'DeepLearning.AI', year: '2024' },
	{ name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI · Stanford Online', year: '2024' },
	{ name: 'Crash Course on Python', issuer: 'Google', year: '2024' },
	{ name: 'Using Python to Interact with the Operating System', issuer: 'Google', year: '2024' },
	{ name: 'Introduction to Git and GitHub', issuer: 'Google', year: '2024' }
];

export const timeline: { when: string; what: string; where?: string }[] = [
	{ when: '2026', what: 'Top 20 Datathon — AI Impact Challenge', where: 'Microsoft Elevate × Dicoding' },
	{ when: '2026', what: 'S.Kom Informatics, GPA 3.77', where: 'Universitas Syiah Kuala' },
	{ when: '2024', what: 'ML Cohort — Bangkit Academy', where: 'DermaScan capstone' },
	{ when: 'Intern', what: 'IT Staff', where: 'BWS Sumatera I — Streamlit dashboard, MongoDB' },
	{ when: 'Academic', what: 'Lab Assistant', where: 'Big Data Lab, USK' }
];
