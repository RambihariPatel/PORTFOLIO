// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO INFORMATION
export const portfolioData = {
  // 1. HOME & BASIC INFO
  personal: {
    firstName: "Rambihari",
    lastName: "Patel",
    role: "Full Stack Developer",
    bio: "Hello! I'm a passionate and creative Full Stack Developer dedicated to bringing ideas to life through code. I love building responsive, performant, and beautiful applications that provide great user experiences.",
    email: "rambiharipatel175@gmail.com",
    profileImage: "https://res.cloudinary.com/doztsy52l/image/upload/v1737787127/WhatsApp_Image_2025-01-25_at_12.06.24_d9fe90c7_nq1mwb.jpg",
    resumeUrl: "/master_resume.pdf"
  },

  // 2. EDUCATION
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      year: "2023 - 2027",
      location: "Madhya Pradesh, India",
      description: "Currently in 3rd year. Focused on Full Stack Development (React, Node.js) and Data Structures & Algorithms. Actively building projects and preparing for software engineering roles."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "State Board School",
      year: "2022 - 2023",
      location: "Madhya Pradesh, India",
      description: "Completed with focus on Science (PCM). Developed strong foundation in mathematics and problem solving."
    },
    {
      degree: "High School (10th)",
      institution: "State Board School",
      year: "2021 - 2022",
      location: "Madhya Pradesh, India",
      description: "Completed secondary education with strong foundation in Mathematics, Science, and problem-solving skills."
    }
  ],

  // 3. SKILL CATEGORIES
  skills: [
    {
      title: "Frontend Development",
      iconType: "Layout",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      iconType: "Server",
      technologies: [
        "Node.js",
        "Express.js",
        "REST API Development"
      ]
    },
    {
      title: "Database Management",
      iconType: "Database",
      technologies: [
        "SQL",
        "MySQL",
        "SQLite"
      ]
    },
    {
      title: "Programming & Problem Solving",
      iconType: "Code",
      technologies: [
        "C++",
        "Python",
        "Data Structures & Algorithms (DSA)"
      ]
    },
    {
      title: "Tools & Version Control",
      iconType: "Wrench",
      technologies: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code"
      ]
    },
    {
      title: "Automation & GenAI Tools",
      iconType: "Cpu",
      technologies: [
        "n8n (Workflow Automation)",
        "AI API Integration (OpenAI / LLM basics)",
        "Prompt Engineering (Basics)"
      ]
    }
  ],
  // 4. PROJECTS
  projects: [
    {
      title: "Student Mart",
      description: "Developed a responsive student marketplace web application with modern UI. Implemented features like sidebar navigation, dynamic components, and localStorage for data persistence. Focused on clean UI/UX and component-based architecture using React.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1777108192/Screenshot_2026-04-25_143703_gu3x6r.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "LocalStorage", "MongoDB", "Express.js", "Node.js", "REST API Development"],
      liveLink: "https://demo-s3a7.vercel.app/",
      repoLink: "#"
    },
    {
      title: "AI Hub",
      description: "Building an AI-powered platform integrating GenAI APIs and automation workflows using n8n. It will provide features like AI chat, task automation, and smart productivity tools.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788350300/Screenshot_2026-09-02_172754_y5srfi.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "LocalStorage", "MongoDB", "Express.js", "Node.js", "REST API Development"],
      liveLink: "https://ai-tools-hub-ram.vercel.app/",
      repoLink: "https://github.com/RambihariPatel/AI-HUB"
    },

    
    {
      title: "AI Finance Tracker",
      description: "Built an AI-powered personal finance tracking web application to help users manage and analyze their income and expenses. Implemented a dynamic dashboard for financial insights, transaction management, and AI-assisted analysis. Focused on responsive UI, data handling, and integrating AI capabilities to provide a smarter and more convenient personal finance experience.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788275209/Screenshot_2026-09-01_203517_sqp74y.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "AI / GenAI", "REST API", "OEPEN AI API" ,"MONGODB"],
      liveLink: "https://finance-tracker-with-ai-ashen.vercel.app/",
      repoLink: "https://github.com/RambihariPatel/Finance-Tracker-with-AI"
    },


  
    {
      title: "ASHA Triage AI",
      description: "Built an AI-powered healthcare triage platform designed to assist ASHA workers and rural communities with preliminary symptom assessment and patient prioritization. The platform uses conversational AI to collect symptoms, identify potential health risks, and help determine the appropriate level of medical attention. Focused on creating an accessible, responsive interface and integrating AI-driven healthcare assistance for underserved communities.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788275583/Screenshot_2026-09-01_204157_kn79vg.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "AI / GenAI", "REST API", "NODE.JS"],
      liveLink: "https://asha-triage-ai.vercel.app/",
      repoLink: "https://github.com/RambihariPatel/asha-triage-ai"
    },

  
    {
      title: "Intelligent Email Assistant",
      description: "Built an AI-powered email assistant that helps users manage and interact with their emails more efficiently. Implemented an intelligent interface for email processing, automated assistance, and streamlined email workflows. Focused on AI integration, authentication, asynchronous API handling, and creating a responsive user experience.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788275723/Screenshot_2026-09-01_204510_bqyu4e.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "AI / GenAI", "REST API"],
      liveLink: "https://intelligent-email-assistant-three.vercel.app/login",
      repoLink: "https://github.com/RambihariPatel/Intelligent-Email-Assistant"
    },

  
    {
      title: "College Discovery Platform",
      description: "Built a responsive college discovery platform that helps students explore and compare colleges using relevant search and filtering options. Implemented college listings, search functionality, location-based discovery, and dynamic filters for finding institutions based on criteria such as state, city, fees, and ratings. Focused on creating an intuitive interface that makes college exploration faster and easier for students.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788275819/Screenshot_2026-09-01_204640_g4h4gv.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST API"],
      liveLink: "https://college-discovery-black.vercel.app/",
      repoLink: "https://github.com/RambihariPatel/college-discovery"
    },

    
    
      {
        title: "NutraLens",
        description: "Built a smart nutrition-focused web application that helps users analyze food and nutrition-related information through an intuitive digital interface. Implemented a responsive user experience with AI-powered analysis capabilities, dynamic data handling, and API integration. Focused on making nutritional insights easier to understand and helping users make more informed food choices.",
        image: "https://res.cloudinary.com/doztsy52l/image/upload/v1788276033/Screenshot_2026-09-01_205014_ifhjgc.png",
        technologies: ["React.js", "JavaScript", "HTML", "CSS", "AI / GenAI", "REST API"],
        liveLink: "https://nutralens-three.vercel.app/",
        repoLink: "https://github.com/RambihariPatel/Nutralens"
      },

    


    {
      title: "Finance Dashboard",
      description: "Built an interactive finance dashboard for tracking revenue, expenses, and overall financial performance. Implemented dynamic data visualization, monthly analytics, and responsive UI for better insights. Focused on clean UI/UX and real-time data representation using modern frontend practices.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1777108279/Screenshot_2026-04-25_144100_yrmwpw.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
      liveLink: "https://finance-dashboard-two-lac.vercel.app/dashboard",
      repoLink: "https://github.com/RambihariPatel/FINANCE-DASHBOARD"
    },
    {
      title: "Hotel Booking Website",
      description: "Developed a responsive hotel booking web application with an intuitive UI for browsing and reserving rooms. Implemented features like room listings, booking interface, and smooth navigation across pages. Focused on responsive design and user-friendly experience using modern frontend technologies.",
      image: "https://res.cloudinary.com/doztsy52l/image/upload/v1777108363/Screenshot_2026-04-25_144220_t3tz8p.png",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://hotelbookingbyram.netlify.app",
      repoLink: "https://github.com/RambihariPatel/Hotel-Booking"
    },
    {
    title: "Edusity - Educational Platform",
    description: "Developed a modern educational platform with responsive UI to showcase courses, learning sections, and interactive components. Implemented structured layouts, reusable components, and smooth navigation to enhance user experience. Focused on clean design, responsiveness, and scalable frontend architecture.",
    image: "https://res.cloudinary.com/doztsy52l/image/upload/v1777108687/Screenshot_2026-04-25_144751_hwelzy.png",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    liveLink: "https://edusitybyram.netlify.app/",
    repoLink: "https://github.com/RambihariPatel/educationSity"
   },
   {
    title: "AI Image Generator",
    description: "Built an AI-powered image generation web application that converts text prompts into images using generative AI APIs. Implemented dynamic UI, prompt handling, and real-time image rendering. Focused on integrating external APIs, managing asynchronous requests, and delivering a smooth user experience.",
    image: "https://res.cloudinary.com/doztsy52l/image/upload/v1777108800/Screenshot_2026-04-25_144931_gsdwa3.png",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "OpenAI API / GenAI API", "REST API"],
    liveLink: "https://ai-image-generator-by-ram.netlify.app",
    repoLink: "https://github.com/RambihariPatel/AI-Image-Generator-App"
   }

  ],

  // 5. GALLERY IMAGES (Add URLs to your photos here)
  gallery: [
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777033227/Screenshot_2026-04-24_174916_isxdhc.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788275209/Screenshot_2026-09-01_203517_sqp74y.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777108800/Screenshot_2026-04-25_144931_gsdwa3.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777108687/Screenshot_2026-04-25_144751_hwelzy.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777108363/Screenshot_2026-04-25_144220_t3tz8p.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788275583/Screenshot_2026-09-01_204157_kn79vg.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788275723/Screenshot_2026-09-01_204510_bqyu4e.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788275819/Screenshot_2026-09-01_204640_g4h4gv.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788276033/Screenshot_2026-09-01_205014_ifhjgc.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1788350300/Screenshot_2026-09-02_172754_y5srfi.png"
  ],

  // 6. CERTIFICATIONS
  certifications: [
    {
      category: "NPTEL / Academic",
      items: [
        {
          title: "Python Programming",
          issuer: "NPTEL (IIT Madras)",
          date: "2025",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777126268/Screenshot_2026-04-25_194003_z6a0ow.png"
        },
        {
          title: "Database Management System",
          issuer: "NPTEL (IIT Kharagpur)",
          date: "2026",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777126339/Screenshot_2026-04-25_193849_n1anou.png"
        }
      ]
    },
    {
      category: "Course",
      items: [
        {
          title: "BUILD YOUR STATIC WEBSITE",
          issuer: "NxtWave",
          date: "2024",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777130835/Screenshot_2026-04-25_205354_tbvmcs.png"
        },
        {
          title: "BUILD YOUR RESPONSIVE WEBSITE",
          issuer: "Nxtwave",
          date: "2024",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777133285/Screenshot_2026-04-25_191535_ougtqq.png"
        },
        {
          title: "BUILD YOUR OWN DYNAMIC WEBSITE",
          issuer: "NxtWave",
          date: "2024",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777133565/Screenshot_2026-04-25_214137_klatrq.png"
        },
        
        {
          title: "JavaScript Essentials",
          issuer: "Nxtwave",
          date: "2025",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777133704/Screenshot_2026-04-25_204615_wf3skc.png"
        },
        {
          title: "INTRODUCTION TO DATABASES",
          issuer: "Nxtwave",
          date: "2025",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777133921/Screenshot_2026-04-25_191455_n5msro.png"
        },
        {
          title: "PROGRAMMING WITH PYTHON",
          issuer: "Nxtwave",
          date: "2025",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777134027/Screenshot_2026-04-25_204949_-_Copy_ifncl2.png"
        },

        {
          title: "GIT AND COMMAND LINE",
          issuer: "Nxtwave",
          date: "2026",
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1788274564/GIT_CERTIFICATE_rl2u3u.jpg"
        },

        {
          title: "XPM 4.0",
          issuer: "Nxtwave",
          date: "2026",          
          link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777134148/Screenshot_2026-04-25_204645_zuwosp.png"
        }



      ]
    },
    {
      category: "Hackathon",
      items: [
        { title: "TECHNOCRATS INNOVATION CHALLENGE", position: "Participant", date: "2026", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777126481/WhatsApp_Image_2026-04-25_at_6.23.35_PM_2_k7r92r.jpg" },
        { title: "LAKESITY HACK", position: "Participant", date: "2024", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777126740/WhatsApp_Image_2026-04-25_at_6.23.32_PM_r3twxn.jpg" }
      ]
    },
    {
      category: "Podcast",
      items: [
        { title: "What Google Looks for in Future Engineers", host: "Nxtwave", date: "2024", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135224/Screenshot_2026-04-25_191353_-_Copy_wimdsr.png" },
        { title: "From Resume To Offer", host: "Nxtwave", date: "2024", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135319/Screenshot_2026-04-25_191418_rvq8qn.png" },
        { title: "Your Next Big Career Opportunity: Autonomous Vehicle", host: "Nxtwave", date: "2024", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135468/Screenshot_2026-04-25_191517_es6j70.png" },
        { title: "Brain Fitness for High Achievers", host: "Nxtwave", date: "2024", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135568/Screenshot_2026-04-25_191657_slh3mt.png" },
        { title: "Building Job Ready Skills in the AI Era", host: "Nxtwave", date: "2025", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135871/WhatsApp_Image_2026-01-29_at_2.27.04_PM_1_e2ct04.jpg" },
        { title: "AI Workflows & Automation Workshop using", host: "Nxtwave", date: "2025", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135994/WhatsApp_Image_2026-01-29_at_2.27.04_PM_yljoir.jpg" },
        

      ]
    },
    {
      category: "Training",
      items: [
        { title: "Industrial Training in c++", company: "Tech Solutions", date: "2023", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1721148827/internship_svj7nt.jpg" },
        { title: "Industrial Training On Data Science & ML", company: "Tech Solutions", date: "2023", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777125820/Sage_Winter_Certificate_psjzam.jpg" },
        { title: "Crack CODE in LEET CODE", company: "CodeWave Solution", date: "2025",  link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777134773/WhatsApp_Image_2026-04-25_at_6.23.36_PM_wtnbba.jpg"},
        { title: "NxtCode-AI-Powered Challenge: 25 Under 5", company: "Nxtwave", date: "2025",  link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777135644/Screenshot_2026-04-25_191717_pkdjxb.png"},
        { title: "Achieve the 5 Day Milestone In Frontend Developer", company: "Nxtwave", date: "2025",  link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777136094/Screenshot_2026-04-25_191717_n9zu42.png"}
      ]


    },
    {
      category: "Attendance",
      items: [
        { title: "Architecture job simulation", event: "AWS", date: "2025", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777134381/Screenshot_2026-04-25_191748_r26y7h.png" },
        { title: "AI Tool & Chatgpt Workshop", event: "be10X", date: "2025", link: "https://res.cloudinary.com/doztsy52l/image/upload/v1777134532/be10x_AI_workshop_p6etfg.jpg" },
      ]
    }
  ]
};


