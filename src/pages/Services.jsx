import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';
import CTASection from '../components/CTASection';

const services = [
  {
    id: 'registration',
    title: 'Trademark Registration',
    description:
      'Protect your brand by registering your trademark with the United States Patent and Trademark Office. Our team handles the full application process — from classification analysis and specimen review to form preparation and electronic filing.',
    details: [
      'Federal protection across all 50 states',
      'Use of the registered symbol',
      'Legal presumption of ownership nationwide',
      'Basis for international trademark applications',
      'Protection against infringing marks',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: 'search',
    title: 'Comprehensive Trademark Search',
    description:
      'Before filing, it is critical to understand whether your desired mark conflicts with existing registrations. Our comprehensive search analyzes the USPTO database, state registrations, and common-law uses to assess risk and viability.',
    details: [
      'Full USPTO database analysis',
      'State trademark registry review',
      'Common-law and internet use assessment',
      'Conflict risk evaluation report',
      'Recommendations for filing strategy',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: 'consultation',
    title: 'Trademark Consultation',
    description:
      'Not sure where to start? Our consultation service provides personalized guidance based on your business goals, existing filings, and intellectual property needs. We help you develop a clear strategy before committing to any filing.',
    details: [
      'One-on-one strategy session',
      'Review of existing filings and status',
      'Classification guidance (goods & services)',
      'Filing timeline and cost breakdown',
      'Priority and risk assessment',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    id: 'renewal',
    title: 'Trademark Renewal',
    description:
      'Trademark registrations require periodic maintenance filings to remain active. We manage the full renewal process, including Section 8 Declarations of Continued Use and Section 9 Applications for Renewal, ensuring your mark stays protected.',
    details: [
      'Section 8 Declaration of Use filing',
      'Section 9 Renewal Application',
      'Combined Section 8 & 9 filings',
      'Deadline tracking and reminders',
      'Specimen of use preparation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    id: 'abandoned',
    title: 'Abandoned Trademark Refiling',
    description:
      'If your trademark was abandoned due to missed deadlines, office action non-response, or other procedural issues, it may be possible to refile. We evaluate your eligibility and prepare a new application to restore your protection.',
    details: [
      'Abandonment cause analysis',
      'Eligibility assessment for refiling',
      'New application preparation',
      'Priority filing strategy',
      'Monitoring for competing applications',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    id: 'copyright',
    title: 'Copyright Registration',
    description:
      'Safeguard your original creative works — including written content, graphic designs, software, photography, and more — through federal copyright registration with the U.S. Copyright Office.',
    details: [
      'Literary, artistic, and software works',
      'Federal registration certificate',
      'Legal evidence of ownership',
      'Eligibility for statutory damages',
      'Public record of creation date',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: 'transfer',
    title: 'Ownership Transfer',
    description:
      'Transferring trademark ownership requires proper assignment documentation filed with the USPTO. Whether you are buying, selling, or restructuring, we ensure the transfer is legally sound and properly recorded.',
    details: [
      'Assignment agreement preparation',
      'USPTO recordation filing',
      'Chain of title verification',
      'Corporate restructuring support',
      'Post-transfer compliance guidance',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Trademark Services | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Explore our full range of USPTO trademark services including registration, renewal, abandoned refiling, search, consultation, copyright, and ownership transfer.'
    );
  }, []);

  return (
    <main>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-indigo to-blue pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">Our Services</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Professional USPTO<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trademark Services</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            From initial search to ongoing maintenance, we offer a complete suite of trademark
            consulting services designed for business owners who need reliable, results-driven support.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><WaveDivider variant="wave" color="#ffffff" height={70} /></div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-5">
                  {service.icon}
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-navy tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate text-base leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 bg-gold text-navy font-bold text-sm whitespace-nowrap px-6 py-3 rounded-md hover:bg-gold-light hover:scale-105 transition-all duration-200"
                >
                  Get Started
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className={`bg-gray-bg rounded-xl border border-gray-border/50 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 lg:py-28 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Our Guarantees</p>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Your Protection, Our Promise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-border/50 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Refund Guarantee</h3>
              <p className="mt-3 text-slate text-sm leading-relaxed">
                If we are unable to proceed with your filing due to eligibility issues identified during
                our review process, you receive a full refund. We believe you should only pay for services
                we can actually deliver.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-border/50 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Filing Guarantee</h3>
              <p className="mt-3 text-slate text-sm leading-relaxed">
                We ensure your filing is properly submitted according to USPTO standards and requirements.
                Our quality control process includes document review, classification verification, and
                compliance checks before any application is submitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
