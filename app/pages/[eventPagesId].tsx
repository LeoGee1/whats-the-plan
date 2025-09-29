import { useParams } from "react-router-dom";
import Head from "~/components/Head";

const events = [
  {
    id: "1",
    title: "Music Festival",
    date: "October 15, 2025",
    location: "Cambridge, Massachusetts",
    description:
      "Join us for an unforgettable evening filled with music, culture, and vibrant energy. Featuring top artists and performers.",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Tech Conference",
    date: "November 10, 2025",
    location: "San Francisco, California",
    description:
      "A gathering of the brightest minds in technology, innovation, and entrepreneurship.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "Art Exhibition",
    date: "September 22, 2025",
    location: "Paris, France",
    description:
      "Explore breathtaking artwork from emerging and established artists worldwide.",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    title: "Sports Event",
    date: "August 5, 2025",
    location: "London, UK",
    description:
      "Catch the thrill of live sports action with top teams and athletes competing.",
    image:
      "https://media.istockphoto.com/id/2167337980/photo/mom-and-daughter-hug-while-cheering-on-their-favorite-college-football-team.webp?a=1&b=1&s=612x612&w=0&k=20&c=me0hgBYVFw2X8RdBg4mEmOj3dHrbY23qyd_1WarL2NA=",
  },
  {
    id: "5",
    title: "College Meetup",
    date: "July 18, 2025",
    location: "New York, USA",
    description:
      "Meet fellow students, share ideas, and build lifelong friendships.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "Food Festival",
    date: "December 12, 2025",
    location: "Tokyo, Japan",
    description:
      "Taste cuisines from around the world and enjoy a vibrant cultural experience.",
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=1200&q=80",
  },
];

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-700 dark:text-white">
        <p>Event not found.</p>
      </main>
    );
  }

  return (
    <>
      <Head />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <div className="relative w-full h-80 md:h-[500px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {event.title}
            </h1>
          </div>
        </div>

        {/* Event Info Section */}
        <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-purple-600">
                📅 {event.date}
              </p>
              <p className="text-lg font-semibold text-purple-600">
                📍 {event.location}
              </p>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-400 transition">
                Share on Twitter
              </button>
            </div>
          </div>

          <p className="text-lg leading-relaxed">{event.description}</p>

          <div className="mt-8">
            <button className="px-8 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 transition">
              🎟️ Register Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventDetailsPage;
