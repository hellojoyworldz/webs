import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams(); // url 파라미터 정보 남는다
  let item = props.shoes.find((v) => v.id == id);
  let [ea, eaSet] = useState(0);
  useEffect(() => {
    if (isNaN(ea)) {
      alert("문자를 입력할 수 없습니다");
    }
  }, [ea]);
  return item.id == null ? (
    <div>상품이 존재하지 않습니다</div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (item.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => {
              e.stopPropagation();
              eaSet(e.target.value);
            }}
          />
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
