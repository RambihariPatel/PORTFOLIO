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
    resumeUrl: "/resume.pdf"
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
      image: "https://via.placeholder.com/400x200",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "LocalStorage"],
      liveLink: "https://demo-s3a7.vercel.app/",
      repoLink: "#"
    },
    {
      title: "AI Hub (In Progress)",
      description: "Building an AI-powered platform integrating GenAI APIs and automation workflows using n8n. It will provide features like AI chat, task automation, and smart productivity tools.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React.js", "Node.js", "n8n", "OpenAI API"],
      liveLink: "#",
      repoLink: "#"
    }
  ],

  // 5. GALLERY IMAGES (Add URLs to your photos here)
  gallery: [
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777033227/Screenshot_2026-04-24_174916_isxdhc.png",
    "https://res.cloudinary.com/doztsy52l/image/upload/v1777033237/Screenshot_2026-04-24_174931_cilnhk.png",
    "https://via.placeholder.com/400x200"
  ]
};
