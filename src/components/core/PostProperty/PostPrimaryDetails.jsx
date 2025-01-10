import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep, saveFormData,resetStep } from "../../../Redux/FormDataSlice";


export default function PostPrimaryDetails() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const { step } = useSelector((state) => state.formData);
  const currentStep = step;

  const dispatch = useDispatch();

  const handleContinue = () => {
    if (!title || !description || !mobileNumber) {
      setShowError(true);
      return;
    }
    setShowError(false);
    dispatch(saveFormData({ title, description, mobileNumber }));
    dispatch(incrementStep());
  };

  return (
    <div className="min-h-screen mt-24 p-4 md:p-6 lg:p-8 bg-gray-50">
      <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Progress Sidebar */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              {["Basic Details", "Location Details", "Property Profile", "Photos, Videos & Voice-over", "Amenities Section"].map((step, index) => (
                <div key={step} className="relative flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        currentStep === index + 3 ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          currentStep === index + 3 ? "bg-white" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    {index < 4 && <div className="w-0.5 h-full bg-gray-200" />}
                  </div>
                  <div>
                    <p className={`text-sm ${currentStep === index + 3 ? "text-blue-600 font-medium" : "text-gray-600"}`}>{step}</p>
                    <span className="text-xs text-gray-400">Step {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Aditya</h1>
              <p className="text-lg text-gray-600">Fill out the basic details</p>
            </div>

            {/* Title Field */}
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter property title"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter property description"
                rows="4"
              ></textarea>
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-2">
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter mobile number"
              />
            </div>

            {showError && <p className="text-red-500 text-sm">Please fill in all the required fields.</p>}

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-right text-sm text-gray-600">
          <p>Need help?</p>
          <p>
            Email us at <a href="mailto:services@99acres.com" className="text-blue-600">services@99acres.com</a>
          </p>
          <p>
            Call us at <a href="tel:1800419999" className="text-blue-600">1800 41 9999</a> (IND Toll-Free)
          </p>
        </div>
      </div>
    </div>
  );
}
