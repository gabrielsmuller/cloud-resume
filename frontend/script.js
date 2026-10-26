// Content is maintained in both languages; Portuguese HTML remains readable without JavaScript.
const translations = {
    "pt": {
        "job_title": "Desenvolvedor | Analista de Sistemas",
        "page_description": "Analista de Sistemas e estudante de Engenharia da Computação. Desenvolvimento web, Python, TypeScript, APIs REST, PostgreSQL e AWS.",
        "location": "Toledo, Paraná, Brasil",
        "summary_header": "Sobre",
        "summary_text": "Sou Analista de Sistemas e estudante de Engenharia da Computação na UTFPR. Trabalho com desenvolvimento de aplicações web, integração de sistemas e automação de processos. Minha base principal é Python, com experiência em React, TypeScript, SQL e AWS.",
        "experience_header": "Experiência profissional",
        "skills_header": "Competências",
        "skills_data": "<strong>Dados:</strong> SQL, dbt, ETL/ELT, modelagem dimensional, testes de qualidade, Athena, S3, Glue Data Catalog, Apache Iceberg",
        "skills_bi": "<strong>Business Intelligence:</strong> Power BI, DAX, Power Query, construção de indicadores, dashboards e atualização de dados",
        "skills_cloud": "<strong>Cloud e entrega:</strong> AWS, Terraform, GitHub Actions (CI/CD), Docker, Linux",
        "skills_backend": "<strong>Backend e integrações:</strong> Python, FastAPI, TypeScript/Deno, APIs REST, webhooks, integração de sistemas e ERP",
        "skills_practices": "<strong>Práticas:</strong> Git/GitHub, CI/CD com GitHub Actions, documentação técnica, testes automatizados, familiaridade com Kanban e Scrum",
        "skills_languages": "<strong>Idiomas:</strong> português nativo e inglês avançado (C1, autoavaliação)",
        "cloud_projects_header": "Projetos pessoais",
        "miniloom_title": "Mini Loom",
        "miniloom_desc": "Plataforma serverless de compartilhamento de vídeos: upload de arquivos e geração de links compartilháveis.",
        "miniloom_bullet1": "Backend em Python e FastAPI no AWS Lambda, com API Gateway e uploads diretos para o S3 por URLs pré-assinadas.",
        "miniloom_bullet2": "Autenticação com Cognito e Google, persistência em Aurora Serverless PostgreSQL via RDS Data API e processamento assíncrono de miniaturas com SQS, Lambda e FFmpeg.",
        "miniloom_bullet3": "Infraestrutura em Terraform e CI/CD com GitHub Actions e OIDC; testes automatizados, permissões IAM restritas e fila de mensagens não processadas (DLQ).",
        "miniloom_link": "Código e documentação no GitHub",
        "crc_title": "Cloud Resume Challenge",
        "crc_desc": "Este site também é um projeto de arquitetura serverless na AWS.",
        "crc_bullet1": "Frontend em S3 e CloudFront, com Origin Access Control para restringir o acesso direto ao bucket.",
        "crc_bullet2": "Contador de visitantes com API Gateway, Lambda em Python e DynamoDB.",
        "crc_bullet3": "Infraestrutura em Terraform e publicação do frontend com GitHub Actions, sincronização no S3 e invalidação de cache do CloudFront.",
        "crc_link": "Código e documentação no GitHub",
        "education_header": "Formação e certificação",
        "edu_degree": "Bacharelado em Engenharia da Computação",
        "edu_school": "Universidade Tecnológica Federal do Paraná (UTFPR) | Conclusão prevista: dezembro de 2026",
        "cert_date": "Obtida em fevereiro de 2026 | Válida até fevereiro de 2029",
        "cert_link": "Ver credencial no Credly",
        "footer_text": "Você é o visitante número: ",
        "counter_loading": "Carregando...",
        "counter_unavailable": "Indisponível",
        "toggle_label": "Switch to English",
        "skills_frontend": "<strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Vite, Tailwind CSS",
        "skills_databases": "<strong>Bancos de dados:</strong> PostgreSQL, Supabase, DynamoDB",
        "analyst_title": "Analista de Sistemas",
        "analyst_date": "Junho de 2026 - atual",
        "analyst_bullet1": "Desenvolvi em Python a integração entre as APIs do ERP Sankhya e da Solaryum. Concluí a rearquitetura com a equipe interna, reduzindo o intervalo de sincronização de 15 para 1 minuto e o tempo médio de 7,5 minutos para 30 segundos, uma redução de aproximadamente 93%.",
        "analyst_bullet2": "Implementei controle de execuções simultâneas, rastreabilidade em DynamoDB, tratamento de falhas, alertas e portal web autenticado para monitoramento. Utilizei Terraform e GitHub Actions para infraestrutura e implantação na AWS.",
        "analyst_bullet3": "Estruturei a organização de TI da Vertys no GitHub e a adoção do Git nos projetos do setor, centralizando o versionamento e viabilizando o desenvolvimento colaborativo.",
        "analyst_bullet4": "Construí uma plataforma de dados com SQL, dbt e Athena, incluindo fatos, dimensões e testes de reconciliação com relatórios do ERP. Automatizei a carga diária com Step Functions, Lambda, S3 e Glue Data Catalog.",
        "analyst_bullet5": "Desenvolvi um assistente com Amazon Bedrock integrado ao WhatsApp para consultas da diretoria aos dados da empresa, com avaliação das respostas baseada em perguntas reais do negócio.",
        "datawork_title": "Desenvolvedor (freelance)",
        "datawork_date": "Março de 2026 - agosto de 2026",
        "datawork_bullet1": "Desenvolvi uma plataforma web de cursos online com React, TypeScript e Supabase/PostgreSQL, com interfaces para alunos e administração e funcionalidades de backend em TypeScript/Deno.",
        "datawork_bullet2": "Integrei a API REST do Asaas para emissão de boletos e atualização de pagamentos por webhooks. A solução está em produção, com processamento de aproximadamente R$ 10 mil em cobranças por mês.",
        "it_assistant_title": "Auxiliar de TI",
        "it_assistant_date": "Junho de 2023 - junho de 2026",
        "it_assistant_bullet1": "Desenvolvi e mantive integrações e automações em Python e SQL entre sistemas empresariais, APIs REST e o ERP Sankhya, implementando regras de negócio.",
        "it_assistant_bullet2": "Construí rotinas ETL para extrair, transformar e integrar dados de ERP, APIs, CSV e Excel, com armazenamento em PostgreSQL.",
        "it_assistant_bullet3": "Construí e mantive indicadores e dashboards no Power BI, com preparação dos dados em Power Query, medidas em DAX e configuração das atualizações.",
        "it_assistant_bullet4": "Implantei e mantive um ambiente Linux para compartilhamento de arquivos e controle de acesso para mais de 100 funcionários, além de atuar na infraestrutura de rede e no suporte interno.",
        "ibdn_title": "Desenvolvedor (freelance)",
        "ibdn_date": "Outubro de 2025 - abril de 2026",
        "ibdn_bullet1": "Desenvolvi uma plataforma de indicadores de sustentabilidade utilizada pelo IBDN e pelas empresas clientes, com React, TypeScript e Supabase/PostgreSQL.",
        "ibdn_bullet2": "Estruturei a coleta de dados por formulários preenchidos pelas empresas e implementei regras de cálculo e pontuação para transformar as respostas em indicadores ESG.",
        "ibdn_bullet3": "Disponibilizei dashboards para acompanhamento dos indicadores por empresa e período, com fluxo de revisão das informações pelo instituto.",
        "admin_assistant_title": "Assistente Administrativo — Suporte Técnico",
        "admin_assistant_date": "Junho de 2022 - junho de 2023",
        "admin_assistant_bullet1": "Prestei suporte técnico a integradores de energia solar, auxiliando na instalação e configuração de equipamentos e na resolução de problemas em sistemas fotovoltaicos.",
        "admin_assistant_bullet2": "Realizei diagnóstico de falhas e orientei os integradores nos procedimentos necessários para solucionar os problemas encontrados."
    },
    "en": {
        "job_title": "Software Developer | Systems Analyst",
        "page_description": "Systems Analyst and Computer Engineering student. Web development, Python, TypeScript, REST APIs, PostgreSQL and AWS.",
        "location": "Toledo, Paraná, Brazil",
        "summary_header": "About",
        "summary_text": "I am a Systems Analyst and Computer Engineering student at UTFPR. I work on web applications, systems integration and process automation. My main programming language is Python, with experience in React, TypeScript, SQL and AWS.",
        "experience_header": "Professional experience",
        "skills_header": "Skills",
        "skills_data": "<strong>Data:</strong> SQL, dbt, ETL/ELT, dimensional modeling, data quality tests, Athena, S3, Glue Data Catalog, Apache Iceberg",
        "skills_bi": "<strong>Business Intelligence:</strong> Power BI, DAX, Power Query, business metrics, dashboards and data refreshes",
        "skills_cloud": "<strong>Cloud and delivery:</strong> AWS, Terraform, GitHub Actions (CI/CD), Docker, Linux",
        "skills_backend": "<strong>Backend and integrations:</strong> Python, FastAPI, TypeScript/Deno, REST APIs, webhooks, systems and ERP integration",
        "skills_practices": "<strong>Practices:</strong> Git/GitHub, CI/CD with GitHub Actions, technical documentation, automated testing, familiarity with Kanban and Scrum",
        "skills_languages": "<strong>Languages:</strong> native Portuguese and advanced English (C1, self-assessed)",
        "cloud_projects_header": "Personal projects",
        "miniloom_title": "Mini Loom",
        "miniloom_desc": "A serverless video-sharing platform with file uploads and shareable links.",
        "miniloom_bullet1": "Python and FastAPI backend on AWS Lambda with API Gateway and direct-to-S3 uploads using pre-signed URLs.",
        "miniloom_bullet2": "Cognito and Google authentication, Aurora Serverless PostgreSQL through the RDS Data API, and asynchronous thumbnail processing with SQS, Lambda and FFmpeg.",
        "miniloom_bullet3": "Terraform infrastructure and GitHub Actions CI/CD with OIDC; automated tests, restricted IAM permissions and a dead-letter queue (DLQ).",
        "miniloom_link": "Code and documentation on GitHub",
        "crc_title": "Cloud Resume Challenge",
        "crc_desc": "This website is also an AWS serverless architecture project.",
        "crc_bullet1": "S3 and CloudFront frontend with Origin Access Control to restrict direct bucket access.",
        "crc_bullet2": "Visitor counter built with API Gateway, Python Lambda and DynamoDB.",
        "crc_bullet3": "Terraform infrastructure and GitHub Actions frontend deployment with S3 synchronization and CloudFront cache invalidation.",
        "crc_link": "Code and documentation on GitHub",
        "education_header": "Education and certification",
        "edu_degree": "Bachelor's degree in Computer Engineering (in progress)",
        "edu_school": "Universidade Tecnológica Federal do Paraná (UTFPR) | Expected graduation: December 2026",
        "cert_date": "Issued February 2026 | Expires February 2029",
        "cert_link": "View credential on Credly",
        "footer_text": "You are visitor number: ",
        "counter_loading": "Loading...",
        "counter_unavailable": "Unavailable",
        "toggle_label": "Mudar para português",
        "skills_frontend": "<strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Vite, Tailwind CSS",
        "skills_databases": "<strong>Databases:</strong> PostgreSQL, Supabase, DynamoDB",
        "analyst_title": "Systems Analyst",
        "analyst_date": "June 2026 - present",
        "analyst_bullet1": "Developed a Python integration between the Sankhya ERP and Solaryum APIs. Completed the re-architecture with the internal team, reducing the synchronization interval from 15 minutes to 1 minute and average synchronization time from 7.5 minutes to 30 seconds, an approximately 93% reduction.",
        "analyst_bullet2": "Implemented concurrent-execution control, DynamoDB traceability, error handling, alerts and an authenticated monitoring portal. Used Terraform and GitHub Actions for AWS infrastructure and deployments.",
        "analyst_bullet3": "Set up the Vertys IT GitHub organization and introduced Git across the team's projects, centralizing version control and enabling collaborative development.",
        "analyst_bullet4": "Built a data platform with SQL, dbt and Athena, including fact and dimension tables and reconciliation tests against ERP reports. Automated daily loads with Step Functions, Lambda, S3 and Glue Data Catalog.",
        "analyst_bullet5": "Developed an Amazon Bedrock assistant integrated with WhatsApp for directors to query company data, with response evaluation based on real business questions.",
        "datawork_title": "Freelance Developer",
        "datawork_date": "March 2026 - August 2026",
        "datawork_bullet1": "Developed an online course platform with React, TypeScript and Supabase/PostgreSQL, including student and administration interfaces and TypeScript/Deno backend functions.",
        "datawork_bullet2": "Integrated the Asaas REST API for boleto billing and payment updates through webhooks. The solution is in production, handling approximately BRL 10,000 in monthly billings.",
        "it_assistant_title": "IT Assistant",
        "it_assistant_date": "June 2023 - June 2026",
        "it_assistant_bullet1": "Developed and maintained Python and SQL integrations and automations between business systems, REST APIs and Sankhya ERP, implementing business rules.",
        "it_assistant_bullet2": "Built ETL routines to extract, transform and integrate ERP data, APIs, CSV and Excel into PostgreSQL.",
        "it_assistant_bullet3": "Built and maintained Power BI metrics and dashboards, with Power Query data preparation, DAX measures and refresh configuration.",
        "it_assistant_bullet4": "Deployed and maintained a Linux environment for file sharing and access control serving more than 100 employees, alongside network infrastructure and internal support.",
        "ibdn_title": "Freelance Developer",
        "ibdn_date": "October 2025 - April 2026",
        "ibdn_bullet1": "Developed a sustainability indicators platform used by IBDN and its client companies, with React, TypeScript and Supabase/PostgreSQL.",
        "ibdn_bullet2": "Structured data collection through company-completed forms and implemented calculation and scoring rules to turn responses into ESG indicators.",
        "ibdn_bullet3": "Provided dashboards for tracking indicators by company and period, with an information review workflow for the institute.",
        "admin_assistant_title": "Administrative Assistant — Technical Support",
        "admin_assistant_date": "June 2022 - June 2023",
        "admin_assistant_bullet1": "Provided technical support to solar installers, assisting with equipment installation and configuration and troubleshooting photovoltaic systems.",
        "admin_assistant_bullet2": "Diagnosed faults and guided installers through the procedures needed to resolve the problems encountered."
    }
};

