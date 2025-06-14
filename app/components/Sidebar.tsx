import { Link, useLocation } from "react-router-dom";
import {   LayoutDashboard,
  Calendar,
  MessageSquare,
  User, } from "lucide-react";


const navItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Events", path: "/events", icon: <Calendar className="w-5 h-5" /> },
  { name: "Profile", path: "/profile", icon: <User className="w-5 h-5" /> },
];


export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-48 bg-gray-800 text-white px-6 py-5 h-full sticky top-0">
      <nav className="space-y-4">
        {navItems.map(({ name, path, icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 ${
    location.pathname === path ? "bg-gray-700" : ""
  }`}
          >
            {icon} {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
