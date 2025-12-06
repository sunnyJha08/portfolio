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
  ];

  return (
    <div className="relative overflow-hidden bg-white py-10">
      {/* gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-l from-transparent to-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-r from-transparent to-white"></div>

      {/* outer wrapper */}
      <div className="flex whitespace-nowrap">
        {/* Animated row */}
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {logos.map((src, i) => (
            <img key={i} src={src} className="mx-10 h-[50px]" />
          ))}

          {/* Repeat once for seamless loop */}
          {logos.map((src, i) => (
            <img key={`d-${i}`} src={src} className="mx-10 h-[50px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
