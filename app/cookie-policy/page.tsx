import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Cookie Policy | OctaVertex Media',
  description: 'Learn about how OctaVertex Media uses cookies.',
}

export default function CookiePolicy() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Cookie Policy</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            <p>Effective Date: 20-Dec-2023</p>
            <p>Last Updated: 28-Dec-2024</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">What are cookies?</h2>
            <p className="text-muted-foreground">
              This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.
            </p>
            <p className="text-muted-foreground mt-2">
              Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">How do we use cookies?</h2>
            <p className="text-muted-foreground">
              As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
            </p>
            <p className="text-muted-foreground mt-2">
              The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">Types of Cookies we use</h2>
            <div className="cky-audit-table-element"></div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">Manage cookie preferences</h2>
            <Button variant="outline" className="cky-banner-element mb-4">
              Cookie Settings
            </Button>
            <p className="text-muted-foreground">
              You can change your cookie preferences any time by clicking the above button. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.
            </p>
            <p className="text-muted-foreground mt-2">
              In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 text-muted-foreground">
              <li>Chrome: <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://support.google.com/accounts/answer/32050</a></li>
              <li>Safari: <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://support.apple.com/en-in/guide/safari/sfri11471/mac</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox</a></li>
              <li>Internet Explorer: <a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a></li>
            </ul>
            <p className="text-muted-foreground mt-2">
              If you are using any other web browser, please visit your browser's official support documents.
            </p>
          </section>

          <Separator />

        </CardContent>
      </Card>
    </main>
  )
}

