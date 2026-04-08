// Fetch the visitor counter from API Gateway
fetch("https://l9tuqx5248.execute-api.us-east-1.amazonaws.com/counter")
    .then(response => response.json())
    .then(data => {
        document.getElementById("counter").innerText = data;
    })
    .catch(error => console.error('Error fetching counter:', error));

// Translations for English and Portuguese
const translations = {
    en: {
        job_title: "Cloud Engineer | Backend Developer",
        
        summary_header: "Summary",
        summary_text: "Computer Engineer with professional experience in IT infrastructure and backend development, focused on AWS cloud architecture and infrastructure automation. Hands-on experience designing and deploying serverless applications, building APIs, and provisioning infrastructure using Terraform and CI/CD pipelines.",
        
        skills_header: "Tech Stack",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Terraform, Docker, Linux, CI/CD (GitHub Actions)",
        skills_backend: "<strong>Backend:</strong> Python, REST APIs, C, C++",
        skills_net: "<strong>Networking:</strong> TCP/IP, DNS, Routing, NAT, ACLs",
        skills_db: "<strong>Databases:</strong> PostgreSQL, SQL, NoSQL (DynamoDB)",

        cloud_projects_header: "Cloud Projects",
        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "Built and deployed a serverless cloud-based resume application on AWS.",
        crc_bullet1: "Deployed a secure static website on Amazon S3 and CloudFront, using Origin Access Control (OAC) to restrict direct access.",
        crc_bullet2: "Built a serverless backend API (API Gateway, AWS Lambda/Python) to interact with a DynamoDB visitor counter.",
        crc_bullet3: "Provisioned the entire architecture using Terraform and automated deployments via GitHub Actions.",
        crc_link: "Github Repository & Documentation",
        
        experience_header: "Professional Experience",
        vertys_title: "IT Technical Analyst & Backend Developer",
        vertys_date: "| July 2022 – Present",
        vertys_bullet1: "Re-architected and replaced the legacy Sankhya ERP integration using Python, reducing average order processing time by 66% (from 15 to 5 minutes).",
        vertys_bullet2: "Designed and deployed a production e-commerce platform (<a href=\"https://vertyshome.com.br/\" target=\"_blank\">vertyshome.com.br</a>) using Vite, Python, and Supabase, featuring secure payments, authentication, and automated ERP data synchronization.",
        vertys_bullet3: "Deployed a secure Linux-based server environment for internal file sharing and access control.",
        vertys_bullet4: "Maintained network infrastructure and resolved 680+ technical support tickets (4.91/5 satisfaction rate).",

        b2b_header: "B2B Projects",
        b2b_desc: "Built production-grade web platforms for corporate clients, covering database design, backend development, and deployment.",
        b2b_bullet1: "<strong>Corporate Metrics Dashboard (<a href=\"https://ibdncertificacoes.com.br/\" target=\"_blank\">IBDN</a>):</strong> Engineered a custom platform with robust relational databases to track, manage, and allow partners to report environmental certification data securely.",
        b2b_bullet2: "<strong>E-Learning Portal (<a href=\"https://www.dataworkinformatica.com.br/\" target=\"_blank\">Data Work</a>):</strong> Developed a complete online course management system featuring secure role-based access control and integrated payment APIs.",

        education_header: "Education",
        edu_degree: "Bachelor of Science in Computer Engineering",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Expected Graduation: 2026",
        
        footer_text: "You are visitor number: "
    },
    pt: {
        job_title: "Engenheiro Cloud | Desenvolvedor Backend",
        
        summary_header: "Resumo",
        summary_text: "Engenheiro de Computação com experiência profissional em infraestrutura de TI e desenvolvimento backend, focado em arquitetura cloud AWS e automação de infraestrutura. Experiência prática na projeção e implantação de aplicações serverless, criação de APIs e provisionamento de infraestrutura usando Terraform e pipelines CI/CD.",
        
        skills_header: "Tecnologias",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Terraform, Docker, Linux, CI/CD (GitHub Actions)",
        skills_backend: "<strong>Backend:</strong> Python, APIs REST, C, C++",
        skills_net: "<strong>Redes:</strong> TCP/IP, DNS, Roteamento, NAT, ACLs",
        skills_db: "<strong>Bancos de Dados:</strong> PostgreSQL, SQL, NoSQL (DynamoDB)",

        cloud_projects_header: "Projetos em Nuvem",
        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "Desenvolvimento e implantação de uma aplicação de currículo cloud serverless na AWS.",
        crc_bullet1: "Implantação de um site estático seguro no Amazon S3 e CloudFront, usando Origin Access Control (OAC) para restringir o acesso direto.",
        crc_bullet2: "Construção de uma API backend serverless (API Gateway, AWS Lambda/Python) para interagir com um contador de visitantes no DynamoDB.",
        crc_bullet3: "Provisionamento de toda a arquitetura usando Terraform e implantações automatizadas via GitHub Actions.",
        crc_link: "Repositório no Github e Documentação",
        
        experience_header: "Experiência Profissional",
        vertys_title: "Analista Técnico de TI e Desenvolvedor Backend",
        vertys_date: "| Julho 2022 – Presente",
        vertys_bullet1: "Rearquitetura e substituição da integração legada do ERP Sankhya usando Python, reduzindo o tempo médio de processamento de pedidos em 66% (de 15 para 5 minutos).",
        vertys_bullet2: "Projeção e implantação de uma plataforma de e-commerce em produção (<a href=\"https://vertyshome.com.br/\" target=\"_blank\">vertyshome.com.br</a>) usando Vite, Python e Supabase, com pagamentos seguros, autenticação e sincronização automatizada de dados do ERP.",
        vertys_bullet3: "Implantação de um ambiente de servidor baseado em Linux seguro para compartilhamento interno de arquivos e controle de acesso.",
        vertys_bullet4: "Manutenção da infraestrutura de rede e resolução de mais de 680 chamados de suporte técnico (taxa de satisfação de 4,91/5).",

        b2b_header: "Projetos B2B",
        b2b_desc: "Construção de plataformas web em nível de produção para clientes corporativos, abrangendo design de banco de dados, desenvolvimento backend e implantação.",
        b2b_bullet1: "<strong>Dashboard de Métricas Corporativas (<a href=\"https://ibdncertificacoes.com.br/\" target=\"_blank\">IBDN</a>):</strong> Engenharia de uma plataforma personalizada com bancos de dados relacionais robustos para rastrear, gerenciar e permitir que parceiros relatem dados de certificação ambiental com segurança.",
        b2b_bullet2: "<strong>Portal de E-Learning (<a href=\"https://www.dataworkinformatica.com.br/\" target=\"_blank\">Data Work</a>):</strong> Desenvolvimento de um sistema completo de gerenciamento de cursos online com controle de acesso seguro baseado em funções e APIs de pagamento integradas.",

        education_header: "Formação Acadêmica",
        edu_degree: "Bacharelado em Engenharia de Computação",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Previsão de Formatura: 2026",
        
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
    console.log("Language toggle clicked!");
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
}

setLanguage(currentLang);