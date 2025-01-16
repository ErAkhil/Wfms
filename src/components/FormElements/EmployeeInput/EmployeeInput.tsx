import React from "react";

const EmployeeInput: React.FC = () => {
    return (
        <div className="form-container bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="form-title text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Employee Input Form
            </h2>
            <form className="form-content space-y-6">
                {/* Personal Information Section */}
                <div className="form-section">
                    <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Personal Information
                    </h3>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="fullName"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="address"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter address"
                            />
                        </div>
                    </div>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="contactDetails"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Contact Details
                            </label>
                            <input
                                type="text"
                                id="contactDetails"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter contact details"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="maritalStatus"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Marital Status
                            </label>
                            <select
                                id="maritalStatus"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select status
                                </option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label
                                htmlFor="spouseDetails"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Spouse Details
                            </label>
                            <input
                                type="text"
                                id="spouseDetails"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter spouse details"
                            />
                        </div>
                    </div>
                </div>

                {/* Job Information Section */}
                <div className="form-section">
                    <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Job Information
                    </h3>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="title"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter job title"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="department"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Department
                            </label>
                            <input
                                type="text"
                                id="department"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter department"
                            />
                        </div>
                    </div>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="supervisor"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Supervisor
                            </label>
                            <input
                                type="text"
                                id="supervisor"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter supervisor name"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="workLocation"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Work Location
                            </label>
                            <input
                                type="text"
                                id="workLocation"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter work location"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-actions">
                    <button
                        type="submit"
                        className="submit-button w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeInput;
