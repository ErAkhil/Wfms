import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import UserTables from "@/components/UserRoles/UserTables"

export const metadata: Metadata = {
    title:
        'Atvantiq WFMS',

    description: "Users Roles and Permissions",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="User Roles and Permissions" />
                <UserTables />
            </DefaultLayout>
        </>
    );
}
