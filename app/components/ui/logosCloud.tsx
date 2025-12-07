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
    // marquee-wrap is the hover target that will pause the animation
    <div className="marquee-wrap relative overflow-hidden bg-white py-8">
      {/* left/right gradient masks (adjust colors to match your background) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20" />

      {/* the animated element. duplicate logos once inline for seamless loop */}
      <div className="marquee">
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} className="marquee-img" alt={`logo-${i}`} />
        ))}
      </div>
    </div>
  );
}
