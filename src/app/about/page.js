import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Target, Building } from 'lucide-react';
import TeamMemberCard from '@/components/TeamMemberCard';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
    title: 'About Us | CyberSecure Solutions',
    description: 'Learn more about CyberSecure Solutions, our mission, values, and leadership team dedicated to protecting your digital assets.',
};

function AboutPage() {
    return (
        <div>
            <Header />
            <PageTemplate title="About Us" subtitle="We are the architects of your digital defense.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            To provide unparalleled cybersecurity expertise, enabling organizations to innovate and thrive securely in a digital-first world.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex gap-3"><Shield className="w-5 h-5 text-blue-700 mt-1" /> <strong>Integrity:</strong> Upholding the highest ethical standards.</li>
                            <li className="flex gap-3"><Target className="w-5 h-5 text-blue-700 mt-1" /> <strong>Excellence:</strong> Striving for perfection and innovation.</li>
                            <li className="flex gap-3"><Building className="w-5 h-5 text-blue-700 mt-1" /> <strong>Partnership:</strong> Acting as an extension of your team.</li>
                        </ul>
                    </div>
                    <div className="w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
                        [Image Placeholder]
                    </div>
                </div>

                {/* Leaderships */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Meet Our Leadership    
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TeamMemberCard name="Dr. Evelyn Reed" title="Chief Executive Officer" />
                        <TeamMemberCard name="Marcus Cole" title="Chief Technology Officer" />
                        <TeamMemberCard name="Jian Yang" title="Head of Threat Intelligence"/>
                        <TeamMemberCard name="Aisha Khan" title="Head of Compliance" />
                    </div>
                </div>
            </PageTemplate>
            <Footer />
        </div>
    )
}

export default AboutPage;