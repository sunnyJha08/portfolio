import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <button>Click me</button>
      <h1 className="text-5xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        voluptatem, error necessitatibus sed a officiis ipsa natus! Ab
        reiciendis aut neque magni ipsum repudiandae quas, aliquid, velit
        tempore placeat eius.
      </h1>
    </div>
  );
}
