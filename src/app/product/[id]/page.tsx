import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { CheckCircle2, ArrowLeft } from "lucide-react";

// Required for `output: export` — tells Next.js which [id] values to pre-render
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          href="/layanan"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Kembali ke Layanan
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className={`${product.circle_bg} p-10 text-white text-center`}>
            <div className="text-6xl font-bold mb-3">{product.circle}</div>
            <span
              className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${product.badge_color} text-white mb-4`}
            >
              {product.badge}
            </span>
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">
            <p className="text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-extrabold text-slate-900">
                {product.price}
              </span>
              <span className="text-slate-400 text-sm">{product.price_note}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-10">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`w-full py-4 rounded-full text-white font-bold text-lg transition-all ${product.cta_color}`}
            >
              {product.cta_text}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}