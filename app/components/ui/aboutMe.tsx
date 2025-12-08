import ProfileImage from "./profileImage";
import { TypographyH3, TypographyLarge } from "./typography";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <ProfileImage className="max-size mt-4 h-auto max-w-50 grow rounded-sm shadow-md" />
      <div className="my-auto flex flex-col gap-3 md:mx-auto md:text-center">
        <TypographyH3 value="Sunny Jha" />
        <TypographyLarge
          value="I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's."
          className="text-muted-foreground"
        />
      </div>
    </div>
  );
}
