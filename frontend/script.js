// Content is maintained in both languages; Portuguese HTML remains readable without JavaScript.
const translations = {
    "pt": {
        "job_title": "Analista de Sistemas | Engenharia de Dados e Analytics",
        "page_description": "Analista de Sistemas e estudante de Engenharia da Computação. Experiência com Python, SQL, dbt, integração de sistemas e plataformas de dados na AWS.",
        "location": "Toledo, Paraná, Brasil",
        "summary_header": "Sobre",
        "summary_text": "Sou Analista de Sistemas e estudante de Engenharia da Computação na UTFPR. Trabalho com desenvolvimento, integração de sistemas e automação de processos, com foco atual em engenharia de dados e analytics engineering. Na Vertys Energy Group, atuo na construção de uma plataforma de dados que transforma informações do ERP Sankhya em modelos analíticos para o negócio, com dbt, SQL e AWS. Tenho certificação AWS Solutions Architect – Associate e experiência com aplicações serverless e IA generativa conectada a dados estruturados.",
        "experience_header": "Experiência profissional",
        "vertys_title": "Analista de Sistemas",
        "vertys_date": "Julho de 2022 - atual | Atuação em TI desde 2023",
        "data_heading": "Plataforma de dados e analytics",
        "data_model": "Modelei a camada analítica de vendas com dbt e SQL em star schema: fatos de notas, itens e conferências; dimensões de cliente, produto, vendedor, empresa e calendário; métricas por negócio e empresa nas granularidades dia, mês e ano.",
        "data_quality": "Implementei testes de unicidade, preenchimento e integridade referencial, além de reconciliação dos resultados com relatórios oficiais do ERP até o centavo. Traduzi regras comerciais e financeiras em modelos documentados, incluindo o tratamento de kits sem dupla contagem de receita.",
        "data_pipeline": "Construí um pipeline ELT em arquitetura medalhão na AWS, com Step Functions, Lambda, S3, Glue Data Catalog, Athena e tabelas Apache Iceberg. A carga diária atualiza as três camadas em aproximadamente 2,5 minutos, nas condições da implantação inicial. Infraestrutura em Terraform e implantação com GitHub Actions.",
        "data_ai": "Desenvolvi um assistente com Amazon Bedrock integrado ao WhatsApp para a diretoria consultar a camada ouro em linguagem natural. Novas versões são avaliadas com perguntas reais do negócio; custo estimado de US$ 0,02 por pergunta nas condições observadas.",
        "integration_heading": "Integrações e sistemas",
        "integration_impact": "Rearquitetei e implantei, com a equipe interna, a integração entre o ERP Sankhya e a plataforma Solaryum em Python e AWS serverless. O intervalo de sincronização passou de 15 para 1 minuto, e o tempo médio de 7,5 minutos para 30 segundos: redução de aproximadamente 93%.",
        "integration_ops": "Implementei controle de execuções simultâneas, rastreabilidade em DynamoDB, auditoria de falhas e alertas. O portal de monitoramento utiliza Cognito, API Gateway, Lambda, S3 e CloudFront. Terraform e GitHub Actions sustentam a infraestrutura e o deploy, com custo operacional de centavos por mês nas condições atuais.",
        "integration_etl": "Desenvolvi rotinas ETL com Python e SQL para integrar ERP, APIs, CSV e Excel a PostgreSQL e ao data lake.",
        "infra_history": "Minha atuação também inclui infraestrutura Linux para mais de 100 funcionários e resolução de mais de 680 chamados, com satisfação de 4,91/5.",
        "datawork_title": "Desenvolvedor autônomo",
        "datawork_date": "Março de 2026 - atual",
        "datawork_bullet": "Desenvolvi e mantenho a integração da API de cobranças do Asaas (boletos) com a plataforma de cursos da Data Work Informática. A solução está em produção, com cerca de R$ 10 mil em cobranças por mês.",
        "skills_header": "Competências",
        "skills_data": "<strong>Dados:</strong> SQL, dbt, modelagem dimensional, qualidade de dados, testes, ETL/ELT, arquitetura medalhão, Apache Iceberg, PostgreSQL",
        "skills_cloud": "<strong>Cloud:</strong> AWS (Athena, Glue Data Catalog, S3, Step Functions, Lambda, EventBridge, DynamoDB, Bedrock, CloudWatch, IAM), Terraform",
        "skills_backend": "<strong>Desenvolvimento:</strong> Python, FastAPI, APIs REST, integração de sistemas e ERP, Docker, Linux",
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
        "toggle_label": "Switch to English"
    },
    "en": {
        "job_title": "Systems Analyst | Data & Analytics Engineering",
        "page_description": "Systems Analyst and Computer Engineering student with experience in Python, SQL, dbt, systems integration and AWS data platforms.",
        "location": "Toledo, Paraná, Brazil",
        "summary_header": "About",
        "summary_text": "I am a Systems Analyst and Computer Engineering student at UTFPR. My experience spans software development, systems integration and process automation, with a current focus on data and analytics engineering. At Vertys Energy Group, I work on a data platform that transforms Sankhya ERP records into business-facing analytical models using dbt, SQL and AWS. I hold the AWS Solutions Architect – Associate certification and have experience with serverless applications and generative AI connected to structured data.",
        "experience_header": "Professional experience",
        "vertys_title": "Systems Analyst",
        "vertys_date": "July 2022 - present | Working in IT since 2023",
        "data_heading": "Data platform and analytics",
        "data_model": "Modeled sales data in a star schema with dbt and SQL: invoice, item and picking-check facts; customer, product, salesperson, company and calendar dimensions; daily, monthly and yearly metrics by business unit and company.",
        "data_quality": "Implemented uniqueness, not-null and referential integrity tests, plus reconciliation against official ERP reports to the cent. Translated commercial and financial rules into documented models, including kit handling without double-counting revenue.",
        "data_pipeline": "Built a medallion ELT pipeline on AWS with Step Functions, Lambda, S3, Glue Data Catalog, Athena and Apache Iceberg tables. The daily run updates all three layers in approximately 2.5 minutes under initial deployment conditions. Infrastructure is managed with Terraform and deployed with GitHub Actions.",
        "data_ai": "Developed an Amazon Bedrock assistant integrated with WhatsApp so directors can query the gold layer in natural language. New versions are evaluated against real business questions; estimated cost was US$0.02 per question under observed conditions.",
        "integration_heading": "Systems integration",
        "integration_impact": "Re-architected and deployed the Sankhya ERP–Solaryum integration with the internal team using Python and AWS serverless services. The synchronization interval fell from 15 minutes to 1 minute, and average synchronization time from 7.5 minutes to 30 seconds: an approximately 93% reduction.",
        "integration_ops": "Implemented concurrent-execution control, DynamoDB traceability, failure auditing and alerts. The monitoring portal uses Cognito, API Gateway, Lambda, S3 and CloudFront. Terraform and GitHub Actions support infrastructure and deployments, with operating costs of cents per month under current conditions.",
        "integration_etl": "Developed Python and SQL ETL routines to integrate ERP data, APIs, CSV and Excel into PostgreSQL and the data lake.",
        "infra_history": "My background also includes Linux infrastructure serving more than 100 employees and resolution of over 680 support tickets with a 4.91/5 satisfaction score.",
        "datawork_title": "Freelance Developer",
        "datawork_date": "March 2026 - present",
        "datawork_bullet": "Developed and maintain an integration between the Asaas billing API (boleto payment slips) and Data Work Informática's course platform. The solution is in production, handling approximately BRL 10,000 in monthly billings.",
        "skills_header": "Skills",
        "skills_data": "<strong>Data:</strong> SQL, dbt, dimensional modeling, data quality, testing, ETL/ELT, medallion architecture, Apache Iceberg, PostgreSQL",
        "skills_cloud": "<strong>Cloud:</strong> AWS (Athena, Glue Data Catalog, S3, Step Functions, Lambda, EventBridge, DynamoDB, Bedrock, CloudWatch, IAM), Terraform",
        "skills_backend": "<strong>Development:</strong> Python, FastAPI, REST APIs, systems and ERP integration, Docker, Linux",
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
        "toggle_label": "Mudar para português"
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
