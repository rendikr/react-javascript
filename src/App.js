import './App.css';

function App() {

  const category = "Canvas Shoes";
  const title = "Chuck"
  const price = 1300000;
  const info = "One of the most recognizable shoes in the world."

  return (
    <div className="Parent-box">
      <div className="Photo">
        <img src="logo192.png"></img>
      </div>
      <div className="Description">
        <p className="Category">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">
          {info}
        </p>
      </div>
    </div>
  );
}

export default App;
