import "./App.css";

import Nav from "components/organism/Nav";

import Header from "pages/Header";

import Products from "pages/Products";
import Contact from "pages/Contact";
import Messager from "pages/Messager";

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
      <Messager />
    </div>
  );
}

export default App;
