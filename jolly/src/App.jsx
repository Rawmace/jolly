import Greeting from "./components/Greeting";
import IconComponent from "./components/IconComponent";
import JSXRules from "./components/JSXRules";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import Style from "./components/Style";
import Weather from "./components/Weather";
import WelcomeMessage from "./components/WelcomeMessage";
import "./index.css";
function App() {
  return (
    <div>
      <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <ProductList />
      <Person name="Ramesh Devkota" age="21" />
      <Product name="Jolly chicken" price="220" />
      <Weather />
      <Style />
      <IconComponent />
    </div>
  );
}
const Person = (props) => {
  return (
    <div>
      <h1>The following is the result of using props and component in react</h1>
      <h2>NAme - {props.name}</h2>
      <p>Age - {props.age}</p>
    </div>
  );
};
export default App;
