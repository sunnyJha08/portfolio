import { GitFork, Radio } from "lucide-react";
import { Button } from "./button";
import { TypographyH3, TypographyP } from "./typography";

const projects = [
  {
    id: 1,
    name: "NotesBuddy",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
    imgSrc:
      "https://images.unsplash.com/photo-1764867147368-9f162d149840?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    alt: "Project One image",
    liveLink: "#",
    githubLink: "https://github.com/sunnyJha08",
  },
  {
    id: 2,
    name: "Appwrite MCP Server",
    description:
      "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate",
    imgSrc:
      "https://images.unsplash.com/photo-1764888802295-648490e594dd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    alt: "Project Two image",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    name: "Pasandida Aurat",
    description:
      "Innovative dating platform featuring anonymous questions and authentic connections - currently in development",
    imgSrc:
      "https://images.unsplash.com/photo-1764911866779-eb31067c0e5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    alt: "Project Three image",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    name: "Syncify",
    description:
      "Real-time music streaming platform with synchronized playback, live chat, and social listening features",
    imgSrc:
      "https://images.unsplash.com/photo-1764281518120-da4a5757f8af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Project Four image",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function ProjectCardsSection() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex h-120 flex-col overflow-hidden rounded-xl border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        >
          <div className="h-[55%]">
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="h-full w-full object-center"
            />
          </div>
          <div className="m-6 flex flex-col gap-4">
            <TypographyH3 value={project.name} />
            <TypographyP value={project.description} />
            <div className="flex gap-4">
              <a href={project.liveLink} target="_blank">
                <Button variant={"outline"} className="cursor-pointer">
                  <Radio />
                  Live Demo
                </Button>
              </a>
              <a href={project.githubLink} target="_blank">
                <Button className="cursor-pointer">
                  <GitFork />
                  Github
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
