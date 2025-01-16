import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CreateSite from "@/components/CreateSite/CreateSite";

export const metadata: Metadata = {
  title:
    'Atvantiq WFMS',

  description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};

const Create: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create a new site" />

      <CreateSite />
    </DefaultLayout>
  );
};

export default Create;
