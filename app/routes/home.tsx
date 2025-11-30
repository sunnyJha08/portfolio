import type { Route } from "./+types/home";
import { TypographyH1 } from "~/components/ui/typography";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypographyH1 />
      {/* <p className="text-muted-foreground text-xl">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>
      <p className="leading-7 not-first:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </blockquote> */}
    </div>
  );
}
