import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("routes/dashboard.tsx"),

  //public landing pagr
  index("routes/landing.tsx"),

  //public auth
  route("auth", "routes/auth/auth.tsx"),

  route("/", "utils/RequireAuth.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    route("events", "routes/events.tsx"),
    route("events/new", "routes/events/new.tsx"),
    route("events/:eventId", "routes/events/[eventId].tsx"),
    route("pages/:eventPagesId", "pages/[eventPagesId].tsx"),
    route("profile", "routes/profile.tsx"),
  ]),
] satisfies RouteConfig;






























// import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   index("routes/home.tsx"),
//   route("events", "routes/events.tsx", {}, [
//     route(":eventId", "routes/events/[eventId].tsx"),
//     route("new", "routes/events/new.tsx"),
//   ]),
//   route("profile", "routes/profile.tsx"),
// ] satisfies RouteConfig;





















