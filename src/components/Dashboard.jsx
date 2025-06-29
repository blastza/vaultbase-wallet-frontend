import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Vaultbase Wallet</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance + Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-1">
          <h2 className="text-xl font-semibold mb-2">Welcome back, User!</h2>
          <p className="text-gray-500 mb-4">Total Balance</p>
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">$32,197.00</h3>
          <div className="flex gap-3">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl">
              + Add
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl">
              ↗ Send
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-tr from-purple-800 to-indigo-900 text-white p-6 rounded-2xl shadow-md col-span-1">
          <div className="text-xl tracking-widest mb-6">
            9811 9533 2725 9097
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <p>NAME</p>
              <p className="font-semibold">Andri J</p>
            </div>
            <div>
              <p>VALID THRU</p>
              <p className="font-semibold">09/24</p>
            </div>
            <div>
              <p>CVV</p>
              <p className="font-semibold">249</p>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-1">
          <h3 className="text-xl font-semibold mb-4">Transactions</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">YouTube</span>
              <span className="text-red-500">- $15.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Transfer</span>
              <span className="text-green-500">+ $30.00</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-2">
          <h3 className="text-xl font-semibold mb-4">Statistics (August 2024)</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>1–7</span><span>8–14</span><span>15–21</span><span>22–28</span>
          </div>
          <div className="flex items-end justify-between h-40">
            {[120, 200, 80, 160].map((val, i) => (
              <div key={i} className="w-6 bg-indigo-500" style={{ height: `${val}px` }} />
            ))}
            {[60, 100, 150, 100].map((val, i) => (
              <div key={i} className="w-6 bg-purple-400 ml-2" style={{ height: `${val}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}