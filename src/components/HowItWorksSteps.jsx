import WaveDivider from './WaveDivider';

const steps = [
  {
    number: '01',
    title: 'Case Review',
    description: 'We review your previous USPTO filing and evaluate your eligibility for renewal, refiling, or a new application.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=280&fit=crop&q=80',
    imageAlt: 'Document review and analysis',
  },
  {
    number: '02',
    title: 'Strategic Filing',
    description: 'Our team prepares and submits the required documentation to the USPTO on your behalf, ensuring accuracy and compliance.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=280&fit=crop&q=80',
    imageAlt: 'Strategic planning and preparation',
  },
  {
    number: '03',
    title: 'Ongoing Monitoring',
    description: 'We track your filing status and notify you of updates, office actions, or any required responses throughout the process.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop&q=80',
    imageAlt: 'Monitoring and tracking progress',
  },
];

export default function HowItWorksSteps() {
  return (
    <>
      <section className="relative bg-white pt-16 pb-0 lg:pt-20 overflow-hidden">
        <div className="absolute -top-10 right-10 w-60 h-60 bg-gray-bg rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">How It Works</h2>
            <p className="mt-4 text-slate-light text-lg leading-relaxed">
              A streamlined, three-step process designed to get your trademark back on track.
            </p>
          </div>

          {/* steps with dashed connector */}
          <div className="relative grid lg:grid-cols-3 gap-8">
            {/* horizontal connector */}
            <div className="hidden lg:block absolute top-[120px] left-[17%] right-[17%] border-t-2 border-dashed border-gold/30 pointer-events-none" />

            {steps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="bg-gradient-to-br from-gray-bg to-white rounded-3xl overflow-hidden ring-1 ring-black/[0.04] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={step.image} alt={step.imageAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light text-navy font-black text-xl flex items-center justify-center shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-slate-light text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed / parallax background strip */}
      <section
        className="relative bg-fixed-cover py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,58,0.92), rgba(30,58,138,0.88)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop&q=60')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            Ready to Protect Your Brand?
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Join 10,000+ business owners who trust Trademark Vision Studio to secure their
            intellectual property. Start with a free consultation.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <a
              href="tel:+18005550199"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-navy font-bold text-base whitespace-nowrap px-9 py-4 rounded-full shadow-xl shadow-gold/25 hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call For Free Review
            </a>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              No obligation &bull; 15-min call
            </div>
          </div>
        </div>

        {/* wave into testimonials */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="wave" color="#ffffff" height={70} />
        </div>
      </section>
    </>
  );
}
