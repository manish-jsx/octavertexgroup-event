"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Github, Linkedin, CheckCircle2, Timer, Code2, Blocks } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import gsap from 'gsap';

const teamMembers = [
  {
    id: 1,
    name: "Anish Kumar",
    designation: "CEO & Solution Architect",
    image: "/team/anish.jpg"
  },
  {
    id: 2,
    name: "Manish Kumar",
    designation: "CTO & Tech Lead",
    image: "/team/manish.jpg"
  },
  {
    id: 3,
    name: "Rakesh Kumar",
    designation: "Creative Director",
    image: "/team/rakesh.jpg"
  },
];

const services = [
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "ui", label: "UI/UX Design" },
  { value: "devops", label: "DevOps Services" },
  { value: "consulting", label: "Tech Consulting" },
];

const benefits = [
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    text: "Free Technical Consultation"
  },
  {
    icon: <Timer className="w-5 h-5" />,
    text: "24/7 Support & Maintenance"
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    text: "Clean & Documented Code"
  },
  {
    icon: <Blocks className="w-5 h-5" />,
    text: "Scalable Architecture"
  }
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate benefits section
    tl.fromTo(benefitsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );

    // Animate form
    tl.fromTo(formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    );

    // Animate contact info
    tl.fromTo(contactInfoRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.6"
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex items-center" id="contact">
      <BackgroundBeams />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Benefits Section */}
          <div
            ref={benefitsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item group relative overflow-hidden p-6 rounded-2xl
        bg-gradient-to-b from-[rgba(121,205,255,0.08)] to-[rgba(121,205,255,0.03)]
        border border-[rgba(121,205,255,0.12)] hover:border-[rgba(121,205,255,0.2)]
        transition-all duration-300 hover:transform hover:-translate-y-1
        hover:shadow-[0_8px_20px_-6px_rgba(121,205,255,0.12)]"
              >
                {/* Icon container */}
                <div className="mb-4 p-3.5 rounded-xl inline-flex
        bg-[rgba(121,205,255,0.1)] text-[rgb(121,205,255)]
        group-hover:scale-110 group-hover:rotate-3 transform
        transition-all duration-300 ease-out"
                >
                  {/* Make icons slightly larger */}
                  <div className="w-7 h-7">
                    {benefit.icon}
                  </div>
                </div>

                {/* Text with enhanced typography */}
                <h3 className="font-semibold text-lg mb-2.5
        text-[rgb(199,210,254)] group-hover:text-[rgb(121,205,255)]
        transition-colors duration-300 tracking-tight"
                >
                  {benefit.text}
                </h3>

                <p className="text-[15px] leading-relaxed
        text-[rgb(199,210,254)]/75 font-normal
        group-hover:text-[rgb(199,210,254)]/90
        transition-colors duration-300"
                >
                  Get expert guidance and insights before starting your development journey
                </p>

                {/* Animated gradient line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px]
        bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(139,92,246)]
        group-hover:w-full transition-all duration-500 ease-out"
                />
              </div>
            ))}
          </div>

          <Card className="border-[rgb(121,205,255)]/20 bg-[rgb(15,24,41)]/90 backdrop-blur-xl">
            <CardHeader className="text-center space-y-4">
              <div className="space-y-2">
                <CardTitle className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
                  Let's Build Something Amazing
                </CardTitle>
                <CardDescription className="text-[rgb(199,210,254)]/70 text-lg max-w-2xl mx-auto">
                  Transform your ideas into reality with OctaVertex Media. Our expert team is ready to bring your vision to life with cutting-edge technology solutions.
                </CardDescription>
              </div>

              <div className="flex items-center justify-center gap-4 py-4">
                <AnimatedTooltip items={teamMembers} />
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div ref={formRef}>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="First Name"
                        className="bg-[rgb(15,24,41)]/50 border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className="bg-[rgb(15,24,41)]/50 border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50"
                        required
                      />
                    </div>

                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="bg-[rgb(15,24,41)]/50 border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50"
                      required
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="bg-[rgb(15,24,41)]/50 border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50"
                      />
                      <select
                        className="w-full p-2 rounded-md bg-[rgb(15,24,41)]/50 border border-[rgb(121,205,255)]/20 text-[rgb(199,210,254)] focus:ring-2 focus:ring-[rgb(121,205,255)]/50"
                        required
                      >
                        <option value="" className="bg-[rgb(15,24,41)]">Select Service</option>
                        {services.map(service => (
                          <option key={service.value} value={service.value} className="bg-[rgb(15,24,41)]">
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      className="w-full min-h-[150px] bg-[rgb(15,24,41)]/50 border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50"
                      required
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(139,92,246)] hover:from-[rgb(121,205,255)]/90 hover:to-[rgb(139,92,246)]/90 text-white font-medium py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule a Free Consultation'}
                    </Button>

                    {submitStatus === 'success' && (
                      <Alert className="bg-green-900/20 border-green-500/20 text-green-300">
                        <AlertDescription>
                          Thank you for reaching out! Our team will contact you within 24 hours.
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === 'error' && (
                      <Alert className="bg-red-900/20 border-red-500/20 text-red-300">
                        <AlertDescription>
                          Something went wrong. Please try again or email us directly.
                        </AlertDescription>
                      </Alert>
                    )}
                  </form>
                </div>

                <div ref={contactInfoRef} className="space-y-6 md:border-l md:border-[rgb(121,205,255)]/20 md:pl-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[rgb(199,210,254)] mb-4">Why Choose OctaVertex Media?</h3>
                    <ul className="space-y-3 text-[rgb(199,210,254)]/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(121,205,255)]" />
                        Expert team with 10+ years of experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(121,205,255)]" />
                        Cutting-edge technology stack
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(121,205,255)]" />
                        Agile development methodology
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(121,205,255)]" />
                        Transparent communication
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-[rgb(121,205,255)]" />
                      <div>
                        <h3 className="font-medium text-[rgb(199,210,254)]">Location</h3>
                        <p className="text-[rgb(199,210,254)]/70">Saket, New Delhi, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[rgb(121,205,255)]" />
                      <div>
                        <h3 className="font-medium text-[rgb(199,210,254)]">Email</h3>
                        <a href="mailto:admin@octavertexmedia.com" className="text-[rgb(121,205,255)] hover:text-[rgb(121,205,255)]/80">
                          admin@octavertexmedia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[rgb(121,205,255)]" />
                      <div>
                        <h3 className="font-medium text-[rgb(199,210,254)]">Phone</h3>
                        <p className="text-[rgb(199,210,254)]/70">+91 7004456733</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[rgb(121,205,255)]/20">
                    <h3 className="font-medium mb-4 text-[rgb(199,210,254)]">Connect With Us</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/company/octavertex-media/" },
                        { icon: <Github className="h-5 w-5" />, link: "https://github.com/octavertexmedia" },
                        { icon: <Instagram className="h-5 w-5" />, link: "https://instagram.com/octavertexmedia" },
                        { icon: <Twitter className="h-5 w-5" />, link: "https://x.com/octavertexmedia" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[rgb(121,205,255)]/10 hover:bg-[rgb(121,205,255)]/20 transition-colors text-[rgb(121,205,255)]"
                        >
                          {social.icon}
                        </a>
                      ))}
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

export default ContactForm;