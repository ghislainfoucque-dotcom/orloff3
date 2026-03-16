"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Activités", href: "/activites" },
  { name: "Accueil chevaux", href: "/accueil-chevaux" },
  { name: "Cavalerie", href: "/cavalerie" },
  { name: "La Team", href: "/la-team" },
  { name: "Inscription & Tarifs", href: "/contact/tarifs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-orloff.png"
              alt="Logo Centre Équestre Orloff"
              width={48}
              height={48}
              className="h-10 w-auto lg:h-12"
            />
            <span className="font-display text-2xl lg:text-3xl font-bold text-white tracking-wider">
              ORLOFF III
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-anthracite hover:bg-cream hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20 mt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium ${
                    pathname === item.href ? "text-accent" : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 py-2 text-sm text-white/70 hover:text-white"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
