import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTemplate from '@/components/PageTemplate';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata = {
    title: 'Our Insights | CyberSecure Solutions',
    description: 'Stay updated with the latest cybersecurity research, trends, and expert analysis.',
}

export const revalidate = 60;

async function getBlogs() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const res = await fetch(`${API_URL}/blogs`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function InsightsPage() {
    const posts = await getBlogs();

    return (
        <div>
            <Header />
            <PageTemplate title="Our Insights" subtitle="The latest in cybersecurity research, trends, and analysis from our experts.">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogPostCard
                                key={post.id}
                                title={post.title}
                                date={new Date(post.createdAt).toLocaleDateString()}
                                description={post.description || post.content.substring(0, 100) + "..."}
                                href={`/insights/${post.slug}`}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-3 text-center">No insights published yet.</p>
                    )}
                </div>
            </PageTemplate>
            <Footer />
        </div>
    )
}