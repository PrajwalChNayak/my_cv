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
        { label: "Backend", items: "Node.js, NestJS" },
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
                "Developed and maintained scalable web applications using React.js and Node.js.",
                "Designed RESTful APIs with NestJS and integrated SQL/NoSQL databases.",
                "Led code reviews and mentored junior developers on best practices."
            ]
        },
        {
            role: "Full Stack Developer",
            date: "January 2021 – April 2024",
            company: "Westech Technology Private Limited · Bhubaneswar, Odisha",
            details: [
                "Built cross-platform mobile apps with React Native and TypeScript.",
                "Implemented server-side rendering with Next.js for improved SEO.",
                "Collaborated with design and product teams in an Agile environment."
            ]
        }
    ],
    projects: [
        {
            name: "Project Name",
            date: "2024",
            tech: "React.js · Node.js · MongoDB",
            details: [
                "Brief description of the project and its purpose.",
                "Key technical achievements or metrics."
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
            degree: "Degree Name",
            date: "Year – Year",
            institution: "University / Institution Name · Location"
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
