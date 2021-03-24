import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./logo.png";
import useInitialState from "./hooks/useInitialState.js";
import useGetMeals from "./hooks/useGetMeals";
import useGetReceipe from "./hooks/useGetReceipe";
import "./index.css";
function App() {
  function toggleMenu() {
    let menu = document.getElementById("BurgerMenu");
    let button = document.getElementById("MenuButton");
    if (button.alt === "closeButton") {
      menu.style.display = "none";
      button.alt = "menuButton";
      button.style.display = "block";
    } else {
      menu.style.display = "flex";
      button.alt = "closeButton";
      button.style.display = "none";
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
              <Link onClick={toggleMenu} to="/meals">
                Meals
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/users">
                Profile
              </Link>
            </li>
          </ul>
          <img
            alt="menuButton"
            id="MenuButton"
            onClick={toggleMenu}
            src="https://img.icons8.com/android/24/ffffff/menu.png"
          />
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/meals">
            <div className="container_meals">
              <Meals
                title="Comidas"
                img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"
              />
              <Meals
                title="Cenas"
                img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"
              />
              <Meals
                title="Colaciones"
                img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"
              />
              <Meals
                title="Postres"
                img_url="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"
              />
            </div>
          </Route>
          <Route exact path="/meals/comidas">
            <Meal />
          </Route>
          <Route exact path="/recetas/:id">
            <div className="container_meals">
              <MealReceipe />
            </div>
          </Route>
          <Route path="/users">
            <div className="container">
              <UserProfile />
            </div>
          </Route>
          <Route exact path="/">
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
  const results = useInitialState();

  return (
    <div className="card">
      <div className="information">
        <h3>Dieta basada en calorias</h3>
        <p>{results.calorias} kcal</p>
        <div className="item">
          <span>Peso actual:</span>
          <p>98 Kg</p>
        </div>
        <div className="item">
          <span>Litros de agua:</span>
          <p>{results.agua} L/Dia</p>
        </div>
        <div className="item">
          <span>Perdida Semanal aprox:</span>
          <p>{98000 * 0.01} g</p>
        </div>
      </div>
      <div className="nutrientes">
        <h3>Macronutrientes</h3>
        <div className="shepere">
          Grasa <br /> {results.grasa}
        </div>
        <div className="shepere">
          Carbohidratos <br />
          {results.carbohidratos}
        </div>
        <div className="shepere">
          Proteninas <br />
          {results.proteina}
        </div>
      </div>
    </div>
  );
}

function Meals({ title, img_url }) {
  return (
    <div className="card2" style={{ backgroundImage: `url(${img_url})` }}>
      <h3 className="title">
        <Link to="/meals/comidas">{title}</Link>
      </h3>
    </div>
  );
}

function Meal() {
  const listMeals = useGetMeals();
  console.log(listMeals);
  return (
    <div className="container_meals">
      {listMeals.length > 0 &&
        listMeals.map((meal) => (
          <div key={meal.id} className="mealcard">
            <Link to={`/recetas/${meal.id}`}>
              <img
                src="https://www.girasol.com.ec/girasolreduxerol/wp-content/uploads/2016/09/reduxero-3.jpg"
                alt="Foto de comida"
              />
              <div className="information">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <span>
                  <i>{meal.time ? meal.time : "10 min"}</i>
                </span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

function MealReceipe() {
  const receipe = useGetReceipe();
  const img_url =
    "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/10/beneficios-de-comer-papa-900.jpg";
  return (
    <div style={{ backgroundImage: `url(${img_url})` }} className="receipecard">
      <div className="receipebox">

      <div className="title">
        <h3>{receipe.title}</h3>
        <p>{receipe.author}</p>
      </div>

      <ul className="ingridients">
        {receipe.ingridients &&
          receipe.ingridients.map((ingridient) => (
            <li key={ingridient.ingridientId}>
              <span>Nombre Mamalon</span>
              <span>{ingridient.cantidad} {ingridient.unidad}</span>
            </li>
          ))}
      </ul>
      <p className="preparacion">{receipe.preparacion}</p>
      </div>
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
