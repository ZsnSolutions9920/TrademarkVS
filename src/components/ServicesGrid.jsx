import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';

const services = [
  {
    title: 'Trademark Registration',
    description: 'File your trademark with the USPTO to secure exclusive rights to your brand name, logo, or slogan across the United States.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&q=80',
  },
  {
    title: 'Trademark Search',
    description: 'Conduct a thorough search of existing trademarks to identify conflicts and assess the viability of your desired mark.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&q=80',
  },
  {
    title: 'Trademark Consultation',
    description: 'Receive expert guidance on your trademark strategy, filing options, classification, and how to best protect your IP.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />,
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=250&fit=crop&q=80',
  },
  {
    title: 'Trademark Renewal',
    description: 'Keep your trademark active with timely renewal filings. We handle Section 8 & 9 declarations and all USPTO maintenance.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&q=80',
  },
  {
    title: 'Abandoned Refiling',
    description: 'If your trademark was abandoned due to missed deadlines or incomplete documentation, we can evaluate and prepare a new filing.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80',
  },
  {
    title: 'Copyright Registration',
    description: 'Protect your original creative works — content, designs, and software — through federal copyright registration.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&q=80',
  },
];

export default function ServicesGrid() {
  return (
    <>
      <section className="relative bg-gray-bg pt-16 pb-28 lg:pt-20 lg:pb-36 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Comprehensive Trademark Solutions
            </h2>
            <p className="mt-4 text-slate-light text-lg leading-relaxed">
              From initial search to ongoing maintenance, we provide end-to-end USPTO trademark services
              tailored to your business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-border/50"
              >
                {/* image with overlay */}
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-navy shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{s.icon}</svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-slate-light text-sm leading-relaxed">{s.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 mt-4 text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* wave into pricing */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="curve" color="#ffffff" height={80} />
        </div>
      </section>
    </>
  );
}
