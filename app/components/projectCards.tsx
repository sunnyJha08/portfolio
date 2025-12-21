import { CodeXml, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { TypographyH3, TypographyP } from "./ui/typography";
import Badge from "./ui/badge";
interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  badges: string[]; //0 <= Array of logo's
}
interface CardProps {
  card: CardData;
}

const projects: CardData[] = [
  {
    id: 1,
    imageUrl: "/projectImages/screenshot-2025-11-13_20-24-47.png",
    title: "NotesBuddy",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools.",
    liveLink: "#",
    githubLink: "https://github.com/sunnyJha08",
    badges: [
      "ReactLogo",
      "AWS",
      "Bash",
      "Django",
      "Docker",
      "Express",
      "FastAPI",
      "Figma",
      "Git",
      "GitHub",
      "Go",
    ],
  },
  {
    id: 2,
    imageUrl: "/projectImages/screenshot-2025-11-13_20-25-17.png",
    title: "Appwrite MCP Server",
    description:
      "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate.",
    liveLink: "#",
    githubLink: "#",
    badges: [
      "GraphQL",
      "JavaScript",
      "Jenkins",
      "JSON",
      "Kubernetes",
      "Markdown",
      "MongoDB",
      "Nextjs",
    ],
  },
  {
    id: 3,
    imageUrl: "/projectImages/screenshot-2025-11-13_20-25-50.png",
    title: "Pasandida Aurat",
    description:
      "Innovative dating platform featuring anonymous questions and authentic connections - currently in development.",
    liveLink: "#",
    githubLink: "#",
    badges: [
      "NGINX",
      "Nodejs",
      "OpenAPI",
      "PostgresSQL",
      "Python",
      "Redis",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  {
    id: 4,
    imageUrl: "/projectImages/screenshot-2025-11-13_20-26-03.png",
    title: "Syncify",
    description:
      "Real-time music streaming platform with synchronized playback, live chat, and social listening features.",
    liveLink: "#",
    githubLink: "#",
    badges: [
      "Swagger",
      "TailwindCSS",
      "Twitter",
      "TypeScript",
      "Ubuntu",
      "Vercel",
      "Vim",
      "Vitejs",
    ],
  },
];

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="border-border bg-card flex h-full flex-col overflow-hidden rounded-lg shadow-sm transition duration-300 hover:shadow-xl">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <TypographyH3 value={card.title} className="text-card-foreground" />
        <TypographyP value={card.description} />
      </div>
      <div className="my-5 mt-auto flex flex-wrap gap-2 overflow-hidden px-4">
        {card.badges.map((badge, index) => (
          <Badge key={index} value={badge} />
        ))}
      </div>

      {/* Live links */}
      <div className="flex justify-end gap-4 px-4 pb-4">
        <Button
          aria-label="Live demo button"
          variant={"outline"}
          onClick={() => window.open(card.liveLink, "_blank")}
          className="cursor-pointer"
        >
          <Globe className="text-card-foreground" />
          Live Demo
        </Button>
        <Button
          aria-label="Source code button"
          variant={"outline"}
          onClick={() => window.open(card.githubLink, "_blank")}
          className="cursor-pointer"
        >
          <CodeXml />
        </Button>
      </div>
    </div>
  );
};

export const ProjectCardsContainer: React.FC = () => {
  return (
    <div className="my-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 overflow-x-hidden">
      {projects.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
