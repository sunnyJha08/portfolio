import {
  TypographyH1,
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "~/components/ui/typography";
import type { Route } from "./+types/blogs";
import blogs from "./blogsMetaData.json";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs | Sunny Jha" },
    {
      name: "description",
      content: "Technical blogs and articles written by me.",
    },
  ];
}

// Blog data type for blog cards component
type BlogData = {
  id: number;
  date: string;
  title: string;
  summary: string;
  readTime: string;
  blogLink: string;
};
interface BlogProps {
  card: BlogData;
}

export const BlogCard: React.FC<BlogProps> = ({ card }) => {
  return (
    <div className="bg-card border-border flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg p-4 shadow-sm transition duration-300 hover:shadow-xl">
      <TypographyMuted value={card.date} />
      <TypographyH4 value={card.title} className="text-card-foreground" />
      <TypographyP value={card.summary} className="mb-2" />
      <div className="flex-en mt-auto flex items-center justify-between">
        <TypographySmall value={card.readTime} />

        <a
          href={card.blogLink}
          target="_blank"
          aria-label={card.title}
          className="cursor-pointer hover:underline"
        >
          <TypographySmall value="Learn more" />
        </a>
      </div>
    </div>
  );
};

export const BlogsCardsContainer: React.FC<{ limit?: number }> = ({
  limit,
}) => {
  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;
  return (
    <div className="my-4 flex flex-col gap-6">
      {visibleBlogs.map((card) => (
        <BlogCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default function Blogs() {
  return (
    <div>
      <TypographyH1 value="Heading for Blogs route" />
      <BlogsCardsContainer />
    </div>
  );
}
