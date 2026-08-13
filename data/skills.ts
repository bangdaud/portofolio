// ============================================================
// DATA SKILLS
// Cara tambah skill baru: tambah objek baru di array kategori
// yang sesuai. Level: 1–100 (persentase penguasaan).
// ============================================================

export interface Skill {
  name: string;
  level: number;  // 1-100
  icon: string;   // emoji atau nama icon Lucide
}

export interface SkillCategory {
  category: string;
  icon: string;   // emoji
  color: string;  // warna Tailwind untuk card
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-purple-500/20 to-purple-600/10",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
      { name: "Framer Motion", level: 75, icon: "✨" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-blue-500/20 to-blue-600/10",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚂" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "FastAPI", level: 70, icon: "⚡" },
      { name: "REST API", level: 85, icon: "🔗" },
      { name: "GraphQL", level: 60, icon: "◈" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-cyan-500/20 to-cyan-600/10",
    skills: [
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "MySQL", level: 75, icon: "🐬" },
      { name: "Redis", level: 60, icon: "🔴" },
      { name: "Prisma ORM", level: 75, icon: "💎" },
    ],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    color: "from-violet-500/20 to-violet-600/10",
    skills: [
      { name: "TensorFlow", level: 65, icon: "🧠" },
      { name: "PyTorch", level: 60, icon: "🔥" },
      { name: "OpenCV", level: 70, icon: "👁️" },
      { name: "Scikit-learn", level: 70, icon: "📊" },
      { name: "OpenAI API", level: 80, icon: "🤖" },
      { name: "Hugging Face", level: 65, icon: "🤗" },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "from-orange-500/20 to-orange-600/10",
    skills: [
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "Linux", level: 75, icon: "🐧" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 70, icon: "🎭" },
      { name: "Postman", level: 85, icon: "📮" },
    ],
  },
  {
    category: "Version Control",
    icon: "📦",
    color: "from-green-500/20 to-green-600/10",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "GitHub", level: 85, icon: "🐙" },
      { name: "GitLab", level: 75, icon: "🦊" },
      { name: "CI/CD", level: 65, icon: "🔄" },
    ],
  },
];
