export interface Product {
  id: string;
  name: string;
  badge: string;
  badge_color: string;
  circle: string;
  circle_bg: string;
  description: string;
  price: string;
  price_note: string;
  features: string[];
  cta_text: string;
  cta_color: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ayat Pilihan",
    badge: "FREE",
    badge_color: "bg-green-500",
    circle: "٣١",
    circle_bg: "bg-blue-600",
    description: "Mulai perjalanan hafalanmu dengan ayat-ayat pilihan yang mudah dipelajari. Program ini dirancang khusus untuk pemula yang ingin memulai hafalan Al-Quran dengan metode yang menyenangkan.",
    price: "Gratis",
    price_note: "Akses selamanya",
    features: [
      "31 ayat pilihan terbaik",
      "Metode pembelajaran interaktif",
      "Akses selamanya tanpa biaya",
      "Cocok untuk semua usia",
      "Progress tracking tersedia"
    ],
    cta_text: "Mulai Sekarang",
    cta_color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: "2",
    name: "10 Hari Hafal Al-Muzzammil",
    badge: "PREMIUM",
    badge_color: "bg-violet-500",
    circle: "٢٠٠٢",
    circle_bg: "bg-violet-600",
    description: "Program intensif 10 hari yang dirancang untuk membantu kamu menghafal Surah Al-Muzzammil secara lengkap. Dipandu oleh instruktur berpengalaman dengan metode yang terbukti efektif.",
    price: "Rp 200.000",
    price_note: "Bayar sekali, akses selamanya",
    features: [
      "Surah Al-Muzzammil 20 ayat lengkap",
      "Program terstruktur 10 hari",
      "Bimbingan instruktur berpengalaman",
      "Sertifikat kelulusan resmi",
      "Grup support eksklusif",
      "Materi audio berkualitas tinggi"
    ],
    cta_text: "Daftar Sekarang",
    cta_color: "bg-violet-600 hover:bg-violet-700"
  },
  {
    id: "3",
    name: "30 Hari Hafal Al-Mulk",
    badge: "PREMIUM",
    badge_color: "bg-orange-500",
    circle: "٢٠٠٢",
    circle_bg: "bg-orange-500",
    description: "Program komprehensif 30 hari untuk menghafal Surah Al-Mulk secara menyeluruh. Dilengkapi dengan materi tajwid, tafsir singkat, dan sesi review intensif bersama mentor.",
    price: "Rp 200.000",
    price_note: "Bayar sekali, akses selamanya",
    features: [
      "Surah Al-Mulk 30 ayat lengkap",
      "Program terstruktur 30 hari",
      "Materi tajwid dan tafsir",
      "Sesi review dengan mentor",
      "Sertifikat kelulusan resmi",
      "Grup support eksklusif",
      "Akses materi selamanya"
    ],
    cta_text: "Daftar Sekarang",
    cta_color: "bg-orange-500 hover:bg-orange-600"
  }
];
