import type { Route } from "./+types/blogs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sunny Jha | Blogs" },
    { name: "description", content: "Welcome to Portfolio Website" },
  ];
}

export default function Blogs() {
  return (
    <div>
      <h1 className="text-5xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse deleniti
        ipsum aperiam tenetur fuga labore vero, eum, alias nostrum, sint impedit
        fugiat optio cumque? Reprehenderit unde non nisi velit assumenda.
      </h1>
    </div>
  );
}
