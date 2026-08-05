/** Central content source — edit these arrays to customize the site. */

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Restaurant Website",
    category: "Hospitality",
    description:
      "An appetite-driven restaurant experience with menu highlights, reservations and a warm editorial layout.",
    tech: ["React", "Tailwind CSS", "AI Assisted"],
    url: "https://zehra-ai-next.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "Dentist Website",
    category: "Healthcare",
    description:
      "A calm, trust-first clinic site with treatment pages, team credibility and booking-focused CTAs.",
    tech: ["React", "Tailwind CSS", "SEO"],
    url: "https://pinnacle-smile-solutions.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "Gym Landing Page",
    category: "Fitness",
    description:
      "High-energy conversion landing page with bold typography, program cards and membership pricing.",
    tech: ["React", "Motion", "Tailwind CSS"],
    url: "https://golden-kinetic-forge.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "Real Estate Website",
    category: "Property",
    description:
      "Premium property showcase with listing grids, filters and elegant agent-focused storytelling.",
    tech: ["React", "Tailwind CSS", "Responsive"],
    url: "https://noble-dwelling.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "AI Chatbot Landing Page",
    category: "AI Product",
    description:
      "Product launch page for a conversational AI assistant with feature blocks and animated demos.",
    tech: ["React", "Motion", "AI UX"],
    url: "https://aurora-chat-zen.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "AI SaaS Landing Page",
    category: "SaaS",
    description:
      "Skill-building SaaS funnel with pricing tiers, social proof and a crisp onboarding narrative.",
    tech: ["React", "Tailwind CSS", "Conversion"],
    url: "https://build-your-skillset.lovable.app/",
    github: "https://github.com/",
  },
  {
    title: "Travel Agency Website",
    category: "Travel",
    description:
      "Elegant travel brand site with destination cards, itineraries and immersive imagery.",
    tech: ["React", "Tailwind CSS", "Motion"],
    url: "https://globetrotter-elegance.lovable.app/",
    github: "https://github.com/",
  },
];

export const services = [
  {
    title: "AI Website Development",
    description: "End-to-end websites built fast with AI-assisted engineering workflows.",
    icon: "Sparkles",
  },
  {
    title: "Landing Page Design",
    description: "Conversion-focused pages designed around one clear business goal.",
    icon: "Rocket",
  },
  {
    title: "Business Websites",
    description: "Credible, structured multi-page sites for growing companies.",
    icon: "Building2",
  },
  {
    title: "Portfolio Websites",
    description: "Personal brand sites that make creators and freelancers look premium.",
    icon: "LayoutTemplate",
  },
  {
    title: "AI Web Applications",
    description: "Chat, automation and AI-powered tools wired into real product flows.",
    icon: "Bot",
  },
  {
    title: "Website Redesign",
    description: "Modernizing dated sites into fast, elegant, on-brand experiences.",
    icon: "Wand",
  },
  {
    title: "Responsive Web Design",
    description: "Pixel-precise layouts that feel native on every screen size.",
    icon: "Smartphone",
  },
  {
    title: "Website Deployment",
    description: "Production launches with domains, analytics and performance tuning.",
    icon: "CloudUpload",
  },
] as const;

export const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 94 },
];

export const tools = ["ChatGPT", "Claude", "Cursor", "Replit", "GitHub", "Vercel"];

export const reasons = [
  { title: "Fast Delivery", description: "Most projects shipped in days, not months.", icon: "Zap" },
  { title: "Clean Code", description: "Readable, component-based and easy to extend.", icon: "Code" },
  {
    title: "Mobile Responsive",
    description: "Designed mobile-first and tested across breakpoints.",
    icon: "Smartphone",
  },
  { title: "Modern UI/UX", description: "Premium layouts with purposeful motion.", icon: "Palette" },
  {
    title: "AI Assisted Development",
    description: "AI tooling for speed without losing craft.",
    icon: "BrainCircuit",
  },
  { title: "SEO Friendly", description: "Semantic markup, metadata and fast loads.", icon: "Search" },
] as const;

export const testimonials = [
  {
    quote:
      "Zehra rebuilt our landing page in under a week and our enquiries doubled. The design feels far more expensive than what we paid.",
    name: "Ayesha Khan",
    role: "Founder, Bloom Studio",
    initials: "AK",
  },
  {
    quote:
      "Clear communication, quick revisions and genuinely modern UI. She understood our clinic's tone immediately.",
    name: "Dr. Omar Raza",
    role: "Director, Pinnacle Dental",
    initials: "OR",
  },
  {
    quote:
      "The AI features she added to our web app saved our team hours every week. Highly recommended for startups.",
    name: "Daniel Meyer",
    role: "CTO, Skillset AI",
    initials: "DM",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
