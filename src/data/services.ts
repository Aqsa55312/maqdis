export interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const services: Service[] = [
  {
    icon: "Globe",
    title: "Web Development",
    description: "Membangun website modern, cepat, dan responsif menggunakan teknologi terkini.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: "Smartphone",
    title: "Mobile Friendly",
    description: "Desain yang sempurna di semua ukuran layar, dari mobile hingga desktop.",
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    icon: "Zap",
    title: "High Performance",
    description: "Optimasi performa maksimal dengan SSR, lazy loading, dan CDN.",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: "Shield",
    title: "Secure & Reliable",
    description: "Keamanan enterprise-grade dengan uptime 99.9% terjamin.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: "BarChart2",
    title: "Analytics & Dashboard",
    description: "Dashboard interaktif dengan visualisasi data real-time.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    icon: "Cpu",
    title: "AI Integration",
    description: "Integrasi fitur AI dan machine learning ke dalam produk digitalmu.",
    color: "text-pink-600",
    bg: "bg-pink-50"
  }
];
