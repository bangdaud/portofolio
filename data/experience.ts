// ============================================================
// DATA PENGALAMAN
// Isi dengan bootcamp, project kampus, organisasi, volunteer,
// kepanitiaan, atau aktivitas lain yang relevan.
//
// Cara tambah: copy satu objek, paste di atas (terbaru di atas),
// ubah nilainya. Tidak perlu ubah kode lain.
// ============================================================

export interface Experience {
  id: number;
  role: string;           // Peran / posisi kamu
  company: string;        // Nama institusi / program / organisasi
  companyUrl: string;     // Link website (isi "#" jika tidak ada)
  location: string;       // Lokasi atau "Remote" atau "Online"
  startDate: string;      // Format: "Jan 2024"
  endDate: string;        // Format: "Des 2024" atau "Sekarang"
  type: "bootcamp" | "project" | "organisasi" | "volunteer" | "kepanitiaan" | "freelance" | "internship" | "webinar" | "coding camp" | "Mini Course" | "Event Online" | "course";
  description: string[];  // Bullet point pencapaian / tanggung jawab
  technologies: string[]; // Teknologi yang dipakai (boleh kosong [])
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Coding Camp Software Engineering",
    company: "RevoU",
    companyUrl: "https://revou.co",
    location: "Jakarta, Indonesia (online)",
    startDate: "July 2026",
    endDate: "July 2026",
    type: "coding camp",
    description: [
      "Memahami fundamental Software Engineering dan Software Development Lifecycle",
      "Menguasai dasar Frontend & Backend Development",
      "Mempelajari Database, API, serta Version Control menggunakan Git & GitHub",
      "Membuat Final project  ",
    ],
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    id: 2,
    role: "AI-Engineering Fundamentals",
    company: "ReWork",
    companyUrl: "https://reworkacademy.com/",
    location: "Indonesia (online)",
    startDate: "july 2026",
    endDate: "july 2026",
    type: "Mini Course",
    description: [
      "Mempelajari dasar-dasar Artificial Intelligence (AI) dan penerapannya dalam pengembangan aplikasi.",
      "Memahami konsep Large Language Models (LLMs) untuk membangun solusi berbasis AI.",
      "Mempelajari teknik Prompt Engineering agar AI dapat menghasilkan respons yang lebih efektif.",
      "Memahami alur integrasi teknologi AI ke dalam aplikasi modern dan pengembangan perangkat lunak.",
    ],
    technologies: ["Artificial Intelligence (AI)", "Large Language Models (LLMs)", "AI Engineering"],
  },
  {
    id: 3,
    role: "DevOps Engineer",
    company: "Dibimbing.id",
    companyUrl: "https://dibimbing.id",
    location: "Indonesia (Online)",
    startDate: "july 2026",
    endDate: "July 2026",
    type: "Event Online",
    description: [
      "Mengenal pentingnya kolaborasi antara tim pengembangan (Development) dan operasional (Operations)",
      "Memperoleh wawasan mengenai praktik modern dalam proses pengembangan, pengujian, dan deployment aplikasi",
      "Memahami peran DevOps dalam meningkatkan efisiensi, otomatisasi, dan keandalan proses pengembangan perangkat lunak",
      "Menambah pengetahuan mengenai tren dan peluang karier di bidang DevOps Engineering",
    ],
    technologies: ["Linux Operating System", "DevOps Fundamentals", "Git & GitHub", "Monitoring & Deployment Concepts", ],
  },
  {
    id: 4,
    role: "Penerapan Data Analyst di Berbagai Bidang Pekerjaan",
    company: "HaloTech Academy",
    companyUrl: "https://halotechacademy.com/",
    location: "Indonesia (Online)",
    startDate: "july 2026",
    endDate: "July 2026",
    type: "webinar",
    description: [
      "Memahami peran Data Analyst dalam membantu pengambilan keputusan berbasis data.",
      "Mempelajari alur kerja analisis data mulai dari pengumpulan, pengolahan, hingga visualisasi data.",
      "Mengenal keterampilan dasar yang dibutuhkan untuk berkarier sebagai Data Analyst.",
      "Menambah wawasan mengenai implementasi analisis data dalam mendukung efisiensi bisnis dan pengembangan organisasi",
    ],
    technologies: ["Data Analytics", "Data Visualization", "Data Processing", "Analytical Thinking"],
  },
  {
    id: 5,
    role: "Generative Artificial Intelligence (Generative AI)",
    company: "Codepolitan",
    companyUrl: "https://www.codepolitan.com/",
    location: "Indonesia (Online)",
    startDate: "July 2026",
    endDate: "july 2026",
    type: "course",
    description: [
      "Mempelajari konsep dasar Generative Artificial Intelligence (Generative AI) dan penerapannya dalam berbagai bidang",
      "Memahami cara kerja model AI generatif untuk menghasilkan teks, gambar, dan konten digital.",
      "Mengenal peluang pemanfaatan Generative AI dalam meningkatkan produktivitas dan otomatisasi pekerjaan",
    ],
    technologies: ["Generative AI", "Artificial Intelligence (AI)", "Prompt Engineering Fundamentals"],
  },
  {
  id: 6,
  role: "Legal - AI Agent for Legal",
  company: "Hacktiv8 Indonesia",
  companyUrl: "https://www.hacktiv8.com/",
  location: "Indonesia (Online)",
  startDate: "July 2026",
  endDate: "July 2026",
  type: "project",
  description: [
    "Mempelajari konsep dan penerapan Artificial Intelligence dalam mendukung kebutuhan dan proses di bidang hukum.",
    "Memahami konsep AI Agent serta pemanfaatannya untuk membantu menyelesaikan permasalahan dan tugas yang berkaitan dengan bidang legal.",
    "Menyelesaikan dan mempresentasikan final project sebagai bagian dari persyaratan program IBM SkillsBuild University Education."
  ],
  technologies: [
    "Artificial Intelligence (AI)",
    "AI Agent",
    "Generative AI",
    "Legal Technology"
  ],
  },
{
  id: 7,
  role: "Intro to Data Analytics",
  company: "RevoU",
  companyUrl: "https://www.revou.co/",
  location: "Indonesia (Online)",
  startDate: "August 2026",
  endDate: "August 2026",
  type: "Mini Course",
  description: [
    "Mempelajari konsep dasar Data Analytics dan peran analisis data dalam mendukung pengambilan keputusan.",
    "Memahami tahapan dasar dalam proses analisis data, mulai dari pengumpulan, pengolahan, hingga interpretasi data.",
    "Mengenal penerapan Data Analytics untuk menghasilkan insight yang dapat digunakan dalam menyelesaikan berbagai permasalahan bisnis."
  ],
  technologies: [
    "Data Analytics",
    "Data Analysis",
    "Data Interpretation",
    "Business Insights"
  ],
},
];
