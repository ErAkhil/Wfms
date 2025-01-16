import Dashboard from "@/components/Dashboard/Admin";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
    title:
        'Atvantiq WFMS',

    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Admin Dashboard" />
                <Dashboard />
            </DefaultLayout>
        </>
    );
}
