import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

export default function SearchBar({className}) {
  return (
    <div className={className}>
      <CiSearch className="fs-4" />
      <input type="search" className="border border-0" placeholder="Search" />
    </div>
  );
}
