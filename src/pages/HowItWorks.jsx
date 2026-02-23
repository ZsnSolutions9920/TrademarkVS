import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';
import CTASection from '../components/CTASection';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'Your journey begins with a complimentary 15-minute consultation. We discuss your trademark situation, review any prior filings, and determine the best path forward based on your specific needs.',
    details: [
      'Review of your trademark history and current status',
      'Discussion of your business goals and brand protection needs',
      'Preliminary assessment of filing options and eligibility',
      'Clear explanation of the process, timeline, and associated costs',
    ],
  },
  {
    number: '02',
    title: 'Case Evaluation & Research',
    description:
      'Our team conducts a thorough evaluation of your case. This includes searching the USPTO database, analyzing potential conflicts, reviewing previous filing records, and assessing the viability of your application.',
    details: [
      'Comprehensive USPTO database search',
      'Conflict analysis and risk assessment',
      'Review of prior application history (if applicable)',
      'Classification research and goods/services analysis',
    ],
  },
  {
    number: '03',
    title: 'Document Preparation',
    description:
      'Once your case is approved, our filing team prepares all required documentation. Every form, declaration, and specimen is reviewed for accuracy and compliance before submission.',
    details: [
      'Application form preparation',
      'Specimen of use review and formatting',
      'Declaration and statement drafting',
      'Quality control review before filing',
    ],
  },
  {
    number: '04',
    title: 'USPTO Filing & Submission',
    description:
      'Your application is electronically filed with the USPTO through the official TEAS (Trademark Electronic Application System). You receive a confirmation and serial number immediately upon submission.',
    details: [
      'Electronic filing via TEAS',
      'Filing confirmation and receipt',
      'Serial number assignment notification',
      'Copies of all submitted documents provided',
    ],
  },
  {
    number: '05',
    title: 'Monitoring & Follow-Up',
    description:
      'After filing, we actively monitor your application status, track examining attorney activity, and notify you of any updates, office actions, or required responses throughout the entire review process.',
    details: [
      'Real-time application status tracking',
      'Office action notification and guidance',
      'Response preparation assistance',
      'Registration confirmation and next steps',
    ],
  },
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = 'How It Works | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Learn about our streamlined 5-step trademark filing process. From consultation to monitoring, we handle every step professionally.'
    );
  }, []);

  return (
    <main>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-indigo to-blue pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">Our Process</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            A Clear Path to<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trademark Protection</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            Our five-step process is designed to remove complexity and deliver results.
            Every stage is structured, transparent, and managed by experienced filing professionals.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><WaveDivider variant="tilt" color="#ffffff" height={70} /></div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-px bg-gray-border/50 hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-10">
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center">
                      <span className="text-gold font-black text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <h2 className="text-xl lg:text-2xl font-bold text-navy">{step.title}</h2>
                    <p className="mt-3 text-slate text-base leading-relaxed">{step.description}</p>

                    <div className="mt-6 bg-gray-bg rounded-xl border border-gray-border/50 p-6">
                      <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                        What Happens at This Stage
                      </h3>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-slate text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-slate text-lg mb-6">
              Ready to get started? Your free consultation is the first step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-base whitespace-nowrap px-8 py-4 rounded-md hover:bg-gold-light hover:scale-105 transition-all duration-200"
            >
              Schedule Your Free Review
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reassurance section */}
      <section className="py-20 lg:py-28 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">Secure & Confidential</h3>
              <p className="mt-2 text-slate-light text-sm leading-relaxed max-w-xs mx-auto">
                Your information is handled with strict confidentiality at every stage of the process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">Timely & Reliable</h3>
              <p className="mt-2 text-slate-light text-sm leading-relaxed max-w-xs mx-auto">
                We respect deadlines and keep your filing on track with proactive status updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">Quality Assured</h3>
              <p className="mt-2 text-slate-light text-sm leading-relaxed max-w-xs mx-auto">
                Every filing undergoes rigorous quality control to meet USPTO standards before submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
