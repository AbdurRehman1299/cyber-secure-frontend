"use client"

import React, {useState} from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageTemplate from '@/components/PageTemplate';
import InfoCard from '@/components/InfoCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {CheckCircle2, Loader2, XCircle} from "lucide-react";

function ContactPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!first_name || !last_name || !email || !message){
            setSubmitStatus('error');
            return;
        }

        setSubmitStatus(null);
        setIsSubmitting(true);

        try{
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first_name, last_name, email, message }),
            });

            setSubmitStatus('success')
            console.log("Form submitted: ", { first_name, last_name, email, message });
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            console.log("Form submitted!");
        }catch(error){
            console.log("Submission failed: ", error);
            setSubmitStatus('error');
        }finally{
            setIsSubmitting(false);
        }
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
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-medium text-green-800">Message Sent!</h4>
                                        <p className="text-sm text-green-700">Thank you. Our security team will review your message shortly.</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-medium text-red-800">Submission Failed</h4>
                                        <p className="text-sm text-red-700">Please ensure all fields are filled out correctly and try again.</p>
                                    </div>
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Input
                                            id="first-name"
                                            placeholder="Kevin"
                                            value={first_name}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Input
                                            id="last-name"
                                            placeholder="Peterson"
                                            value={last_name}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="kevin@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">How can we help you?</Label>
                                    <Textarea
                                        className="min-h-[120px]"
                                        id="message"
                                        placeholder="Tell us about your security needs..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Message"
                                    )}
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