import React from "react";
//배열 방식으로 처리
function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]}  ${attr[3]}`}>
      <h2 className="blind">Food & Drink</h2>
      <div className={`imgText__inner ${attr[2]} ${attr[1]}`}>
        <div className="imgText__txt">
          <span>Food & Drink</span>
          <h3>Did you know..?</h3>
          <p>
            Visit Idaho and discover exquisite dining experiences, award-winning
            wineries and incredible craft beers.
          </p>
          <ul>
            <li>
              Idaho leads the nation in potato production producing nearly ⅓of
              all U.S. potatoes.
            </li>
            <li>
              Huckleberries, Idaho’s state fruit, can be found in a wide variety
              of delicacies across the state from pies to ice cream to vodka.
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">Boise Fry Company</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            Idaho Breweries
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
