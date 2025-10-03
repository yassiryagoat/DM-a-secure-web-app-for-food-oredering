import React, { useState } from "react";
import  Header  from "../../compenent/header/Header"; 
import ExplorerMenu from "../../compenent/explorerMenu/ExplorerMenu";
import FoodDisplay from "../../compenent/fooddisplay/FoodDisplay";

function Home (){
    const [category,setCategory]= useState("All");
    return (
        <div>
            <Header/>
            <ExplorerMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/> 
        </div>
    );
}
export default Home ;