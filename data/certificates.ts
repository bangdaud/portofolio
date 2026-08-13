// ============================================================
// DATA SERTIFIKAT
// Cara tambah sertifikat baru: copy satu objek { ... } di
// bawah ini, paste setelah objek terakhir, lalu ubah nilainya.
// Tidak perlu mengubah kode komponen apapun.
// ============================================================

export interface Certificate {
  id: number;
  title: string;             // Nama sertifikat
  issuer: string;            // Nama lembaga penerbit
  year: string;              // Tahun diterima, misal "2024"
  month?: string;            // Bulan diterima (opsional), misal "Maret"
  credentialId?: string;     // ID sertifikat (opsional)
  credentialUrl: string;     // Link ke sertifikat asli (isi "#" jika tidak ada)
  image: string;             // Path gambar dari /public, misal "/images/certificates/aws.png"
  category: "programming" | "cloud" | "ai" | "design" | "management" | "dataanalyst" | "softwareengineering" | "other";
  description?: string;      // Deskripsi singkat (opsional)
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Intro to Software enggineering",
    issuer: "RevoU",
    year: "2026",
    month: "July",
    credentialId: "CCSE-060726-01-1-00116",
    credentialUrl: "#",
    image: "/images/certificates/RevoU.png",
    category: "softwareengineering",
  },
  {
    id: 2,
    title: "Dasar dan Penggunaan Generatif AI",
    issuer: "Codepolitan",
    year: "2026",
    month: "July",
    credentialId: "CPRAI-CR/2026/VII/3671",
    credentialUrl: "#",
    image: "/images/certificates/Codepolitan.png",
    category: "ai",
    description: "Sertifikasi Dasar dan Penggunaan Generatif AI.",
  },
  {
    id: 3,
    title: "AI-Engineering Fundamentals",
    issuer: "ReWork",
    year: "2026",
    month: "July",
    credentialUrl: "#",
    image: "/images/certificates/ReWork.png",
    category: "ai",
    description: "Mengikuti 2-Day Mini Course AI Engineering Fundamentals oleh ReWork Academy untuk mempelajari dasar-dasar AI Engineering dan implementasi kecerdasan buatan dalam pengembangan aplikasi..",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    issuer: "Dibimbing",
    year: "2026",
    month: "July",
    credentialUrl: "#",
    image: "/images/certificates/Dibimbing.png",
    category: "softwareengineering",
    description: "Berpartisipasi dalam Event Online DevOps Engineer yang membahas dasar-dasar DevOps, CI/CD, containerization, version control, dan implementasi otomatisasi pada siklus pengembangan perangkat lunak.",
  },
  {
    id: 5,
    title: "Penerapan Data Analyst Diberbagai Bidang Pekerjaan",
    issuer: "HaloTech Academy",
    year: "2026",
    month: "July",
    credentialId: "HTA26-WD12-028",
    credentialUrl: "#",
    image: "/images/certificates/HaloTech Academy.png",
    category: "dataanalyst",
    description: "Mengikuti seminar mengenai penerapan Data Analytics di berbagai bidang industri, mencakup proses pengumpulan, pengolahan, visualisasi, dan interpretasi data sebagai dasar pengambilan keputusan.",
  },
  {
    id: 6,
    title: "Toefl",
    issuer: "Universitas Mercu Buana Yogyakarta",
    year: "2025",
    month: "June",
    credentialId: "0997/EPT/P2BUMBY/VI/2025",
    credentialUrl: "#",
    image: "/images/certificates/Toefl.png",
    category: "other",
    description: "Menyelesaikan tes TOEFL untuk mengukur kemampuan bahasa Inggris dalam aspek Listening, Structure, dan Reading sebagai kompetensi pendukung di lingkungan akademik maupun profesional.",
  },
  {
    id: 7,
    title: "Legal- AI Agent for Legal",
    issuer: "HACKTIV8 in Collaboration with IBM SkillsBuild",
    year: "2026",
    month: "July",
    credentialId: "02157/H8/CSR/ISUE/V/2026",
    credentialUrl: "https://students.hacktiv8.com/certificates/2c044948-1804-43b2-ad96-5730fd1140ea",
    image: "/images/certificates/Hacktiv.png",
    category: "ai",
    description: "Sertifikasi AI Agent for Legal HACKTIV8 in Collaboration with IBM SkillsBuild .",
  },
  {
    id: 8,
    title: "Intro to Data Analyst",
    issuer: "RevoU",
    year: "2026",
    month: "Agustus",
    credentialId: "DAMC-030826-01-1-00555",
    credentialUrl: "#",
    image: "/images/certificates/RevoU2.png",
    category: "DataAnalyst",
    description: "Sertifikasi dasar Intro to Data Analyst.",
  },
  {
    id: 9,
    title: "Cara Mengambil Keputusan Bisnis yang Tepat dengan Data & AI",
    issuer: "HaloTech Academy",
    year: "2026",
    month: "Agustus",
    credentialId: "HTA26-WD14-032",
    credentialUrl: "#",
    image: "/images/certificates/HaloTech Academy2.png",
    category: "ai",
    description: "Mengikuti seminar mengenai Cara Mengambil Keputusan Bisnis yang Tepat dengan Data & AI.",
  },
];
