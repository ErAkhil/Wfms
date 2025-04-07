import React from "react";

interface PermissionSectionProps {
    title: string;
    permissions: {
        fullAccess: boolean;
        view: boolean;
        create: boolean;
        edit: boolean;
        delete: boolean;
        approve: boolean;
    };
    onChange: (updatedPermissions: PermissionSectionProps["permissions"]) => void;
}

const PermissionSection: React.FC<PermissionSectionProps> = ({
    title,
    permissions,
    onChange,
}) => {
    const handleCheckboxChange = (field: string, value: boolean) => {
        let updatedPermissions = { ...permissions, [field]: value };

        // If Full Access is checked, automatically check all other permissions
        if (field === "fullAccess" && value) {
            updatedPermissions = {
                fullAccess: true,
                view: true,
                create: true,
                edit: true,
                delete: true,
                approve: true,
            };
        }
        // If any other permission is unchecked, uncheck Full Access
        else if (field !== "fullAccess" && !value) {
            updatedPermissions.fullAccess = false;
        }

        // If all other permissions are checked, check Full Access
        if (
            field !== "fullAccess" &&
            updatedPermissions.view &&
            updatedPermissions.create &&
            updatedPermissions.edit &&
            updatedPermissions.delete &&
            updatedPermissions.approve
        ) {
            updatedPermissions.fullAccess = true;
        }

        onChange(updatedPermissions);
    };

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {title}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                Full Access
                            </th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                View
                            </th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                Create
                            </th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                Edit
                            </th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                Delete
                            </th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                                Approve
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={permissions.fullAccess}
                                    onChange={(e) => handleCheckboxChange("fullAccess", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 mx-auto">
                                <input
                                    type="checkbox"
                                    checked={permissions.view}
                                    onChange={(e) => handleCheckboxChange("view", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={permissions.create}
                                    onChange={(e) => handleCheckboxChange("create", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={permissions.edit}
                                    onChange={(e) => handleCheckboxChange("edit", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={permissions.delete}
                                    onChange={(e) => handleCheckboxChange("delete", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={permissions.approve}
                                    onChange={(e) => handleCheckboxChange("approve", e.target.checked)}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PermissionSection;