import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import './Card.css'

const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <section id='portfolio' >
         <h5> My Recent Work</h5>
         <h2>Projects</h2>
      <div className= 'container'>
          <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems}/>
        
          <div className ='portfolio_container'>
          <Card item={item} />
          </div>
          
      </div>
    </section>
  );
};

export default App;