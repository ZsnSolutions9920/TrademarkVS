import WaveDivider from './WaveDivider';

const testimonials = [
  { name: 'Margaret Thornton', business: 'Thornton & Associates Consulting', rating: 5, text: 'After our trademark lapsed, we didn\'t realize the risk we were exposed to. Trademark Vision Studio handled the refiling efficiently and kept us informed every step of the way. Outstanding professionalism.', initials: 'MT' },
  { name: 'David Chen', business: 'Pacific Coast Brands LLC', rating: 5, text: 'We received a call about our expired trademark and were initially skeptical. But the team walked us through the entire process, explained the risks clearly, and completed our refiling within weeks. Highly recommended.', initials: 'DC' },
  { name: 'Rachel Simmons', business: 'Simmons Creative Studio', rating: 5, text: 'As a small business owner, I had no idea my trademark had been abandoned. Trademark Vision Studio made the reinstatement process seamless. Their team was responsive, knowledgeable, and genuinely helpful.', initials: 'RS' },
  { name: 'James O\'Brien', business: 'O\'Brien Manufacturing Corp.', rating: 5, text: 'The filing team was incredibly thorough. They reviewed our previous USPTO submission, identified the issues, and prepared a new application that was accepted without complications. Excellent service from start to finish.', initials: 'JO' },
  { name: 'Patricia Williams', business: 'Heritage Home Goods Inc.', rating: 5, text: 'We were about to lose a trademark we\'ve held for 15 years. Trademark Vision Studio stepped in, assessed our situation, and handled everything. The peace of mind alone was worth it. Five stars.', initials: 'PW' },
  { name: 'Michael Russo', business: 'Russo Digital Solutions', rating: 5, text: 'Professional, transparent, and effective. They explained every step of the refiling process and kept their promises on timelines. I would recommend Trademark Vision Studio to any business owner facing a lapsed trademark.', initials: 'MR' },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <section className="relative bg-white pt-16 pb-28 lg:pt-20 lg:pb-36 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Verified Client Feedback
            </h2>
            <p className="mt-4 text-slate-light text-lg">
              See what business owners say about working with our trademark filing team.
            </p>
            {/* aggregated rating */}
            <div className="mt-6 inline-flex items-center gap-3 bg-gray-bg rounded-full px-6 py-3 border border-gray-border/50">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}</div>
              <span className="w-px h-5 bg-gray-border" />
              <span className="text-sm font-bold text-navy">4.9/5</span>
              <span className="text-sm text-slate-light">from 500+ reviews</span>
            </div>
          </div>

          {/* cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-white rounded-2xl p-7 border border-gray-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Stars n={t.rating} />
                  <svg className="w-7 h-7 text-navy/[0.06]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-gray-border/50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                    <span className="font-bold text-xs text-white">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-light text-xs">{t.business}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* wave into FAQ section */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="blob" color="#F8FAFC" height={80} />
        </div>
      </section>
    </>
  );
}
