import "./App.css";

import Nav from "components/organism/Nav";

import Header from "Header";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
