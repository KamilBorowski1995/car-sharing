import "./App.css";

import Nav from "components/organism/Nav";

import Header from "Header";
import Product from "components/organism/Product";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Header />
        <Product />
        <Product />
      </main>
    </div>
  );
}

export default App;
