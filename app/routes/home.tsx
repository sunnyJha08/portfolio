import ProfileImage from "~/components/ui/profileImage";
import type { Route } from "./+types/home";
import {
  TypographyH1WithSpan,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographySmall,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { ArrowDown, FileUser, Send } from "lucide-react";
import { Link } from "react-router";
import { ProjectCards } from "~/components/projectCards";
import LogoClouds from "~/components/ui/logosCloud";
import AboutMe from "~/components/ui/aboutMe";
import { BlogsCards } from "~/components/blogsCards";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sunny Jha | A Full Stack Developer" },
    { name: "description", content: "Welcome to Portfolio Website" },
  ];
}

export default function Home() {
  return (
    <>
      <ProfileImage className="mt-15 mb-6 size-24 rounded-full" />
      <TypographyH1WithSpan
        value="Sunny Jha:- "
        className="mb-3"
        spanValue="A Full Stack developer."
      />
      <TypographyLead
        value="I build interactive web apps using Typescript, React, Next.js, Bun and PostgreSQL. With a focus on UI design. Enthusiastic about Three.js, driven by a keen eye for design."
        className="mb-3"
      />
      <section className="flex gap-4">
        <Link to={"#"} target="_blank">
          <Button variant={"outline"} className="cursor-pointer">
            <FileUser />
            Resume / CV
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button className="cursor-pointer">
            <Send />
            Get in touch
          </Button>
        </Link>
      </section>
      <TypographyH2 value="Featured Projects" />
      <ProjectCards />

      <TypographyH2 value="Technical Writtings" />
      <BlogsCards />
      <Link
        to={"/blogs"}
        className="mt-4 flex items-center justify-center gap-1"
      >
        <Button variant={"ghost"} className="cursor-pointer">
          See All Blogs
          <ArrowDown />
        </Button>
      </Link>
    </>
  );
}
