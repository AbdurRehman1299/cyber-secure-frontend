import React from 'react';
import Posts from '@/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTemplate from '@/components/PageTemplate';
import BlogPostCard from '@/components/BlogPostCard';

const getAllPosts = () => Posts;

function InsightsPage() {
    const posts = getAllPosts();

    return (
        <div>
            <Header />
            <PageTemplate title="Our Insights" subtitle="The latest in cybersecurity research, trends, and analysis from our experts.">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogPostCard
                            key={post.slug}
                            title={post.title}
                            date={post.date}
                            description={post.description}
                            href={`/insights/${post.slug}`} // In a real app, this would be handled by Next.js routing
                        />
                    ))}
                </div>
            </PageTemplate>
            <Footer />
        </div>
    )
}

export default InsightsPage;