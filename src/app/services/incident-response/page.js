import { Siren } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Incident Response & Forensics',
    description: 'Rapid, decisive action to contain threats and minimize damage with our Incident Response & Forensics services.',
};

function IncidentResponsePage() {
    return (
        <div>
            <Header />
            <ServicePageTemplate
                title="Incident Response & Forensics"
                subtitle="Rapid, decisive action to contain threats and minimize damage."
                icon={<Siren className="w-12 h-12 text-blue-700" />}
            >
                <p>
                    When a breach occurs, every second counts. Our 24/7 Incident Response
                    team is ready to deploy, helping you contain the threat, investigate its
                    origin, and recover your operations swiftly and securely.
                </p>

                <h3>Our IR Lifecycle</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Containment:</strong> Immediately stopping the spread of the attack.</li>
                    <li><strong>Eradication:</strong> Finding and removing the root cause of the incident.</li>
                    <li><strong>Recovery:</strong> Safely restoring affected systems and services.</li>
                    <li><strong>Forensics:</strong> Deep-dive digital investigation to build a legal case or prevent re-infection.</li>
                    <li><strong>Lessons Learned:</strong> A post-incident review to strengthen your defenses for the future.</li>
                </ul>
            </ServicePageTemplate>
            <Footer />
        </div>
    )
}

export default IncidentResponsePage;