import { CodeXml, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { TypographyH3, TypographyP } from "./ui/typography";
import Badge from "./ui/badge";
import projects from "~/routes/home/projectsMetaData.json";

//Projects data type for project cards component.
type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  badges: string[]; //0 <= Array of logo's
};
interface CardProps {
  card: CardData;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="border-border bg-card flex h-full flex-col overflow-hidden rounded-lg shadow-sm transition duration-300 hover:shadow-xl">
      <img
        src={card.imageUrl}
        alt={card.title}
        loading="lazy"
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
