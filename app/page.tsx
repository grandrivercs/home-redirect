"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://grcs.pages.dev/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 space-y-8">
          {/* School Logo & Title */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                泓河开卷™
              </h1>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
                GRAND RIVER CHINESE SCHOOL
              </h2>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              We've Moved!
            </h3>
            <p className="text-xl text-gray-600">
              This site has been relocated to a new address
            </p>
          </div>

          {/* New URL */}
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-indigo-200">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">
              New Location
            </p>
            <a
              href="https://grcs.pages.dev/"
              className="text-2xl font-mono font-semibold text-indigo-600 hover:text-indigo-700 underline decoration-2 underline-offset-4 break-all"
            >
              grcs.pages.dev
            </a>
          </div>

          {/* Redirect Message */}
          <div className="pt-4">
            <p className="text-gray-500 mb-4">
              You will be automatically redirected in a few seconds...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-indigo-600 h-2 rounded-full animate-progress" />
            </div>
          </div>

          {/* Manual Button */}
          <div>
            <a
              href="https://grcs.pages.dev/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Visit New Site Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-sm">
          Please update your bookmarks to reflect the new address
        </p>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </div>
  );
}
