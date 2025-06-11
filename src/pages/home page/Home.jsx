import Filter from "../../components/Filter/Filter";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-5">
      <NavBar/>
      <div className="container">
        <Filter className="accordion col-3 border border-0" />
      </div>
    </div>
  )
}
