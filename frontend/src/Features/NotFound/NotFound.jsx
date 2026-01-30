import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-orange-600">404</h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-white transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 rounded-lg font-semibold text-slate-700 shadow-sm border border-slate-200 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
