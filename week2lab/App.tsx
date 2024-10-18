import React from "react";
import ComponentA from './components/componentA';
import ComponentB from "./components/componentB";


const App = () => {

  
    return(
        <div>
        <ComponentA initialValue = {10} />
        <ComponentB initialValue={"Hello"}/>
        </div>
    );




};

export default App;