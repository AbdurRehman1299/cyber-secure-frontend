import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTemplate from '@/components/PageTemplate';
import InfoCard from '@/components/InfoCard';

function IndustriesPage() {
    return (
        <div>
            <Header />
            <PageTemplate title="Industries We Serve" subtitle="Tailored security expertise for your unique sector.">
                <p className="text-center max-w-3xl mx-auto -mt-4 mb-16 text-gray-600">
                    We understand that every industry faces unique security challenges. Our
                    team has deep, sector-specific experience, allowing us to provide
                    solutions that are not only robust but also relevant.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <InfoCard title="Financial Services" description="Securing high-value transactions, protecting customer data, and ensuring regulatory compliance (PCI, SOX)." />
                    <InfoCard title="Technology & SaaS" description="Securing cloud infrastructure, protecting intellectual property, and ensuring product security (DevSecOps)." />
                    <InfoCard title="Healthcare" description="Protecting patient data (e-PHI) and ensuring full HIPAA/HITECH compliance for providers and payers." />
                    <InfoCard title="E-Commerce & Retail" description="Defending against payment fraud, securing customer accounts, and protecting web applications from attacks." />
                    <InfoCard title="Government & Public Sector" description="Protecting critical national infrastructure, citizen data, and meeting stringent federal standards (NIST, FISMA)." />
                    <InfoCard title="Manufacturing" description="Securing operational technology (OT) and industrial control systems (ICS) from targeted attacks." />
                </div>
            </PageTemplate>
            <Footer />
        </div>
    )
}

export default IndustriesPage;