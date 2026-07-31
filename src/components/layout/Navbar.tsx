"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav";
import { categories } from "@/data/categories";
import Logo from "@/components/ui/Logo";

function ProductsDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "relative flex items-center gap-1 font-sans text-[13px] uppercase tracking-[0.08em] transition-colors hover:text-ink",
          active ? "text-ink" : "text-ink/60"
        )}
      >
        Prodotti
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        {active && (
          <motion.span
            layoutId="nav-active"
            className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-accent-dark"
          />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white p-2 shadow-xl shadow-ink/10">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="block rounded-xl px-4 py-2.5 font-sans text-sm text-ink/75 transition-colors hover:bg-paper-dim hover:text-ink"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const productsActive = categories.some((c) => pathname === `/${c.slug}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-paper/95 py-2.5 shadow-[0_1px_0_0_rgba(21,23,26,0.08)] backdrop-blur-md"
            : "bg-paper py-4"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" aria-label="Windows Style Trading — Home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className={cn(
                "relative font-sans text-[13px] uppercase tracking-[0.08em] transition-colors hover:text-ink",
                pathname === "/" ? "text-ink" : "text-ink/60"
              )}
            >
              Home
              {pathname === "/" && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-accent-dark"
                />
              )}
            </Link>
            <ProductsDropdown active={productsActive} />
            {navLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-sans text-[13px] uppercase tracking-[0.08em] transition-colors hover:text-ink",
                    active ? "text-ink" : "text-ink/60"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-accent-dark"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contatti"
              className="hidden rounded-full bg-ink px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-accent-dark hover:text-ink sm:inline-block"
            >
              Richiedi preventivo
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink px-8 py-28 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="block border-b border-ink-line py-3.5 font-display text-2xl text-paper">
                Home
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="pt-5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent"
            >
              Prodotti
            </motion.p>
            {categories.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.05 }}
              >
                <Link
                  href={`/${c.slug}`}
                  className="block border-b border-ink-line py-3.5 font-display text-2xl text-paper"
                >
                  {c.title}
                </Link>
              </motion.div>
            ))}
            {navLinks.slice(1).map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + (categories.length + i) * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block border-b border-ink-line py-3.5 font-display text-2xl text-paper"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
