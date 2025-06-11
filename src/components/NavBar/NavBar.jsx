import "./NavBar.css";
import logo from "../../assets/Logo.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "../SearchBar/SearchBar";
export default function NavBar() {
  const links = [{ name: "Home", path: "/" }, 
    {name : "About", path : "/about"},
    {name : "Contact Us", path : "/contact"},
    {name : "Blog", path : "/blog"}
  ];
  return (
    <header className="shadow p-4 border border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} />
        <SearchBar className="search rounded border shadow d-none d-md-flex justify-content-start align-items-center p-2 gap-2"/>
        <nav className="d-none d-md-flex justify-content-between align-items-center ">
          {links.map((el, index) => {
            return (
              <Link
                to={el.path}
                className="text-decoration-none link"
                key={index}
              >
                {el.name}
              </Link>
            );
          })}
        </nav>
        <div className="icons d-flex gap-4">
          <CiHeart className="fs-3 d-none d-md-flex" />
          <CiShoppingCart className="fs-3 d-none d-md-flex" />
          <CgProfile className="fs-3 d-none d-md-flex" />
        </div>
      <RxHamburgerMenu className="d-block d-md-none fs-3" />
      </div>
    </header>
  );
}
