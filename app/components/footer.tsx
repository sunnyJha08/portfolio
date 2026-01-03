import { TypographySmall } from "./ui/typography";

export default function Footer() {
  return (
    <footer className="intro mx-auto flex max-w-3xl items-center justify-center gap-1 py-10">
      <TypographySmall value="Design & Developed by" />
      <span className="text-muted-foreground text-sm">Sunny Jha</span>
    </footer>
  );
}
