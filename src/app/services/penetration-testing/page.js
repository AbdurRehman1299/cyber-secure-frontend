import { Shield } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageTemplate from '@/components/ServicePageTemplate';

function PenetrationTestingPage() {
    return (
        <div>
            <Header />
            <ServicePageTemplate
                title="Penetration Testing"
                subtitle="Proactively challenge your defenses with real-world attack simulations."
                icon={<Shield className="w-12 h-12 text-blue-700" />}
            >
                <p>
                    Our certified ethical hackers use the same tools, techniques, and procedures (TTPs)
                    as malicious actors to test the resilience of your systems. This &quot;friendly&quot;
                    attack provides invaluable, real-world proof of your security gaps.
                </p>

                <h3>We Test Everything</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoCard title="Network Pentesting" description="Internal and external network infrastructure, firewalls, and segmentation." />
                    <InfoCard title="Web Application Pentesting" description="Testing for OWASP Top 10 vulnerabilities, business logic flaws, and more." />
                    <InfoCard title="Mobile Application Pentesting" description="Analyzing iOS and Android apps for insecure data storage, weak APIs, and reverse-engineering." />
                    <InfoCard title="Social Engineering" description="Phishing, vishing, and physical attempts to test your human firewall." />
                </div>
            </ServicePageTemplate>
            <Footer />
        </div>
    )
}

export default PenetrationTestingPage;