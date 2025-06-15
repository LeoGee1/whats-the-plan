import { Link } from "react-router-dom";
import { useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
};

type Props = {
  event: Event;
  onDelete: (id: string) => void;
};

export default function EventCard({ event, onDelete }: Props) {
  const [hovered, setHovered] = useState(false);

  function handleDeleteClick(e: React.MouseEvent) {
    e.preventDefault(); // prevent navigation
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      onDelete(event.id);
    }
  }

  return (
    <Link
      to={`/events/${event.id}`}
      aria-label={`View details for ${event.title}`}
      className="relative block rounded-lg shadow hover:shadow-md transition bg-white dark:bg-gray-800 p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Delete icon shows only on hover */}
      {hovered && (
        <button
          onClick={handleDeleteClick}
          aria-label={`Delete event ${event.title}`}
          className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
          title="Delete event"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
            />
          </svg>
        </button>
      )}

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











































// import { Link } from "react-router-dom";

// type Event = {
//   id: string;
//   title: string;
//   date: string;
//   location: string;
//   imageUrl: string;
// };

// export default function EventCard({ event }: { event: Event }) {
//   return (
//     <Link
//       to={`/events/${event.id}`}
//       aria-label={`View details for ${event.title}`}
//       className="block rounded-lg shadow hover:shadow-md transition bg-white dark:bg-gray-800 p-4"
//     >
//       <img
//         src={event.imageUrl}
//         alt={event.title}
//         className="w-full h-40 object-cover rounded-md mb-4"
//       />

//       <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//         {event.title}
//       </h3>
//       <p className="text-sm text-gray-600 dark:text-gray-300">{event.date}</p>
//       <p className="text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
//       <span className="text-sm text-blue-500 hover:underline mt-2 inline-block">
//         View Details →
//       </span>
//     </Link>
//   );
// }
