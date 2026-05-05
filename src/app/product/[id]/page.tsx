import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Zap, Shield, BarChart2, Cpu } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600 mb-6">
                MINI PROJECT FRONTEND
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Selamat Datang di <span className="text-blue-600">Zurisky.Dev</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Mini project frontend modern menggunakan Next.js 14, Tailwind CSS, dan TypeScript. Responsif di semua perangkat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/layanan" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all text-center">
                  Lihat Layanan
                </Link>
                <Link href="/proyek" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all text-center">
                  Lihat Proyek
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
                alt="Web development workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Program Unggulan</h2>
            <p className="text-slate-600">Pilih program yang sesuai dengan kebutuhanmu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Proyek Selesai" },
              { value: "99%", label: "Kepuasan Klien" },
              { value: "3+", label: "Tahun Pengalaman" },
              { value: "24/7", label: "Support Tersedia" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}