import { Hero } from "@/components/Hero";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <Hero title="Privacy Policy" />
      <div className="container max-w-4xl py-16 md:py-24">
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              HISP India (Health Information Systems Programme India), headquartered at DLF Tower B, 12th Floor, Office No-1211, Jasola, New Delhi-110025, India, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect the following types of information:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and organisation details when you contact us, submit enquiries, or apply for positions.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on the site.</li>
              <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyse website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect for the following purposes:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>To respond to your enquiries and provide requested services</li>
              <li>To process job applications and recruitment-related communications</li>
              <li>To improve our website, services, and user experience</li>
              <li>To send relevant updates about our projects and initiatives (with your consent)</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground">
              HISP India does not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>With trusted partners and service providers who assist us in operating our website and services, subject to confidentiality agreements</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect the rights, safety, and property of HISP India, our users, or the public</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable laws and regulations. Once the retention period expires, your data will be securely deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground">
              In accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 of India, you have the right to:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data, subject to legal obligations</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to external websites. HISP India is not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any external websites you visit.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              HISP India reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <address className="text-muted-foreground not-italic mt-2 leading-relaxed">
              <strong>HISP India</strong><br />
              DLF Tower B, 12th Floor, Office No-1211<br />
              Jasola, New Delhi-110025, India<br />
              Email: <a href="mailto:contact@hispindia.org" className="text-primary hover:underline">contact@hispindia.org</a><br />
              Website: <a href="https://www.hispindia.org" className="text-primary hover:underline">www.hispindia.org</a>
            </address>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Last updated: March 17, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
