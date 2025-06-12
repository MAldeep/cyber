import { useState } from "react";
import iPhone11 from "../../assets/Iphone 14 pro 1.png";
import "./Cards.css";
export default function Cards() {
  const [phones] = useState([
    {
      brand: "Apple",
      name: "iPhone x",
      specs: "128G",
      color: "white",
      model: "MQ233",
      price: "200$",
    },
    {
      brand: "Apple",
      name: "iPhone 11",
      specs: "256G",
      color: "Black",
      model: "MQ233",
      price: "300$",
    },
    {
      brand: "Apple",
      name: "iPhone 12",
      specs: "128G",
      color: "white",
      model: "MQ233",
      price: "320$",
    },
    {
      brand: "Apple",
      name: "iPhone 13",
      specs: "512G",
      color: "Blue",
      model: "MQ233",
      price: "500$",
    },
    {
      brand: "Apple",
      name: "iPhone 16",
      specs: "512G",
      color: "Gold",
      model: "MQ233",
      price: "1000$",
    },
    {
      brand: "Apple",
      name: "iPhone 15",
      specs: "128G",
      color: "white",
      model: "MQ233",
      price: "800$",
    }
  ]);
  return (
    <div className="container d-flex flex-column gap-4 align-items-start justify-content-start">
      <h5 className="px-4">
        Available Products: <span>85</span>
      </h5>
      <div className="cards d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 flex-wrap">
        {phones.map((el, index) => (
          <div className="card rounded p-4 border border-0 shadow col-12 col-md-4"  key={index}>
            <img src={iPhone11} />
            <p>
              {el.brand} {el.name} {el.specs} {el.color} {el.model}
            </p>
            <p>{el.price}</p>
            <button className="btn btn-dark col-12">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
