import './App.css';

function App() {

  return (
    <div className="Parent-box">
      <ProductPhoto/>
      <ProductInfo category="Canvas Shoes" title="Chuck" price="1300000" info="One of the most recognizable shoes in the world."/>
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

function ProductInfo(props) {
  const { category, title, price, info } = props;

  return (
    <div>
      <div className="Description">
        <p className="Category">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">
          {info}
        </p>
        <a onClick={AddToCart} href="#">Add to Cart</a>
      </div>
    </div>
  )
}

function AddToCart(props) {
  console.log("Adding product to cart...");
}

export default App;
