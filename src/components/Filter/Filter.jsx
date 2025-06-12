import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SearchBar from "../SearchBar/SearchBar";
import "./Filter.css"

export default function Filter() {
  const categories = ["smartphones", "laptops", "skincare", "sunglasses"];
  return (
    <div className="filter accordion border border-0 col-12 col-md-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h5>Categories</h5>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-column gap-2">
            <SearchBar className="w-100 search rounded border d-flex justify-content-start align-items-center p-2 gap-2"/>
            {categories.map((el, index) => (
              <div className="item d-flex align-items-center gap-2" key={index}>
                <input type="checkbox" className="check"/>
                <p>{el}</p>
              </div>
            ))}
            <button className="col-12 btn btn-dark rounded shadow border border-0">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
