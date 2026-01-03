import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";

export const meta = () => [
  { title: "Your Name — Full-Stack Developer" },
  {
    name: "description",
    content:
      "Full-stack developer building scalable web applications with React, serverless, and modern tooling.",
  },
];

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: "profilePic.avif",
    as: "image",
  },
  {
    rel: "preload",
    href: "projectImages/premium_photo-1661698763470-55da05629e50.avif",
    as: "image",
  },
  { rel: "preconnect", href: "/fonts/InterVariable.woff2", as: "style" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="relative mx-auto max-w-3xl px-8 py-16">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
