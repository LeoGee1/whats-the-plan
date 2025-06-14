import { Link } from "react-router-dom";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <Link
      to={`/events/${event.id}`}
      aria-label={`View details for ${event.title}`}
      className="block rounded-lg shadow hover:shadow-md transition bg-white dark:bg-gray-800 p-4"
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {event.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{event.date}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
      <span className="text-sm text-blue-500 hover:underline mt-2 inline-block">
        View Details →
      </span>
    </Link>
  );
}
