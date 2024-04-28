import { useState } from "react";
import data from "../data.js";

function Item() {
  let [shoes] = useState(data);
  return shoes.map(function (items, i) {
    return (
      <div className="col-md-4" key={i}>
        <img
          src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
          style={{ width: "100%" }}
        />
        <h4>{items.title}</h4>
        <p>{items.content}</p>
      </div>
    );
  });
}

export default Item;
