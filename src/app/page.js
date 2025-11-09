import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Headers from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Shield, BarChart, Target, Siren } from 'lucide-react';

function HomePage() {
  return(
    <div>
      <Headers />
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Next Generation
              <br />
              <span className="text-blue-700">Cybersecurity Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
              We are your trusted partner in navigating the complexities of digital security, providing end-to-end solutions to protect your most valuable assets.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services/risk-assessment">Explore Our Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Free Consultant</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Target className="w-8 h-8 text-blue-700" />}
              title="Risk Assessment"
              description="Identify, analyze, and evaluate potential security risks to your organization."
              href="/services/risk-assessment"
            />
            <ServiceCard 
              icon={<Shield className="w-8 h-8 text-blue-700" />}
              title="Penetration Testing"
              description="Simulate real-world attacks to uncover vulnerabilities before attackers do."
              href="/services/penetration-testing"
            />
            <ServiceCard 
              icon={<Siren className="w-8 h-8 text-blue-700" />}
              title="Incident Response"
              description="Rapid, expert response to minimize the impact of a security breach."
              href="/services/incident-response"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Strategic Advantage
              </h2>
              <p className="text-gray-600 mb-8">
                Partnering with us means more than just security; it means gaining a strategic ally committed to your business resilience and growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-700 shrink-0" />
                  <span className="text-gray-700">Decades of combined leadership experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-blue-700 shrink-0" />
                  <span className="text-gray-700">Proven methodologies aligned with the global standards</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-700 shrink-0" />
                  <span className="text-gray-700">24/7 monitoring and support</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
                [Image Placeholder]
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;