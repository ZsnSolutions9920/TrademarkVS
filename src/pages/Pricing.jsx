import { useEffect } from 'react';
import WaveDivider from '../components/WaveDivider';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const faqs = [
  {
    q: 'What are USPTO government filing fees?',
    a: 'The USPTO charges $250 per class for TEAS Plus applications and $350 per class for TEAS Standard applications. These fees are paid directly to the USPTO and are separate from our service fees. Our team will recommend the best filing option for your situation.',
  },
  {
    q: 'What is a class of goods or services?',
    a: 'The USPTO organizes trademarks into 45 different classes based on the type of goods or services. Most businesses need 1-2 classes. For example, a clothing brand would file under Class 25, while a tech company might file under Class 9 or Class 42. We help identify the right classes during your consultation.',
  },
  {
    q: 'How long does the trademark registration process take?',
    a: 'The typical USPTO review timeline is 8-12 months from filing to registration. Our team monitors your application throughout the entire process and responds to any office actions promptly to keep your filing on track.',
  },
  {
    q: 'What happens if my application receives an office action?',
    a: 'An office action is a communication from the USPTO examiner requesting additional information or raising concerns. Our Standard and Premium plans include office action response preparation. The Basic plan can be upgraded if an office action is received.',
  },
  {
    q: 'Can I upgrade my plan after filing?',
    a: 'Yes, you can upgrade from Basic to Standard or Premium at any time during your filing process. We will apply a prorated credit from your original plan toward the upgrade cost.',
  },
  {
    q: 'What is your refund policy?',
    a: 'If we determine during our review that your trademark is not eligible for filing, you receive a full refund of our service fee. Once a filing has been submitted to the USPTO, government fees are non-refundable per USPTO policy.',
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing Plans | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Transparent trademark filing pricing. Choose from Basic, Standard, or Premium plans starting at $49/class plus USPTO fees.'
    );
  }, []);

  return (
    <main>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-indigo to-blue pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-5 py-2 mb-6">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-gold" /></span>
            <span className="text-white/90 text-sm font-medium">Transparent Pricing</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Simple, Transparent<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trademark Filing Pricing</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            No hidden fees. No surprises. Choose the plan that fits your needs and get
            professional trademark filing support from our experienced team.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="curve" color="#ffffff" height={70} />
        </div>
      </section>

      {/* Pricing cards */}
      <PricingSection />

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-gray-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Compare Plans</p>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Detailed Feature Comparison
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-border/50 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-border/50">
                    <th className="text-left py-5 px-6 text-sm font-bold text-navy">Feature</th>
                    <th className="text-center py-5 px-4 text-sm font-bold text-navy">Basic</th>
                    <th className="text-center py-5 px-4 text-sm font-bold text-gold bg-navy/[0.02]">Standard</th>
                    <th className="text-center py-5 px-4 text-sm font-bold text-navy">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border/40">
                  {[
                    ['Trademark search', true, true, true],
                    ['USPTO application prep', true, true, true],
                    ['Electronic filing', true, true, true],
                    ['Filing confirmation', true, true, true],
                    ['Email support', true, true, true],
                    ['Dedicated case manager', false, true, true],
                    ['Phone support', false, true, true],
                    ['Office action response', false, '1 round', 'Unlimited'],
                    ['Specimen guidance', false, true, true],
                    ['Cease & desist template', false, true, true],
                    ['Custom C&D letter', false, false, true],
                    ['Priority handling', false, false, true],
                    ['Trademark monitoring', false, false, '12 months'],
                    ['Infringement alerts', false, false, true],
                    ['Renewal tracking', false, false, true],
                    ['Filing guarantee', false, true, true],
                    ['Refund guarantee', false, false, true],
                  ].map(([feature, basic, standard, premium]) => (
                    <tr key={feature} className="hover:bg-gray-bg/50 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate">{feature}</td>
                      <td className="py-4 px-4 text-center">
                        {basic === true ? (
                          <svg className="w-5 h-5 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : basic === false ? (
                          <svg className="w-5 h-5 text-slate-light/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-xs font-medium text-slate">{basic}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center bg-navy/[0.02]">
                        {standard === true ? (
                          <svg className="w-5 h-5 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : standard === false ? (
                          <svg className="w-5 h-5 text-slate-light/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-xs font-semibold text-gold">{standard}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {premium === true ? (
                          <svg className="w-5 h-5 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : premium === false ? (
                          <svg className="w-5 h-5 text-slate-light/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-xs font-semibold text-navy">{premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-bg border border-gray-border/50 rounded-xl p-7 hover:border-gray-border transition-colors">
                <h3 className="text-base font-bold text-navy">{faq.q}</h3>
                <p className="mt-3 text-slate text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
