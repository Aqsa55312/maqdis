import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProyekPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Proyek Kami
          </h1>
          <p className="text-xl text-slate-600">
            Portofolio karya terbaik yang telah kami selesaikan. Berbagai macam solusi digital yang kami bangun dengan penuh dedikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className={`absolute inset-0 opacity-20 mix-blend-multiply ${project.color} z-10 group-hover:opacity-0 transition-opacity duration-300`}></div>
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-slate-900" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