let currentLang = "pt";
let counterState = "loading";
let visitorCount = null;

function renderCounter() {
    const counter = document.getElementById("counter");
    if (!counter) return;
    counter.textContent = counterState === "loaded"
        ? visitorCount.toLocaleString(currentLang === "pt" ? "pt-BR" : "en-US")
        : translations[currentLang][counterState === "loading" ? "counter_loading" : "counter_unavailable"];
}

function setLanguage(lang) {
    currentLang = Object.hasOwn(translations, lang) ? lang : "pt";
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
    document.title = currentLang === "pt"
        ? "Gabriel Siqueira Müller | Analista de Sistemas"
        : "Gabriel Siqueira Müller | Systems Analyst";
    document.querySelector('meta[name="description"]').content = translations[currentLang].page_description;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (Object.hasOwn(translations[currentLang], key)) {
            // Only the bundled, author-controlled skill labels contain HTML.
            if (key.startsWith("skills_") && key !== "skills_header") {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    const toggle = document.getElementById("lang-toggle");
    toggle.textContent = currentLang === "pt" ? "EN" : "PT";
    toggle.setAttribute("aria-label", translations[currentLang].toggle_label);
    try {
        localStorage.setItem("preferredLang", currentLang);
    } catch {
        // Language switching also works when browser storage is blocked.
    }
    renderCounter();
}

let savedLanguage;
try {
    savedLanguage = localStorage.getItem("preferredLang");
} catch {
    // Fall back to browser language when storage is unavailable.
}
const browserLanguage = (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
setLanguage(savedLanguage && Object.hasOwn(translations, savedLanguage) ? savedLanguage : browserLanguage);
document.getElementById("lang-toggle").addEventListener("click", () => {
    setLanguage(currentLang === "pt" ? "en" : "pt");
});

fetch("https://l9tuqx5248.execute-api.us-east-1.amazonaws.com/counter")
    .then(response => {
        if (!response.ok) throw new Error("Visitor counter request failed");
        return response.json();
    })
    .then(data => {
        const value = typeof data === "number" || typeof data === "string" ? data : data?.count;
        if (value === null || value === undefined || value === "") throw new Error("Invalid visitor count");
        visitorCount = Number(value);
        if (!Number.isSafeInteger(visitorCount) || visitorCount < 0) throw new Error("Invalid visitor count");
        counterState = "loaded";
        renderCounter();
    })
    .catch(error => {
        counterState = "unavailable";
        renderCounter();
        console.error("Error fetching counter:", error);
    });
