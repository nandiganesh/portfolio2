import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[20vw] md:text-[12vw] leading-none font-medium text-gradient-accent">
        404
      </p>
      <h1 className="font-display text-2xl md:text-4xl font-medium mt-4 mb-6">
        This page wandered off.
      </h1>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background"
      >
        Back to home
      </Link>
    </section>
  );
}
