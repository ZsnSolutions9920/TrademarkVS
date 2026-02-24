import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative bg-navy pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-light/10 rounded-full blur-[100px] pointer-events-none" />
      {/* ring deco */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <span className="inline-flex items-center gap-2 bg-gold/15 border border-gold/20 rounded-full px-5 py-2 mb-7">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gold text-sm font-semibold">Limited Availability</span>
        </span> */}

        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
          Book Your Free 15-Minute
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trademark Review</span>
        </h2>

        <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          Speak directly with our filing team to review your trademark status, discuss eligibility,
          and understand your options — at no cost and with no obligation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-lg whitespace-nowrap px-10 py-4.5 rounded-full shadow-lg hover:bg-gold-light hover:scale-105 transition-all duration-300"
          >
            Schedule Consultation
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:+18005550199"
            className="inline-flex items-center justify-center gap-2 text-white/70 font-semibold text-lg whitespace-nowrap px-8 py-4.5 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Or Call Now
          </a>
        </div>
        <p className="mt-6 text-white/30 text-sm">No credit card required. No commitment.</p>
      </div>
    </section>
  );
}
