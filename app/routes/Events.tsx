// routes/events.tsx
import { useEffect, useState } from "react";
import MainLayout from "~/layout/MainLayout";
import { getEvents } from "~/utils/storage";
import EventCard from "~/components/subComponent/EventCard";
import { Link } from "react-router-dom";

export default function Events() {

  type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
};

const [events, setEvents] = useState<Event[]>([]);
 

  useEffect(() => {
    const stored = getEvents();
    setEvents(stored);

    if (!stored || stored.length === 0) {
      const defaultEvents = [
        {
          id: "1",
          title: "TechFest 2025",
          date: "2025-07-12",
          location: "Main Auditorium",
          imageUrl: "https://via.placeholder.com/400x200",
          description: "Annual tech extravaganza...",
          college: "MIT",
        },
        {
          id: "2",
          title: "AI Conference",
          date: "2025-08-05",
          location: "Hall B",
          imageUrl: "https://via.placeholder.com/400x200",
          description: "Discussions on AI future...",
          college: "Stanford",
        },
      ];
     
      setEvents(defaultEvents);
    } else {
      setEvents(stored);
    }
  }, []);

  return (
    <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-auto">
      <MainLayout>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">All Events</h1>
            <Link
              to="/events/new"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Create Event
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
