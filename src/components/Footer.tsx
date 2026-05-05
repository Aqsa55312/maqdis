import Link from "next/link";
import { Camera, Briefcase, GitBranch } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Proyek", href: "/proyek" },
    { label: "Kontak", href: "/kontak" },
  ];

  const socialLinks = [
    { platform: "Instagram", url: "https://instagram.com/", icon: Camera },
    { platform: "LinkedIn", url: "https://linkedin.com/in/zurisky-aqsa-firmansyah/", icon: Briefcase },
    { platform: "GitHub", url: "https://github.com/Aqsa55312", icon: GitBranch },
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">ZURISKY</span>
              <span className="text-2xl font-bold text-blue-500">.DEV</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Building modern web experiences. Kami berdedikasi untuk menciptakan solusi digital terbaik untuk kebutuhan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Tautan Cepat</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Sosial Media</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Zurisky Aqsa Firmansyah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
