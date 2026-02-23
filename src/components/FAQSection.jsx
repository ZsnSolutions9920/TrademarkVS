import { useState } from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';

const faqs = [
  {
    q: 'What happens if my trademark has expired or been abandoned?',
    a: 'If your trademark has expired or been abandoned, it may still be possible to refile. Our team will review your case, assess eligibility, and guide you through the process of restoring your trademark protection. The sooner you act, the better your chances of securing your mark before someone else does.',
  },
  {
    q: 'How long does the trademark registration process take?',
    a: 'The typical USPTO review timeline is 8-12 months from filing to registration. Our team monitors your application throughout the entire process and responds to any office actions promptly to keep your filing on track.',
  },
  {
    q: 'What are USPTO government filing fees?',
    a: 'The USPTO charges $250 per class for TEAS Plus applications and $350 per class for TEAS Standard applications. These fees are paid directly to the USPTO and are separate from our service fees. Our team will recommend the best filing option for your situation.',
  },
  {
    q: 'Do I need a lawyer to file a trademark?',
    a: 'While a lawyer is not required for U.S.-based applicants to file a trademark with the USPTO, professional guidance significantly increases your chances of a successful filing. Our team of experienced trademark filing professionals handles the entire process — from search and classification to document preparation and submission.',
  },
  {
    q: 'What is included in the free consultation?',
    a: 'Our complimentary 15-minute consultation includes a review of your trademark situation, a preliminary assessment of your filing options, and a clear explanation of the process, timeline, and costs involved. There is no obligation to proceed after the consultation.',
  },
  {
    q: 'What is your refund policy?',
    a: 'If we determine during our review that your trademark is not eligible for filing, you receive a full refund of our service fee. Once a filing has been submitted to the USPTO, government fees are non-refundable per USPTO policy.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <section className="relative bg-gray-bg pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-light text-lg leading-relaxed">
              Get answers to the most common questions about our trademark filing services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`bg-white rounded-xl border transition-colors duration-200 ${
                  openIndex === i ? 'border-gold/30 shadow-sm' : 'border-gray-border/50 hover:border-gray-border'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <h3 className="text-base font-bold text-navy pr-4">{faq.q}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i ? 'bg-gold/10' : 'bg-navy/5'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openIndex === i ? 'rotate-180 text-gold' : 'text-navy'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-6">
                    <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-light text-sm mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-sm whitespace-nowrap px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors"
            >
              Contact Our Team
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* wave into CTA */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="curve" color="#0B1F3A" height={70} />
        </div>
      </section>
    </>
  );
}
