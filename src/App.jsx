import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";

let loggedin = true;

function App() {
  return (
    <div className="App">
      <Header />
      {loggedin ? <Login /> : null}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
