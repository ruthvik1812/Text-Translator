import React from "react";
import Translator from "./components/Translator";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            🌐 Text Translator
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Translate text instantly to 10+ languages
          </p>
          <p className="text-sm text-gray-500">
            Powered by Deep Translate API
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <Translator />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ✨ Using <strong>MyMemory Free Translation API</strong> - No API key required!
          </p>
        </div>
      </div>
    </div>
  );
}
