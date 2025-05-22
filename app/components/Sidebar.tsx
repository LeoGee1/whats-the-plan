import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Events", path: "routes/events" },
  { name: "Messages", path: "/messages" },
  { name: "Profile", path: "/profile" },
];


export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 h-full sticky top-0">
      <nav className="space-y-4">
        {navItems.map(({ name, path }) => (
          <Link
            key={path}
            to={path}
            className={`block px-4 py-2 rounded hover:bg-gray-700 ${
              location.pathname === path ? "bg-gray-700" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
