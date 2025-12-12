import { TypographySmall } from "./ui/typography";

export default function Footer() {
  return (
    <footer className="mx-auto mt-15 mb-10 flex max-w-3xl items-center justify-center gap-1">
      <TypographySmall value="Design & Developed by" />
      <span className="text-muted-foreground text-sm">Sunny Jha</span>
    </footer>
  );
}
