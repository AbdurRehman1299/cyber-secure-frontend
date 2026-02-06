"use client";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Home, Ticket, LogOut, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function ClientDashboard() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const { user, logout } = useContext(AuthContext);

    const [myInquiries, setMyInquiries] = useState([]);
    const [message, setMessage] = useState("");
    const [view, setView] = useState('overview');
    const [loading, setLoading] = useState(true);

    const fetchMyData = async () => {
        if (user?.email) {
            try {
                const res = await fetch(`${API_URL}/inquiries?email=${user.email}`);
                const data = await res.json();
                setMyInquiries(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch tickets");
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchMyData();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/inquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    message: message
                }),
            });

            if (res.ok) {
                setMessage("");
                fetchMyData();
                alert("Ticket Sent!");
            }
        } catch (err) {
            alert("Failed to send ticket");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r flex flex-col">
                <div className="p-6 font-bold text-lg text-blue-600">ClientPortal</div>
                <nav className="flex-1 p-4 space-y-2">
                    <button onClick={() => setView('overview')} className={`flex items-center gap-3 w-full p-2 rounded ${view === 'overview' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                        <Home className="w-5 h-5" /> Overview
                    </button>
                </nav>
                <div className="p-4">
                    <button onClick={logout} className="flex items-center gap-2 text-gray-500 hover:text-red-600">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
                    <Button variant="ghost" size="sm" onClick={fetchMyData}>
                        <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Create Ticket */}
                    <Card className="p-6">
                        <h3 className="font-bold mb-4">Create New Ticket</h3>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <Input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe your issue..."
                                required
                            />
                            <Button type="submit">Send</Button>
                        </form>
                    </Card>

                    {/* List Tickets */}
                    <Card className="p-6">
                        <h3 className="flex gap-2 font-bold mb-4"><Ticket />My Tickets</h3>
                        <div className="space-y-2 h-64 overflow-y-auto">
                            {loading ? <p>Loading...</p> : myInquiries.length === 0 ? <p className="text-sm text-gray-400">No tickets yet.</p> :
                                myInquiries.map((inq) => (
                                    <div key={inq.id} className="p-3 bg-gray-100 rounded text-sm border border-gray-200">
                                        <p className="text-gray-800">{inq.message}</p>
                                        <div className="mt-2 flex justify-between items-center">
                       <span className={`text-xs px-2 py-1 rounded-full ${inq.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                         {inq.status || 'Pending'}
                       </span>
                                            <span className="text-xs text-gray-400">
                         {new Date(inq.createdAt).toLocaleDateString()}
                       </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    );
}