import { TypographyH1 } from "~/components/ui/typography";
import { BlogsCardsContainer } from "../../components/blogsCards";
import type { Route } from "../+types/blogs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs | Sunny Jha" },
    {
      name: "description",
      content: "Technical blogs and articles written by me.",
    },
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
