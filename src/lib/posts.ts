export type Post = {
	slug: string;
	title: string;
	date: string;
	readingTime: string;
	excerpt: string;
	sections: { heading?: string; body: string }[];
};

export const posts: Post[] = [
	{
		slug: 'deploying-golden-path',
		title: 'Deploying my own platform: golden-path breakdown',
		date: '2026-08-12',
		readingTime: '5 min read',
		excerpt:
			'How I built and shipped a production platform on Azure AKS — Terraform, GitHub Actions with OIDC, ArgoCD GitOps, Trivy, and Prometheus/Grafana — as a portfolio piece, not a demo.',
		sections: [
			{
				heading: 'Why build a real platform',
				body: 'Anyone can follow a tutorial and deploy a hello-world to Kubernetes. I wanted something different: a platform that is actually live, actually automated, and actually observable — so that every claim on my portfolio can be checked by anyone. Golden Path runs at ilhaamghiffari.tech, deployed entirely through CI/CD and GitOps.'
			},
			{
				heading: 'The stack, end to end',
				body: 'Terraform provisions the Azure resources — AKS cluster, networking, and identity. GitHub Actions is the CI/CD engine: on every push to main it builds the container image, scans it with Trivy, and deploys. ArgoCD watches the Git repository and syncs the cluster to the declared state — drift is corrected automatically. Prometheus scrapes cluster metrics and Grafana visualizes them.'
			},
			{
				heading: 'No long-lived cloud credentials',
				body: 'The most security-relevant decision: GitHub Actions authenticates to Azure with OIDC federation instead of storing a service principal secret. The pipeline requests a short-lived token at deploy time. There are no cloud credentials sitting in repository secrets — which is exactly the kind of practice I want to be judged on.'
			},
			{
				heading: 'Everything as code',
				body: 'Infrastructure, deployment manifests, and configuration all live in Git. A change flows: commit → pipeline → registry → ArgoCD sync → live. If a deploy drifts, ArgoCD brings it back. If the cluster dies, Terraform state knows how to rebuild it.'
			},
			{
				heading: 'What I learned',
				body: 'GitOps is not just a workflow — it changes how you debug. When something breaks in production, the first question is "what is the declared state, and where does reality differ?" — and the answer is usually visible in Git and Grafana. Also: observability pays for itself the first time you actually need it. And working within a limited Azure credit budget is a great forcing function for cost-conscious infrastructure.'
			},
			{
				heading: 'What is next',
				body: 'Publishing the repository, adding more phases (ingress hardening, secret management, CI security gates), and writing follow-up posts on specific pieces — Terraform modules, OIDC setup, and Grafana dashboards.'
			}
		]
	}
];
