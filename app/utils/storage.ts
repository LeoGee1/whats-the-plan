export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  college?: string;
};

export const LOCAL_EVENTS_KEY = "events";

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "TechFest 2025",
    description: "Annual tech extravaganza with workshops and speakers.",
    date: "2025-07-12",
    location: "Main Auditorium",
    imageUrl: "/images/event-image1.png",
    college: "MIT",
  },
  {
    id: "2",
    title: "AI Conference",
    description: "Discussions on AI future and ethics.",
    date: "2025-08-05",
    location: "Hall B",
    imageUrl: "/images/event-image1.png",
    college: "Stanford",
  },
];

export function getEvents(): Event[] {
  const data = localStorage.getItem(LOCAL_EVENTS_KEY);
  return data ? (JSON.parse(data) as Event[]) : defaultEvents;
}

export function saveEvents(events: Event[]): void {
  localStorage.setItem(LOCAL_EVENTS_KEY, JSON.stringify(events));
}

export function getEventById(id: string): Event | undefined {
  return getEvents().find((event) => event.id === id);
}

export function addEvent(newEvent: Event): void {
  const events = getEvents();
  events.push(newEvent);
  saveEvents(events);
}

export function updateEvent(updatedEvent: Event): void {
  const events = getEvents();
  const index = events.findIndex((e) => e.id === updatedEvent.id);
  if (index !== -1) {
    events[index] = updatedEvent;
    saveEvents(events);
  }
}
