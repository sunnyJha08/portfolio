import { Globe } from "lucide-react";
import { Button } from "./button";
import {
  ReactLogo,
  AWS,
  Bash,
  Django,
  Docker,
  Express,
  FastAPI,
  Figma,
  Git,
  GitHub,
  Go,
  GraphQL,
  JavaScript,
  Jenkins,
  JSON,
  Kubernetes,
  LinkedIn,
  Linux,
  Markdown,
  MongoDB,
  Nextjs,
  NGINX,
  Nodejs,
  OpenAPI,
  PostgresSQL,
  Python,
  Redis,
  SQLAlchemy,
  SQLite,
  SSH,
  Svelte,
  Swagger,
  TailwindCSS,
  Twitter,
  TypeScript,
  Ubuntu,
  Vercel,
  Vim,
  Vitejs,
} from "../../lib/technologies";
import { TypographyH3, TypographyP } from "./typography";
interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  logoUrls: string[]; //0 <= Array of logo's should be<=8
}
interface CardProps {
  card: CardData;
}

const projects: CardData[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1764867147368-9f162d149840?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "NotesBuddy",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools.",
    liveLink: "#",
    githubLink: "https://github.com/sunnyJha08",
    logoUrls: [
      ReactLogo,
      AWS,
      Bash,
      Django,
      Docker,
      Express,
      FastAPI,
      Figma,
      Git,
      GitHub,
      Go,
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1764888802295-648490e594dd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    title: "Appwrite MCP Server",
    description:
      "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate.",
    liveLink: "#",
    githubLink: "#",
    logoUrls: [
      GraphQL,
      JavaScript,
      Jenkins,
      JSON,
      Kubernetes,
      LinkedIn,
      Linux,
      Markdown,
      MongoDB,
      Nextjs,
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1764911866779-eb31067c0e5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Pasandida Aurat",
    description:
      "Innovative dating platform featuring anonymous questions and authentic connections - currently in development.",
    liveLink: "#",
    githubLink: "#",
    logoUrls: [
      NGINX,
      Nodejs,
      OpenAPI,
      PostgresSQL,
      Python,
      Redis,
      SQLAlchemy,
      SQLite,
      SSH,
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1764281518120-da4a5757f8af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    title: "Syncify",
    description:
      "Real-time music streaming platform with synchronized playback, live chat, and social listening features.",
    liveLink: "#",
    githubLink: "#",
    logoUrls: [
      Swagger,
      TailwindCSS,
      Twitter,
      TypeScript,
      Ubuntu,
      Vercel,
      Vim,
      Vitejs,
    ],
  },
];

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-xl">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <TypographyH3 value={card.title} className="" />
        <TypographyP value={card.description} />
      </div>
      <div className="my-5 mt-auto flex flex-wrap gap-2 overflow-hidden px-4">
        {card.logoUrls.map((logoUrl, index) => (
          <img
            key={index}
            src={logoUrl}
            alt={`Logo ${index + 1}`}
            className="size-5 rounded-full object-cover sm:size-7"
          />
        ))}
      </div>
      <div className="flex justify-end gap-4 px-4 pb-4">
        <Button
          variant={"outline"}
          onClick={() => window.open(card.liveLink, "_blank")}
          className="cursor-pointer"
        >
          <Globe className="text-green-400" />
          Live Demo
        </Button>
        <Button
          variant={"outline"}
          onClick={() => window.open(card.githubLink, "_blank")}
          className="cursor-pointer text-black"
        >
          <img src={GitHub} alt="Github" className="size-5 text-black" />
        </Button>
      </div>
    </div>
  );
};

export const ProjectCards: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 overflow-x-hidden">
        {projects.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
