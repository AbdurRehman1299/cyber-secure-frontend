import React from 'react';
import { Target } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Risk Assessment & Analysis',
    description: 'Understand your vulnerabilities before they become liabilities with our Risk Assessment & Analysis services.',
}

function RiskAssessmentPage() {
    return (
        <div>
            <Header />
            <ServicePageTemplate 
                title="Risk Assessment & Analysis"
                subtitle="Understand your vulnerabilities before they become liabilities."
                icon={<Target className="w-12 h-12 text-blue-700" />}
            >
                <p>
                    Our comprehensive risk assessments provide a 360-degree view of your security
                    posture. We go beyond automated scans to manually identify, analyze, and
                    prioritize vulnerabilities across your technology, people, and processes.
                </p>
                <h3>Our Process</h3>
                <ul>
                    <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                        <h4 className="font-semibold text-lg m-0">Asset Identification</h4>
                        <p className="text-gray-600 m-0">Cataloging and classifying your critical data, hardware, and software assets.</p>
                    </div>
                    </li>
                    <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                        <h4 className="font-semibold text-lg m-0">Threat Modeling</h4>
                        <p className="text-gray-600 m-0">Identifying potential attackers and their methods, relevant to your industry.</p>
                    </div>
                    </li>
                    <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                        <h4 className="font-semibold text-lg m-0">Vulnerability Analysis</h4>
                        <p className="text-gray-600 m-0">Using a combination of automated tools and manual expert review to find weaknesses.</p>
                    </div>
                    </li>
                    <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                        <h4 className="font-semibold text-lg m-0">Actionable Reporting</h4>
                        <p className="text-gray-600 m-0">Delivering a clear, prioritized report with concrete remediation steps.</p>
                    </div>
                    </li>
                </ul>
            </ServicePageTemplate>
            <Footer />
        </div>
    )
}

export default RiskAssessmentPage;