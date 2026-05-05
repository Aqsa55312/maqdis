import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  cardLink: string;
}

export default function ProductCard({ product, cardLink }: ProductCardProps) {
  const href = cardLink.replace("[id]", product.id);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${product.circle_bg}`}>
          {product.circle}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${product.badge_color}`}>
          {product.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-3">{product.description}</p>
      
      <div className="mb-6">
        <span className="text-2xl font-bold text-slate-900">{product.price}</span>
        {product.price !== "Gratis" && <span className="text-slate-500 text-sm ml-1">/akses</span>}
      </div>

      <Link
        href={href}
        className="inline-flex items-center justify-center w-full bg-slate-50 text-slate-900 font-semibold py-3 px-4 rounded-xl hover:bg-slate-900 hover:text-white transition-colors duration-300 gap-2"
      >
        Lihat Detail <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
