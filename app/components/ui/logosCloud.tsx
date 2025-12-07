import {
  ReactLogo,
  AWS,
  Django,
  FastAPI,
  Figma,
  Github,
  GoLang,
  Javascript,
  NextJs,
  PostgreSQL,
  Python,
  Svelte,
  TailwindCSS,
  ViteJs,
  Typescript,
} from "../../assets/logos/technologies/technologies";

export default function LogosCloud() {
  const logos = [
    GoLang,
    ReactLogo,
    NextJs,
    AWS,
    Python,
    Javascript,
    Figma,
    TailwindCSS,
    Svelte,
    PostgreSQL,
    Github,
    FastAPI,
    Django,
    ViteJs,
    Typescript,
  ];

  return (
    <div className="relative overflow-hidden bg-white py-8">
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
