import { NavLink } from "react-router";
import { ProfileImage } from "./ui/profileImage";
export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-screen max-w-3xl items-center justify-between p-4 shadow-sm backdrop-blur-sm">
      <NavLink to={"/"} aria-label="Home page link">
        <ProfileImage
          className={
            "size-12 rounded-sm shadow-md transition-all hover:scale-90"
          }
        />
      </NavLink>
      <nav className="flex items-center gap-4 text-xl font-medium tracking-tight">
        <NavLink
          to={"/blogs"}
          aria-label="Blogs page link"
          className={({ isActive }) =>
            isActive
              ? "text-muted-foreground"
              : "text-foreground hover:text-muted-foreground"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to={"/contact"}
          aria-label="Contact page link"
          className={({ isActive }) =>
            isActive
              ? "text-muted-foreground"
              : "text-foregound hover:text-muted-foreground"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
