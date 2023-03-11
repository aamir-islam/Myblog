import React from "react";
import "./App.css";

import { Header } from "./component/layout";
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
