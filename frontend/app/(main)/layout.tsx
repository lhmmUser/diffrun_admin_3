"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authorized, setAuthorized] = useState<boolean | null>(null); // Check if the user is authorized
  const router = useRouter(); // Access the Next.js router

  useEffect(() => {
  fetch("https://697e-14-142-182-243.ngrok-free.app/auth/me", {
    credentials: "include"
  })
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .then(() => setAuthorized(true))
    .catch(() => {
      window.location.href = "https://697e-14-142-182-243.ngrok-free.app/sign-in"
    })
}, [])


  // Do not render anything until the auth check is complete
  if (authorized === null) {
    return <div>Loading...</div>; // You can show a loading spinner or something
  }

  if (!authorized) {
    return <div>Unauthorized. Redirecting...</div>; // You can also redirect if the user is not authorized
  }

  return (
    <div>
      {/* Mobile header */}
      <div className="md:hidden flex justify-between items-center bg-gray-900 text-white p-4">
        <h1 className="text-lg font-medium">Diffrun Admin</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`bg-white text-gray-800 w-52 min-h-screen p-6 fixed top-0 left-0 z-50 transform md:translate-x-0 transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:block shadow-lg`}
        >
          <div className="mb-8 pt-4">
            <h2 className="text-xl font-medium mb-2">Diffrun Admin</h2>
          </div>

          <nav>
            <ul className="text-sm">
                <li>
                  <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Dashboard</Link>
                </li>
                <li>
                  <Link href="/orders" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Orders</Link>
                </li>
                <li>
                  <Link href="/jobs" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Jobs</Link>
                </li>
                <li>
                  <Link href="/test" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Test Orders</Link>
                </li>
                <li>
                  <Link href="/rejected-orders" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Rejected Orders</Link>
                </li>
                <li>
                  <Link href="/export" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Export</Link>
                </li>
                <li>
                  <Link href="/darkfantasy" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Dark Fantasy</Link>
                </li>
                <li>
                  <Link href="/razorpay_analysis" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Razorpay Analysis</Link>
                </li>
                <li>
                  <Link href="/Shipment_status" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Shipment Status</Link>
                </li>
                <li>
                  <Link href="/Order_status" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Order Status</Link>
                </li>
                <li>
                  <Link href="/Shipment_orders" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Shipment Orders</Link>
                </li>
                <li>
                  <Link href="/Shipment_KPI" className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 font-medium">Fulfillment KPIs</Link>
                </li>
              </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-50 overflow-y-auto p-4 md:p-2 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
