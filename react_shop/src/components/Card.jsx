function Card(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
  );
}

export default Card;
