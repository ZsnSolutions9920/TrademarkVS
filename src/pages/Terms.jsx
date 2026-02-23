import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Review the terms and conditions for using Trademark Vision Studio services and website.'
    );
  }, []);

  return (
    <main>
      <section className="bg-gradient-to-br from-navy via-navy-light to-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-4 text-white/70 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate text-sm leading-relaxed">
                By accessing or using the Trademark Vision Studio website (trademarkvs.com) or engaging our
                services, you agree to be bound by these Terms and Conditions. If you do not agree with any
                part of these terms, you should not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Services Overview</h2>
              <p className="text-slate text-sm leading-relaxed">
                Trademark Vision Studio provides trademark consulting, filing, and monitoring services for
                businesses seeking to register, renew, or refile trademarks with the United States Patent and
                Trademark Office (USPTO). Our services include trademark search, application preparation,
                renewal filings, abandoned trademark refiling, copyright registration, and ownership transfer support.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. No Guaranteed Outcomes</h2>
              <p className="text-slate text-sm leading-relaxed">
                While we strive to provide the highest quality service, trademark filing outcomes are ultimately
                determined by the USPTO. We cannot guarantee the approval or registration of any trademark
                application. Our role is to prepare and submit filings that meet USPTO standards and to guide
                clients through the process professionally and accurately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Client Responsibilities</h2>
              <p className="text-slate text-sm leading-relaxed mb-3">
                As a client of Trademark Vision Studio, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate text-sm leading-relaxed">
                <li>Provide accurate and complete information required for your filing</li>
                <li>Respond to requests for information or documentation in a timely manner</li>
                <li>Review all documents prepared on your behalf before submission</li>
                <li>Inform us of any changes to your contact information or business details</li>
                <li>Pay for services as agreed upon in your service agreement or invoice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Fees and Payment</h2>
              <p className="text-slate text-sm leading-relaxed">
                Service fees are outlined during the consultation process and confirmed before any work
                begins. Government filing fees charged by the USPTO are separate from our service fees and
                are non-refundable once submitted. Payment is due according to the terms specified in your
                service agreement or invoice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Refund Policy</h2>
              <p className="text-slate text-sm leading-relaxed">
                If we determine during our review process that your filing cannot proceed due to eligibility
                issues, you are entitled to a full refund of our service fees. Government filing fees already
                remitted to the USPTO are non-refundable. Refund requests for other circumstances will be
                evaluated on a case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Intellectual Property</h2>
              <p className="text-slate text-sm leading-relaxed">
                All content on our website — including text, graphics, logos, and design elements — is the
                property of Trademark Vision Studio and is protected by applicable copyright and intellectual
                property laws. You may not reproduce, distribute, or use any content from our website
                without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Limitation of Liability</h2>
              <p className="text-slate text-sm leading-relaxed">
                To the fullest extent permitted by law, Trademark Vision Studio shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from the use of our
                services or website. Our total liability for any claim related to our services shall not
                exceed the amount you paid for those services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Indemnification</h2>
              <p className="text-slate text-sm leading-relaxed">
                You agree to indemnify and hold harmless Trademark Vision Studio, its officers, employees,
                and agents from any claims, damages, losses, or expenses (including reasonable legal fees)
                arising from your use of our services, your violation of these Terms, or your infringement
                of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Termination</h2>
              <p className="text-slate text-sm leading-relaxed">
                Either party may terminate the service relationship at any time by providing written notice.
                Upon termination, you remain responsible for any outstanding fees for services already
                rendered. We will provide you with copies of any documents prepared on your behalf up to
                the date of termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">11. Governing Law</h2>
              <p className="text-slate text-sm leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws
                of the Commonwealth of Virginia, without regard to its conflict of law provisions. Any
                disputes arising under these Terms shall be subject to the exclusive jurisdiction of the
                courts located in Arlington County, Virginia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">12. Changes to These Terms</h2>
              <p className="text-slate text-sm leading-relaxed">
                We reserve the right to update or modify these Terms and Conditions at any time. Changes
                will be effective immediately upon posting to our website. Your continued use of our
                services after any modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">13. Contact Information</h2>
              <p className="text-slate text-sm leading-relaxed">
                If you have questions about these Terms and Conditions, please contact us at:
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
