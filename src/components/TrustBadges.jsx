export default function TrustBadges() {
  const badges = [
    { icon: 'shield', label: 'USPTO', sub: 'Registered' },
    { icon: 'bbb', label: 'BBB Accredited', sub: 'A+ Rating' },
    { icon: 'lock', label: '256-bit SSL', sub: 'Encrypted' },
    { icon: 'star', label: '4.9/5 Rating', sub: '500+ Reviews' },
    { icon: 'doc', label: '10,000+', sub: 'Filings Processed' },
  ];

  const iconMap = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    lock: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
    star: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
    doc: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
  };

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-light text-xs font-semibold uppercase tracking-[0.2em] mb-8">
          Trusted by Businesses Across the United States
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {badges.map((b, i) => (
            <div key={b.label} className="flex items-center gap-3 group">
              {i > 0 && <div className="w-px h-10 bg-gray-border/50 hidden sm:block mr-4 -ml-4 lg:mr-6 lg:-ml-6" />}
              {b.icon === 'bbb' ? (
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy/10 transition-colors">
                  <span className="font-black text-xs text-navy">BBB</span>
                </div>
              ) : (
                <svg className="w-9 h-9 text-navy/40 group-hover:text-navy/60 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  {iconMap[b.icon]}
                </svg>
              )}
              <div>
                <p className="font-bold text-sm text-navy/80">{b.label}</p>
                <p className="text-xs text-slate-light">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
