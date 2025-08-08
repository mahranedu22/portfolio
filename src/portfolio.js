/* portfolio.js - customized for Ahmed Mahran (mahran80) */
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Splash Screen (disabled to avoid missing assets)
const splashScreen = {
  enabled: false,
  animation: null,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: false
};

const greeting = {
  username: "Ahmed Mahran",
  title: "Hi all, I'm Ahmed 👋",
  subTitle: emoji(
    "Skilled Backend Developer focused on Django & Django REST Framework. Passionate about building scalable, secure backend systems, integrating realtime features with WebSockets, and automating tasks with Docker, Redis & Celery. Quantum computing researcher (Qiskit) and Linux enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ysm7N-I8SdQ0pLIS92hwfi_QNW3iuVGC/view", // CV / Resume
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mahran80",
  linkedin: "https://www.linkedin.com/in/ahmed-mahran-528187264",
  gmail: "Ahmed.mahran824@gmail.com",
  facebook: "https://www.facebook.com/ahmed.mahran.460273",
  instagram: "https://www.instagram.com/a7med__mahran",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Backend Developer — building efficient and secure server-side applications",
  skills: [
    emoji("⚡ Design and implement RESTful APIs with Django & Django REST Framework"),
    emoji("⚡ Real-time systems using WebSockets (Django Channels / Daphne) and Redis"),
    emoji("⚡ Background task processing with Celery, Redis and RabbitMQ"),
    emoji("⚡ Containerization & deployment with Docker"),
    emoji("⚡ Quantum randomness & research using Qiskit"),
    emoji("⚡ Mobile backend integrations for Flutter apps")
  ],
  softwareSkills: [
    { skillName: "Django", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Django REST Framework", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-memory" },
    { skillName: "Celery", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "JWT / Auth", fontAwesomeClassname: "fas fa-user-lock" },
    { skillName: "WebSockets", fontAwesomeClassname: "fas fa-broadcast-tower" },
    { skillName: "Qiskit", fontAwesomeClassname: "fas fa-atom" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Flutter", fontAwesomeClassname: "fab fa-google" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Alexandria University - Faculty of Science",
      logo: "",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Graduated: June 2025",
      desc: "Focused on software engineering, systems and research in quantum computing.",
      descBullets: []
    }
  ]
};

// Tech Stack / Skill Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend (Django, DRF)", progressPercentage: "85%" },
    { Stack: "Python & Algorithms", progressPercentage: "80%" },
    { Stack: "DevOps & Deployment (Docker, Redis)", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work experience - kept hidden since CV lists mainly projects & education
const workExperiences = {
  display: false,
  experience: []
};

// Open Source / GitHub section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects (the four you provided images/videos for)
const bigProjects = {
  title: "Projects",
  subtitle: "Selected projects (backend-focused) — code & demos available",
  projects: [
    {
      image:
        "https://drive.google.com/uc?export=view&id=1G3elyYqKdbaErrPufnW1Nq0s7i5unM6t",
      projectName: "Online Quiz Game",
      projectDesc:
        "Real-time online quiz game with full authentication (cookie-based), WebSockets for live questions, Redis for caching, and Django REST Framework back-end.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mahran80/online-quiz-game"
        },
        {
          name: "Demo (video)",
          url: "https://drive.google.com/file/d/1qVBUrSGBTabxO1XVch2BMwoamEPdAS_Z/preview"
        }
      ]
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1FIIVz3Hh3UY0S6HQp0OB2Wai3LNq5LiM",
      projectName: "Aya Food (E-commerce Platform)",
      projectDesc:
        "Food delivery marketplace built with Django, PostgreSQL, Celery (async tasks), Redis & RabbitMQ for background jobs, image uploads, session-based cart, coupons, PDF invoices and email confirmations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mahran80/Ecommrece"
        },
        {
          name: "Demo (video)",
          url: "https://drive.google.com/file/d/1JBzJLs0uqZZXua-GQ71XKhZszqONzeXa/preview"
        }
      ]
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=10jcRtus0Oa-7Pb8PV_FbznsvQ_rWUTXW",
      projectName: "Hotel Booking System",
      projectDesc:
        "Comprehensive booking system with JWT authentication, room availability checks, advanced filtering, booking validation and user profiles (Django REST Framework).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mahran80/hotelBooking"
        }
        // add demo link if available
      ]
    },
    {
      image:
        "https://via.placeholder.com/900x600.png?text=Quantum+Random+Password+Generator",
      projectName: "Quantum Random Password Generator",
      projectDesc:
        "Secure authentication system using quantum randomness (QRNG) via Qiskit. Desktop GUI built with Tkinter, supports sign-up/login and quantum-based password generation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mahran80/Quantum_Encrypted_Passswords"
        },
        {
          name: "Demo (video)",
          url: "https://drive.google.com/file/d/1gk2m8ziNtoDsqWbxgeZTmv2s2C7FyySI/preview"
        }
      ]
    }
  ],
  display: true
};

// Achievements & Certifications
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Relevant certificates and training (quantum computing & Linux administration).",
  achievementsCards: [
    {
      title: "Quantum Computing & Programming (QBronze - Qiskit)",
      subtitle: "QWorld / QEgypt — August 2024",
      imageAlt: "Qiskit Certificate",
      footerLink: [
        // add link if you want: { name: "Certificate", url: "..." }
      ]
    },
    {
      title: "Elements of Quantum Computing and Programming (QCourse 501-2)",
      subtitle: "University of Latvia & QWorld — Sep 2024 - Dec 2024",
      imageAlt: "QCourse Certificate",
      footerLink: []
    },
    {
      title: "Linux Administration (60 hrs)",
      subtitle: "Information Technology Institution (ITI) — Jan 2025 - Feb 2025",
      imageAlt: "Linux Certificate",
      footerLink: []
    }
  ],
  display: true
};

// Blog Section (hidden)
const blogSection = {
  title: "Blogs",
  subtitle: "I write about development and quantum computing.",
  display: false
};

// Talks (hidden)
const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE AND TEACH"),
  talks: [],
  display: false
};

// Podcast (hidden)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "—",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume/CV",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or say hi — my inbox is open.",
  number: "01141125185",
  email_address: "Ahmed.mahran824@gmail.com"
};

// Twitter (hidden)
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

