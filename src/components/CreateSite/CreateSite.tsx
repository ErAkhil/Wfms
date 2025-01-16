import React from "react";

const CreateSite: React.FC = () => {
    return (
        <div className="form-container bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="form-title text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Site Creation Form (Telecom)
            </h2>
            <form className="form-content space-y-6">
                {/* Site Information Section */}
                <div className="form-section">
                    <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Site Information
                    </h3>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="siteName"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Site Name
                            </label>
                            <input
                                type="text"
                                id="siteName"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter site name"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="company"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter company name"
                            />
                        </div>
                    </div>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="siteLocation"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="siteLocation"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter site location"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="latitude"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Latitude
                            </label>
                            <input
                                type="number"
                                id="latitude"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter latitude"
                            />
                        </div>
                    </div>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="longitude"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Longitude
                            </label>
                            <input
                                type="number"
                                id="longitude"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter longitude"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="area"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Area
                            </label>
                            <input
                                type="text"
                                id="area"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter area"
                            />
                        </div>
                    </div>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="state"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter state"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="city"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter city"
                            />
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="form-section">
                    <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Additional Information
                    </h3>
                    <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label
                                htmlFor="siteType"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Site Type
                            </label>
                            <select
                                id="siteType"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select site type
                                </option>
                                <option value="macro">Macro</option>
                                <option value="micro">Micro</option>
                                <option value="small_cell">Small Cell</option>
                                <option value="tower">Tower</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="siteOwner"
                                className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Site Owner
                            </label>
                            <input
                                type="text"
                                id="siteOwner"
                                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter site owner name"
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

export default CreateSite;
