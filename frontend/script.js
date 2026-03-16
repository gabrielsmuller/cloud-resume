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
        job_title: "Computer Engineer | Cloud Engineer",
        summary_header: "Summary",
        summary_text: "Computer Engineer with professional experience in IT infrastructure and backend development, currently specializing in AWS cloud architecture and infrastructure automation. Hands-on experience building serverless applications and deploying infrastructure using Terraform and CI/CD pipelines.",
        
        skills_header: "Core Competencies",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Linux, Docker, Terraform, Git, CI/CD (GitHub Actions)",
        skills_prog: "<strong>Programming:</strong> Python, C, C++",
        skills_net: "<strong>Networking:</strong> TCP/IP, DNS, Routing, NAT, ACLs",
        skills_db: "<strong>Databases:</strong> SQL, PostgreSQL, NoSQL",

        cloud_projects_header: "Cloud Projects",
        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "Developed a serverless cloud-based resume application deployed on AWS.",
        crc_bullet1: "Static website hosted on Amazon S3 and globally distributed via CloudFront with HTTPS",
        crc_bullet2: "Serverless backend implemented with AWS Lambda (Python) and Amazon API Gateway",
        crc_bullet3: "Visitor counter stored in Amazon DynamoDB and exposed through a REST API",
        crc_bullet4: "Infrastructure provisioned using Terraform with CI/CD automation via GitHub Actions",
        crc_link: "Github Repository & Documentation",
        
        experience_header: "Professional Experience",
        vertys_title: "IT Technical Analyst & Developer",
        vertys_company: "Vertys Energy Group",
        vertys_date: "| July 2023 – Present",
        vertys_bullet1: "Developed API integrations between Sankhya ERP and sales/e-commerce platforms, automating data synchronization",
        vertys_bullet2: "Designed and developed internal web applications including the company website and an e-commerce platform",
        vertys_bullet3: "Assisted in deployment of a Linux-based server and implemented secure network file shares",
        vertys_bullet4: "Maintained network infrastructure and resolved 680+ technical support tickets (4.91/5 satisfaction)",

        education_header: "Education",
        edu_degree: "Bachelor of Science in Computer Engineering",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Expected Graduation: 2026",

        other_projects_header: "Other Technical Projects",
        tcc_title: "Autonomous and Hybrid Photovoltaic Systems Sizing Algorithm",
        tcc_desc: "Developed an algorithm to optimize the sizing and efficiency of autonomous and hybrid solar energy systems.",
        web_apps_title: "Full-Stack Web Applications",
        web_apps_desc: "Development of responsive web applications using modern frontend frameworks and backend services for authentication and database integration.",
        
        footer_text: "You are visitor number: "
    },
    pt: {
        job_title: "Engenheiro de Computação | Engenheiro Cloud",
        summary_header: "Resumo",
        summary_text: "Engenheiro de Computação com experiência profissional em infraestrutura de TI e desenvolvimento backend, atualmente focando em arquitetura cloud AWS e automação de infraestrutura. Experiência prática na criação de aplicações serverless e implantação de infraestrutura utilizando Terraform e esteiras CI/CD.",
        
        skills_header: "Competências Principais",
        skills_cloud: "<strong>Cloud & DevOps:</strong> AWS, Linux, Docker, Terraform, Git, CI/CD (GitHub Actions)",
        skills_prog: "<strong>Programação:</strong> Python, C, C++",
        skills_net: "<strong>Redes:</strong> TCP/IP, DNS, Roteamento, NAT, ACLs",
        skills_db: "<strong>Bancos de Dados:</strong> SQL, PostgreSQL, NoSQL",

        cloud_projects_header: "Projetos em Nuvem",
        crc_title: "The Cloud Resume Challenge (AWS)",
        crc_desc: "Desenvolvimento de uma aplicação de currículo cloud serverless hospedada na AWS.",
        crc_bullet1: "Site estático hospedado no Amazon S3 e distribuído globalmente via CloudFront com HTTPS",
        crc_bullet2: "Backend serverless implementado com AWS Lambda (Python) e Amazon API Gateway",
        crc_bullet3: "Contador de visitantes armazenado no Amazon DynamoDB e exposto através de uma API REST",
        crc_bullet4: "Infraestrutura provisionada usando Terraform com automação de CI/CD via GitHub Actions",
        crc_link: "Repositório no Github e Documentação",
        
        experience_header: "Experiência Profissional",
        vertys_title: "Analista Técnico de TI e Desenvolvedor",
        vertys_company: "Vertys Energy Group",
        vertys_date: "| Julho 2023 – Presente",
        vertys_bullet1: "Desenvolvimento de integrações de API entre o ERP Sankhya e plataformas de vendas/e-commerce, automatizando a sincronização de dados",
        vertys_bullet2: "Design e desenvolvimento de aplicações web internas, incluindo o site da empresa e uma plataforma de e-commerce",
        vertys_bullet3: "Auxílio na implantação de um servidor Linux e implementação de compartilhamentos de arquivos seguros em rede",
        vertys_bullet4: "Manutenção da infraestrutura de rede e resolução de mais de 680 chamados de suporte técnico (satisfação de 4,91/5)",

        education_header: "Formação Acadêmica",
        edu_degree: "Bacharelado em Engenharia de Computação",
        edu_school: "Universidade Tecnológica Federal do Paraná (UTFPR) – Previsão de Formatura: 2026",

        other_projects_header: "Outros Projetos Técnicos",
        tcc_title: "Algoritmo de Dimensionamento de Sistemas Fotovoltaicos Autônomos e Híbridos",
        tcc_desc: "Desenvolvimento de um algoritmo para otimizar o dimensionamento e a eficiência de sistemas de energia solar autônomos e híbridos.",
        web_apps_title: "Aplicações Web Full-Stack",
        web_apps_desc: "Desenvolvimento de aplicações web responsivas utilizando frameworks frontend modernos e serviços backend para autenticação e integração com banco de dados.",
        
        footer_text: "Você é o visitante número: "
    }
};

let currentLang = localStorage.getItem('preferredLang') || (navigator.language.startsWith('pt') ? 'pt' : 'en');

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const toggleBtn = document.getElementById('lang-toggle');
    toggleBtn.innerText = lang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN';
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
}

// Initialize the language on page load
setLanguage(currentLang);