"use client";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { LayoutDashboard, MessageSquare, PlusCircle, LogOut, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
    const { user, logout } = useContext(AuthContext);

    const [inquiries, setInquiries] = useState([]);
    const [blogData, setBlogData] = useState({ title: "", slug: "", content: "" });
    const [view, setView] = useState('dashboard');
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(true);

    // 1. FETCH DATA (The useEffect Way)
    const fetchInquiries = async () => {
        try {
            const res = await fetch("http://localhost:3001/inquiries");
            const data = await res.json();
            setInquiries(data);
            setLoading(false);
        } catch (err) {
            console.error("Failed to fetch inquiries", err);
            setLoading(false);
        }
    };

    // Run immediately when component mounts
    useEffect(() => {
        fetchInquiries();
    }, []);

    // 2. CREATE BLOG POST
    const handlePostBlog = async () => {
        try {
            const res = await fetch("http://localhost:3001/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...blogData, author: user?.name || "Admin" }),
            });

            if (res.ok) {
                setMsg("Published Successfully!");
                setBlogData({ title: "", slug: "", content: "" });
            } else {
                setMsg("Failed to publish.");
            }
        } catch (err) {
            setMsg("Server error.");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans">
            {/* SIDEBAR */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-6 font-bold text-lg border-b border-gray-800">CyberPanel</div>
                <nav className="flex-1 p-4 space-y-2">
                    <button onClick={() => setView('dashboard')} className={`flex items-center gap-3 w-full p-2 rounded ${view === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </button>
                    <button onClick={() => setView('inquiries')} className={`flex items-center gap-3 w-full p-2 rounded ${view === 'inquiries' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
                        <MessageSquare className="w-5 h-5" /> Inquiries
                    </button>
                    <button onClick={() => setView('add-post')} className={`flex items-center gap-3 w-full p-2 rounded ${view === 'add-post' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
                        <PlusCircle className="w-5 h-5" /> Add Post
                    </button>
                </nav>
                <div className="p-4">
                    <button onClick={logout} className="flex items-center gap-2 text-red-400 hover:text-red-300">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </aside>

            {/* CONTENT */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold capitalize">{view.replace('-', ' ')}</h1>
                    {/* Manual Refresh Button */}
                    {view === 'inquiries' && (
                        <Button variant="outline" size="sm" onClick={fetchInquiries}>
                            <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
                        </Button>
                    )}
                </div>

                {view === 'dashboard' && (
                    <div className="grid grid-cols-3 gap-6">
                        <Card className="p-6 border-l-4 border-blue-600">
                            <h3 className="text-gray-500 text-sm">Total Inquiries</h3>
                            <p className="text-3xl font-bold">{inquiries.length}</p>
                        </Card>
                    </div>
                )}

                {view === 'inquiries' && (
                    <Card className="overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Message</th>
                            </tr>
                            </thead>
                            <tbody>
                            {loading ? <tr><td colSpan={3} className="p-4 text-center">Loading...</td></tr> : inquiries.map((inq) => (
                                <tr key={inq.id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{inq.name}</td>
                                    <td className="px-6 py-4 text-blue-600">{inq.email}</td>
                                    <td className="px-6 py-4">{inq.message}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Card>
                )}

                {view === 'add-post' && (
                    <Card className="p-6 max-w-2xl">
                        {msg && <p className={`mb-4 ${msg.includes("Success") ? "text-green-600" : "text-red-600"}`}>{msg}</p>}
                        <div className="space-y-4">
                            <Input placeholder="Blog Title" value={blogData.title} onChange={e => setBlogData({...blogData, title: e.target.value})} />
                            <Input placeholder="Slug (e.g. my-first-post)" value={blogData.slug} onChange={e => setBlogData({...blogData, slug: e.target.value})} />
                            <Textarea placeholder="Content..." className="min-h-[200px]" value={blogData.content} onChange={e => setBlogData({...blogData, content: e.target.value})} />
                            <Button onClick={handlePostBlog}>Publish</Button>
                        </div>
                    </Card>
                )}
            </main>
        </div>
    );
}