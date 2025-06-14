import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("events", "routes/events.tsx"), 
  route("events/:eventId", "routes/events/[eventId].tsx"),
  route("new", "routes/events/new.tsx"),
  route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;
