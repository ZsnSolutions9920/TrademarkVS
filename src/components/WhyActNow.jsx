import WaveDivider from './WaveDivider';

const reasons = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />,
    title: 'Competitors Can Refile Your Mark',
    description: 'Once a trademark expires or is abandoned, another party can file the same or a confusingly similar mark. Without active registration, you have no federal basis to challenge them.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />,
    title: 'Loss of Brand Equity',
    description: 'Your trademark represents years of brand recognition and customer trust. An expired filing puts that equity at risk and can cause significant damage to your market position.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: 'Time-Sensitive Deadlines',
    description: 'The USPTO enforces strict filing windows. Missing a renewal or response deadline can result in permanent loss of your trademark rights, with limited options for recovery.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />,
    title: 'Legal Vulnerability',
    description: 'Without an active trademark, enforcing your rights against counterfeiters, infringers, or unauthorized use becomes significantly more difficult and costly.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.991 2.991 0 00.621-1.024L4.8 4.5h14.4l1.179 3.825A2.991 2.991 0 0021 9.35" />,
    title: 'Marketplace Removal Risks',
    description: 'Major online marketplaces require active trademark registration for brand protection programs. A lapsed trademark can cost you access to these enforcement tools.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75" />,
    title: 'Increasing Refiling Costs',
    description: 'The longer you wait, the more complex — and expensive — the recovery process becomes. Early action gives you the best chance of restoring your rights at the lowest cost.',
  },
];

export default function WhyActNow() {
  return (
    <>
      <section className="relative bg-white pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Sticky left */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  Act Now
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight leading-tight">
                  Why Immediate Action Matters
                </h2>
                <p className="mt-4 text-slate-light text-lg leading-relaxed">
                  An expired or abandoned trademark creates real risks for your business.
                  Understanding these risks is the first step toward protecting your brand.
                </p>

                {/* Vertical image with offset accent */}
                <div className="mt-8 pr-3 pb-3">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=640&fit=crop&q=80"
                      alt="Business professional in suit"
                      className="relative z-10 w-full h-[380px] object-cover rounded-2xl"
                    />
                    <div className="absolute top-3 left-3 w-full h-full rounded-2xl border border-gold/25" />
                  </div>
                </div>
              </div>
            </div>

            {/* Risk cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`group bg-white rounded-2xl border border-gray-border/60 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-navy/5 text-navy">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{r.icon}</svg>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 text-slate-light text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave into services section */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="blob" color="#F8FAFC" height={80} />
        </div>
      </section>
    </>
  );
}
