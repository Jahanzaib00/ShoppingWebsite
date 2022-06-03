import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./MyComponents/Footer";
import { Cross } from "./MyComponents/Cross";
import { Card } from "./MyComponents/Card";
import { Navbar } from "./MyComponents/Navbar";
import { About } from "./MyComponents/About";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="App" size="absolute">
                  <Cross />
                </div>
                <Card />
                <div className="Foo">
                  <Footer />
                </div>
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
