import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
     <>
      <Navbar />
      <ItemListContainer greeting={'Saludos '} />
     </>
  );
}

export default App;
