import './App.css';

function App() {

  return (
    <div className="Parent-box">
      <ProductPhoto/>
      <ProductInfo category="Canvas Shoes" title="Chuck" price="1300000" info="One of the most recognizable shoes in the world." isDiscount="yes"/>
    </div>
  );
}

function ProductPhoto() {

  return (
    <div className="Photo">
      <img src="logo192.png"></img>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;

  if (isDiscount == "yes") {
    return (
      <p>30% Discount</p>
    );
  } else if (isDiscount == "coming") {
    return (
      <p>No Discount yet..</p>
    );
  } else {
    return (
      <p>No Discount</p>
    );
  }
}

function ProductInfo(props) {
  const { category, title, price, info, isDiscount } = props;
  const benefits = ["waterproof", "limited edition", "well known"];
  const listBenefits = benefits.map((benefit) =>
    <li>{benefit}</li>
  );

  return (
    <div>
      <div className="Description">
        <p className="Category">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="Info">
          {info}
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => AddToCart(title, price, e)} href="#">Add to Cart</a>
      </div>
    </div>
  )
}

function AddToCart(title, price, e) {
  console.log("Adding product to cart..." + title + " " + price);
}

export default App;
