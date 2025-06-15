import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Event } from "~/utils/storage";
import { getEventById } from "~/utils/storage";

export default function EventDetailPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventId) {
      const foundEvent = getEventById(eventId);
      setEvent(foundEvent ?? null);
      setLoading(false);
    }
  }, [eventId]);

  if (loading) return <p>Loading event details...</p>;

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="mb-4">{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      {event.college && <p><strong>College:</strong> {event.college}</p>}
    </div>
  );
}
