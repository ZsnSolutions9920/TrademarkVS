import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';

const plans = [
  {
    name: 'Basic',
    tagline: 'Essential Filing',
    price: '49',
    period: '+ USPTO filing fees',
    description: 'Perfect for straightforward trademark filings with guided support throughout the process.',
    features: [
      'Comprehensive trademark search',
      'USPTO application preparation',
      'Electronic filing with USPTO',
      'Filing confirmation & receipt',
      'Email support',
      'Status updates via email',
    ],
    notIncluded: ['Office action response', 'Dedicated case manager', 'Cease & desist letter', 'Trademark monitoring'],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-white to-gray-bg',
    ring: 'ring-gray-border/50',
    btn: 'bg-navy text-white hover:bg-navy-light',
  },
  {
    name: 'Standard',
    tagline: 'Most Popular',
    price: '149',
    period: '+ USPTO filing fees',
    description: 'Full-service filing with dedicated case management for your trademark.',
    features: [
      'Everything in Basic, plus:',
      'Dedicated case manager',
      'Office action response (1 round)',
      'Specimen of use guidance',
      'Priority filing preparation',
      'Phone & email support',
      'Cease & desist letter template',
      'Filing guarantee',
    ],
    notIncluded: ['Trademark monitoring', 'Unlimited office actions'],
    cta: 'Choose Standard',
    popular: true,
    gradient: 'from-white to-gray-bg',
    ring: 'ring-gold/30',
    btn: 'bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-lg',
  },
  {
    name: 'Premium',
    tagline: 'Complete Protection',
    price: '349',
    period: '+ USPTO filing fees',
    description: 'Comprehensive trademark protection with monitoring, unlimited support, and priority handling.',
    features: [
      'Everything in Standard, plus:',
      'Unlimited office action responses',
      'Trademark monitoring (12 months)',
      'Infringement alert notifications',
      'Priority case handling',
      'Dedicated senior case manager',
      'Custom cease & desist letter',
      'Renewal reminders & tracking',
      'Refund guarantee',
    ],
    notIncluded: [],
    cta: 'Choose Premium',
    popular: false,
    gradient: 'from-navy to-indigo',
    ring: 'ring-navy/20',
    btn: 'bg-gold text-navy hover:bg-gold-light',
    dark: true,
  },
];

function Check() {
  return (
    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
function X() {
  return (
    <svg className="w-5 h-5 text-slate-light/30 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <>
      <section id="pricing" className="relative bg-white pt-16 pb-28 lg:pt-20 lg:pb-36 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-navy tracking-tight">
              Choose the Right Plan for Your Brand
            </h2>
            <p className="mt-5 text-slate-light text-lg leading-relaxed">
              Simple, transparent pricing with no hidden fees. Every plan includes direct USPTO filing
              and professional preparation by our experienced team.
            </p>
          </div>

          {/* cards */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative bg-gradient-to-br ${p.gradient} rounded-2xl ring-1 ${p.ring} p-8 lg:p-9 transition-all duration-300 hover:shadow-xl ${
                  p.popular ? 'lg:-mt-6 lg:mb-[-24px] shadow-lg' : ''
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gold text-navy font-bold text-xs uppercase tracking-wider whitespace-nowrap px-6 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-7">
                  <p className={`text-xs font-bold uppercase tracking-widest ${p.dark ? 'text-gold' : 'text-gold-dark'}`}>{p.tagline}</p>
                  <h3 className={`mt-2 text-2xl font-black ${p.dark ? 'text-white' : 'text-navy'}`}>{p.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${p.dark ? 'text-white/60' : 'text-slate-light'}`}>{p.description}</p>
                </div>

                <div className={`mb-7 pb-7 border-b ${p.dark ? 'border-white/10' : 'border-gray-border/50'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black ${p.dark ? 'text-white' : 'text-navy'}`}>${p.price}</span>
                    <span className={`text-sm font-medium ${p.dark ? 'text-white/40' : 'text-slate-light'}`}>/class</span>
                  </div>
                  <p className={`mt-1 text-xs ${p.dark ? 'text-white/30' : 'text-slate-light'}`}>{p.period}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      {p.dark ? (
                        <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : <Check />}
                      <span className={`text-sm ${f.startsWith('Everything') ? `font-semibold ${p.dark ? 'text-white' : 'text-navy'}` : p.dark ? 'text-white/70' : 'text-slate'}`}>{f}</span>
                    </div>
                  ))}
                  {p.notIncluded.map((f) => (
                    <div key={f} className="flex items-start gap-3 opacity-40">
                      <X />
                      <span className={`text-sm line-through ${p.dark ? 'text-white/40' : 'text-slate-light'}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center font-bold text-base whitespace-nowrap px-6 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] ${p.btn}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* trust bar */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-slate-light text-sm">
            {['Filing Guarantee', 'Refund Policy', 'Secure Payment', 'Expert Support'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* wave into how-it-works */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="tilt" color="#F8FAFC" height={80} />
        </div>
      </section>
    </>
  );
}
