import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import createNote from "./Note";
import notes from "./../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
