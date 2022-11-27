import React from "react";
import Data from "./Data";
import {useState} from "react";
import './button.css'

const Buttons = ({ filterItem, setItem, menuItems }) => {
    const [activeBut,setActiveBut]=useState('#')
  return (
    <>
      <div className='button-sec sec'>
        <div className='inside-sec'>
        <button id='#' onClick={() => { return setItem(Data),setActiveBut('#')}} className={activeBut==='#'?'active':''}>
          All
        </button> 
        {/* {menuItems.map((Val, id) => {
          return (
            <button id={Val} onClick={() => {return filterItem(Val),setActiveBut({Val})}} className={activeBut==={Val}?'active':''}key={id}>{Val}
            </button>
          );
          
        })} */}

        <button id='#Web-Development' onClick={() => { return filterItem("Web-Development"),setActiveBut('#Web-Development')}} className={activeBut==='#Web-Development'?'active':''}>
          Web-Development
        </button> 

        <button id='#Machine-Learning' onClick={() => { return filterItem("Machine-Learning"),setActiveBut('#Machine-Learning')}} className={activeBut==='#Machine-Learning'?'active':''}>
          Machine-Learning
        </button> 
{/* 
        <button id='#Data-Analytics' onClick={() => { return filterItem("Data-Analytics"),setActiveBut('#Data-Analytics')}} className={activeBut==='#Data-Analytics'?'active':''}>
          Data-Analytics
        </button>  */}


        </div>
       </div>
    </>
  );
};
 
export default Buttons;