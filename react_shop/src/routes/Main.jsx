import { React, useEffect, useState } from "react";
import data from "../data";
import Item from "../components/Item";
import bg from "../img/bg.png";

const Main = () => {
  let [shoes] = useState(data);

  let [alert, setAlert] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <>
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}></div>
      <div className="row">
        <Item></Item>;
      </div>
    </>
  );
};

export default Main;
