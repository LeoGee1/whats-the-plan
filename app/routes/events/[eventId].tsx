import { useParams } from "react-router-dom";
import events from "~/utils/storage";

export default function EventDetailPage() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
    </div>
  );
}