import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import BlogPosts from '@/data/postsData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const getPostData = (slug) => {
    return BlogPosts[slug];
}

export function getAllPosts() {
  return Object.entries(BlogPosts).map(([slug, data]) => ({
    slug,
    ...data,
  }));
}

export function getAllPostsSlugs() {
    return Object.keys(BlogPosts).map(slug => ({
        params: {slug} 
    }));
}

export async function generateStaticParams(){
    return getAllPostsSlugs();
}

const loadPost = (slug) => {
    const postData = getPostData(slug);
    if (!postData) {
        notFound();
    }
    return postData;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = getPostData(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found | CyberSecure Solutions',
            description: 'The requested blog post could not be found.',
        };
    }

    return {
        title: post.title + ' | CyberSecure Solutions',
        description: `Read our latest insight: "${post.title}" authored by ${post.author}.`,
    };
}

async function InsightPostPage({ params }) {
    const resolvedParams = await params;
    const post = loadPost(resolvedParams.slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">
                    <Button asChild variant="link" className="p-0 text-gray-600 mb-8">
                        <Link href="/insights">
                            &larr; Back to all insights
                        </Link>
                    </Button>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Post Not Found
                    </h1>
                    <p>Sorry, this blog post could not be found.</p>
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
                    {post.date && (
                        <p className="text-gray-500 text-sm mb-6">
                            Posted on {post.date} by {post.author}
                        </p>
                    )}

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

export default InsightPostPage;