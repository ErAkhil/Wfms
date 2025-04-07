'use client'

import React, { useState } from "react";
import PermissionSection from "./UserRoles";

interface PermissionState {
    fullAccess: boolean;
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
    approve: boolean;
}

interface RoleSection {
    title: string;
    permissions: PermissionState;
}

const EditRole: React.FC = () => {
    // State for role name and description
    const [roleName, setRoleName] = useState("");
    const [description, setDescription] = useState("");

    // State for default role sections
    const [roleSections, setRoleSections] = useState<RoleSection[]>([
        {
            title: "Contacts",
            permissions: {
                fullAccess: false,
                view: false,
                create: false,
                edit: false,
                delete: false,
                approve: false,
            },
        },
        {
            title: "Items",
            permissions: {
                fullAccess: false,
                view: false,
                create: false,
                edit: false,
                delete: false,
                approve: false,
            },
        },
        {
            title: "Banking",
            permissions: {
                fullAccess: false,
                view: false,
                create: false,
                edit: false,
                delete: false,
                approve: false,
            },
        },
        {
            title: "Sales",
            permissions: {
                fullAccess: false,
                view: false,
                create: false,
                edit: false,
                delete: false,
                approve: false,
            },
        },
        {
            title: "Purchases",
            permissions: {
                fullAccess: false,
                view: false,
                create: false,
                edit: false,
                delete: false,
                approve: false,
            },
        },
    ]);

    // Handler for permission changes
    const handlePermissionChange = (index: number, updatedPermissions: PermissionState) => {
        setRoleSections((prev) => {
            const updatedSections = [...prev];
            updatedSections[index].permissions = updatedPermissions;
            return updatedSections;
        });
    };

    // Form submission handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Collect selected permissions for each section
        const selectedPermissions = roleSections.map((section) => {
            const permissions = section.permissions;
            const selected = Object.entries(permissions)
                .filter(([_, value]) => value) // Only include permissions that are true (checked)
                .map(([key]) => key);
            return {
                section: section.title,
                permissions: selected,
            };
        });

        // Log the user creation with selected permissions
        console.log(`User created with role: ${roleName}`);
        console.log("User description: ", description)
        console.log("Selected Permissions:", selectedPermissions);
    };

    return (
        <div className="w-full p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-left bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Edit Role
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Role Name */}
                    <div>
                        <label
                            htmlFor="roleName"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Role Name*
                        </label>
                        <input
                            type="text"
                            id="roleName"
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Role Name"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter a description for this role"
                            rows={3}
                        />
                    </div>

                    {/* Permission Sections */}
                    {roleSections.map((section, index) => (
                        <PermissionSection
                            key={index}
                            title={section.title}
                            permissions={section.permissions}
                            onChange={(updatedPermissions) => handlePermissionChange(index, updatedPermissions)}
                        />
                    ))}

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditRole;