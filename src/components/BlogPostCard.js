import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { ArrowRight } from 'lucide-react';

function BlogPostCard({ title, date, description, href }) {
    return (
        <Link href={href} passHref className="block h-full">
            <Card className="flex flex-col cursor-pointer h-full transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
                <CardTitle className="text-xl mb-1">{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
                <p className="text-gray-600">{description}</p>
            </CardContent>
            <CardFooter>
                <Button variant="link" className="p-0 text-blue-700">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogPostCard;