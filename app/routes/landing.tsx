// app/routes/landing.tsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">
          What' the <span className="text-purple-600">Plan</span>
        </h1>
        <nav className="space-x-4">
          <Link to="/auth/login" className="text-gray-700 dark:text-gray-300">
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <h2 className="relative z-10 text-4xl md:text-6xl font-bold">
          MADE FOR THOSE WHO DO
        </h2>
      </section>

    {/* filters */}
      <div className="relative  px-6">
        <div className="max-w-4xl mx-auto bg-purple-800 p-6 rounded-2xl flex flex-wrap md:flex-nowrap gap-4 shadow-xl -mt-12 mb-15">
          <select className="flex-1 p-3 rounded-md text-gray-800">
            <option>Choose category</option>
          </select>
          <select className="flex-1 p-3 rounded-md text-gray-800">
            <option>Choose location</option>
          </select>
          <select className="flex-1 p-3 rounded-md text-gray-800">
            <option>Choose date</option>
          </select>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Trending */}
      <section className="px-8 py-12">
        <h3 className="text-2xl font-bold mb-6">
          Trending <span className="text-purple-600">Colleges</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            >
              <img
                src="https://source.unsplash.com/random/400x250?college"
                alt="college"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">
                  Trending College {i}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA: Create Event */}
      <section className="bg-purple-900 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Make your own Event</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Showcase your
          events to the world.
        </p>
        <button className="bg-white text-purple-900 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Create Events
        </button>
      </section>

      {/* Brands */}
      <section className="px-8 py-12 text-center">
        <h3 className="text-2xl font-bold mb-8">
          Join these <span className="text-purple-600">brands</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-6 opacity-80">
          {["Spotify", "Google", "Stripe", "YouTube", "Microsoft"].map(
            (brand) => (
              <div key={brand} className="text-lg font-semibold">
                {brand}
              </div>
            )
          )}
        </div>
      </section>


    </div>
  );
}
