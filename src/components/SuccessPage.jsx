import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
                Payment Successful!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                Thank you for your subscription. You can now enjoy all the features of your selected plan.
            </p>
            <button
                className="px-6 py-3 bg-orange-150 text-white rounded-lg hover:bg-orange-400"
                onClick={() => navigate("/")}
            >
                Go to back to Home
            </button>
        </div>
    );
};

export default SuccessPage;
