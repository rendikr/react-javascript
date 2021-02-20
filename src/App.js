import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged = "Rendi K.";
  const userLoggedJSX = <strong>Rendi K.</strong>;

  return (
    <div className="App">
      {userLogged}
      {userLoggedJSX}
    </div>
  );
}

export default App;
