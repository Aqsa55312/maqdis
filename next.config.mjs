/** @type {import('next').NextConfig} */

const nextConfig = {
  // 1. Mengaktifkan fitur ekspor HTML statis
  output: 'export',

  // 2. Konfigurasi Gambar
  images: {
    // WAJIB: Ekspor statis tidak mendukung optimasi gambar bawaan Next.js (Image Optimization API)
    // karena tidak ada server Node.js yang berjalan untuk memproses gambar tersebut.
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 3. (Opsional) Menghilangkan tanda "/" di akhir URL agar lebih bersih di hosting statis
  trailingSlash: true,
};

export default nextConfig;