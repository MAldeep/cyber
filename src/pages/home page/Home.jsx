import Cards from "../../components/Cards/Cards";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-5">
      <NavBar />
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-4">
        <Filter />
        <Cards/>
      </div>
      <Footer/>
    </div>
  );
}
