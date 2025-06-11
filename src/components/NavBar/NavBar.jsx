import "./NavBar.css";
import logo from "../../assets/Logo.png";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function NavBar() {
  const links = ["Home", "About", "Contact Us", "Blog"];
  return (
    <header className="shadow p-4 border border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} />
        <div className="search rounded border shadow d-flex justify-content-start align-items-center p-2 gap-2">
          <CiSearch className="fs-4" />
          <input
            type="search"
            className="border border-0"
            placeholder="Search"
          />
        </div>
        <nav className="d-flex justify-content-between align-items-center">
          {links.map((el, index) => {
            return (
              <Link to="/" className="text-decoration-none link" key={index}>
                {el}
              </Link>
            );
          })}
        </nav>
        <div className="icons d-flex gap-4">
          <CiHeart className="fs-3" />
          <CiShoppingCart className="fs-3" />
          <CgProfile className="fs-3" />
        </div>
      </div>
    </header>
  );
}
