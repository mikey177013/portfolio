// Mock data for Mikey's Cyberpunk Portfolio

export const personalInfo = {
  name: "Mikey",
  alias: "177013",
  taglines: [
    "Coder. Creator. Chaos Architect.",
    "Building Digital Dreams.",
    "Where Code Meets Art.",
    "Crafting Chaos, One Line at a Time."
  ],
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikey&style=circle",
  bio: "Hey, I'm Mikey — a developer who believes code should be art, not just function. I live in the intersection of creativity and technology, building things that make people go 'whoa'. When I'm not crafting digital experiences, you'll find me exploring new frameworks, diving into anime, or architecting chaos in the best way possible.",
  email: "phoenix177013@gmail.com",
  location: "mars",
  socials: {
    github: "https://github.com/mikey177013",
    twitter: "https://github.com/mikey177013",
    linkedin: "https://github.com/mikey177013",
    discord: "I dont use"
  }
};

export const skills = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
  { name: "TypeScript", level: 88, category: "Language", icon: "🔷" },
  { name: "Python", level: 85, category: "Language", icon: "🐍" },
  { name: "MongoDB", level: 82, category: "Database", icon: "🍃" },
  { name: "Next.js", level: 92, category: "Framework", icon: "▲" },
  { name: "Three.js", level: 75, category: "3D/Graphics", icon: "🎮" },
  { name: "Docker", level: 80, category: "DevOps", icon: "🐋" },
  { name: "GraphQL", level: 78, category: "API", icon: "◈" },
  { name: "Framer Motion", level: 87, category: "Animation", icon: "🌀" }
];

export const experiences = [
  {
    year: "2025",
    title: "A simple vibe coder",
    company: "whatsapp bot",
    description: "My life was nothing but suffering. ",
    icon: "💻"
  },
  {
    year: "2024",
    title: "student",
    company: "just enjoyed my 11th",
    icon: "🎨"
  },
  {
    year: "2022",
    title: "STUDENT",
    company: "10TH",
    description: "Studied a lot",
    icon: "⚡"
  },
  {
    year: "2021",
    title: "I forgot",
    company: "student",
    description: "i forgot",
    icon: "🎓"
  }
];

export const projects = [
  {
    id: 1,
    title: "CUTIEFY",
    description: "A WEBSITE WHERE YOU CAN LISTEN SONGS",
    image: "https://images.unsplash.com/photo-1595623654300-b27329804025?w=800",
    tags: ["React", "Socket.io", "Node.js"],
    liveUrl: "https://cutiefy.vercel.app/",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI Code Assistant",
    description: "Smart coding companion powered by AI. Helps with code completion, bug fixing, and refactoring.",
    image: "https://images.unsplash.com/photo-1669052700037-db884b37b2d9?w=800",
    tags: ["Python", "OpenAI", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "Automated portfolio creation tool with multiple themes. Built for developers who hate design.",
    image: "https://images.unsplash.com/photo-1654375408506-382720d3e05f?w=800",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Task Matrix",
    description: "Productivity app with gamification. Track tasks, earn XP, level up your productivity game.",
    image: "https://images.unsplash.com/photo-1563863251222-11d3e3bd3b62?w=800",
    tags: ["React", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Cyber Dashboard",
    description: "Analytics dashboard with real-time data visualization. Cyberpunk themed with neon charts.",
    image: "https://images.unsplash.com/photo-1550275994-cdc89cd1948f?w=800",
    tags: ["Vue.js", "D3.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "API Gateway",
    description: "Microservices API gateway with rate limiting, caching, and authentication.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800",
    tags: ["Node.js", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const githubStats = {
  repos: 42,
  stars: 328,
  followers: 156,
  contributions: 1847
};

// Mock GitHub repositories (will be replaced with real API data)
export const githubRepos = [
  {
    id: 1,
    name: "react-neon-ui",
    description: "Cyberpunk-themed React component library with neon effects",
    language: "TypeScript",
    stars: 87,
    forks: 23,
    url: "https://github.com/mikey177013/react-neon-ui"
  },
  {
    id: 2,
    name: "chaos-engine",
    description: "Game engine built with WebGL and Three.js for browser-based games",
    language: "JavaScript",
    stars: 142,
    forks: 31,
    url: "https://github.com/mikey177013/chaos-engine"
  },
  {
    id: 3,
    name: "ai-code-reviewer",
    description: "Automated code review tool powered by AI",
    language: "Python",
    stars: 56,
    forks: 12,
    url: "https://github.com/mikey177013/ai-code-reviewer"
  },
  {
    id: 4,
    name: "quantum-todo",
    description: "Task management app with quantum computing concepts",
    language: "TypeScript",
    stars: 34,
    forks: 8,
    url: "https://github.com/mikey177013/quantum-todo"
  },
  {
    id: 5,
    name: "matrix-terminal",
    description: "Matrix-style terminal emulator for the web",
    language: "JavaScript",
    stars: 198,
    forks: 45,
    url: "https://github.com/mikey177013/matrix-terminal"
  },
  {
    id: 6,
    name: "neon-api",
    description: "RESTful API boilerplate with cyberpunk aesthetics",
    language: "Node.js",
    stars: 71,
    forks: 19,
    url: "https://github.com/mikey177013/neon-api"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at Digital Dreams",
    content: "Mikey's work is absolutely phenomenal. He doesn't just write code, he creates experiences. Our conversion rate increased by 40% after his redesign.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "Product Manager at TechStart",
    content: "Working with Mikey was a game-changer. He brought creative solutions to complex problems and delivered ahead of schedule every time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Lead Designer at Chaos Labs",
    content: "Mikey bridges the gap between design and development perfectly. He understands both worlds and creates magic at their intersection.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  }
];