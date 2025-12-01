import ProfileImage from "~/components/ui/profileImage";
import type { Route } from "./+types/home";
import { TypographyH1, TypographyLead } from "~/components/ui/typography";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <ProfileImage className="mb-5 size-24 rounded-full" />
      <TypographyH1 />
      <TypographyLead />
    </>
  );
}
