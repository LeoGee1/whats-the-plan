export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
};

export const LOCAL_EVENTS_KEY = "events";

export function getEvents(): Event[] {
  const data = localStorage.getItem(LOCAL_EVENTS_KEY);
  return data ? (JSON.parse(data) as Event[]) : [];
}

export function saveEvents(events: Event[]): void {
  localStorage.setItem(LOCAL_EVENTS_KEY, JSON.stringify(events));
}

export function getEventById(id: string): Event | undefined {
  return getEvents().find((event) => event.id === id);
}

// Optional helper to add a new event (merge with existing)
export function addEvent(newEvent: Event): void {
  const events = getEvents();
  events.push(newEvent);
  saveEvents(events);
}

// Optional helper to update an event by id
export function updateEvent(updatedEvent: Event): void {
  const events = getEvents();
  const index = events.findIndex((e) => e.id === updatedEvent.id);
  if (index !== -1) {
    events[index] = updatedEvent;
    saveEvents(events);
  }
}
