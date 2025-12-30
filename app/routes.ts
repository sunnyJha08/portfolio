import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("contact", "routes/contact/contact.tsx"),
  route("blogs", "routes/blogs/blogs.tsx"),
] satisfies RouteConfig;
