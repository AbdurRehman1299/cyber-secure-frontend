import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

async function getAllBlogs() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const res = await fetch(`${API_URL}/blogs`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            console.error("Backend refused connection");
            return [];
        }

        return res.json();
    } catch (e) {
        console.error("Failed to fetch blogs:", e);
        return [];
    }
}

async function getPostBySlug(slug) {
    const posts = await getAllBlogs();
    console.log(`Looking for: ${slug}`, posts.map(p => p.slug));
    return posts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
    const posts = await getAllBlogs();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found | CyberSecure Solutions',
        };
    }

    return {
        title: post.title + ' | CyberSecure Solutions',
        description: `Read our latest insight by ${post.author}.`,
    };
}

export default async function InsightPostPage({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <Button asChild variant="link" className="p-0 text-blue-600">
                        <Link href="/insights">&larr; Back to all insights</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Button asChild variant="link" className="p-0 text-gray-600 mb-8">
                        <Link href="/insights">
                            &larr; Back to all insights
                        </Link>
                    </Button>

                    {/* Post Header */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
                    <div className="flex gap-2 text-gray-500 text-sm mb-6">
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                    </div>

                    {/* Post Content */}
                    <div className="text-lg text-gray-700 leading-relaxed
                                    [&_p]:mb-4
                                    [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3
                                    [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:my-4
                                    [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:my-4
                                    [&_strong]:font-semibold [&_strong]:text-gray-800
                                    [&_li]:pl-2"
                         dangerouslySetInnerHTML={{__html: post.content }}
                    >
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}