import { services } from "@/data/services";
import * as Icons from "lucide-react";

export default function LayananPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Layanan Kami
          </h1>
          <p className="text-xl text-slate-600">
            Solusi digital terbaik untuk kebutuhanmu. Kami menyediakan layanan komprehensif untuk membantu bisnismu berkembang di era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            // @ts-ignore - Dynamic icon rendering
            const Icon = Icons[service.icon] || Icons.Globe;
            
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
