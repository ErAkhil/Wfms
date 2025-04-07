'use client'
import React, { useState } from "react";

// Define interfaces for component props
interface InputFieldProps {
    id: string;
    label: string;
    type?: string;
}

interface SelectFieldProps {
    id: string;
    label: string;
    options: string[];
}

const EmployeeInput: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);
    const handlePageClick = (page: number) => setStep(page);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log("Uploading file:", file.name);
        }
    };

    const pages = [
        "Basic Information",
        "Personal Details",
        "Job Details",
        "Banking Details",
        "Address Details",
        "Additional Details",
    ];

    // Page 1: Basic Information (11 fields)
    const Page1 = () => (
        <div className="form-section">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Basic Information
            </h3>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField id="empId" label="Employee ID" />
                <SelectField id="salutation" label="Salutation" options={["", "Mr.", "Mrs.", "Ms.", "Dr."]} />
                <InputField id="firstName" label="First Name" />
                <InputField id="middleName" label="Middle Name" />
                <InputField id="lastName" label="Last Name" />
                <InputField id="email" label="E-Mail ID" type="email" />
                <InputField id="mobile" label="Mobile" />
                <InputField id="dateOfJoining" label="Date of Joining" type="date" />
                <InputField id="designation" label="Designation" />
                <InputField id="department" label="Department" />
                <InputField id="shortName" label="Short Name" />
            </div>
            <div className="form-actions flex justify-end mt-4">
                <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );

    // Page 2: Personal Details (10 fields)
    const Page2 = () => (
        <div className="form-section">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Personal Details
            </h3>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField id="fathersName" label="Father's Name" />
                <InputField id="mothersName" label="Mother's Name" />
                <InputField id="dateOfBirth" label="Date of Birth" type="date" />
                <SelectField id="sex" label="Sex" options={["", "Male", "Female", "Other"]} />
                <SelectField id="maritalStatus" label="Marital Status" options={["", "Single", "Married", "Divorced", "Widowed"]} />
                <InputField id="spouseName" label="Spouse Name" />
                <InputField id="aadharNo" label="Aadhar No." />
                <InputField id="pan" label="PAN" />
                <InputField id="rejoinee" label="Rejoinee" />
                <InputField id="prevEmpId" label="Prev. Empid/Refno" />
            </div>
            <div className="form-actions flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );

    // Page 3: Job Details (10 fields)
    const Page3 = () => (
        <div className="form-section">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Job Details
            </h3>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField id="occupation" label="Occupation" />
                <InputField id="grade" label="Grade" />
                <InputField id="branch" label="Branch" />
                <InputField id="division" label="Division" />
                <InputField id="salaryCalculateFrom" label="Salary Calculate From" type="date" />
                <InputField id="dateOfLeaving" label="Date of Leaving" type="date" />
                <InputField id="reasonForLeaving" label="Reason for Leaving" />
                <InputField id="salStructure" label="Salary Structure" />
                <InputField id="attendance" label="Attendance" />
                <InputField id="director" label="Director" />
            </div>
            <div className="form-actions flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );

    // Page 4: Banking Details (11 fields)
    const Page4 = () => (
        <div className="form-section">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Banking Details
            </h3>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField id="bankAccountNo" label="Bank Account No." />
                <InputField id="bankName" label="Bank Name" />
                <InputField id="ifscCode" label="IFSC Code" />
                <SelectField id="esiApplicable" label="ESI Applicable" options={["", "Yes", "No"]} />
                <InputField id="esiNo" label="ESI No" />
                <InputField id="esiDispensary" label="ESI Dispensary" />
                <SelectField id="pfApplicable" label="PF Applicable" options={["", "Yes", "No"]} />
                <InputField id="pfNo" label="PF No" />
                <InputField id="pfNoDept" label="PF No for Dept File" />
                <InputField id="uanNo" label="UAN NO" />
                <SelectField id="restrictPf" label="Restrict PF" options={["", "Yes", "No"]} />
            </div>
            <div className="form-actions flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );

    // Page 5: Address Details (11 fields)
    const Page5 = () => (
        <div className="form-section space-y-6">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Address Details
            </h3>
            <div className="address-section">
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Current Address</h4>
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField id="currentResNo" label="Res. No." />
                    <InputField id="currentResName" label="Res. Name" />
                    <InputField id="currentRoadStreet" label="Road/Street" />
                    <InputField id="currentLocalityArea" label="Locality/Area" />
                    <InputField id="currentCityDistrict" label="City/District" />
                    <InputField id="currentState" label="State" />
                    <InputField id="currentPincode" label="Pincode" />
                </div>
            </div>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField id="stdCode" label="STD Code" />
                <InputField id="phone" label="Phone" />
                <InputField id="wardCircle" label="Ward/Circle" />
                <InputField id="remarks" label="Remarks" />
            </div>
            <div className="form-actions flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );

    // Page 6: Additional Details (11 fields)
    const Page6 = () => (
        <div className="form-section space-y-6">
            <h3 className="section-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Additional Details
            </h3>
            <div className="address-section">
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Permanent Address</h4>
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField id="permResNo" label="Res. No." />
                    <InputField id="permResName" label="Res. Name" />
                    <InputField id="permRoadStreet" label="Road/Street" />
                    <InputField id="permLocalityArea" label="Locality/Area" />
                    <InputField id="permCityDistrict" label="City/District" />
                    <InputField id="permState" label="State" />
                    <InputField id="permPincode" label="Pincode" />
                </div>
            </div>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField id="zeroPension" label="Zero Pension" options={["", "Yes", "No"]} />
                <SelectField id="zeroPt" label="Zero PT" options={["", "Yes", "No"]} />
            </div>
            <div className="form-actions flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md"
                >
                    Previous
                </button>
                <button
                    type="submit"
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                >
                    Submit
                </button>
            </div>
        </div>
    );

    const InputField: React.FC<InputFieldProps> = ({ id, label, type = "text" }) => (
        <div className="form-group">
            <label htmlFor={id} className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                onChange={handleChange}
                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Enter ${label.toLowerCase()}`}
            />
        </div>
    );

    const SelectField: React.FC<SelectFieldProps> = ({ id, label, options }) => (
        <div className="form-group">
            <label htmlFor={id} className="form-label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            <select
                id={id}
                onChange={handleChange}
                className="form-input w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue=""
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option || "Select " + label.toLowerCase()}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="flex">
            {/* Main Form Content */}
            <div className="form-container flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="form-title text-xl font-bold text-gray-900 dark:text-gray-100">
                        Add Employee
                    </h2>
                    {step === 1 && (
                        <label className="flex items-center cursor-pointer">
                            <span className="p-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md">
                                Bulk Upload
                            </span>
                            <input
                                type="file"
                                accept=".xlsx, .xls"
                                onChange={handleBulkUpload}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
                <form className="form-content space-y-6" onSubmit={handleSubmit}>
                    {step === 1 && <Page1 />}
                    {step === 2 && <Page2 />}
                    {step === 3 && <Page3 />}
                    {step === 4 && <Page4 />}
                    {step === 5 && <Page5 />}
                    {step === 6 && <Page6 />}
                </form>
            </div>

            {/* Right Sidebar */}
            <div className="sidebar w-64 bg-gray-100 dark:bg-gray-700 p-4 rounded-r-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Sections
                </h3>
                <ul className="space-y-2">
                    {pages.map((pageName, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handlePageClick(index + 1)}
                                className={`w-full text-left p-2 rounded-md ${step === index + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                                    }`}
                            >
                                {pageName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EmployeeInput;