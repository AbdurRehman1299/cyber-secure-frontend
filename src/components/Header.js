"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const serviceLinks = [
    { href:'/services/risk-assessment', title: 'Risk Assessment' },
    { href:'/services/penetration-testing', title: 'Penetration Testing' },
    { href:'/services/incident-response', title: 'Incident Response' },
    { href:'/services/compliance', title: 'Compliance (PCI, HIPAA)' },
];

const navLinks = [
    { href: '/about', title: 'About Us' },
    { href: 'industries', title: 'Industries' },
    { href: '/insights', title: 'Insights' },
    { href: '/careers', title: 'Careers' },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const serviceMenuRef = useRef(null);
    const pathname = usePathname();

    // Close dropdown when clicking outside
    const handleServiceMenuBlur = (event) => {
        if (serviceMenuRef.current && !serviceMenuRef.current.contains(event.relatedTarget)) {
            setIsServicesMenuOpen(false);
        }
    };

    // Close mobile menu on route change
    const handleNavigate = () => {
        setIsMobileMenuOpen(false);
        setIsServicesMenuOpen(false);
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="container mx-auto px-4 lg:px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link 
                        href="/"
                        className="text-2xl font-bold text-blue-700"
                        onClick={handleNavigate}    
                    >
                        <span>CyberSecure</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Services Dropdown */}
                        <div className="relative" ref={serviceMenuRef} onBlur={handleServiceMenuBlur}>
                            <button onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            {isServicesMenuOpen && (
                                <div tabIndex={-1} className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                                    {serviceLinks.map((link) => (
                                        <Link 
                                            key={link.href}
                                            href={link.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                        {   link.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other Links */}
                        {navLinks.map ((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-gray-700 hover:text-blue-700"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button & Contact Button */}
                    <div className="flex items-center gap-2">
                        <Button asChild className="hidden lg:inline-flex">
                            <Link href="/contact" onClick={handleNavigate}>
                                Contact Us
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Mobile Menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {/* Services Links Mobile */}
                        <h3 className="font-semibold text-gray-500 text-sm uppercase">Services</h3>
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleNavigate}
                                className="block font-medium text-gray-700 hover:bg-gray-700 p-2 rounded-md"
                            >
                                {link.title}
                            </Link>
                        ))}

                        <hr className="my-2" />

                        {/* Other Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleNavigate}
                                className="block font-medium text-gray-700 hover:bg-gray-700 p-2 rounded-md"
                            >
                                {link.title}
                            </Link>
                        ))}

                        <hr className="my-2" />

                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={handleNavigate}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;