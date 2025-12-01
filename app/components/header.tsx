import { NavLink } from "react-router";
import ProfileImage from "./ui/profileImage";
export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-screen max-w-3xl items-center justify-between p-4 shadow-md backdrop-blur-sm">
      <NavLink to={"/"}>
        <ProfileImage
          className={
            "size-12 rounded-sm border shadow-xl transition-all hover:scale-90"
          }
        />
      </NavLink>
      <nav className="flex items-center gap-4 text-xl font-medium tracking-tight dark:text-white">
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive
              ? "text-neutral-400"
              : "text-black hover:underline dark:text-white"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-neutral-400"
              : "text-black hover:underline dark:text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
