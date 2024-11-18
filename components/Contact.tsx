"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

interface FormElements extends HTMLFormControlsCollection {
  fullName: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  service: HTMLSelectElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}

const team = [
  {
    id: 1,
    name: "John Smith",
    designation: "Technical Lead",
    image: "/api/placeholder/100/100",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "Project Manager",
    image: "/api/placeholder/100/100",
  },
  {
    id: 3,
    name: "Mike Brown",
    designation: "Solution Architect",
    image: "/api/placeholder/100/100",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden" id="contact">
      <BackgroundBeams />
      
      <div className="container mx-auto px-4 relative z-10">
        <TextRevealCard
          text="Get in Touch"
          revealText="Let's Build Something Amazing Together"
          className="mb-12 w-full"
        />

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/90">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
              <CardDescription>
                Ready to transform your digital presence? Our team of experts is here to help.
              </CardDescription>
              
              <div className="flex items-center justify-center gap-4 py-4">
                <AnimatedTooltip items={team} />
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone (optional)"
                        className="w-full bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <select className="w-full p-2 rounded-md border bg-white/50 backdrop-blur-sm">
                        <option value="">Select Service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="consulting">IT Consulting</option>
                      </select>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Project Details"
                        className="w-full min-h-[150px] bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Start Your Project'}
                    </Button>

                    {submitStatus === 'success' && (
                      <Alert className="bg-green-50 border-green-200">
                        <AlertDescription>
                          Message sent successfully! We'll get back to you soon.
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === 'error' && (
                      <Alert variant="destructive">
                        <AlertDescription>
                          Failed to send message. Please try again.
                        </AlertDescription>
                      </Alert>
                    )}
                  </form>
                </div>

                <div className="space-y-6 md:border-l md:pl-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">Bhubaneswar, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:admin@octavertexgroup.com" className="text-blue-600 hover:underline">
                        admin@octavertexgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+91 XXX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="font-medium mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com/octavertexmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com/octavertexmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://x.com/octavertexmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;