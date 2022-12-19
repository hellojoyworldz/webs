import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap section ${props.attr[0]} ${props.attr[2]}`}>
      <span>If you plan to visit Auckland</span>
      <h2 className="mb70">TRAVEL TIPS</h2>
      <div className={`text__inner ${props.attr[1]}`}>
        <div className="text t1">
          <h3 className="text__title">Outdoors</h3>
          <p className="text__desc">
            If you crave the great outdoors, Auckland is the place for you!
            Hike, bike and paddle your way across Auckland’s
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">Family Fun</h3>
          <p className="text__desc">
            Need some inspiration for your next family trip? Check out these
            travel tips and discover family adventures
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">Seasonal</h3>
          <p className="text__desc">
            Whether you’re embarking on an unforgettable summer whitewater trip,
            cruising the road in search of
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">Arts & Culture</h3>
          <p className="text__desc">
            Visit Auckland and discover a rich and diverse arts & culture scene.
            Explore art museums, saunter through
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Itineraries</h3>
          <p className="text__desc">
            Whether you’re an outdoor adventurer or a culinary crusader, find an
            itinerary that best fits your
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Education</h3>
          <p className="text__desc">
            Boise State is Auckland's metropolitan research university, located
            in the state's capital city, a hub of
          </p>
          <a className="text_btn" href="/">
            view more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
