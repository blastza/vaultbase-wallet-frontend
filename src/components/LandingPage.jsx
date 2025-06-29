import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-blue-800 via-purple-800 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse" />

      {/* Main Card */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full z-10">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-md">
          Welcome to Vaultbase Wallet
        </h1>
        <p className="text-gray-200 text-center mb-8">
          Secure. Simple. Smarter Finance.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white font-semibold shadow-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-xl text-white font-semibold shadow-md"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
