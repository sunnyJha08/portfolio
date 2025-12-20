import { Button } from "./ui/button";
import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./ui/typography";

interface BlogData {
  id: number;
  imageUrl: string;
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
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "2024-01-12",
    title: "Understanding Async Patterns in Modern JavaScript",
    summary:
      "A brief overview of async/await, promises, and concurrency patterns.",
    readTime: "6 min read",
    blogLink: "/blog/async-patterns",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "2024-01-20",
    title: "Why TypeScript Is Taking Over Frontend Development",
    summary:
      "Exploring the rise of TypeScript and its impact on frontend workflows.",
    readTime: "5 min read",
    blogLink: "/blog/typescript-growth",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "2024-02-03",
    title: "Optimizing React Apps for Performance",
    summary:
      "Techniques to reduce re-renders, optimize state, and improve runtime speed.",
    readTime: "8 min read",
    blogLink: "/blog/react-performance",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "2024-02-15",
    title: "A Beginner’s Guide to Docker for Developers",
    summary:
      "Learn the basics of containerization and how Docker fits into modern dev workflows.",
    readTime: "7 min read",
    blogLink: "/blog/docker-intro",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "2024-01-12",
    title: "Understanding Async Patterns in Modern JavaScript",
    summary:
      "A brief overview of async/await, promises, and concurrency patterns.",
    readTime: "6 min read",
    blogLink: "/blog/async-patterns",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
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
    <div className="bg-card border-border flex h-full flex-col gap-2 overflow-hidden rounded-lg p-4 shadow-sm transition duration-300 hover:shadow-xl">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="h-48 w-full rounded-sm object-cover"
      />
      <TypographyMuted value={card.date} />
      <TypographyH4 value={card.title} className="text-card-foreground" />
      <TypographyP value={card.summary} />
      <div className="mt-auto flex items-center justify-between">
        <TypographySmall value={card.readTime} />

        <Button
          variant={"link"}
          onClick={() => window.open(card.blogLink, "_blank")}
          className="cursor-pointer pr-0"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export const BlogsCardsContainer: React.FC<{ limit?: number }> = ({
  limit,
}) => {
  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;
  return (
    <div className="my-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 overflow-x-hidden">
      {visibleBlogs.map((card) => (
        <BlogCard key={card.id} card={card} />
      ))}
    </div>
  );
};
