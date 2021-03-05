import React from "react";
import Main from "./pages/Main";
import Carrito from "./pages/Carrito";
import Finder from "./components/Finder"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
        
          <Main />
           
        </Route>
        <Route exact path="/carrito">
          <Carrito />
        </Route>

      </Router>
    </div>
  );
}

export default App;
