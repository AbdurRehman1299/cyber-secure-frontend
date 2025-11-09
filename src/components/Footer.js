import React from 'react';
import Link from 'next/link';

const FooterLink = ({href, children}) => (
    <li>
        <Link href={href} className="hover:text-white transition-colors">
            {children}
        </Link>
    </li>
);

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Logo & Mission */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            CyberSecure
                        </Link>
                        <p className="max-w-xs pr-4">
                            Architects of digital defense, committed to your organization&apos;s security and resilience.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/services/risk-assessment">Risk Assessment</FooterLink>
                            <FooterLink href="/services/penetration-testing">Penetration Testing</FooterLink>
                            <FooterLink href="/services/incident-response">Incident Response</FooterLink>
                            <FooterLink href="/services/compliance">Compliance</FooterLink>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/insights">Insights</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>info@cybersecure.com</li>
                            <li>+92 (323) 1408-725</li>
                            <li>123 Security Plaza, Lahore, Pakistan</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-800 pt-8 text-center">
                    <p>&copy; 2025 CyberSecure Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;