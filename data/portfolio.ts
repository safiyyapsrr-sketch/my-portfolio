/**
 * Single source of truth for portfolio content.
 * Facts come from the latest resume and the owner's written instructions.
 * Anything not listed here is intentionally not shown on the site.
 */

export const profile = {
  name: "Safiyya Muhsina M",
  initials: "SM",
  location: "Tiruchengode, Tamil Nadu, India",
  email: "safiyyapsrr@gmail.com",
  phone: "+918122960103",
  phoneDisplay: "+91 81229 60103",
  linkedin: "https://www.linkedin.com/in/safiyyamuhsina",
  github: "https://github.com/safiyyapsrr-sketch",
  siteUrl: "https://safiyyamuhsina.vercel.app",
  role: "Final-Year Computer Science and Technology Student",
  intro:
    "I'm a final-year Computer Science and Technology student exploring the intersection of technology, product, business, marketing and project management. I enjoy connecting people and ideas, understanding problems, communicating perspectives and turning possibilities into meaningful outcomes.",
} as const;

/** Headline split into words so the hero can reveal them one by one. */
export const headlineWords: { text: string; em?: boolean }[] = [
  { text: "Connecting" },
  { text: "Technology," },
  { text: "Ideas", em: true },
  { text: "&" },
  { text: "People" },
  { text: "to" },
  { text: "Create" },
  { text: "Meaningful", em: true },
  { text: "Impact.", em: true },
];

export const navItems = [
  { label: "Home", href: "#home", ids: ["home"] },
  { label: "About", href: "#about", ids: ["about"] },
  { label: "Skills", href: "#skills", ids: ["skills"] },
  { label: "Projects", href: "#projects", ids: ["projects"] },
  {
    label: "Experience",
    href: "#experience",
    ids: ["experience", "education", "achievements"],
  },
  { label: "Activities", href: "#activities", ids: ["activities"] },
  { label: "Contact", href: "#contact", ids: ["contact"] },
] as const;

export const images = {
  portrait: {
    src: "/images/portrait.jpg",
    width: 832,
    height: 1073,
    alt: "Portrait of Safiyya Muhsina M",
  },
  safepath: {
    src: "/images/safepath.webp",
    width: 1365,
    height: 627,
    alt: "SafePath app screenshot: a satellite map of South India with route search and map style options",
  },
  whbsHome: {
    src: "/images/whbs-home.webp",
    width: 941,
    height: 607,
    alt: "Redesigned White House Business Solutions homepage hero",
  },
  whbsHero: {
    src: "/images/whbs-hero.webp",
    width: 1267,
    height: 566,
    alt: "Redesigned White House Business Solutions hero slider showing the Content Transformation slide",
  },
  whbsLetter: {
    src: "/images/whbs-letter.webp",
    width: 972,
    height: 870,
    alt: "Internship completion letter from White House Business Solutions Pvt Ltd, Chennai, dated 3 July 2026, confirming Safiyya Muhsina M's web development internship from 15 June to 3 July 2026. Registration number and signature are hidden.",
  },
} as const;

export const aboutParagraphs = {
  lead: "I'm someone who enjoys connecting ideas, people, and possibilities. With a background in Computer Science, I'm curious about more than just how technology works. I'm equally interested in how it solves real-world problems, creates value, and helps businesses grow.",
  communication:
    "Communication is one of my strongest suits. I enjoy expressing ideas, presenting perspectives, collaborating with different people, taking initiative, and bringing teams together to turn plans into action. From leading projects and coordinating large-scale college events to exploring new technologies and participating in hackathons, I love experiences that challenge me to think, interact, create, and grow.",
  adaptable:
    "I'm adaptable, curious, and always excited to explore something new. My interests span technology, product, project management, business, marketing, growth, and operations. I'm particularly drawn to opportunities where I can combine my technical understanding with creativity, communication, strategic thinking, and people skills.",
  quote:
    "I'm not here to limit myself to one title or one domain. I'm here to explore, contribute, learn, and make things happen.",
  closing:
    "I'm always looking forward to opportunities where I can bring ideas to the table, work with inspiring people, apply my knowledge, take ownership, and create meaningful impact.",
};

export const interests = [
  "Technology",
  "Product",
  "Project management",
  "Business & operations",
  "Marketing & content",
  "UI/UX design",
  "AI & GenAI",
];

export const skillGroups = [
  {
    title: "Programming & web",
    items: [
      "Python",
      "Java",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
    ],
  },
  {
    title: "Databases & tools",
    items: ["MongoDB", "MySQL", "Git", "VS Code"],
  },
  {
    title: "Technical foundations",
    items: ["Data Structures", "AI & Machine Learning (fundamentals)"],
  },
] as const;

