import './App.css';

function App() {

  return (
    <div className="Parent-box">
      <ProductPhoto/>
      <ProductInfo category="Canvas Shoes" title="Chuck" price="1300000" info="One of the most recognizable shoes in the world." isDiscount="yes"/>

      <ProductReviews/>
    </div>
  );
}

function ProductReviews() {
  const reviews = [
    {
      "id": 1,
      "name": "Asep Jaelani",
      "review": "Cheap but a top-notch quality",
      "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 2,
      "name": "Jajang Maulana",
      "review": "Great Product",
      "photo": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 3,
      "name": "Maman Jawa",
      "review": "Delivery kinda late",
      "photo": "https://images.pexels.com/photos/2099225/pexels-photo-2099225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ];

  const listReviews = reviews.map((item) =>
    <div className="Item" key={item.id}>
      <img src={item.photo}/>
      <div className="User">
        <h3>{item.name}</h3>
        <p>{item.review}</p>
      </div>
    </div>
  );

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
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
