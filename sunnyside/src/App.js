import React from "react";
import "./App.css";
import Header from "./components/MainPage/Header.js";
import Boxes from "./components/MainPage/Boxes.js";
import Testimonials from "./components/MainPage/Testimonials.js";
import Images from "./components/MainPage/Images.js";
import Footer from "./components/MainPage/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Boxes />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
