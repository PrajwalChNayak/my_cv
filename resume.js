const resumeData = {
    name: "Prajwal Chandra Nayak",
    title: "Full Stack  Developer",
    profileImage: "profile.jpg",
    contact: {
        email: "prajwalchnayak@gmail.com",
        phone: "+91 88373904747",
        address: "Cuttack, Nuaga Gram, Odisha – 754003, India"
    },
    summary: "Software developer with 5 years of experience specializing in the JavaScript ecosystem. Experienced in building scalable web and mobile applications using modern frameworks and backend architectures. Proficient in delivering end-to-end solutions from UI development to API design and database management.",
    skills: [
        { label: "Frontend", items: "React.js, Next.js, React Native" },
        { label: "Backend", items: "Express.js, NestJS" },
        { label: "Languages", items: "JavaScript, TypeScript" },
        { label: "Databases", items: "SQL, NoSQL" },
        { label: "Other", items: "REST APIs, Full Stack Development" }
    ],
    experience: [
        {
            role: "Senior Full Stack Developer",
            date: "May 2024 – Present",
            company: "Gemini Consulting & Services · Bhubaneswar, Odisha",
            details: [
                "Developed and maintained scalable web and mobile applications using React.js, React Native, and Express.js.",
                "Designed and implemented RESTful APIs using NestJS and integrated SQL and NoSQL databases.",
                "Architected backend services, optimized application performance, and ensured scalable system design.",
                "Led code reviews, mentored junior developers, and guided best practices in full-stack development."
            ]
        },
        {
            role: "Full Stack Developer",
            date: "January 2021 – April 2024",
            company: "Westech Technology Private Limited · Bhubaneswar, Odisha",
            details: [
                "Developed cross-platform mobile applications using React Native and TypeScript.",
                "Built dynamic web applications using React.js and Next.js with server-side rendering for improved SEO and performance.",
                "Implemented backend APIs using Express.js and integrated relational and NoSQL databases.",
                "Collaborated with product and design teams in Agile environments to deliver scalable features."
            ]
        }
    ],
    projects: [
        {
            name: "HRMS & Accounting Management System",
            date: "2026",
            tech: "React.js · Express.js · MySQL",
            details: [
                "Architected and developed a full-stack HRMS platform with integrated accounting features to manage employee data, payroll, attendance, and financial records.",
                "Designed the backend system architecture, REST APIs, and relational database schema using Express.js and MySQL.",
                "Built dynamic and responsive user interfaces with React.js, improving usability and workflow efficiency for HR and finance operations.",
                "Implemented authentication, role-based access control, and optimized database queries to ensure secure and scalable system performance."
            ]
        },
        {
            name: "HMS (Hospital Management System)",
            date: "2025",
            tech: "Express.js · Express.js · MySQL",
            details: [
                "Developed backend services for a Hospital Management System to manage patient records, appointments, doctors, and billing workflows.",
                "Implemented RESTful APIs using Express.js to support core hospital operations and ensure smooth data communication between frontend and backend.",
                "Collaborated in designing the relational database schema and data models to handle patient, doctor, and treatment records efficiently.",
                "Built scalable backend logic including authentication, data validation, and optimized database queries for reliable system performance."
            ]
        },
        {
            name: "Consumer & Call Records Management Dashboard",
            date: "2026",
            tech: "React.js · Express.js · MongoDB",
            details: [
                "Led the development of a dashboard platform to manage consumer data and call records with real-time reporting and analytics.",
                "Designed the overall system architecture and implemented scalable backend APIs using Express.js for data management and reporting.",
                "Built interactive dashboards using React.js to visualize consumer activity, call records, and operational reports.",
                "Migrated and transformed legacy data into the new system, ensuring data integrity and optimized database performance.",
                "Led the development process, mentored junior developers, and coordinated feature implementation across frontend and backend modules."
            ]
        },
        {
            name: "Project Name",
            date: "2023",
            tech: "Next.js · TypeScript · PostgreSQL",
            details: [
                "Brief description of the project and its purpose.",
                "Key technical achievements or metrics."
            ]
        }
    ],
    education: [
        {
            degree: "MCA (Master of Computer Applications)",
            date: "2018 – 2020",
            institution: "OUAT / CPGS · Bhubaneswar, Odisha"
        },
        {
            degree: "BCA (Bachelor of Computer Applications)",
            date: "2015 – 2018",
            institution: "Utkal University / IPSAR · Cuttack, Odisha"
        }
    ]
};
const root = document.getElementById("resume-root");

