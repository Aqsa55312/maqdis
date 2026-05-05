"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Proyek", href: "/proyek" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">ZURISKY</span>
            <span className="text-2xl font-bold text-blue-600">.DEV</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors duration-200 text-sm font-medium ${
                      isActive
                        ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/kontak"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md shadow-blue-200"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <Link
                href="/kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
