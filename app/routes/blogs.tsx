import { TypographyH1 } from "~/components/ui/typography";
import { BlogsCardsContainer } from "../components/blogsCards";
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
      <TypographyH1 value="Blogs" />
      <BlogsCardsContainer />
    </div>
  );
}
