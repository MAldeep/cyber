import "./Footer.css";
import logo from "../../assets/Logo.png";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const services = [
    "Bonus Program",
    "Gift Cards",
    "Credit and Payment",
    "Service contracts",
    "Non-cash account",
    "Payment",
  ];
  const assistance = [
    "Find an order",
    "Terms of delivery",
    "Exchange an return of goods",
    "Gurantee",
    "FAQs",
    "Terms of use",
  ];
  return (
    <footer>
      <div className="lists d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 gap-md-2">
        <div className="left">
          <img src={logo} className="mb-4" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="center d-flex flex-column gap-3">
          <h6>Services</h6>
          {services.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <div className="right d-flex flex-column gap-3">
          <h6>Assistance to The buyer</h6>
          {assistance.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      </div>
      <div className="icons d-flex gap-4 mt-5 text-white">
        <FaTwitter />
        <FaFacebookF />
        <FaTiktok />
        <FaInstagram />
      </div>
    </footer>
  );
}
