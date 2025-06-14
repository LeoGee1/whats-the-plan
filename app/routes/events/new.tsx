import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents, saveEvents } from "~/utils/storage";
import { v4 as uuidv4 } from "uuid";
import type { Event } from "~/utils/storage";

export default function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [college, setCollege] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newEvent: Event = {
      id: uuidv4(),
      title,
      description,
      date,
      location,
      imageUrl,
    };

    const current = getEvents();
    saveEvents([newEvent, ...current]);
    navigate("/events");
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          className="input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          className="input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <input
          className="input"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="College"
          required
        />
        <input
          className="input"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>

      <style>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        textarea.input {
          min-height: 80px;
          resize: vertical;
        }
      `}</style>
    </div>
  );
}
