import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8091/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-indigo-900 via-fuchsia-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse" />

      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 w-full max-w-md z-10"
      >
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Register
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 rounded-xl shadow-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}