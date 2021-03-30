import "./App.css";

import Nav from "components/organism/Nav";

import Header from "pages/Header";

import Products from "pages/Products";
import Contact from "pages/Contact";

function App() {
  return (
    <div id="start">
      <header>
        <Nav />
      </header>
      <main>
        <Header />
        <Products />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
