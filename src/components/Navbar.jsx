import "../App.css";
import logo from "../assets/logoNovius.PNG";

export default function Navbar() {
  return (
    <nav className="h-[60px] bg-black text-white flex items-center justify-between px-5">
      <div className="logo">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
