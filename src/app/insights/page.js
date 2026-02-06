import React, { Suspense } from 'react'; // 1. Added Suspense
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTemplate from '@/components/PageTemplate';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata = {
    title: 'Our Insights | CyberSecure Solutions',
    description: 'Stay updated with the latest cybersecurity research, trends, and expert analysis.',
}

// 2. Keep this to ensure fresh data on every visit
export const dynamic = "force-dynamic";

async function BlogList() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    
    // Fallback URL if env is missing during build
    if (!API_URL) return <p className="text-center col-span-3">Configuration error: API URL missing.</p>;

    try {
        const res = await fetch(`${API_URL}/blogs`, { 
            cache: 'no-store',
            next: { revalidate: 0 } // Extra insurance for Vercel
        });
        if (!res.ok) throw new Error('Failed to fetch posts');
        const posts = await res.json();

        if (posts.length === 0) {
            return <p className="text-gray-500 col-span-3 text-center">No insights published yet.</p>;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <BlogPostCard
                        key={post.id}
                        title={post.title}
                        date={new Date(post.createdAt).toLocaleDateString()}
                        description={post.description || post.content.substring(0, 100) + "..."}
                        href={`/insights/${post.slug}`}
                    />
                ))}
            </div>
        );
    } catch (error) {
        console.error(error);
        return <p className="text-red-500 col-span-3 text-center">Unable to load insights right now.</p>;
    }
}

export default function InsightsPage() {
    return (
        <div>
            <Header />
            <PageTemplate title="Our Insights" subtitle="The latest in cybersecurity research, trends, and analysis from our experts.">
                {/* 3. Wrapping the fetch logic in Suspense solves the Build Error */}
                <Suspense fallback={<p className="text-center col-span-3">Loading latest insights...</p>}>
                    <BlogList />
                </Suspense>
            </PageTemplate>
            <Footer />
        </div>
    )
}