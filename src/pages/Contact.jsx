import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import WaveDivider from '../components/WaveDivider';

const PHONE_NUMBER = '+1 (844) 918-3636';
const PHONE_TEL = 'tel:+18005550199';
const EMAIL = 'contact@trademarkvs.com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Contact Trademark Vision Studio for a free trademark consultation. Call us or submit your inquiry online.'
    );
  }, []);

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serialNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (

  
    <main>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-indigo to-blue pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">Contact Us</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Speak With Our<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trademark Filing Team</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            Have questions about your trademark? Need to review an expired or abandoned filing?
            Contact us today for a free 15-minute consultation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><WaveDivider variant="wave" color="#ffffff" height={70} /></div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div>
                <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Call Us Directly</h2>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-4 bg-gray-bg border border-gray-border/50 rounded-xl p-5 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-navy">{PHONE_NUMBER}</p>
                    <p className="text-slate-light text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Email Us</h2>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 bg-gray-bg border border-gray-border/50 rounded-xl p-5 hover:border-gold/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold text-navy">{EMAIL}</p>
                    <p className="text-slate-light text-sm">We respond within 24 hours</p>
                  </div>
                </a>
              </div>

              {/* Office */}
              <div>
                <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Office Address</h2>
                <div className="flex items-start gap-4 bg-gray-bg border border-gray-border/50 rounded-xl p-5">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold text-navy">Trademark Vision Studio</p>
                    <p className="text-slate-light text-sm mt-1">
                      5900 Balcones Drive Suite
No 24457
Austin, TX US
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-bg border border-gray-border/50 rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                <p className="text-slate-light text-sm mb-8">
                  Fill out the form below and a member of our team will be in touch within one business day.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy">Message Received</h3>
                    <p className="mt-2 text-slate-light text-base max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will review your inquiry
                      and contact you within one business day.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-border/50 rounded-lg text-slate-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-border/50 rounded-lg text-slate-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-border/50 rounded-lg text-slate-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="serialNumber" className="block text-sm font-semibold text-navy mb-1.5">
                          USPTO Serial Number
                        </label>
                        <input
                          type="text"
                          id="serialNumber"
                          name="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-border/50 rounded-lg text-slate-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="e.g. 97/123456"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-border/50 rounded-lg text-slate-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your trademark situation..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-gold text-navy font-bold text-base whitespace-nowrap px-8 py-4 rounded-md hover:bg-gold-light hover:scale-[1.02] transition-all duration-200 shadow-sm disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {sending ? 'Sending…' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
