import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: 'Terms of Service | OctaVertex Media',
  description: 'Our terms of service govern your use of OctaVertex Media services.',
}

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Terms of Service</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Effective Date: October 26, 2023
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            These Terms of Service ("Terms") govern your use of the services provided by OctaVertex Media ("we," "us," or "our"). By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              Your use of our services signifies your acceptance of these Terms. We reserve the right to modify these Terms at any time, and your continued use of our services following any modifications constitutes your acceptance of those changes. Please review these Terms periodically for updates.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">2. Description of Services</h2>
            <p className="text-muted-foreground">
              Our services include, but are not limited to, software development, workshops, and training programs. A complete list of services is available on our website. We may update, change, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Account Creation and Use</h2>
            <p className="text-muted-foreground">
              Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc list-inside pl-4 text-muted-foreground">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it accurate and current</li>
              <li>Use the services only for lawful purposes and in compliance with all applicable laws</li>
              <li>Not share your account credentials with any third party</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Payment and Billing</h2>
            <p className="text-muted-foreground">
              Payment terms, methods, and policies are detailed in our separate Payment Policy, which is incorporated herein by reference. By using our services, you agree to pay all applicable fees in accordance with this policy. Key points include:
            </p>
            <ul className="list-disc list-inside pl-4 text-muted-foreground">
              <li>All fees are due in advance unless otherwise specified</li>
              <li>We may suspend or terminate your access to services for non-payment</li>
              <li>Refunds are subject to our Refund Policy</li>
              <li>We may change our fees at any time with prior notice</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All intellectual property rights (including copyrights, patents, and trademarks) related to our services, software, and materials remain with OctaVertex Media or its licensors. You may not reproduce, distribute, or modify any of our materials without our explicit written permission. This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside pl-4 text-muted-foreground">
              <li>Our website content and design</li>
              <li>Software and code provided as part of our services</li>
              <li>Training materials and documentation</li>
              <li>Our logo and branding elements</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall OctaVertex Media be liable for any incidental, consequential, or indirect damages arising from your use of our services. Our liability is limited to the extent permitted by law. This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside pl-4 text-muted-foreground">
              <li>Loss of profits, revenue, or data</li>
              <li>Interruption of business</li>
              <li>Personal injury or property damage</li>
              <li>Any other losses incurred by you or any third party</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">7. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground">
              These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be resolved exclusively in the courts of New Delhi, India.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">8. Entire Agreement</h2>
            <p className="text-muted-foreground">
              These Terms constitute the entire agreement between you and OctaVertex Media regarding your use of our services, superseding all prior or contemporaneous communications and proposals, whether oral or written.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">9. Contact Us</h2>
            <p className="text-muted-foreground">
              For any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:admin@octavertexmedia.com" className="text-blue-500 hover:underline">admin@octavertexmedia.com</a>.
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  )
}

