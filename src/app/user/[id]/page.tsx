'use  client'
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import UserPage from "@/components/UserPage/UserPage";

export const metadata: Metadata = {
    title: "ATQ User Page",
    description: "This is User page.",
    // other metadata
};
const User: React.FC = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="User" />

            <UserPage />
        </DefaultLayout>
    );
};

export default User;