function createSection(title) {
    const section = document.createElement("section");
    section.className = "mb-6";
    section.innerHTML = `
    <h2 class="text-base font-bold text-blue-950 uppercase tracking-wide pb-1.5 border-b border-gray-200 mb-3">${title}</h2>
  `;
    return section;
}

function renderParagraph(text) {
    const p = document.createElement("p");
    p.className = "text-sm leading-relaxed";
    p.textContent = text;
    return p;
}

function renderHeader(data) {
    const header = document.createElement("header");
    header.className = "flex items-center gap-7 pb-7 border-b-2 border-blue-950 mb-7";
    header.innerHTML = `
    <img
      class="w-28 h-28 rounded-full object-cover border-2 border-gray-200 shrink-0"
      src="${data.profileImage}"
      alt="Photo of ${data.name}"
      width="110"
      height="110"
    />
    <div>
      <h1 class="text-3xl font-bold text-blue-950 leading-tight mb-1">${data.name}</h1>
      <p class="text-lg text-blue-800 font-medium mb-2">${data.title}</p>
      <address class="not-italic flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
        <span>✉ <a href="mailto:${data.contact.email}" class="text-blue-700 hover:underline">${data.contact.email}</a></span>
        <span class="print-only">☎ ${data.contact.phone}</span>
        <span>⚑ ${data.contact.address}</span>
      </address>
    </div>
  `;
    return header;
}

function renderItems(items) {
    const container = document.createElement("div");

    items.forEach((item) => {
        const article = document.createElement("article");
        article.className = "mb-5";
        article.innerHTML = `
      <div class="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
        <h3 class="text-base font-semibold text-blue-950">${item.role || item.name || item.degree}</h3>
        <span class="text-xs text-gray-500 whitespace-nowrap">${item.date}</span>
      </div>
    `;

        if (item.company) {
            const company = document.createElement("p");
            company.className = "text-sm text-blue-700 font-medium mb-1.5";
            company.textContent = item.company;
            article.appendChild(company);
        }

        if (item.tech) {
            const tech = document.createElement("p");
            tech.className = "text-sm text-blue-700 font-medium mb-1.5";
            tech.textContent = item.tech;
            article.appendChild(tech);
        }

        if (item.institution) {
            const institution = document.createElement("p");
            institution.className = "text-sm text-blue-700 font-medium";
            institution.textContent = item.institution;
            article.appendChild(institution);
        }

        if (item.details) {
            const list = document.createElement("ul");
            list.className = "list-disc pl-5 text-sm space-y-1";
            item.details.forEach((detail) => {
                const li = document.createElement("li");
                li.textContent = detail;
                list.appendChild(li);
            });
            article.appendChild(list);
        }

        container.appendChild(article);
    });

    return container;
}

function renderResume(data) {
    root.appendChild(renderHeader(data));

    const summarySection = createSection("Professional Summary");
    summarySection.appendChild(renderParagraph(data.summary));
    root.appendChild(summarySection);

    const skillsSection = createSection("Technical Skills");
    const skillsDl = document.createElement("dl");
    skillsDl.className = "grid grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm";

    data.skills.forEach((skill) => {
        const dt = document.createElement("dt");
        dt.className = "font-semibold text-blue-950";
        dt.textContent = skill.label;
        const dd = document.createElement("dd");
        dd.textContent = skill.items;
        skillsDl.append(dt, dd);
    });

    skillsSection.appendChild(skillsDl);
    root.appendChild(skillsSection);

    const experienceSection = createSection("Experience");
    experienceSection.appendChild(renderItems(data.experience));
    root.appendChild(experienceSection);

    const projectsSection = createSection("Projects");
    projectsSection.appendChild(renderItems(data.projects));
    root.appendChild(projectsSection);

    const educationSection = createSection("Education");
    educationSection.appendChild(renderItems(data.education));
    root.appendChild(educationSection);
}

renderResume(resumeData);
