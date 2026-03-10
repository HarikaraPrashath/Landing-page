import Link from "next/link";
export function Header() {
  return (
    <header className="sticky top-6 z-50 flex justify-center px-4">
      <div className="flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/70 px-8 backdrop-blur-xl shadow-lg">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-semibold text-lg text-white">Auroze</span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Pricing
          </Link>

          <Link
            href="#integrations"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Integrations
          </Link>

          <Link
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Testimonials
          </Link>
        </nav>

        {/* CTA */}
        <button type="button" className="rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 hover:opacity-90">
          Get Started
        </button>

      </div>
    </header>
  );
}