export interface InterestArea {
  title: string;
  status: "In practice" | "Exploring";
  text: string;
}

/** Wider interests. "In practice" is only used where the resume shows hands-on work. */
export const interestAreas: InterestArea[] = [
  {
    title: "Product thinking & management",
    status: "Exploring",
    text: "Starting from the problem and the people affected, then shaping a practical solution. SafePath applies this by ranking routes on safety rather than speed.",
  },
  {
    title: "Project management & coordination",
    status: "In practice",
    text: "Leading the SafePath team and coordinating college events as an Event Coordinator.",
  },
  {
    title: "Product design & UI/UX",
    status: "In practice",
    text: "Rebuilt the WHBS website's navigation and information architecture around user-centred, clearly grouped content during my internship.",
  },
  {
    title: "AI & machine learning",
    status: "In practice",
    text: "Built the YOLO and CNN pipeline for the animal intrusion detection project, on top of machine learning fundamentals.",
  },
  {
    title: "Generative AI & AI-powered apps",
    status: "Exploring",
    text: "Interested in what AI-powered applications can do for everyday problems, such as the college chatbot project.",
  },
  {
    title: "Business analysis & operations",
    status: "Exploring",
    text: "Curious about how businesses run and grow: processes, operations and the thinking behind decisions.",
  },
  {
    title: "Marketing, content & social media",
    status: "Exploring",
    text: "Drawn to storytelling, content and growth, and to how a message reaches the right audience.",
  },
];

export const aiTools = {
  intro:
    "Practical familiarity with AI tools, explored across academic projects, internship work and hackathons.",
  tools: ["Claude", "Claude Code", "ChatGPT", "Other AI tools"],
  uses: [
    "Research",
    "Brainstorming",
    "Content creation",
    "Project development",
    "Website redesign",
    "Productivity",
  ],
};

export const strengths = [
  "Communication",
  "Public speaking",
  "Leadership",
  "Teamwork",
  "Event management",
  "Creativity",
  "Problem-solving",
  "Adaptability",
];

export type ProjectVisual =
  | "safepath"
  | "whbs"
  | "pipeline"
  | "search"
  | "chat"
  | "workflow";

export interface Project {
  id: string;
  visual: ProjectVisual;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge?: string;
}

/** Ordered by relevance and presentation strength. No repo/demo links are listed because none are verified. */
export const projects: Project[] = [
  {
    id: "safepath",
    visual: "safepath",
    category: "Final-year project · ongoing",
    title: "SafePath",
    subtitle: "Intelligent safety-aware navigation",
    description:
      "Most navigation apps rank routes by speed. SafePath ranks them by safety, scoring street lighting, road conditions, accident-prone segments, construction zones, flooding and time of day. I lead the team building it, with the mapping layer and a Django backend that turns map data, public safety datasets and user-submitted incident reports into a weighted risk score for each route.",
    tags: [
      "Leaflet.js",
      "OpenStreetMap",
      "OSRM",
      "Nominatim",
      "Django",
      "Python",
    ],
  },
  {
    id: "whbs",
    visual: "whbs",
    category: "Internship project · 2026",
    title: "WHBS Website Redesign",
    subtitle: "White House Business Solutions Pvt. Ltd.",
    description:
      "Redesigned the company's entire 14-page website from scratch as a modern, premium interface. I reorganised the navigation around clear content groupings so each business line has its own section, and built a library of 20+ reusable, responsive components with accessibility and performance in mind.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "animal-intrusion",
    visual: "pipeline",
    category: "IoT + AI · Startathon entry",
    title: "Animal Intrusion Detection & Prevention",
    subtitle: "Smart agricultural monitoring for farms",
    description:
      "An AI-based system that watches farm fields in real time to reduce crop damage. I owned the AI pipeline: YOLO for real-time object detection and a CNN that classifies 7–8 crop-raiding species, achieving above 80% accuracy. Camera and sensor modules trigger automated alerts and SMS notifications to farmers, in a low-cost design suited to rural settings.",
    tags: ["YOLO", "CNN", "Arduino", "Raspberry Pi", "GSM / cloud APIs"],
    badge: "Startathon 2025 · Round 4 · cash prize",
  },
  {
    id: "movie-search",
    visual: "search",
    category: "Web app · 10-hour hackathon",
    title: "Movie Search Application",
    subtitle: "Typo-tolerant search on MongoDB",
    description:
      "Built in a 10-hour hackathon. Search forgives spelling mistakes using Levenshtein distance (so “batmn” still finds Batman), with fuzzy matching, autocomplete, and genre, rating and keyword filters over indexed collections in MongoDB Atlas.",
    tags: [
      "MongoDB Atlas",
      "Levenshtein distance",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
    ],
    badge: "TECHZEAL 2026 · Finalist",
  },
  {
    id: "chatbot",
    visual: "chat",
    category: "AI · Chatbot",
    title: "AI Chatbot for College",
    subtitle: "Answers to everyday student questions",
    description:
      "An AI-powered chatbot that helps students resolve college-related queries, giving quick answers on facilities, placements, admissions and fees without having to search through notices or wait for an office to reply.",
    tags: ["AI chatbot"],
  },
  {
    id: "leave-letter",
    visual: "workflow",
    category: "Web · College management",
    title: "Leave Letter Management System",
    subtitle: "Leave and permission requests, made simple",
    description:
      "A college management system that simplifies leave and permission requests. A request is submitted online, goes to the higher authority for review, and is approved digitally, replacing paper letters and running between offices.",
    tags: ["Web application"],
  },
];

