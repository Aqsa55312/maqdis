import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const stats = [
    { value: "50+", label: "Proyek Selesai" },
    { value: "99%", label: "Kepuasan Klien" },
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "24/7", label: "Support Tersedia" }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-200/50 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 shadow-sm border border-blue-200">
                MINI PROJECT FRONTEND
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">
                Selamat Datang di <br />
                <span className="text-blue-600">Zurisky.Dev</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Mini project frontend modern menggunakan Next.js 14, Tailwind CSS, dan TypeScript. Responsif di semua perangkat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/layanan"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  Lihat Layanan <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/proyek"
                  className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Lihat Proyek
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
                alt="Web development workspace"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Program Unggulan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan kebutuhanmu. Tersedia kelas gratis dan premium.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} cardLink="/product/[id]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
