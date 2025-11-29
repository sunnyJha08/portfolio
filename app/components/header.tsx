import { NavLink } from "react-router";
import pp from "../assets/images/profilePic.jpg";
export default function Header() {
  return (
    <header className="max-w-3xl flex mx-auto items-center justify-between p-4 backdrop-blur-md bg-white/30 sticky top-0 z-10 rounded-full shadow-md">
      <NavLink to={"/"}>
        <img
          src={pp}
          alt="Logo"
          className="size-12 hover:scale-90 rounded-full object-cover shadow-md"
        />
      </NavLink>
      <nav className="flex gap-4">
        <NavLink to={"/blogs"}>Blogs</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
}
