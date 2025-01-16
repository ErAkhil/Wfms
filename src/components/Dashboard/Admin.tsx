"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import MapOne from "../Maps/MapOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ChartOne from "@/components/Charts/ChartOne";
import Link from "next/link"; // Import Link component

const ECommerce: React.FC = () => {
    return (
        <>
            <DataStatsOne />
            <div className="mt-4 mb-4 flex space-x-4 text-2xl">

                <div className="mt-4 mb-4">
                    <Link href="/admin/add" className="text-blue-500 hover:text-blue-700">
                        Create New User
                    </Link>
                </div>
                <div className="mt-4 mb-4">
                    <Link href="/user/test" className="text-blue-500 hover:text-blue-700">
                        Attendance

                    </Link>
                </div> <div className="mt-4 mb-4">
                    <Link href="/admin/add" className="text-blue-500 hover:text-blue-700">
                        Reimbursement

                    </Link>
                </div> <div className="mt-4 mb-4">
                    <Link href="/admin/add" className="text-blue-500 hover:text-blue-700">
                        Vendor Management

                    </Link>
                </div>
                <div className="mt-4 mb-4">
                    <Link href="/admin/site" className="text-blue-500 hover:text-blue-700">
                        Create Site

                    </Link>
                </div><div className="mt-4 mb-4">
                    <Link href="/admin/add" className="text-blue-500 hover:text-blue-700">
                        Approvals

                    </Link>
                </div> <div className="mt-4 mb-4">
                    <Link href="/admin/add" className="text-blue-500 hover:text-blue-700">
                        Report Generations

                    </Link>
                </div>

            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
                <ChartOne />
                <ChartTwo />
                <ChartThree />
                <MapOne />
                <div className="col-span-12 xl:col-span-8">
                    <TableOne />
                </div>
                <ChatCard />
            </div>
        </>
    );
};

export default ECommerce;
