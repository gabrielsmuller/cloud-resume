fetch("https://l9tuqx5248.execute-api.us-east-1.amazonaws.com/counter")
    .then(response => response.json())
    .then(data => {
        document.getElementById("counter").innerText = data;
    })
    .catch(error => console.error('Error fetching counter:', error));

const translations = {
    en: {
        job_title: "Backend & Cloud Developer",
        
        summary_header: "Summary",
        summary_text: "Backend & Cloud Developer and Computer Engineering student with professional experience in backend development, data integration, IT infrastructure, and business process automation. AWS Certified Solutions Architect – Associate with hands-on experience designing serverless applications, building REST APIs, developing data pipelines, and provisioning cloud infrastructure with Terraform and CI/CD.",
        
        skills_header: "Tech Stack",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Terraform, Docker, Linux, CI/CD (GitHub Actions)",
        skills_backend: "<strong>Backend:</strong> Python, FastAPI, REST APIs, C, C++",
        skills_net: "<strong>Networking:</strong> TCP/IP, DNS, Routing, NAT, ACLs",
        skills_db: "<strong>Databases:</strong> PostgreSQL, DynamoDB",

        cloud_projects_header: "Cloud Projects",
        
        miniloom_title: "Mini Loom",
        miniloom_desc: "A serverless video-sharing platform: upload a video, get a shareable link.",
        miniloom_bullet1: "Built a serverless backend using FastAPI on AWS Lambda and API Gateway, with direct-to-S3 uploads through pre-signed URLs.",
        miniloom_bullet2: "Implemented authentication with Amazon Cognito federated to Google, Aurora Serverless PostgreSQL, and an SQS-driven Lambda worker for asynchronous thumbnail generation.",
        miniloom_bullet3: "Connected to Aurora through the RDS Data API instead of using a VPC and NAT Gateway, reducing infrastructure complexity and keeping estimated idle costs at approximately $0.70 per month.",
        miniloom_bullet4: "Provisioned the complete infrastructure with Terraform and automated deployments using GitHub Actions with OIDC authentication.",
        miniloom_link: "GitHub Repository & Documentation",

        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "A serverless resume website deployed on AWS.",
        crc_bullet1: "Deployed a secure static website using Amazon S3 and CloudFront with Origin Access Control (OAC) to restrict direct access.",
        crc_bullet2: "Built a serverless backend API using API Gateway and AWS Lambda (Python), backed by a DynamoDB visitor counter.",
        crc_bullet3: "Provisioned the infrastructure with Terraform and automated deployments using GitHub Actions.",
        crc_link: "GitHub Repository & Documentation",
        
        experience_header: "Professional Experience",
        vertys_title: "Systems Analyst (Backend Development & Infrastructure)",
        vertys_date: "| July 2022 – Present",
        vertys_bullet1: "Re-architected and migrated the legacy integration between Sankhya ERP and sales platforms to AWS, reducing average synchronization time by 93%, from 7.5 minutes to 30 seconds; built a secure web portal using Cognito, API Gateway, Lambda, CloudFront, and S3 for monitoring orders and integration data.",
        vertys_bullet2: "Designed and implemented a serverless data lake using Amazon S3, Lambda, EventBridge, Parquet, Glue, and Athena, migrating data from existing Python/PostgreSQL pipelines into structured analytical datasets; integrated Amazon Bedrock to enable natural-language business analysis over validated company data.",
        vertys_bullet3: "Deployed and maintained a secure Linux-based server environment, enabling internal file sharing and access control for more than 100 employees.",
        vertys_bullet4: "Maintained network infrastructure and resolved more than 680 technical support tickets, achieving a 4.91/5 user satisfaction rating.",

        education_header: "Education",
        edu_degree: "Bachelor of Science in Computer Engineering",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Expected Graduation: December 2026",
        
        footer_text: "You are visitor number: "
    },
    pt: {
        job_title: "Desenvolvedor Backend & Cloud",
        
        summary_header: "Resumo",
        summary_text: "Desenvolvedor Backend & Cloud e estudante de Engenharia de Computação com experiência profissional em desenvolvimento backend, integração de dados, infraestrutura de TI e automação de processos de negócios. AWS Certified Solutions Architect – Associate com experiência prática no design de aplicações serverless, criação de APIs REST, desenvolvimento de pipelines de dados e provisionamento de infraestrutura em nuvem usando Terraform e CI/CD.",
        
        skills_header: "Tecnologias",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Terraform, Docker, Linux, CI/CD (GitHub Actions)",
        skills_backend: "<strong>Backend:</strong> Python, FastAPI, APIs REST, C, C++",
        skills_net: "<strong>Redes:</strong> TCP/IP, DNS, Roteamento, NAT, ACLs",
        skills_db: "<strong>Bancos de Dados:</strong> PostgreSQL, DynamoDB",

        cloud_projects_header: "Projetos em Nuvem",
        
        miniloom_title: "Mini Loom",
        miniloom_desc: "Plataforma serverless de compartilhamento de vídeos: faça upload de um vídeo, receba um link compartilhável.",
        miniloom_bullet1: "Construção de um backend serverless utilizando FastAPI no AWS Lambda e API Gateway, com uploads diretos para o S3 por meio de URLs pré-assinadas.",
        miniloom_bullet2: "Implementação de autenticação com Amazon Cognito federado ao Google, Aurora Serverless PostgreSQL, e um worker Lambda acionado via SQS para geração assíncrona de miniaturas.",
        miniloom_bullet3: "Conexão ao Aurora através da RDS Data API em vez de utilizar uma VPC e NAT Gateway, reduzindo a complexidade da infraestrutura e mantendo os custos ociosos estimados em aproximadamente US$ 0,70 por mês.",
        miniloom_bullet4: "Provisionamento de toda a infraestrutura com Terraform e implantações automatizadas utilizando GitHub Actions com autenticação OIDC.",
        miniloom_link: "Repositório no GitHub e Documentação",

        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "Um site de currículo serverless implantado na AWS.",
        crc_bullet1: "Implantação de um site estático seguro utilizando Amazon S3 e CloudFront com Origin Access Control (OAC) para restringir o acesso direto.",
        crc_bullet2: "Construção de uma API backend serverless utilizando API Gateway e AWS Lambda (Python), conectada a um contador de visitantes no DynamoDB.",
        crc_bullet3: "Provisionamento da infraestrutura com Terraform e implantações automatizadas via GitHub Actions.",
        crc_link: "Repositório no GitHub e Documentação",
        
        experience_header: "Experiência Profissional",
        vertys_title: "Analista de Sistemas (Desenvolvimento Backend e Infraestrutura)",
        vertys_date: "| Julho 2022 – Presente",
        vertys_bullet1: "Reestruturação e migração para a AWS a integração legada entre o ERP Sankhya e as plataformas de vendas, reduzindo o tempo médio de sincronização em 93%, de 7,5 minutos para 30 segundos; desenvolvi um portal web seguro com Cognito, API Gateway, Lambda, CloudFront e S3 para monitoramento de pedidos e dados da integração.",
        vertys_bullet2: "Projeto e implementsção de um data lake serverless usando Amazon S3, Lambda, EventBridge, Parquet, Glue e Athena, migrando dados de pipelines Python/PostgreSQL existentes para conjuntos de dados analíticos estruturados; integração do Amazon Bedrock para permitir análise de negócios em linguagem natural sobre dados validados da empresa.",
        vertys_bullet3: "Implantação e manutenção de um ambiente de servidor Linux seguro, permitindo o compartilhamento interno de arquivos e controle de acesso para mais de 100 colaboradores.",
        vertys_bullet4: "Manutenção da infraestrutura de rede e resolução de mais de 680 chamados de suporte técnico, alcançando uma taxa de satisfação do usuário de 4,91/5.",

        education_header: "Formação Acadêmica",
        edu_degree: "Bacharelado em Engenharia de Computação",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Previsão de Formatura: Dezembro 2026",
        
        footer_text: "Você é o visitante número: "
    }
};

let currentLang = localStorage.getItem('preferredLang');

if (!currentLang) {
    const browserLang = navigator.language.toLowerCase();
    currentLang = browserLang.includes('pt') ? 'pt' : 'en';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.innerText = lang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN';
    }
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
}

setLanguage(currentLang);