// ============================================================
// DATA PENDIDIKAN
// Cara tambah: copy objek, paste di atas (terbaru di index 0)
// ============================================================

export interface Education {
  id: number;
  degree: string;         // Gelar / jenjang pendidikan
  major: string;          // Jurusan
  institution: string;    // Nama universitas / sekolah
  location: string;
  startYear: string;
  endYear: string;        // Isi "Sekarang" jika masih berjalan
  gpa?: string;           // IPK (opsional)
  description: string;    // Deskripsi singkat atau pencapaian
  achievements: string[]; // Prestasi / kegiatan organisasi
}

export const educations: Education[] = [
  {
    id: 1,
    degree: "Sarjana Komputer (S.Kom)",
    major: "Informatika",
    institution: "Universitas Mercu Buana Yogyakarta",
    location: "Yogyakarta, Indonesia",
    startYear: "2021",
    endYear: "2025",
    gpa: "3.67",
    description:
      "Fokus pada pengembangan perangkat lunak, kecerdasan buatan, dan sistem terdistribusi. Tugas akhir tentang Diagnosa Gangguan Kecemasan Menggunakan Metode Certainty Factor.",
    achievements: [
      "🎓 Lulus S1 Teknik Informatika, Universitas Mercu Buana Yogyakarta",
      "📊 Menyelesaikan tugas akhir berjudul Sistem Pakar Diagnosa Gangguan Kecemasan Menggunakan Metode Certainty Factor",
      "🤖 Mengembangkan sistem pakar berbasis web menggunakan metode Certainty Factor",
      "🌐 Menguasai pengembangan aplikasi web menggunakan React, Next.js, Node.js, MySQL, dan Git",
    ],
  
  },
];
