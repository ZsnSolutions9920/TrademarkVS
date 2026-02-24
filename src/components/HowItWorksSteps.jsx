import WaveDivider from './WaveDivider';
import laptop from "../assets/laptop.png"

const steps = [
  {
    number: 1,
    title: 'Case Review',
    description:
      'We review your previous USPTO filing and evaluate your eligibility for renewal, refiling, or a new application.',
  },
  {
    number: 2,
    title: 'Strategic Filing',
    description:
      'Our team prepares and submits the required documentation to the USPTO on your behalf, ensuring accuracy and compliance.',
  },
  {
    number: 3,
    title: 'Ongoing Monitoring',
    description:
      'We track your filing status and notify you of updates, office actions, or any required responses throughout the process.',
  },
];

function LaptopMockup() {
  return (
    <div className="relative">
      {/* Soft glow behind laptop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Laptop frame */}
      <div className="relative">
        {/* Screen */}
        <img src={laptop} alt="" />

        {/* Laptop base */}
        {/* <div className="relative mx-auto">
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 h-3 rounded-b-md mx-6" />
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-1.5 rounded-b-lg mx-2" />
        </div> */}
      </div>

      {/* Floating "Time Taken" card */}
      <div className="absolute -left-4 sm:-left-6 bottom-16 sm:bottom-24 bg-white rounded-2xl shadow-xl ring-1 ring-black/[0.05] px-5 py-4 sm:px-6 sm:py-5 z-10">
        <div className="flex flex-col items-center text-center gap-2">
          <svg
            className="w-8 h-8 text-navy"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs font-semibold text-slate">Time Taken To Finish</p>
          <p className="text-lg font-black text-gold">5 Minutes</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSteps() {
  return (
    <>
      <section className="relative bg-white pt-16 pb-0 lg:pt-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — heading + steps */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
                Protect your trademark
                <br />
                in{' '}
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  3 simple steps
                </span>
              </h2>
              <p className="mt-4 text-slate-light text-lg leading-relaxed">
                Secure your brand with our streamlined process.
              </p>

              <div className="mt-10 space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-5">
                    {/* Number circle */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-navy/5 border-2 border-navy/15 flex items-center justify-center">
                      <span className="text-sm font-bold text-navy">{step.number}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                      <p className="mt-1 text-slate-light text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — laptop mockup */}
            <div className="relative lg:pl-4">
              <LaptopMockup />
            </div>
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
