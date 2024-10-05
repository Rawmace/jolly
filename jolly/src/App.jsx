import Greeting from "./components/Greeting";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <ProductList></ProductList>
    </div>
  );
}
export default App;
