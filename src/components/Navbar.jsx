import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-11 shadow-lg">
      <div>
        <div className="m-2 h-16 w-16">
          <img src="logo.jpg" alt="Logo" />
        </div>
      </div>
      <ul className="flex cursor-pointer list-none gap-3 p-3 text-xl text-slate-100">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Navbar;
