import { Link } from 'react-router-dom';
import logo from "../assets/Logo-blue.png"

const PHONE_NUMBER = '1-800-555-0199';
const PHONE_TEL = 'tel:+18005550199';
const EMAIL = 'info@trademarkvs.com';

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              Professional USPTO trademark consulting services. We help business owners protect, renew, and refile their trademarks with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Trademark Registration',
                'Trademark Search',
                'Trademark Renewal',
                'Abandoned Refiling',
                'Copyright Registration',
                'Ownership Transfer',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/70 hover:text-gold text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70 text-sm">
                  1200 Corporate Drive, Suite 400<br />
                  Arlington, VA 22201
                </span>
              </li>
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-3 text-white/70 hover:text-gold text-sm transition-colors">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-gold text-sm transition-colors">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Trademark Vision Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-gold text-sm transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <p className="mt-6 text-white/30 text-xs leading-relaxed max-w-4xl">
            Trademark Vision Studio provides trademark consulting and filing services in accordance with USPTO regulations.
            Filing outcomes depend on individual case eligibility and USPTO review processes. Results are not guaranteed
            and may vary based on the specifics of each application. All services are performed by qualified professionals
            with expertise in federal trademark procedures.
          </p>
        </div>
      </div>
    </footer>
  );
}
