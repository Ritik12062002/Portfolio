import {
    Briefcase,
    Calendar,
    Cloud,
    Database,
    Monitor,
    Code,
    Folder,
    Github,
    ExternalLink
} from 'lucide-react';

export const portfolioData = {
    header: {
        name: "Ritik",
        title: "DevOps Engineer",
        phone: "+91-9717437919",
        email: "ritikkumar0987@gmail.com",
        location: "New Delhi, India",
        links: {
            linkedin: "https://www.linkedin.com/in/ritik-7b3440249",
            github: "https://github.com/Ritik12062002",
            portfolio: "https://ritik-devops-portfolio.vercel.app" // Placeholder
        }
    },
    education: [
        {
            degree: "B.Tech (IT)",
            institution: "Guru Tegh Bahadur Institute of Technology",
            year: "2022 - 2025",
            location: "New Delhi, India"
        },
        {
            degree: "Diploma (Civil)",
            institution: "Pusa Institute of Technology",
            year: "2018 - 2021",
            location: "New Delhi, India"
        }
    ],
    experiences: [
        {
            company: "Zindagi Technologies",
            role: "DevOps Engineer",
            period: "Aug 2025 - Present",
            description: [
                "Orchestrated multi-cloud infrastructure on OpenStack, AWS, and GCP using Terraform and Ansible for automated provisioning.",
                "Designed robust CI/CD pipelines with GitLab CI, integrating Docker and Kubernetes for seamless microservices deployment.",
                "Implemented comprehensive monitoring and logging solutions using ELK Stack, Syslog, and OpenSearch for real-time system visibility.",
                "Managed high-performance databases including PostgreSQL and MongoDB, ensuring data integrity and availability.",
                "Integrated AI-powered monitoring tools for automated incident response and system optimization."
            ]
        },
        {
            company: "Zindagi Technologies",
            role: "DevOps Trainee",
            period: "May 2025 - Jul 2025",
            description: [
                "Designed and managed CI/CD pipelines using GitLab CI, optimizing deployment workflows.",
                "Deployed and orchestrated containerized applications using Docker and K3s (Lightweight Kubernetes).",
                "Managed OpenStack cloud infrastructure and performed database operations with PostgreSQL and MongoDB.",
                "Implemented infrastructure as code using Terraform and established backup, monitoring, and logging solutions."
            ]
        }
    ],
    projects: [
        {
            title: "Automated CI/CD Pipeline",
            description: "GitLab CI/CD pipeline with automated testing, Docker builds, and Helm deployments to Kubernetes. Features instant rollbacks and real-time Slack notifications.",
            tech: ["GitLab CI", "Docker", "Kubernetes", "Helm", "Slack"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Serverless Monitoring System",
            description: "Real-time infrastructure monitoring dashboard using Prometheus and Grafana, with alert notifications integrated into Slack via AWS Lambda.",
            tech: ["AWS Lambda", "Prometheus", "Grafana", "Terraform"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Multi-Cloud Kubernetes Cluster",
            description: "Managed high-availability Kubernetes clusters across AWS, GCP, and OpenStack using Terraform for seamless multi-cloud orchestration.",
            tech: ["Terraform", "AWS EKS", "OpenStack", "Python"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Log Aggregation Platform",
            description: "Centralized logging system collecting logs from microservices using Fluentd, storing in Elasticsearch and visualizing in Kibana.",
            tech: ["ELK Stack", "Fluentd", "Docker Compose"],
            github: "https://github.com",
            demo: "https://demo.com"
        }
    ],
    skillCategories: [
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="w-6 h-6 text-blue-500" />,
            skills: ["AWS", "GCP", "OpenStack", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab"],
            color: "border-blue-500"
        },
        {
            title: "Observability & Infra",
            icon: <Monitor className="w-6 h-6 text-emerald-500" />,
            skills: ["Prometheus", "Grafana", "ELK Stack", "OpenSearch", "Syslog", "Fluentbit", "Redis", "Kafka", "Linux", "Nginx"],
            color: "border-emerald-500"
        },
        {
            title: "Backend & Development",
            icon: <Code className="w-6 h-6 text-purple-500" />,
            skills: ["Python", "FastAPI", "Bash Scripting", "Git", "GitHub"],
            color: "border-purple-500"
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6 text-yellow-500" />,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"],
            color: "border-yellow-500"
        }
    ],
    achievements: [
        "Solved Over 200+ problems on LeetCode.",
        "Having more than 3 badges on LeetCode.",
        "Mentored more than 50 Juniors for different Technical fields."
    ],
    languages: [
        { name: "English", level: "Professional Proficiency" },
        { name: "Hindi", level: "Native Proficiency" }
    ]
};
