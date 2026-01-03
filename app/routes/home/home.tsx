import { ProfileImage } from "~/components/ui/profileImage";
import type { Route } from "./+types/home";
import {
  TypographyH1WithSpan,
  TypographyH2,
  TypographyLead,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { ChevronDown, FileUser, Send } from "lucide-react";
import { Link } from "react-router";
import { ProjectCardsContainer } from "~/components/projectCards";
import { BlogsCardsContainer } from "~/routes/blogs/blogs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ModeToggle } from "~/components/mode-toggle";
("~/components/theme-provider");

export const meta = ({}: Route.MetaArgs) => [
  { title: "Sunny Jha - Portfolio" },
  {
    name: "description",
    content: "Projects, blogs, and contact information.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="blockFadeInOut relative w-fit">
        <ProfileImage className="mb-6 size-24 rounded-full border border-black/20 p-0.5 dark:border-white/20" />
        <ModeToggle />
      </div>
      <TypographyH1WithSpan
        value="Sunny Jha:- "
        className="text-foreground mb-3"
        spanValue="A Full Stack developer."
      />
      <TypographyLead
        value="I build interactive web apps using Typescript, React, Next.js, Bun and PostgreSQL. With a focus on UI design. Enthusiastic about Three.js, driven by a keen eye for design."
        className="mb-3"
      />

      {/* Resume and contact page navigating button  */}
      <section className="flex gap-4">
        <Link
          to={
            "https://docs.google.com/document/d/1pKFNbJ28OiDXfHsG8rIfnGwz1360jPJ_RCnpRStaLL8/edit?usp=sharing"
          }
        >
          <Button
            variant={"outline"}
            className="cursor-pointer"
            aria-label="Resume button"
          >
            <FileUser />
            Resume / CV
          </Button>
        </Link>
        <Link to={"/contact"} aria-label="Contact page link">
          <Button className="cursor-pointer" aria-label="Contact button">
            <Send />
            Get in touch
          </Button>
        </Link>
      </section>

      {/* Projects Section */}
      <TypographyH2 value="Featured Projects" className="text-primary mt-10" />
      <ProjectCardsContainer />

      {/* Blogs Section  */}
      <TypographyH2
        value="Technical Writtings"
        className="text-primary mt-10"
      />
      <BlogsCardsContainer limit={4} />

      {/* A link to the Blogs Route */}
      <Link
        to={"/blogs"}
        aria-label="Blogs page link"
        className="mt-4 flex items-center justify-center gap-1"
      >
        <Button variant={"ghost"} className="cursor-pointer">
          See All Blogs
          <ChevronDown />
        </Button>
      </Link>
      <TypographyH2
        value="Frequently asked questions"
        className="text-primary mt-10"
      />

      {/* FAQ's section within Accordion component  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this component used for?</AccordionTrigger>
          <AccordionContent>
            It provides a collapsible interface for organizing content.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It follows the WAI-ARIA design guidelines.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize its style?</AccordionTrigger>
          <AccordionContent>
            Yes. You can style it using your preferred CSS or utility classes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Does it support animations?</AccordionTrigger>
          <AccordionContent>
            Yes. It supports smooth open and close transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
