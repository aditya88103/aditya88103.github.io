// ==========================================================================
// ADITYA RAJ - PORTFOLIO ENGINE (2026 EDITION)
// Cutting-Edge Particle Canvas, Dynamic Data Renderers, Interactive Modals
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. DATASETS
    // ----------------------------------------------------------------------

    // Projects Data
    const projectsData = [
        {
            id: "nexusllm",
            title: "NexusLLM: Distributed LLM Inference Engine",
            category: "ai-ml",
            categoryName: "AI & ML",
            date: "Feb 2026",
            snippet: "Next-generation high-throughput distributed LLM inference and serving engine built with Python, optimizing GPU utilization and token streaming.",
            description: "NexusLLM is an advanced inference optimization framework designed for distributed serving of large language models. It maximizes token generation throughput, minimizes time-to-first-token (TTFT), and supports dynamic batching and tensor parallel execution.",
            image: "",
            icon: "fas fa-network-wired",
            features: [
                "Distributed tensor-parallel pipeline execution for high-parameter LLMs",
                "Continuous dynamic request batching to reduce compute latency",
                "Streaming response architecture with low-overhead async server",
                "Benchmarked throughput improvements under concurrent load"
            ],
            tech: ["Python", "PyTorch", "Distributed Systems", "AsyncIO", "LLMs"],
            github: "https://github.com/aditya88103/nexusllm",
            demo: ""
        },
        {
            id: "nutriscan",
            title: "NutriScan Health: Food Barcode Scanner",
            category: "web-apps",
            categoryName: "Web & Apps",
            date: "Apr 2026",
            snippet: "Mobile-first web application that scans product barcodes to provide instant health scores, allergen warnings, and detailed nutritional facts using Open Food Facts.",
            description: "NutriScan Health empowers health-conscious consumers by scanning retail barcode packaging directly from the smartphone camera. It instantly retrieves product nutrition metrics, evaluates an aggregate health score, and flags ultra-processed ingredients.",
            image: "",
            icon: "fas fa-barcode",
            features: [
                "Real-time video camera barcode scanning using WebAssembly APIs",
                "Instant integration with Open Food Facts global database",
                "Health scoring algorithm breaking down macros and sugar content",
                "Allergen warnings, additive detection, and dietary suitability flags"
            ],
            tech: ["JavaScript", "HTML5 Camera API", "Open Food Facts API", "CSS3", "PWA"],
            github: "https://github.com/aditya88103/NutriScan",
            demo: "https://aditya88103.github.io/NutriScan/"
        },
        {
            id: "customer-shopping",
            title: "Customer Shopping Behavior Analytics",
            category: "bi-analytics",
            categoryName: "BI & Analytics",
            date: "Mar 2026",
            snippet: "End-to-end data analytics project analyzing 3,900 customer transactions using Python (Pandas), PostgreSQL, and Power BI for customer segmentation and revenue insights.",
            description: "A comprehensive business analytics pipeline uncovering spending behavior across demographics, product categories, and subscription statuses. Includes relational database design, automated ETL pipelines, and interactive executive reporting.",
            image: "",
            icon: "fas fa-cart-shopping",
            features: [
                "In-depth Exploratory Data Analysis (EDA) on 3,900 consumer records",
                "PostgreSQL schema optimization with complex analytical joins and subqueries",
                "Customer RFM segmentation (Recency, Frequency, Monetary value)",
                "Interactive Power BI dashboard with sales forecasting and slicers"
            ],
            tech: ["Power BI", "PostgreSQL", "Python", "Pandas", "Matplotlib", "EDA"],
            github: "https://github.com/aditya88103/Customer-Shopping-Behavior-Analytics",
            demo: ""
        },
        {
            id: "mobile-sales",
            title: "Mobile Handset Sales Executive Dashboard",
            category: "bi-analytics",
            categoryName: "BI & Analytics",
            date: "Jan 2026",
            snippet: "Executive Power BI dashboard visualizing $154M in mobile sales, brand performance benchmarking, payment preference trends, and regional metrics.",
            description: "Engineered an enterprise Power BI solution to empower retail executives with actionable insights into brand market shares (Apple, Samsung, OnePlus, Vivo), transactional behavior, and territorial margins across major Indian cities.",
            image: "assets/project_mobile_sales.jpg",
            icon: "fas fa-mobile-screen",
            features: [
                "Tracked $154M total revenue, $40K average order value, and unit velocities",
                "Dynamic time-intelligence DAX measures comparing YoY and QoQ growth",
                "Customer payment channel analytics (UPI, Credit Cards, EMI, Cash)",
                "Interactive geospatial maps showing city and state distribution"
            ],
            tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
            github: "https://github.com/aditya88103/Mobile-Handset-Sales-Dashboard",
            demo: ""
        },
        {
            id: "superstore-profit",
            title: "Super Store Sales & Profit Intelligence",
            category: "bi-analytics",
            categoryName: "BI & Analytics",
            date: "Jan 2026",
            snippet: "Multi-page retail data analytics solution evaluating profitability, discount impacts, shipping velocities, and state-wise retail margins.",
            description: "Built an end-to-end Power BI report for retail supply chain data. Identifies loss-making sub-categories, analyzes the inverse relationship between aggressive discounting and net profit margin, and models customer retention.",
            image: "assets/project_superstore.jpg",
            icon: "fas fa-store",
            features: [
                "Profitability heatmaps revealing high-margin vs loss-leading product segments",
                "Discount sensitivity analysis highlighting profit erosion thresholds",
                "State-level geospatial visualizations with hierarchical drill-downs",
                "Automated data transformations and clean star-schema modeling in Power Query"
            ],
            tech: ["Power BI", "DAX", "Data Modeling", "Geospatial Analysis", "ETL"],
            github: "https://github.com/aditya88103/Super-Store-Sales-Profit",
            demo: ""
        },
        {
            id: "bookstore-sql",
            title: "Bookstore Sales Analytics (PostgreSQL)",
            category: "python",
            categoryName: "Python & SQL",
            date: "Feb 2026",
            snippet: "PostgreSQL-driven relational database project querying Books, Customers, and Orders tables for revenue reporting and customer lifetime value.",
            description: "Designed a relational database schema and crafted optimized SQL queries to answer high-level commercial questions: repeat customer identification, genre profitability, seasonal order peaks, and inventory replenishment signals.",
            image: "assets/bookstore_sql_dashboard.jpg",
            icon: "fas fa-database",
            features: [
                "Relational schema design with primary, foreign, and indexing constraints",
                "Advanced multi-table joins, CTEs (Common Table Expressions), and window functions",
                "Customer lifetime value (LTV) calculation and cohort purchase recency",
                "Aggregated revenue reporting by genre, publication date, and geography"
            ],
            tech: ["PostgreSQL", "SQL", "Database Design", "Relational Modeling", "Analytics"],
            github: "https://github.com/aditya88103/Bookstore-Sales-Analytics-PostgreSQL-",
            demo: ""
        },
        {
            id: "uidai-analysis",
            title: "UIDAI Aadhaar Demographic & Biometric Analysis",
            category: "bi-analytics",
            categoryName: "BI & Analytics",
            date: "Jan 2026",
            snippet: "Exploratory analysis and Power BI dashboard analyzing government Aadhaar enrollment, biometric updates, and demographic changes across regions.",
            description: "Developed for the UIDAI Data Hackathon, this project analyzes massive public datasets covering enrollment volumes, demographic corrections, and biometric re-authentications across India to uncover operational bottlenecks.",
            image: "assets/uidai.jpg",
            icon: "fas fa-id-card",
            features: [
                "Multi-dataset pipeline merging enrollment, demographic, and biometric logs",
                "Regional disparity detection in biometric authentication success rates",
                "Time-series trend forecasting for seasonal surge capacity planning",
                "Actionable recommendations for citizen service center resource allocation"
            ],
            tech: ["Power BI", "Python", "Data Cleaning", "Data Modeling", "Government Open Data"],
            github: "https://github.com/aditya88103/UIDAI-DATA-",
            demo: ""
        },
        {
            id: "energy-economics",
            title: "Energy Economics & Sustainability Dataset Analysis",
            category: "python",
            categoryName: "Python & SQL",
            date: "Apr 2026",
            snippet: "Analyzes correlation between national GDP growth, carbon emissions, and renewable energy adoption across multiple international economies.",
            description: "Curated and analyzed longitudinal data comparing macroeconomic performance (GDP, energy consumption) against environmental indices (CO₂ per capita, renewable transition rate) to assess sustainable economic development trajectories.",
            image: "",
            icon: "fas fa-leaf",
            features: [
                "Statistical correlation matrices between GDP expansion and carbon decoupling",
                "Multivariate clustering grouping nations by renewable transition maturity",
                "Outlier detection identifying high-efficiency green growth benchmarks",
                "Reproducible Jupyter analysis with automated visualization exports"
            ],
            tech: ["Python", "Pandas", "NumPy", "Seaborn", "Statsmodels", "Jupyter"],
            github: "https://github.com/aditya88103/Energy-Economics-Curated-Dataset",
            demo: ""
        },
        {
            id: "global-ai-jobs",
            title: "Global AI & Data Jobs Salary Analysis",
            category: "bi-analytics",
            categoryName: "BI & Analytics",
            date: "Feb 2026",
            snippet: "Comprehensive compensation analysis of global AI, Machine Learning, and Data Science roles using Kaggle's salary benchmarks.",
            description: "Explored remuneration patterns across job titles, experience tiers (Entry, Mid, Senior, Executive), geographic hubs, and remote versus on-site contract models, producing clear visual guides for tech career planning.",
            image: "",
            icon: "fas fa-chart-line",
            features: [
                "Salary distribution curves adjusted for USD conversion and cost-of-living",
                "Experience-to-compensation escalation curves across ML Engineers vs Data Analysts",
                "Remote work salary premiums comparison across North America, Europe & Asia",
                "Clean, interactive visualization figures ready for executive briefings"
            ],
            tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
            github: "https://github.com/aditya88103/Global-AI-Data-Jobs-Analysis",
            demo: ""
        },
        {
            id: "delhi-aqi",
            title: "Delhi AQI Seasonal Air Quality Analysis",
            category: "python",
            categoryName: "Python & SQL",
            date: "Feb 2026",
            snippet: "Analyzed longitudinal Delhi Air Quality Index metrics to determine seasonal smog peaks, pollutant contributions (PM2.5, PM10, NO2), and weather impacts.",
            description: "Investigated multi-year air pollution trends in the National Capital Region. Used Pandas and Seaborn to correlate pollutant concentrations with seasonal shifts, stubble burning periods, and temperature inversion layers.",
            image: "",
            icon: "fas fa-smog",
            features: [
                "Decomposed annual cycles to isolate winter hazardous spikes",
                "Pollutant weightage breakdown: PM2.5, PM10, Carbon Monoxide, and Ozone",
                "Heatmap visualization illustrating peak pollution hours and wind speed factors",
                "Actionable environmental reporting highlighting critical mitigation windows"
            ],
            tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            github: "https://github.com/aditya88103/Delhi-AQI",
            demo: ""
        },
        {
            id: "ar-menu",
            title: "AR-Menu: Augmented Reality Interactive Dining",
            category: "web-apps",
            categoryName: "Web & Apps",
            date: "Aug 2025",
            snippet: "Interactive augmented reality digital restaurant menu allowing patrons to preview 3D dish presentations and nutritional highlights directly from browser.",
            description: "Built with modern JavaScript and WebXR / WebGL technologies, AR-Menu bridges digital menus and tangible customer visualization, boosting customer engagement and reducing dish return rates.",
            image: "",
            icon: "fas fa-cube",
            features: [
                "Browser-based AR rendering without requiring external app downloads",
                "Interactive 3D model rotation, ingredient exploration, and allergen badges",
                "Responsive mobile-first user interface with smooth touch gestures",
                "Optimized asset loading for cellular data connections"
            ],
            tech: ["JavaScript", "HTML5", "CSS3", "WebGL", "AR Concept"],
            github: "https://github.com/aditya88103/AR-menu",
            demo: ""
        },
        {
            id: "lang-translator",
            title: "Language Translator Web Application",
            category: "ai-ml",
            categoryName: "AI & ML",
            date: "Feb 2026",
            snippet: "Responsive web translation application enabling real-time multilingual text translation with clean UI and third-party AI translation endpoints.",
            description: "A snappy, zero-friction language translation platform. Features automatic language detection, cross-language dialect support, one-click clipboard copying, and speech synthesis output.",
            image: "",
            icon: "fas fa-language",
            features: [
                "Instant cross-language translation across 50+ international languages",
                "Automatic source language detection and latency-optimized API client",
                "Clean accessible interface with keyboard shortcut integration",
                "Text-to-speech audio pronunciation support"
            ],
            tech: ["Python", "REST APIs", "JavaScript", "HTML5", "CSS3"],
            github: "https://github.com/aditya88103/Lang-Translator-Webapp",
            demo: ""
        },
        {
            id: "retail-python",
            title: "Retail Sales Exploratory Data Analysis",
            category: "python",
            categoryName: "Python & SQL",
            date: "Nov 2024",
            snippet: "Exploratory data analysis of 1,000 retail transaction records utilizing Pandas, NumPy, Matplotlib, and Seaborn for pattern recognition.",
            description: "A foundational data science exploration covering data integrity assessment, missing value imputation, statistical summary distributions, and customer age group purchase preferences.",
            image: "assets/project_retail_python.jpg",
            icon: "fas fa-chart-pie",
            features: [
                "Automated missing value remediation and schema validation",
                "Univariate and bivariate statistical breakdown of sales volume",
                "Customer demographic cross-tabulation across product tiers",
                "Exported high-resolution graphical visualizations for business presentations"
            ],
            tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            github: "https://github.com/aditya88103/Retail-Sales-data-analysis",
            demo: ""
        },
        {
            id: "auto-mail-sender",
            title: "Automatic Bulk Mail Sender",
            category: "python",
            categoryName: "Python & SQL",
            date: "Mar 2026",
            snippet: "Python bulk email automation tool that reads recipient metadata from CSV files and dispatches personalized templated emails via secure SMTP.",
            description: "Engineered to eliminate manual repetitive notification workflows. Incorporates email address validation, individualized merge tags, rate limiting to avoid spam penalties, and dispatch logging.",
            image: "",
            icon: "fas fa-envelope-circle-check",
            features: [
                "Dynamic CSV ingestion with customizable placeholder interpolation",
                "Secure SMTP protocol authentication with TLS/SSL encryption",
                "Throttled sending engine preventing server rate-limit blocks",
                "Comprehensive execution log generating delivery audit trails"
            ],
            tech: ["Python", "Pandas", "SMTP Protocol", "Email Security", "Automation"],
            github: "https://github.com/aditya88103/Automatic-mail-sender",
            demo: ""
        },
        {
            id: "devconnect",
            title: "DevConnect: Project Collaboration Hub",
            category: "web-apps",
            categoryName: "Web & Apps",
            date: "Feb 2026",
            snippet: "A web platform connecting aspiring student developers, freelancers, and project owners to build applications together.",
            description: "DevConnect bridges the gap between students looking for portfolio projects and founders needing technical talent. Includes project posting, skill-based member matching, and direct contact options.",
            image: "",
            icon: "fas fa-users-gear",
            features: [
                "Interactive project directory with skill-based filtering tags",
                "Project submission forms and team capacity indicators",
                "Developer profile showcase cards with portfolio links",
                "Responsive glassmorphism UI designed for modern web browsers"
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            github: "https://github.com/aditya88103/DevConnect",
            demo: ""
        },
        {
            id: "calculator",
            title: "Modern Precision Calculator",
            category: "web-apps",
            categoryName: "Web & Apps",
            date: "Jan 2026",
            snippet: "Sleek, responsive web calculator supporting real-time mathematical expressions, keyboard input, and arithmetic history.",
            description: "Built with pure vanilla JavaScript, HTML5, and CSS3, demonstrating strong fundamentals in DOM manipulation, keyboard event listening, floating-point precision, and error boundary handling.",
            image: "assets/calculator_project.png",
            icon: "fas fa-calculator",
            features: [
                "Full keyboard input support with audio feedback cues",
                "Handling of order of operations and floating-point edge cases",
                "Clean dark mode aesthetic with responsive layout for mobile screens",
                "Zero external dependencies for lightning-fast loading speed"
            ],
            tech: ["JavaScript", "HTML5", "CSS3", "UI/UX"],
            github: "https://github.com/aditya88103/Calculator",
            demo: "https://aditya88103.github.io/Calculator/"
        }
    ];

    // Certifications & Licenses Data
    const certsData = [
        {
            title: "Certificate Of Participation",
            org: "ISRO - Indian Space Research Organisation",
            orgIcon: "fas fa-satellite",
            date: "Aug 2026",
            credId: "2026H2S06BAH-P35126",
            categories: ["data-analytics", "ai"],
            skills: ["Space Research", "Data Science", "Scientific Computing", "ISRO"],
            link: "https://certificate.hack2skill.com/verify/2026H2S06BAH-P35126"
        },
        {
            title: "LLM For Young Developers - Foundational Course",
            org: "Meta",
            orgIcon: "fab fa-meta",
            date: "Feb 2026",
            credId: "META-LLM-2026-FND",
            categories: ["ai"],
            skills: ["Large Language Models", "Generative AI", "NLP", "Prompting"],
            link: "https://www.linkedin.com/in/aditya-raj-767822271/overlay/Certifications/1295932437/treasury/?profileId=ACoAAEKB478BA29IsXxNVB5Zlnl53RCpn2RJ-Sc"
        },
        {
            title: "5-Day AI Agents Intensive Course with Google",
            org: "Google & Kaggle",
            orgIcon: "fab fa-google",
            date: "Dec 2025",
            credId: "KAGGLE-ADITYA88103-105",
            categories: ["ai"],
            skills: ["Agentic AI Development", "AI Agents", "Gemini API", "Orchestration"],
            link: "https://www.kaggle.com/certification/badges/aditya88103/105"
        },
        {
            title: "Microsoft Excel with A.I Masterclass",
            org: "SkillCourse",
            orgIcon: "fas fa-file-excel",
            date: "Jan 2026",
            credId: "SC-39252884D3",
            categories: ["data-analytics", "business-intel"],
            skills: ["Microsoft Excel", "AI Analytics", "Copilot", "Formulas & Macros"],
            link: "https://exam.skillcourse.in/student/view_certificate.php?uid=SC-39252884D3"
        },
        {
            title: "Microsoft Power BI",
            org: "SkillCourse",
            orgIcon: "fas fa-chart-pie",
            date: "Dec 2025",
            credId: "SC-2210FA6817",
            categories: ["business-intel", "data-analytics"],
            skills: ["Microsoft Power BI", "DAX", "Data Modeling", "ETL"],
            link: "https://exam.skillcourse.in/student/view_certificate.php?uid=SC-2210FA6817"
        },
        {
            title: "SQL Course (Self Learning)",
            org: "SkillCourse",
            orgIcon: "fas fa-database",
            date: "Dec 2025",
            credId: "SC-BE89525F89",
            categories: ["python-sql", "data-analytics"],
            skills: ["SQL", "DBMS", "Joins & Subqueries", "Database Design"],
            link: "https://exam.skillcourse.in/student/view_certificate.php?uid=SC-BE89525F89"
        },
        {
            title: "Tata - GenAI Powered Data Analytics Job Simulation",
            org: "Tata Group (Forage)",
            orgIcon: "fas fa-building",
            date: "Sep 2025",
            credId: "gxW7mTv5tgdTSywPL",
            categories: ["ai", "data-analytics"],
            skills: ["AI Analytics", "GenAI Consulting", "Data Cleaning", "Storytelling"],
            link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_iX4kEYHdQhs8JLNE9_1758438951174_completion_certificate.pdf"
        },
        {
            title: "Deloitte Australia - Data Analytics Job Simulation",
            org: "Deloitte (Forage)",
            orgIcon: "fas fa-briefcase",
            date: "Jun 2025",
            credId: "2JE852tZFw6wfwy6p",
            categories: ["data-analytics", "business-intel"],
            skills: ["Data Analysis", "Data Visualization", "Client Presentation", "Insights"],
            link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_iX4kEYHdQhs8JLNE9_1750680687208_completion_certificate.pdf"
        },
        {
            title: "Walmart USA - Advanced Software Engineering Simulation",
            org: "Walmart (Forage)",
            orgIcon: "fas fa-store",
            date: "Nov 2025",
            credId: "2Qc4L2pCiyZA6qnHk",
            categories: ["python-sql"],
            skills: ["Software Engineering", "Algorithms", "Data Structures", "Python"],
            link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_iX4kEYHdQhs8JLNE9_1763560604237_completion_certificate.pdf"
        },
        {
            title: "Become a Data Analyst",
            org: "LinkedIn Learning",
            orgIcon: "fab fa-linkedin",
            date: "Sep 2025",
            credId: "3f2a1b4f57adc11a48a88a758e12915c81e822483670557e6be6e2f2bc58751e",
            categories: ["data-analytics", "business-intel"],
            skills: ["Tableau", "Power BI", "Statistics", "Data Storytelling"],
            link: "https://www.linkedin.com/learning/certificates/3f2a1b4f57adc11a48a88a758e12915c81e822483670557e6be6e2f2bc58751e/?trk=share_certificate"
        },
        {
            title: "Career Essentials in Generative AI",
            org: "Microsoft & LinkedIn",
            orgIcon: "fab fa-microsoft",
            date: "Sep 2025",
            credId: "efb9214a19e597378c3436e8fe582e861898725909c6fdb6998bf1aa3ce1878e",
            categories: ["ai"],
            skills: ["Prompt Engineering", "Responsible AI", "Generative AI Foundations"],
            link: "https://www.linkedin.com/learning/certificates/efb9214a19e597378c3436e8fe582e861898725909c6fdb6998bf1aa3ce1878e/"
        },
        {
            title: "Ethics in the Age of Generative AI",
            org: "LinkedIn Learning",
            orgIcon: "fab fa-linkedin",
            date: "Sep 2025",
            credId: "040953fa1a902d942a8986a595fa4b74fceeeec245a2b11e92b7e7aa9332dd2a",
            categories: ["ai"],
            skills: ["Responsible AI", "Computer Ethics", "Governance", "AI Policy"],
            link: "https://www.linkedin.com/learning/certificates/040953fa1a902d942a8986a595fa4b74fceeeec245a2b11e92b7e7aa9332dd2a/"
        },
        {
            title: "Tableau 2024.1: Essential Training",
            org: "LinkedIn Learning",
            orgIcon: "fas fa-chart-area",
            date: "Sep 2025",
            credId: "92ae20715a38fef7101f8de4987cbef6f5372e44d6d540752e74e3fe9de90948",
            categories: ["business-intel", "data-analytics"],
            skills: ["Tableau", "Visual Analytics", "Calculated Fields", "Dashboards"],
            link: "https://www.linkedin.com/learning/certificates/92ae20715a38fef7101f8de4987cbef6f5372e44d6d540752e74e3fe9de90948/"
        },
        {
            title: "Learning Data Visualization",
            org: "LinkedIn Learning",
            orgIcon: "fas fa-chart-bar",
            date: "Sep 2025",
            credId: "9838ffff91f81f2ee038b163307a265ee894335caf227429f4a27fe9685e945b",
            categories: ["data-analytics"],
            skills: ["Data Visualization", "Data Science", "Design Principles", "Charts"],
            link: "https://www.linkedin.com/learning/certificates/9838ffff91f81f2ee038b163307a265ee894335caf227429f4a27fe9685e945b/"
        },
        {
            title: "Predictive Analytics Essential Training: Data Mining",
            org: "IIBA & LinkedIn",
            orgIcon: "fas fa-brain",
            date: "Sep 2025",
            credId: "0b890fff5797e63d72bf4055909415b9b9e7bac384e5f4248d7f11e7acdabda0",
            categories: ["ai", "data-analytics"],
            skills: ["Predictive Analytics", "Data Mining", "Machine Learning Concepts"],
            link: "https://www.linkedin.com/learning/certificates/2af256ecc54ba3ca21933f93834e96bb2dd853f0c8464df961ab23f93ff08cd5/"
        },
        {
            title: "Power BI Essential Training (2024)",
            org: "LinkedIn Learning",
            orgIcon: "fas fa-chart-line",
            date: "Sep 2025",
            credId: "39d7c0a406ecb7eb142ae244d970bc1792e2e1d9aac7b59154782ba88ab8edd4",
            categories: ["business-intel", "data-analytics"],
            skills: ["Microsoft Power BI", "Data Modeling", "DAX", "Data Exploration"],
            link: "https://www.linkedin.com/learning/certificates/39d7c0a406ecb7eb142ae244d970bc1792e2e1d9aac7b59154782ba88ab8edd4/"
        },
        {
            title: "SQL: Data Reporting and Analysis",
            org: "LinkedIn Learning",
            orgIcon: "fas fa-database",
            date: "Sep 2025",
            credId: "d2635d4135da168855ef7e4dca1467e5bdf4791ef667a46eb6ebe813bc556c95",
            categories: ["python-sql", "data-analytics"],
            skills: ["SQL", "Data Reporting", "Aggregations", "Business Analysis"],
            link: "https://www.linkedin.com/learning/certificates/d2635d4135da168855ef7e4dca1467e5bdf4791ef667a46eb6ebe813bc556c95/"
        },
        {
            title: "Complete Guide to R: Wrangling, Visualizing, and Modeling Data",
            org: "PMI (Project Management Institute)",
            orgIcon: "fas fa-certificate",
            date: "Sep 2025",
            credId: "357562552cad8e7dd4b8f1971eb9232bddc01843645e1d53d8da14f266fd5267",
            categories: ["data-analytics", "python-sql"],
            skills: ["R Programming", "Data Wrangling", "Statistical Modeling", "ggplot2"],
            link: "https://www.linkedin.com/learning/certificates/f9257dbdbe7d21283e876e2e282f093d3b28300c079641a68bc370ce75f61eb5/"
        },
        {
            title: "The Non-Technical Skills of Effective Data Scientists",
            org: "NASBA",
            orgIcon: "fas fa-user-tie",
            date: "Sep 2025",
            credId: "d96b96032aa1edcd5f624fecf223189c362759c9b1bb7bb4d3200839e1163a84",
            categories: ["data-analytics"],
            skills: ["Stakeholder Management", "Data Storytelling", "Soft Skills", "Leadership"],
            link: "https://www.linkedin.com/learning/certificates/03c35f76a565528fdbffc8af6aac7683f9d844a58e8224f22883e09da2d8166c/"
        },
        {
            title: "Career Essentials in Data Analysis",
            org: "Microsoft & LinkedIn",
            orgIcon: "fab fa-microsoft",
            date: "Sep 2025",
            credId: "f7534ebb1127faf10c7f74ed6952d920c3a72a5f5cfb14464b26de20e669a3ca",
            categories: ["data-analytics"],
            skills: ["Data Analysis", "Excel Analytics", "Data Transformation"],
            link: "https://www.linkedin.com/learning/certificates/f7534ebb1127faf10c7f74ed6952d920c3a72a5f5cfb14464b26de20e669a3ca/"
        },
        {
            title: "Career Essentials in Software Development",
            org: "Microsoft & LinkedIn",
            orgIcon: "fab fa-microsoft",
            date: "Jun 2024",
            credId: "c70391addcf2cb1bf5aaf84074da74a43786f13f8e427f88e2d97dfb34734f20",
            categories: ["python-sql"],
            skills: ["Software Engineering", "Programming", "System Architecture"],
            link: "https://www.linkedin.com/learning/certificates/c70391addcf2cb1bf5aaf84074da74a43786f13f8e427f88e2d97dfb34734f20/"
        },
        {
            title: "Data Analysis with Python",
            org: "Cognitive Class (IBM)",
            orgIcon: "fab fa-python",
            date: "Mar 2025",
            credId: "7975a4c3cc4647ca8f71a2646f57fbe8",
            categories: ["python-sql", "data-analytics"],
            skills: ["Python", "Pandas", "NumPy", "Data Modeling", "SciPy"],
            link: "https://courses.cognitiveclass.ai/certificates/7975a4c3cc4647ca8f71a2646f57fbe8"
        },
        {
            title: "Python 101 for Data Science",
            org: "IBM Developer Skills Network",
            orgIcon: "fab fa-python",
            date: "Feb 2025",
            credId: "36bd4d079e1e4a57aa3c6c89a7d0223d",
            categories: ["python-sql"],
            skills: ["Python Fundamentals", "Data Structures", "Algorithms", "Data Science"],
            link: "https://courses.cognitiveclass.ai/certificates/36bd4d079e1e4a57aa3c6c89a7d0223d"
        },
        {
            title: "Introduction to Data Science",
            org: "Cisco Networking Academy",
            orgIcon: "fas fa-network-wired",
            date: "Nov 2025",
            credId: "CISCO-DS-2025",
            categories: ["data-analytics", "python-sql"],
            skills: ["Data Science", "Python Analytics", "Machine Learning Basics"],
            link: "https://drive.google.com/file/d/1Kz2vh3jObmwQ4zJR4FCSoTXq8AKiY1fL/view?usp=sharing"
        }
    ];

    // ----------------------------------------------------------------------
    // 2. CONSTELLATION CANVAS ANIMATION
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('constellation-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;
        let mouse = { x: null, y: null, radius: 140 };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.8;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.speedX = (Math.random() - 0.5) * 0.45;
                this.speedY = (Math.random() - 0.5) * 0.45;
                this.color = Math.random() > 0.4 ? 'rgba(99, 102, 241, ' : 'rgba(6, 182, 212, ';
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            draw() {
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * this.density * 0.4;
                        const directionY = forceDirectionY * force * this.density * 0.4;

                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 16000);
            const count = Math.min(Math.max(numberOfParticles, 40), 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            const maxDistance = 110;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.22})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            connectParticles();
            animationFrameId = requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        resizeCanvas();
        animateCanvas();
    }

    // ----------------------------------------------------------------------
    // 3. CUSTOM CURSOR
    // ----------------------------------------------------------------------
    const cursorDot = document.getElementById('cursor-dot');
    const cursorGlow = document.getElementById('cursor-glow');

    if (cursorDot && cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        function animateCursorGlow() {
            glowX += (mouseX - glowX) * 0.18;
            glowY += (mouseY - glowY) * 0.18;
            cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
            requestAnimationFrame(animateCursorGlow);
        }
        animateCursorGlow();

        // Enlarge on interactive hover
        const interactiveElements = 'a, button, input, textarea, .project-card, .cert-card, .skill-chip';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveElements)) {
                cursorGlow.style.width = '55px';
                cursorGlow.style.height = '55px';
                cursorGlow.style.borderColor = 'var(--cyan)';
                cursorGlow.style.background = 'rgba(6, 182, 212, 0.15)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveElements)) {
                cursorGlow.style.width = '38px';
                cursorGlow.style.height = '38px';
                cursorGlow.style.borderColor = 'var(--primary-light)';
                cursorGlow.style.background = 'rgba(99, 102, 241, 0.1)';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. ROLE TYPEWRITER
    // ----------------------------------------------------------------------
    const roles = [
        "Data Analyst",
        "AI & ML Specialist",
        "Power BI Developer",
        "Business Intelligence Engineer",
        "Python & SQL Specialist"
    ];

    const roleElement = document.getElementById('role-text');
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function handleTypewriter() {
        if (!roleElement) return;

        const currentRole = roles[roleIdx];
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 90;

        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2200; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 400; // Pause before new word
        }

        setTimeout(handleTypewriter, speed);
    }
    handleTypewriter();

    // ----------------------------------------------------------------------
    // 5. THEME TOGGLE
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('aditya-portfolio-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun theme-icon"></i>';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun theme-icon"></i>';
                localStorage.setItem('aditya-portfolio-theme', 'light');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                themeToggleBtn.innerHTML = '<i class="fas fa-moon theme-icon"></i>';
                localStorage.setItem('aditya-portfolio-theme', 'dark');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. MOBILE DRAWER NAVIGATION
    // ----------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');

    window.toggleMobileMenu = function() {
        if (mobileDrawer) {
            mobileDrawer.classList.toggle('active');
            document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : 'auto';
        }
    };

    if (mobileToggle) mobileToggle.addEventListener('click', window.toggleMobileMenu);
    if (drawerClose) drawerClose.addEventListener('click', window.toggleMobileMenu);

    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer && mobileDrawer.classList.contains('active')) {
                window.toggleMobileMenu();
            }
        });
    });

    // ----------------------------------------------------------------------
    // 7. RENDER PROJECTS & FILTERING
    // ----------------------------------------------------------------------
    const projectsGrid = document.getElementById('projects-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');

    // Update Counts
    const countAll = document.getElementById('count-all');
    const countAi = document.getElementById('count-ai');
    const countBi = document.getElementById('count-bi');
    const countPython = document.getElementById('count-python');
    const countWeb = document.getElementById('count-web');

    if (countAll) countAll.textContent = projectsData.length;
    if (countAi) countAi.textContent = projectsData.filter(p => p.category === 'ai-ml').length;
    if (countBi) countBi.textContent = projectsData.filter(p => p.category === 'bi-analytics').length;
    if (countPython) countPython.textContent = projectsData.filter(p => p.category === 'python').length;
    if (countWeb) countWeb.textContent = projectsData.filter(p => p.category === 'web-apps').length;

    function renderProjects(filter = 'all') {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';

        const filtered = filter === 'all'
            ? projectsData
            : projectsData.filter(p => p.category === filter);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card glass-card';
            card.setAttribute('data-id', project.id);

            // Banner thumbnail or graphic
            let thumbnailHtml = '';
            if (project.image) {
                thumbnailHtml = `<img src="${project.image}" alt="${project.title}" loading="lazy">`;
            } else {
                thumbnailHtml = `
                    <div class="project-card-banner-graphic">
                        <i class="${project.icon}"></i>
                        <span class="project-card-banner-tag">${project.categoryName}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="project-card-thumb">
                    ${thumbnailHtml}
                    <div class="project-card-overlay">
                        <i class="fas fa-arrow-up-right-from-square"></i>
                        <span>View Project Details</span>
                    </div>
                </div>
                <div class="project-card-body">
                    <div class="project-meta-row">
                        <span class="project-cat-badge">${project.categoryName}</span>
                        <span class="project-date"><i class="fas fa-calendar-alt"></i> ${project.date}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-snippet">${project.snippet}</p>
                    <div class="project-card-footer">
                        <div class="project-tech-tags">
                            ${project.tech.slice(0, 3).map(t => `<span class="tech-tag-sm">${t}</span>`).join('')}
                            ${project.tech.length > 3 ? `<span class="tech-tag-sm">+${project.tech.length - 3}</span>` : ''}
                        </div>
                        <span class="view-details-arrow"><i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openProjectDetailsModal(project);
            });

            // Add 3D Tilt Effect
            addTiltEffect(card);

            projectsGrid.appendChild(card);
        });
    }

    // Filter Buttons
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filterValue = tab.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });

    renderProjects('all');

    // ----------------------------------------------------------------------
    // 8. PROJECT DETAILS MODAL
    // ----------------------------------------------------------------------
    function openProjectDetailsModal(project) {
        const bannerContainer = document.getElementById('project-modal-banner');
        const catBadge = document.getElementById('project-modal-category');
        const dateBadge = document.getElementById('project-modal-date');
        const titleElem = document.getElementById('project-modal-title');
        const descElem = document.getElementById('project-modal-desc');
        const featuresList = document.getElementById('project-modal-features');
        const techStack = document.getElementById('project-modal-tech');
        const linksContainer = document.getElementById('project-modal-links');

        if (bannerContainer) {
            if (project.image) {
                bannerContainer.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
            } else {
                bannerContainer.innerHTML = `
                    <div class="project-card-banner-graphic" style="height: 100%;">
                        <i class="${project.icon}" style="font-size: 4rem;"></i>
                        <span class="project-card-banner-tag">${project.categoryName}</span>
                    </div>
                `;
            }
        }

        if (catBadge) catBadge.textContent = project.categoryName;
        if (dateBadge) dateBadge.innerHTML = `<i class="fas fa-calendar-alt"></i> ${project.date}`;
        if (titleElem) titleElem.textContent = project.title;
        if (descElem) descElem.textContent = project.description;

        if (featuresList) {
            featuresList.innerHTML = project.features.map(feat => `<li>${feat}</li>`).join('');
        }

        if (techStack) {
            techStack.innerHTML = project.tech.map(t => `<span class="tech-tag"><i class="fas fa-tag"></i> ${t}</span>`).join('');
        }

        if (linksContainer) {
            let linksHtml = '';
            if (project.github) {
                linksHtml += `
                    <a href="${project.github}" target="_blank" class="btn-primary">
                        <i class="fab fa-github"></i> View GitHub Repository
                    </a>
                `;
            }
            if (project.demo) {
                linksHtml += `
                    <a href="${project.demo}" target="_blank" class="btn-secondary">
                        <i class="fas fa-arrow-up-right-from-square"></i> Live Demo / App
                    </a>
                `;
            }
            linksContainer.innerHTML = linksHtml;
        }

        openModal('project-modal');
    }

    // ----------------------------------------------------------------------
    // 9. CERTIFICATIONS: RENDER, LIVE SEARCH & CLICK-TO-VIEW
    // ----------------------------------------------------------------------
    const certGrid = document.getElementById('cert-grid');
    const certSearchInput = document.getElementById('cert-search-input');
    const certSearchClear = document.getElementById('cert-search-clear');
    const certPills = document.querySelectorAll('.cert-pill');

    // Counts
    const certCountAll = document.getElementById('cert-count-all');
    const certCountAi = document.getElementById('cert-count-ai');
    const certCountData = document.getElementById('cert-count-data');
    const certCountBi = document.getElementById('cert-count-bi');
    const certCountPySql = document.getElementById('cert-count-pysql');

    if (certCountAll) certCountAll.textContent = certsData.length;
    if (certCountAi) certCountAi.textContent = certsData.filter(c => c.categories.includes('ai')).length;
    if (certCountData) certCountData.textContent = certsData.filter(c => c.categories.includes('data-analytics')).length;
    if (certCountBi) certCountBi.textContent = certsData.filter(c => c.categories.includes('business-intel')).length;
    if (certCountPySql) certCountPySql.textContent = certsData.filter(c => c.categories.includes('python-sql')).length;

    let activeCertFilter = 'all';
    let certSearchQuery = '';

    function renderCertifications() {
        if (!certGrid) return;
        certGrid.innerHTML = '';

        const filtered = certsData.filter(cert => {
            const matchesCategory = (activeCertFilter === 'all') || cert.categories.includes(activeCertFilter);
            const matchesQuery = !certSearchQuery || (
                cert.title.toLowerCase().includes(certSearchQuery) ||
                cert.org.toLowerCase().includes(certSearchQuery) ||
                (cert.skills && cert.skills.some(s => s.toLowerCase().includes(certSearchQuery))) ||
                (cert.credId && cert.credId.toLowerCase().includes(certSearchQuery))
            );
            return matchesCategory && matchesQuery;
        });

        if (filtered.length === 0) {
            certGrid.innerHTML = `
                <div class="glass-card" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
                    <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">No certificates found</h3>
                    <p style="color: var(--text-muted);">Try a different search keyword or category filter.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card glass-card';

            card.innerHTML = `
                <div>
                    <div class="cert-card-top">
                        <div class="cert-org-icon"><i class="${cert.orgIcon}"></i></div>
                        <div>
                            <span class="cert-org-name">${cert.org}</span>
                            <span class="cert-date"><i class="fas fa-calendar-alt"></i> ${cert.date}</span>
                        </div>
                    </div>
                    <h3 class="cert-card-title">${cert.title}</h3>
                    <div class="cert-card-skills">
                        ${cert.skills.slice(0, 3).map(s => `<span class="cert-card-skill">${s}</span>`).join('')}
                    </div>
                </div>
                <div class="cert-card-bottom">
                    <span class="cert-click-hint"><i class="fas fa-eye"></i> Click to View</span>
                    <span class="cert-badge-verified"><i class="fas fa-check-circle"></i> Verified</span>
                </div>
            `;

            // Click to View Credential
            card.addEventListener('click', () => {
                openCertificateModal(cert);
            });

            addTiltEffect(card);

            certGrid.appendChild(card);
        });
    }

    // Certificate Detail Modal Handler
    let currentModalCredId = '';

    function openCertificateModal(cert) {
        const orgIcon = document.getElementById('cert-modal-org-icon');
        const orgName = document.getElementById('cert-modal-org');
        const titleElem = document.getElementById('cert-modal-title');
        const dateElem = document.getElementById('cert-modal-date');
        const idElem = document.getElementById('cert-modal-id');
        const idRow = document.getElementById('cert-modal-id-row');
        const skillsElem = document.getElementById('cert-modal-skills');
        const linkElem = document.getElementById('cert-modal-link');

        if (orgIcon) orgIcon.innerHTML = `<i class="${cert.orgIcon}"></i>`;
        if (orgName) orgName.textContent = cert.org;
        if (titleElem) titleElem.textContent = cert.title;
        if (dateElem) dateElem.textContent = cert.date;

        currentModalCredId = cert.credId || '';
        if (idElem) idElem.textContent = cert.credId || 'Verified Record';
        if (idRow) idRow.style.display = cert.credId ? 'flex' : 'none';

        if (skillsElem) {
            skillsElem.innerHTML = cert.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join('');
        }

        if (linkElem) {
            linkElem.href = cert.link || '#';
            linkElem.style.display = cert.link ? 'inline-flex' : 'none';
        }

        openModal('cert-modal');
    }

    // Global copy credential ID
    window.copyCredentialId = function() {
        if (!currentModalCredId) return;
        navigator.clipboard.writeText(currentModalCredId).then(() => {
            showToast(`Credential ID copied: ${currentModalCredId}`);
        }).catch(() => {
            showToast(`Copied: ${currentModalCredId}`);
        });
    };

    // Filter pills
    certPills.forEach(pill => {
        pill.addEventListener('click', () => {
            certPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCertFilter = pill.getAttribute('data-filter');
            renderCertifications();
        });
    });

    // Search input
    if (certSearchInput) {
        certSearchInput.addEventListener('input', (e) => {
            certSearchQuery = e.target.value.toLowerCase().trim();
            if (certSearchClear) {
                certSearchClear.style.display = certSearchQuery ? 'block' : 'none';
            }
            renderCertifications();
        });
    }

    if (certSearchClear) {
        certSearchClear.addEventListener('click', () => {
            certSearchInput.value = '';
            certSearchQuery = '';
            certSearchClear.style.display = 'none';
            renderCertifications();
        });
    }

    renderCertifications();

    // ----------------------------------------------------------------------
    // 10. 3D CARD TILT UTILITY
    // ----------------------------------------------------------------------
    function addTiltEffect(element) {
        if (!window.matchMedia('(pointer: fine)').matches) return;

        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    }

    // ----------------------------------------------------------------------
    // 11. GENERAL MODAL OPEN / CLOSE CONTROLLER
    // ----------------------------------------------------------------------
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    };

    // Close on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => {
                m.classList.remove('active');
                m.setAttribute('aria-hidden', 'true');
            });
            document.body.style.overflow = 'auto';
        }
    });

    // ----------------------------------------------------------------------
    // 12. RESUME DOWNLOAD HUMAN VERIFICATION
    // ----------------------------------------------------------------------
    const humanVerifyResume = document.getElementById('human-verify-resume');
    const resumeDownloadBtn = document.getElementById('resume-download-btn');

    if (humanVerifyResume && resumeDownloadBtn) {
        humanVerifyResume.addEventListener('change', (e) => {
            if (e.target.checked) {
                resumeDownloadBtn.classList.remove('disabled-btn');
                resumeDownloadBtn.style.pointerEvents = 'auto';
                resumeDownloadBtn.style.opacity = '1';
            } else {
                resumeDownloadBtn.classList.add('disabled-btn');
                resumeDownloadBtn.style.pointerEvents = 'none';
                resumeDownloadBtn.style.opacity = '0.45';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 13. CONTACT FORM & HUMAN VERIFICATION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const humanVerifyContact = document.getElementById('human-verify-contact');
    const contactSubmitBtn = document.getElementById('contact-submit-btn');
    const formStatus = document.getElementById('form-status');

    if (humanVerifyContact && contactSubmitBtn) {
        humanVerifyContact.addEventListener('change', (e) => {
            contactSubmitBtn.disabled = !e.target.checked;
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!humanVerifyContact.checked) {
                if (formStatus) {
                    formStatus.textContent = 'Please confirm that you are human before sending.';
                    formStatus.className = 'form-status error';
                }
                return;
            }

            contactSubmitBtn.disabled = true;
            contactSubmitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                        formStatus.className = 'form-status success';
                    }
                    contactForm.reset();
                    humanVerifyContact.checked = false;
                    contactSubmitBtn.disabled = true;
                    showToast('Message sent successfully!');
                } else {
                    throw new Error('Failed to send');
                }
            } catch (err) {
                if (formStatus) {
                    formStatus.textContent = 'Failed to send message. Please email directly to aditya8810328@gmail.com.';
                    formStatus.className = 'form-status error';
                }
            } finally {
                contactSubmitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 14. TOAST NOTIFICATION HELPER
    // ----------------------------------------------------------------------
    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.innerHTML = `<i class="fas fa-circle-check text-emerald"></i> ${message}`;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

});
