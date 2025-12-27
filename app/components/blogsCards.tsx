import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./ui/typography";

interface BlogData {
  id: number;
  date: string;
  title: string;
  summary: string;
  readTime: string;
  blogLink: string;
}
interface BlogProps {
  card: BlogData;
}
const blogs: BlogData[] = [
  {
    id: 1,
    date: "2024-01-12",
    title: "Understanding Async Patterns in Modern JavaScript",
    summary:
      "A brief overview of async/await, promises, and concurrency patterns.",
    readTime: "6 min read",
    blogLink: "/blog/async-patterns",
  },
  {
    id: 2,
    date: "2024-01-20",
    title: "Why TypeScript Is Taking Over Frontend Development",
    summary:
      "Exploring the rise of TypeScript and its impact on frontend workflows.",
    readTime: "5 min read",
    blogLink: "/blog/typescript-growth",
  },
  {
    id: 3,
    date: "2024-02-03",
    title: "Optimizing React Apps for Performance",
    summary:
      "Techniques to reduce re-renders, optimize state, and improve runtime speed.",
    readTime: "8 min read",
    blogLink: "/blog/react-performance",
  },
  {
    id: 4,
    date: "2024-02-15",
    title: "A Beginner’s Guide to Docker for Developers",
    summary:
      "Learn the basics of containerization and how Docker fits into modern dev workflows.",
    readTime: "7 min read",
    blogLink: "/blog/docker-intro",
  },
  {
    id: 5,
    date: "2024-01-12",
    title: "Understanding Async Patterns in Modern JavaScript",
    summary:
      "A brief overview of async/await, promises, and concurrency patterns.",
    readTime: "6 min read",
    blogLink: "/blog/async-patterns",
  },
  {
    id: 6,
    date: "2024-02-03",
    title: "Optimizing React Apps for Performance",
    summary:
      "Techniques to reduce re-renders, optimize state, and improve runtime speed.",
    readTime: "8 min read",
    blogLink: "/blog/react-performance",
  },
];

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
