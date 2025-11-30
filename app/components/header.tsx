import { NavLink } from "react-router";
import pp from "../assets/images/profilePic.jpg";
export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-screen max-w-3xl items-center justify-between p-4 shadow-md backdrop-blur-sm">
      <NavLink to={"/"}>
        <img
          src={pp}
          alt="Logo"
          className="size-12 rounded-sm border border-neutral-400 object-cover shadow-xl transition-all hover:scale-90"
          loading="lazy"
        />
      </NavLink>
      <nav className="flex items-center gap-4 text-xl font-medium tracking-tight text-neutral-400">
        <NavLink to={"/blogs"} className={"hover:underline"}>
          Blogs
        </NavLink>
        <NavLink to={"/contact"} className={"hover:underline"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
