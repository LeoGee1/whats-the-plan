
import { Link } from "react-router";

export default function Head() {
    return (
        <header className="flex items-center justify-between px-8 py-8 shadow-sm">
            <h1 className="text-2xl font-pacifico font-light">
                What's the <span className="text-purple-600">Plan</span>
            </h1>
            <nav className="space-x-4">
                <Link to="/auth?mode=signin" className="text-gray-700 dark:text-gray-300">
                    Login
                </Link>
                <Link
                    to="/auth?mode=signup"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                >
                    Sign Up
                </Link>
            </nav>
        </header>
    );
}