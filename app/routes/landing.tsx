// app/routes/landing.tsx
import Head from "~/components/Head";
import { Link } from "react-router";
import Brands from "~/components/Brands";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      
      < Head />

      {/* Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <h2 className=" font-display text-[10rem]  font-extrabold uppercase opacity-75 animate-slide text-white
  ">
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
          Trending <span className="text-purple-600">Events</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Music Festival",
              img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 2,
              title: "Tech Conference",
              img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 3,
              title: "Art Exhibition",
              img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 4,
              title: "Sports Event",
              img: "https://media.istockphoto.com/id/2167337980/photo/mom-and-daughter-hug-while-cheering-on-their-favorite-college-football-team.webp?a=1&b=1&s=612x612&w=0&k=20&c=me0hgBYVFw2X8RdBg4mEmOj3dHrbY23qyd_1WarL2NA=",
            },
            {
              id: 5,
              title: "College Meetup",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 6,
              title: "Food Festival",
              img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=800&q=80",
            },
          ].map((event) => (
            <Link
              key={event.id}
              to={`../pages/${event.id}`}
              
              className="relative bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              {/* Title on image */}
              <h4 className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                {event.title}
              </h4>
            </Link>
          ))}
        </div>
      </section>




      {/* CTA: Create Event */}
      <section className="bg-purple-900 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Make your own Event</h3>
        <p className="mb-6 max-w-xl mx-auto">
          If you don't plan the event, it wont plan itself. So, tell us comrade, what's the plan?
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
        <Brands />
      </section>

          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Trending Colleges */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">
          Trending <span className="text-purple-600">colleges</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Harvard University",
              subtitle: "Cambridge, Massachusetts",
              img: "https://plus.unsplash.com/premium_photo-1680807869624-07b389d623e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
              rating: "4.8",
              link: "#",
            },
            {
              title: "Stanford University",
              subtitle: "Stanford, California",
              img: "https://images.unsplash.com/photo-1681782421891-5088f13466ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
              rating: "4.6",
              link: "#",
            },
            {
              title: "Nanyang University",
              subtitle: "Singapore, Singapore",
              img: "https://media.istockphoto.com/id/1489959086/photo/the-front-of-oxford-collage.webp?a=1&b=1&s=612x612&w=0&k=20&c=ICVGNku3u8XDeMvsmriGqUVb4zRQvZ72-cuOAIUwEY0=",
              rating: "4.7",
              link: "#",
            },
          ].map((college, i) => (
            <a
              key={i}
              href={college.link}
              className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden hover:scale-105 transform transition block"
            >
              <div className="relative">
                <img
                  src={college.img}
                  alt={college.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  ⭐ {college.rating}
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{college.title}</h4>
                <p className="text-sm text-gray-500">{college.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Load More
          </button>
        </div>
      </section>

      {/* Our Blogs */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Our Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Festivals that connect youth with fun & culture",
              img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&h=250&q=80",
              link: "#",
            },
            {
              title: "Exciting concerts and live music to attend",
              img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=400&h=250&q=80",
              link: "#",
            },
            {
              title: "Student events that empower communities",
              img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=400&h=250&q=80",
              link: "#",
            },
          ].map((blog, i) => (
            <a
              key={i}
              href={blog.link}
              className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden hover:scale-105 transform transition block"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{blog.title}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-gray-100 px-8 py-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">What's the <span className="text-purple-600">Plan</span></h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-purple-300">Home</a>
            <a href="#" className="hover:text-purple-300">Services</a>
            <a href="#" className="hover:text-purple-300">About</a>
            <a href="#" className="hover:text-purple-300">Contact</a>
          </div>

          {/* Newsletter */}
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-900 w-64 bg-white"
            />
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-xl mt-4">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          <p className="text-sm text-gray-400">
            &copy; 2025 EventHive. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>

  );
}
