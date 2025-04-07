import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import LoginPage from "@/components/FormElements/LoginPage/LoginPage";

export const metadata: Metadata = {
  title:
    // "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
    'Atvantiq WFMS',
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      <LoginPage />
    </>
  );
}
