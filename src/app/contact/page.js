"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageTemplate from '@/components/PageTemplate';
import InfoCard from '@/components/InfoCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <div>
            <Header />
            <PageTemplate title="Contact Us" subtitle="Let's start the conversation about your security.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Whether you have a question about our services, need an
                            emergency consultation, or want to partner with us, our team is
                            ready to help.
                        </p>
                        <div className="space-y-4">
                            <InfoCard title="General Inquiries" description="info@cybersecure.com" />
                            <InfoCard title="Sales & Partnerships" description="sales@cybersecure.com" />
                            <InfoCard title="24/7 Incident Hotline" description="+92 (323) 1408-725 (Critical Incidents Only)" />
                            <InfoCard title="Headquarters" description="123 Security Plaza, Lahore, Pakistan 54790" />
                        </div>
                    </div>

                    {/* Form Submission */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Send Us a Message</CardTitle>
                            <CardDescription>We&apos;ll get back to you within one business day.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Input id="first-name" placeholder="Kevin" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Input id="last-name" placeholder="Peterson" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="kevin@company.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">How can we help you?</Label>
                                    <Textarea className="h-90" id="message" placeholder="Tell us about your security needs..." required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Submit Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </PageTemplate>
            <Footer />
        </div>
    )
}

export default ContactPage;