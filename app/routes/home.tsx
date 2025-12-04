import ProfileImage from "~/components/ui/profileImage";
import type { Route } from "./+types/home";
import {
  TypographyH1,
  TypographyH1WithSpan,
  TypographyLead,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { FileUser, Send } from "lucide-react";
import { Link } from "react-router";
import Example from "~/components/ui/example";
import LogoClouds from "~/components/ui/logoClouds";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
      <LogoClouds />
      <Example />
    </>
  );
}
