import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Expertise", href: "#expertise" },
  { label: "Track Record", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full px-5 py-3 transition-all duration-500",
          scrolled
            ? "bg-card/85 shadow-soft backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            M
          </span>
          <span className="font-display text-xl leading-none">
            Mostafa Samir
            <span className="block font-sans text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground">
              PropTech Engineering
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 max-w-6xl space-y-1 rounded-3xl bg-card p-4 shadow-soft md:hidden">
          {links.concat({ label: "Contact", href: "#contact" }).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
