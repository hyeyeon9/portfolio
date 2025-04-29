import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-center gap-10 py-4">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
        >
          About me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
        >
          Project
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
