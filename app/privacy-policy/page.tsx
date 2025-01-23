import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: 'Privacy Policy | OctaVertex Media',
  description: 'Learn about how OctaVertex Media protects your data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Privacy Policy</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            <p>Last Updated On 28-Dec-2024</p>
            <p>Effective Date 23-Nov-2023</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            This Privacy Policy describes the policies of OctaVertex Media, New Delhi, Delhi 110017, India,
            email: admin@octavertexmedia.com, phone: +917004456733, on the collection, use, and disclosure
            of your information that we collect when you use our website (octavertexmedia.com) (the "Service").
            By accessing or using the Service, you are consenting to the collection, use, and disclosure of your
            information in accordance with this Privacy Policy. If you do not consent to the same, please do not
            access or use the Service.
          </p>

          <p className="text-muted-foreground">
            We may modify this Privacy Policy at any time without any prior notice to you and will post the
            revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the
            revised Policy is posted in the Service, and your continued access or use of the Service after such
            time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you
            periodically review this page.
          </p>

          <ol className="list-decimal list-inside space-y-6">
            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Information We Collect:</h2>
              <p className="text-muted-foreground mb-2">We will collect and process the following personal information about you:</p>
              <ul className="list-disc list-inside pl-4 text-muted-foreground">
                <li>Name</li>
                <li>Email</li>
                <li>Mobile</li>
              </ul>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">How We Use Your Information:</h2>
              <p className="text-muted-foreground mb-2">We will use the information that we collect about you for the following purposes:</p>
              <ul className="list-disc list-inside pl-4 text-muted-foreground grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Marketing/Promotional</li>
                <li>Creating user account</li>
                <li>Testimonials</li>
                <li>Customer feedback collection</li>
                <li>Enforce T&amp;C</li>
                <li>Processing payment</li>
                <li>Support</li>
                <li>Administration info</li>
                <li>Manage customer order</li>
                <li>User-to-user comments</li>
                <li>Dispute resolution</li>
                <li>Manage user account</li>
              </ul>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">How We Share Your Information:</h2>
              <p className="text-muted-foreground mb-2">
                We will not transfer your personal information to any third party without seeking your consent,
                except in limited circumstances as described below:
              </p>
              <ul className="list-disc list-inside pl-4 text-muted-foreground">
                <li>Analytics</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We require such third parties to use the personal information we transfer to them only for the
                purpose for which it was transferred and not to retain it for longer than is required for fulfilling
                the said purpose.
              </p>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Retention of Your Information:</h2>
              <p className="text-muted-foreground">
                We will retain your personal information with us for 90 days to 2 years after user accounts remain idle
                or for as long as we need it to fulfill the purposes for which it was collected as detailed in this
                Privacy Policy. We may need to retain certain information for longer periods for record-keeping or other
                legitimate reasons.
              </p>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Your Rights:</h2>
              <p className="text-muted-foreground">
                Depending on the law that applies, you may have a right to access and rectify or erase your personal
                data or receive a copy of your personal data, restrict or object to the active processing of your data,
                and other rights. To exercise these rights, you can write to us at admin@octavertexmedia.com.
              </p>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Cookies, etc.</h2>
              <p className="text-muted-foreground">
                To learn more about how we use cookies and your choices, please refer to our{' '}
                <a href="https://www.octavertexmedia.com/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</a>.
              </p>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Security:</h2>
              <p className="text-muted-foreground">
                The security of your information is important to us, and we will use reasonable security measures to
                prevent the loss, misuse, or unauthorized alteration of your information under our control.
              </p>
            </li>

            <Separator className="my-4" />

            <li>
              <h2 className="text-xl font-semibold text-primary mb-2">Grievance/Data Protection Officer:</h2>
              <p className="text-muted-foreground">
                If you have any queries or concerns about the processing of your information, you may email our
                Grievance Officer at admin@octavertexmedia.com. We will address your concerns in accordance with
                applicable law.
              </p>
            </li>
          </ol>

          <Separator className="my-4" />

      
        </CardContent>
      </Card>
    </main>
  )
}

