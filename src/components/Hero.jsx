import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';

const PHONE_TEL = 'tel:+18005550199';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-navy via-indigo to-blue overflow-hidden">
        {/* ---- decorative background layers ---- */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gold/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-light/20 blur-[100px] pointer-events-none" />

        {/* spinning ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.04] rounded-full animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white/[0.06] rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

        {/* dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />

        {/* ---- content ---- */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28 lg:pt-48 lg:pb-36">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left copy */}
            <div>
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-5 py-2 mb-7">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                </span>
                <span className="text-white/90 text-sm font-medium tracking-wide">USPTO Trademark Specialists</span>
              </div> */}

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Your Trademark Expired?
                <br />
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">Secure Your Brand</span>
                <br />
                Before Someone Else Does.
              </h1>

              <p className="mt-7 text-lg lg:text-xl text-white/70 leading-relaxed max-w-lg">
                If your USPTO trademark has been abandoned or expired, immediate action is critical.
                We help business owners restore and protect their brand rights — quickly and professionally.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-light text-navy font-bold text-base whitespace-nowrap px-9 py-4.5 rounded-full shadow-xl shadow-gold/25 hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now — Free Review
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.08] backdrop-blur text-white font-semibold text-base whitespace-nowrap px-9 py-4.5 rounded-full border border-white/15 hover:bg-white/15 hover:scale-105 transition-all duration-300"
                >
                  Book Free Consultation
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-14 flex flex-wrap gap-10">
                {[
                  { val: '10K+', label: 'Filings Processed' },
                  { val: '98%', label: 'Success Rate' },
                  { val: '4.9', label: 'Client Rating', gold: true },
                ].map((s) => (
                  <div key={s.label}>
                    <p className={`text-3xl font-black ${s.gold ? 'text-gold' : 'text-white'}`}>{s.val}</p>
                    <p className="text-white/40 text-sm mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – image composition */}
            <div className="hidden lg:block relative">
              {/* main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=640&h=520&fit=crop&q=80"
                  alt="Professional team discussing trademark strategy"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-13 h-13 bg-gold rounded-xl flex items-center justify-center shadow-lg shrink-0">
                      <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">Federal Trademark Protection</p>
                      <p className="text-white/60 text-sm">All 50 states &bull; USPTO compliant</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating card – top right */}
              <div className="absolute -top-5 -right-5 z-20 ">
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy font-bold text-sm">Filing Accepted</p>
                      <p className="text-slate-light text-xs">USPTO Confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating card – bottom left */}
              <div className="absolute -bottom-5 -left-5 z-20 ">
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {['bg-navy','bg-gold','bg-blue'].map((c, i) => (
                        <div key={i} className={`w-8 h-8 ${c} rounded-full flex items-center justify-center border-2 border-white`}>
                          <span className={`text-xs font-bold ${c === 'bg-gold' ? 'text-navy' : 'text-white'}`}>{['JD','SR','ML'][i]}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-navy font-bold text-sm">500+ Clients</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* decorative ring behind image */}
              <div className="absolute -inset-8 border border-dashed border-white/[0.06] rounded-[2rem] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="wave" color="#ffffff" height={90} />
        </div>
      </section>
    </>
  );
}
