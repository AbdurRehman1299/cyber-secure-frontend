import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function JobOpening({ title, location, href='#' }) {
    return (
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{location}</p>
            </div>
            <Button variant="outline" asChild className="w-full sm:w-auto shrink-0">
                <Link href={href}>Apply Now</Link>
            </Button>
        </Card>
    )
}

export default JobOpening;