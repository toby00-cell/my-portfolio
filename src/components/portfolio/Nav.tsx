export function Nav() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-border bg-card/80 px-5 py-3 shadow-[var(--shadow-card)] backdrop-blur">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          <span className="text-foreground">Portfolio</span>
          <span className="text-primary">.</span>
        </a>
        <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#blog" className="hover:text-foreground">Blog</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}