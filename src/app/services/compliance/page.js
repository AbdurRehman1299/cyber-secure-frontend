import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Building } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = {
    title: 'Compliance & Governance',
    description: 'Navigate the complex landscape of security regulations with confidence using our Compliance & Governance services.',
};

function CompliancePage() {
    return (
        <div>
            <Header />
            <ServicePageTemplate
                title="Compliance & Governance"
                subtitle="Navigate the complex landscape of security regulations with confidence."
                icon={<Building className="w-12 h-12 text-blue-700" />}
            >
                <p>
                    Staying compliant with industry and government regulations is not just a
                    legal requirement—it&apos;s a critical component of customer trust. Our
                    experts help you build and maintain a robust compliance program.
                </p>

                <h3>Frameworks We Cover</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">GDPR</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">HIPAA</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">PCI-DSS</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">ISO 27001</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">NIST</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">SOC 2</span>
                </div>

                <h3>Our GRC Services</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Gap Analysis and Readiness Assessments</li>
                    <li>Policy and Procedure Development</li>
                    <li>Virtual CISO (vCISO) Services</li>
                    <li>Ongoing Compliance Monitoring</li>
                </ul>
            </ServicePageTemplate>
            <Footer />
        </div>
    )
}

export default CompliancePage;