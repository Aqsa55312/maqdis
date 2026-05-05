import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

// Generate static params for SSG
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-12 gap-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Produk</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className={`w-32 h-32 shrink-0 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg ${product.circle_bg}`}>
                  {product.circle}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{product.name}</h1>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm ${product.badge_color}`}>
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Fitur & Benefit</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
              <ArrowLeft className="w-5 h-5" /> Kembali ke Beranda
            </Link>
          </div>

          {/* Sidebar / Checkout Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-28">
              <p className="text-slate-500 font-medium mb-2">Harga Program</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">{product.price}</span>
              </div>
              <p className="text-sm text-slate-500 mb-8">{product.price_note}</p>

              <button className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 ${product.cta_color}`}>
                {product.cta_text}
              </button>

              <div className="mt-6 text-center text-sm text-slate-500 flex flex-col gap-2">
                <p>✓ Garansi uang kembali 30 hari</p>
                <p>✓ Akses langsung setelah pembayaran</p>
                <p>✓ Pembayaran aman & terenkripsi</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
