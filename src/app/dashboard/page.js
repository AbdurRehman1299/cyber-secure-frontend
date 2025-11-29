"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import ClientDashboard from "@/components/dashboard/ClientDashboard";

export default function DashboardPage() {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            const stored = localStorage.getItem("cyber_user");
            if (!stored) router.push("/login");
        }
    }, [user, router]);

    if (!user) return null;

    if (user.role === 'admin') return <AdminDashboard />;
    return <ClientDashboard />;
}