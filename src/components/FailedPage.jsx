import React from "react";
import { useNavigate } from "react-router-dom";

const FailedPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
                Payment Failed!
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                It seems something went wrong. Please try again and ensure your details are correct.
            </p>
            <button
                className="px-6 py-3 bg-orange-150 text-white rounded-lg hover:bg-orange-400"
                onClick={() => navigate("/")}
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default FailedPage;
