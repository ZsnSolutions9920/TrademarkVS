import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';
import CTASection from '../components/CTASection';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Compliance-First Approach',
    description:
      'Every filing we handle adheres strictly to USPTO guidelines and federal trademark regulations. Compliance is not optional — it is foundational to everything we do.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Efficiency & Speed',
    description:
      'Our structured workflow minimizes turnaround time without sacrificing accuracy. We understand that trademark deadlines are non-negotiable and act accordingly.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transparent Communication',
    description:
      'From initial consultation to final filing confirmation, we keep you informed at every stage. No surprises, no hidden fees, no ambiguity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Dedicated Case Support',
    description:
      'Each client is assigned a dedicated case coordinator who manages their filing from start to finish. You always have a direct point of contact.',
  },
];

const stats = [
  { value: '10,000+', label: 'Filings Processed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Combined Experience' },
  { value: '50', label: 'States Covered' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Learn about Trademark Vision Studio — a professional trademark consulting firm providing USPTO filing, renewal, and refiling services for business owners.'
    );
  }, []);

  return (
    <main>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-indigo to-blue pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">About Us</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Protecting Brands With<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Precision and Purpose</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            Trademark Vision Studio is a professional trademark consulting firm dedicated to helping
            business owners navigate the complexities of USPTO trademark registration, renewal, and recovery.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><WaveDivider variant="curve" color="#ffffff" height={70} /></div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
                Making Trademark Protection Accessible
              </h2>
              <p className="mt-5 text-slate text-base leading-relaxed">
                Too many business owners lose their trademark rights simply because they missed a deadline,
                overlooked a renewal notice, or didn&apos;t understand the filing process. Our mission is to change that.
              </p>
              <p className="mt-4 text-slate text-base leading-relaxed">
                We founded Trademark Vision Studio to provide a clear, affordable, and professional path to
                trademark protection. Our team combines deep knowledge of USPTO procedures with a structured,
                client-first approach that removes the confusion and guesswork from the process.
              </p>
              <p className="mt-4 text-slate text-base leading-relaxed">
                Whether you&apos;re filing for the first time, renewing an existing mark, or recovering a
                trademark that was abandoned — we are here to guide you through every step with competence
                and care.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=350&fit=crop&q=80"
                  alt="Professional team working on trademark filings"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-gray-bg rounded-2xl p-8 border border-gray-border/50">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl lg:text-4xl font-black text-navy">{stat.value}</p>
                      <p className="mt-1 text-slate-light text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-slate-light text-lg leading-relaxed">
              Our approach is built on four core principles that guide every client interaction and filing we process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl border border-gray-border/50 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-slate-light text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              An Experienced Filing Team You Can Trust
            </h2>
            <p className="mt-5 text-slate text-base leading-relaxed">
              Our trademark filing professionals bring years of experience in USPTO procedures, federal
              trademark classification, and intellectual property documentation. Every case is handled
              with the precision and attention to detail that your brand deserves.
            </p>
            <p className="mt-4 text-slate text-base leading-relaxed">
              We maintain rigorous quality control at every stage of the filing process — from initial
              trademark searches and eligibility reviews to document preparation and submission. Our team
              stays current with all USPTO rule changes and procedural updates to ensure your filings
              meet the latest standards.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-base whitespace-nowrap px-8 py-4 rounded-md hover:bg-gold-light hover:scale-105 transition-all duration-200"
              >
                Speak With Our Team
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
