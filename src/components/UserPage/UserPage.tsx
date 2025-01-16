'use client';
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const UserPage: React.FC = () => {
    const [circle, setCircle] = useState('');
    const [project, setProject] = useState('');
    const [siteId, setSiteId] = useState('');
    const [activity, setActivity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [directionsResponse, setDirectionsResponse] = useState<any>(null);
    const [endActivity, setEndActivity] = useState(false);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [showNextActivityButton, setShowNextActivityButton] = useState(false);
    const [showLogoutButton, setShowLogoutButton] = useState(true);

    const circleOptions = ['Circle 1', 'Circle 2', 'Circle 3'];
    const projectOptions = ['Project 1', 'Project 2', 'Project 3'];
    const siteIdOptions = ['Site 1', 'Site 2', 'Site 3'];
    const activityOptions = ['Activity 1', 'Activity 2', 'Activity 3'];

    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };
    const defaultCenter = {
        lat: 28.6139,
        lng: 77.2090,
    };

    // Check if all fields are filled
    useEffect(() => {
        if (circle && project && siteId && activity) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
        }
    }, [circle, project, siteId, activity]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setEndActivity(true);
        setShowNextActivityButton(false);
        setShowLogoutButton(false);
    };

    const handleNextActivity = () => {
        setSubmitted(false);
        setEndActivity(false);
        setCircle('');
        setProject('');
        setSiteId('');
        setActivity('');
        setRemarks('');
        setShowNextActivityButton(false);
    };

    const handleEndActivity = () => {
        setShowNextActivityButton(true);
        setShowLogoutButton(true);
    };

    return (
        <div className="rounded-[10px] border border-stroke bg-white dark:border-dark-3 dark:bg-gray-dark dark:shadow-card shadow-1">
            {/* Entire Content with Border */}
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-semibold text-dark dark:text-white">User Form</h3>

                {/* Form Section */}
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Circle Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="circle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Enter Circle
                            </label>
                            <select
                                id="circle"
                                value={circle}
                                onChange={(e) => setCircle(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-dark-500 dark:text-gray-300"
                            >
                                <option value="">Select Circle</option>
                                {circleOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Project Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Enter Project
                            </label>
                            <select
                                id="project"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-dark-500 dark:text-gray-300"
                            >
                                <option value="">Select Project</option>
                                {projectOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Site ID Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="siteId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Enter Site ID
                            </label>
                            <select
                                id="siteId"
                                value={siteId}
                                onChange={(e) => setSiteId(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-dark-500 dark:text-gray-300"
                            >
                                <option value="">Select Site ID</option>
                                {siteIdOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Activity Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="activity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Enter Activity
                            </label>
                            <select
                                id="activity"
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-dark-500 dark:text-gray-300"
                            >
                                <option value="">Select Activity</option>
                                {activityOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Remarks Input */}
                        <div className="mb-4">
                            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Remarks (If any)
                            </label>
                            <textarea
                                id="remarks"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                rows={3}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-dark-500 dark:text-gray-300"
                                placeholder="Enter any remarks here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={!allFieldsFilled} // Disable until all fields are filled
                                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${allFieldsFilled ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    // Summary of inputs
                    <div className='mt-4'>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300">Summary:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Circle: {circle}, Project: {project}, Site ID: {siteId}, Activity: {activity}, Remarks: {remarks}
                        </p>
                    </div>
                )}

                {/* Logout Button */}
                {showLogoutButton && (
                    <div className="mt-4">
                        <button
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            End Day / Log Out
                        </button>
                    </div>
                )}
            </div>

            {/* Map Route Display Box and Buttons */}
            {submitted && (
                <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-sm dark:bg-gray-800">
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Map Route Display:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Route from New Delhi to Gurugram:</p>

                    {/* Load Google Map */}
                    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={defaultCenter}>
                            <Marker position={{ lat: 28.6139, lng: 77.2090 }} />
                            <Marker position={{ lat: 28.4595, lng: 77.0266 }} />
                            {/* Directions can be added here */}
                        </GoogleMap>
                    </LoadScript>

                    {/* End Activity Button and Next Activity Button */}
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handleEndActivity}
                            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${endActivity ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${endActivity ? 'red' : 'green'}-500`}
                        >
                            {endActivity ? 'End Activity' : 'Next Activity'}
                        </button>

                        {/* Show "Next Activity" button when End Activity is clicked */}
                        {showNextActivityButton && (
                            <button
                                onClick={handleNextActivity}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Next Activity
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPage;
