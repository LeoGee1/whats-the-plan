
import { useState, useEffect } from "react";
import MainLayout from "~/layout/MainLayout";
import { FaUserCircle } from "react-icons/fa";

interface AdminProfile {
  name: string;
  email: string;
  role: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<AdminProfile | null>(null);

  useEffect(() => {
    
    const storedProfile = localStorage.getItem("adminProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      const defaultProfile: AdminProfile = {
        name: "Admin User",
        email: "admin@example.com",
        role: "Administrator",
      };
      setProfile(defaultProfile);
      localStorage.setItem("adminProfile", JSON.stringify(defaultProfile));
    }
  }, []);

  return (
    <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-auto">
      <MainLayout>
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>

          <div className="flex items-center gap-4 mb-6">
            <FaUserCircle className="text-7xl text-gray-400 dark:text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold">{profile?.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{profile?.email}</p>
              <span className="text-sm text-blue-500 font-medium">{profile?.role}</span>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Account Details</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Name:</strong> {profile?.name}
              </li>
              <li>
                <strong>Email:</strong> {profile?.email}
              </li>
              <li>
                <strong>Role:</strong> {profile?.role}
              </li>
            </ul>
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
