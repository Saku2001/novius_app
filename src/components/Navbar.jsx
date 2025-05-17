import "../App.css";
import logo from "../assets/logoNovius.PNG";

export default function Navbar() {
  return (
    <>
      <nav className="h-[100px] bg-black text-white flex justify-center items-center">
        <div>
          <img src={logo} alt="Logo" className="h-[73px] w-[256px]" />
        </div>
      </nav>
      <div className="bg-primary">
        <ul className="h-[85px] flex justify-center items-center gap-[75px] text-[24px] text-secondary">
          <li>
            <a href="#" className="hover:text-white">
              write
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              about
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              published
            </a>
          </li>
        </ul>

        {/* Border with horizontal padding */}
        <div className="px-[173px]">
          <div className="border-b-2 border-secondary w-full"></div>
        </div>
      </div>
    </>
  );
}
