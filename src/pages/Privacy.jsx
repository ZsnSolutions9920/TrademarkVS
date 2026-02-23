import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Read the Trademark Vision Studio privacy policy to understand how we collect, use, and protect your personal information.'
    );
  }, []);

  return (
    <main>
      <section className="bg-gradient-to-br from-navy via-navy-light to-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-white/70 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-container">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
              <p className="text-slate text-sm leading-relaxed">
                Trademark Vision Studio (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
                information when you visit our website at trademarkvs.com or engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Information We Collect</h2>
              <p className="text-slate text-sm leading-relaxed mb-3">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate text-sm leading-relaxed">
                <li>Full name, email address, phone number, and mailing address</li>
                <li>USPTO trademark serial numbers and filing history</li>
                <li>Business name and type</li>
                <li>Payment and billing information (processed securely through third-party providers)</li>
                <li>Communications and correspondence with our team</li>
                <li>Website usage data, including IP address, browser type, and pages visited</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. How We Use Your Information</h2>
              <p className="text-slate text-sm leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate text-sm leading-relaxed">
                <li>Provide and manage our trademark consulting services</li>
                <li>Process and track your USPTO filings</li>
                <li>Communicate with you about your case, including status updates and required actions</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send relevant service notifications and updates</li>
                <li>Improve our website, services, and client experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Information Sharing</h2>
              <p className="text-slate text-sm leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information with trusted service providers who assist us in operating our business,
                such as payment processors, hosting providers, and communication tools — but only to the
                extent necessary to provide our services. We may also disclose information when required
                by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Data Security</h2>
              <p className="text-slate text-sm leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to
                protect your personal information from unauthorized access, disclosure, alteration, or
                destruction. While no method of electronic transmission or storage is completely secure,
                we take data protection seriously and continuously work to improve our security practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Cookies and Tracking Technologies</h2>
              <p className="text-slate text-sm leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing
                experience, analyze site traffic, and understand how visitors interact with our website.
                You can control cookie settings through your browser preferences. Disabling cookies may
                affect certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Third-Party Links</h2>
              <p className="text-slate text-sm leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of those websites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Data Retention</h2>
              <p className="text-slate text-sm leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes for
                which it was collected, including to satisfy legal, accounting, or reporting requirements.
                When your information is no longer needed, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Your Rights</h2>
              <p className="text-slate text-sm leading-relaxed">
                Depending on your jurisdiction, you may have the right to access, correct, delete, or
                restrict the processing of your personal information. To exercise any of these rights,
                please contact us using the information provided below. We will respond to your request
                within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Children&apos;s Privacy</h2>
              <p className="text-slate text-sm leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If we become aware that we have collected
                information from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">11. Changes to This Policy</h2>
              <p className="text-slate text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated effective date. We encourage you to review this policy periodically
                to stay informed about how we protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">12. Contact Us</h2>
              <p className="text-slate text-sm leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="mt-3 text-slate text-sm leading-relaxed">
                <p className="font-semibold text-navy">Trademark Vision Studio</p>
                <p>1200 Corporate Drive, Suite 400</p>
                <p>Arlington, VA 22201</p>
                <p>Email: info@trademarkvs.com</p>
                <p>Phone: 1-800-555-0199</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
