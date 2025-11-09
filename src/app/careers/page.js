import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import JobOpening from '@/components/JobOpening';

function CareersPage() {
    return (
        <PageTemplate title="Join Our Team" subtitle="Help us build a more secure digital future.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Work With Us?</h2>
                    <p className="text-gray-600 mb-6">
                        We are a mission-driven team of the industry&apos;s brightest minds,
                        tackling the most challenging problems in cybersecurity. We offer
                        a culture of continuous learning, collaboration, and impact.
                    </p>
                    <ul className="space-y-3 text-gray-600 list-disc list-inside">
                        <li>Competitive salary and comprehensive benefits</li>
                        <li>Generous budget for training and certifications</li>
                        <li>Flexible, remote-first work environment</li>
                        <li>Meaningful work protecting organizations from real threats</li>
                    </ul>
                </div>
                <div className="w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
                    [Image Placeholder]
                </div>
            </div>

            {/* Jobs Opening */}
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Open Positions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    <JobOpening title="Senior Security Consultant" location="Remote (USA)" />
                    <JobOpening title="Penetration Tester" location="Remote (Karachi)" />
                    <JobOpening title="SOC Analyst (Tier 2)" location="Lahore, Pakistan" />
                </div>
            </div>
        </PageTemplate>
    )
}