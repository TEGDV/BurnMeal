import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./logo.png";
import "./index.css";
function App() {
  function toggleMenu() {
    let menu = document.getElementById("BurgerMenu");
    let button = document.getElementById("MenuButton");
    if (button.textContent === "X") {
      menu.style.display = "none";
      button.textContent = "--";
    } else {
      menu.style.display = "flex";
      button.textContent = "X";
    }
  }
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">
            <img src={Logo} alt="BurnMeal Logo" />
            <h3>BurnMeal</h3>
          </div>
          <ul id="BurgerMenu">
            <li>
              <Link onClick={toggleMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/about">
                Meals
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/users">
                Profile
              </Link>
            </li>
          </ul>
          <span id="MenuButton" onClick={toggleMenu}>
            --
          </span>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div className="container_meals">
              <Meals title="Comidas" img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"/>
              <Meals title="Cenas" img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"/>
              <Meals title="Colaciones" img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"/>
              <Meals title="Postres" img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"/>
            </div>
          </Route>
          <Route path="/users">
            <div className="container">
              <UserProfile />
            </div>
          </Route>
          <Route path="/">
            <div className="container">
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="card">
      <div className="information">
        <h3>Dieta basada en calorias</h3>
        <p>NaN</p>
        <div className="item">
          <span>Peso actual(Kg):</span>
          <p>NaN</p>
        </div>
        <div className="item">
          <span>Litros de agua(L/Dia):</span>
          <p>NaN</p>
        </div>
        <div className="item">
          <span>Perdida Semanal aprox(g):</span>
          <p>NaN</p>
        </div>
      </div>
      <div className="nutrientes">
        <h3>Macronutrientes</h3>
        <div className="shepere">
          Grasa <br /> NaN
        </div>
        <div className="shepere">
          Carbohidratos <br />
          NaN
        </div>
        <div className="shepere">
          Proteninas <br />
          NaN
        </div>
      </div>
    </div>
  );
}

function Meals({ title, img_url }) {
  return (
    <div className="card2" style={{backgroundImage: `url(${img_url})`}}>
      <h3 className="title" >{title}</h3>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="card">
      <p lassName="name">Jair Aguilar</p>
      <p>Edad: 23</p>
      <p>Actividad: Nada</p>
      <p>Peso Actual: 98 Kg</p>
      <p>Dieta: Deficit calorico</p>
      <p>Intesidad de la dieta: Rapido</p>
    </div>
  );
}
export default App;
