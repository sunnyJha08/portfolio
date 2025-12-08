import {
  ReactLogo,
  AWS,
  Bash,
  Django,
  Docker,
  Express,
  FastAPI,
  Figma,
  Git,
  GitHub,
  Go,
  GraphQL,
  JavaScript,
  Jenkins,
  JSON,
  Kubernetes,
  Linux,
  Markdown,
  MongoDB,
  Nextjs,
  NGINX,
  Nodejs,
  OpenAPI,
  PostgresSQL,
  Python,
  Redis,
  SQLAlchemy,
  SQLite,
  SSH,
  Svelte,
  Swagger,
  TailwindCSS,
  Twitter,
  TypeScript,
  Ubuntu,
  Vercel,
  Vim,
  Vitejs,
} from "../../lib/technologies";

export default function LogosCloud() {
  const logos = [
    ReactLogo,
    AWS,
    Bash,
    Django,
    Docker,
    Express,
    FastAPI,
    Figma,
    Git,
    GitHub,
    Go,
    GraphQL,
    JavaScript,
    Jenkins,
    JSON,
    Kubernetes,
    Linux,
    Markdown,
    MongoDB,
    Nextjs,
    NGINX,
    Nodejs,
    OpenAPI,
    PostgresSQL,
    Python,
    Redis,
    SQLAlchemy,
    SQLite,
    SSH,
    Svelte,
    Swagger,
    TailwindCSS,
    Twitter,
    TypeScript,
    Ubuntu,
    Vercel,
    Vim,
    Vitejs,
  ];

  return (
    <div className="relative overflow-hidden bg-white py-5">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white to-transparent" />

      {/* Marquee */}
      <div className="marquee-animation flex" style={{ width: "max-content" }}>
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            className="mx-5 h-12 shrink-0"
            alt={`logo-${i}`}
          />
        ))}
      </div>
    </div>
  );
}