export const experience = {
  role: "Web Developer Intern",
  company: "White House Business Solutions Pvt. Ltd.",
  location: "Chennai",
  period: "15 June – 3 July 2026",
  project: "Company website redesign",
  bullets: [
    "Redesigned the company's 14-page website from scratch in Next.js, React, TypeScript, Tailwind CSS and Framer Motion, delivering a modern, premium interface that presents the company's credibility.",
    "Restructured the information architecture and rebuilt navigation around clear content groupings, so offerings are discoverable in fewer clicks and each business line has its own coherent section.",
    "Developed a library of 20+ reusable, fully responsive components with accessibility and performance built in, so the company can make further changes easily.",
  ],
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
};

export const education = {
  degree: "B.E. Computer Science & Technology",
  school: "Vivekanandha College of Engineering for Women (Autonomous)",
  place: "Tiruchengode",
  period: "2023 – Present",
  status: "Final year",
  cgpa: "8.01",
  hsc: {
    title: "Higher Secondary (HSC)",
    school: "GRM School",
    place: "Thiruvarur",
    period: "2020 – 2023",
    score: "75%",
  },
};

export const hackathons = [
  {
    year: "2025",
    name: "All India Women Only Startathon",
    result: "Advanced to Round 4 · cash prize",
    detail: "Animal Intrusion Detection & Prevention System",
  },
  {
    year: "2026",
    name: "TECHZEAL Hackathon",
    result: "Finalist",
    detail: "Movie Search Application, built in a 10-hour hackathon",
  },
  {
    year: "2024",
    name: "Smart India Hackathon",
    result: "Participant",
    detail:
      "“Protect Watch”, a wearable women's safety device with GPS tracking, a camera module and an emergency alert system",
  },
  {
    year: "2025",
    name: "Smart India Hackathon",
    result: "Participant",
    detail:
      "A low-cost wrist-hand orthosis for paralyzed and physically challenged users, with a 3-way toggle for controlled movement",
  },
  {
    year: "2024 & 2025",
    name: "MSME & Yukthi Hackathon",
    result: "Participant",
    detail: "Took part in both editions",
  },
];

export const certificates = [
  { title: "IIT PALS Workshop", issuer: "IIT PALS" },
  { title: "MERN Stack", issuer: "GUVI" },
  { title: "Python for Beginners", issuer: "Udemy" },
  { title: "Introduction to AI", issuer: "Udemy" },
  { title: "Cyber Security", issuer: "NPTEL" },
  { title: "Natural Language Processing", issuer: "NPTEL" },
  { title: "AIOWS · 4th phase", issuer: "Participation" },
  {
    title: "Infosys TECHZOOKA & PALS Hackathon",
    issuer: "MCITY",
  },
  { title: "Workshop", issuer: "Codebind Technologies" },
];

export const activities: {
  title: string;
  theme: string;
  detail?: string;
  wide?: boolean;
}[] = [
  {
    title: "Event Coordinator",
    theme: "Coordination",
    detail: "Planning and coordinating college events.",
    wide: true,
  },
  { title: "Placement Coordinator", theme: "Leadership" },
  { title: "Executive Member", theme: "Leadership" },
  { title: "NSS Volunteer", theme: "Service" },
  { title: "QCFI Member", theme: "Community" },
  {
    title: "Hackathons",
    theme: "Teamwork",
    detail: "Building ideas with teams under time pressure.",
    wide: true,
  },
  { title: "Chess & Badminton", theme: "Sport" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Hindi", level: "Conversational" },
  { name: "Malayalam", level: "Conversational" },
  { name: "French", level: "Basic" },
  { name: "Arabic", level: "Basic" },
];
