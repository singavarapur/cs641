import React, {useState} from "react";
import customStyle from "../styles/custom";

interface Props {
    initialValue: number;
}

const ComponentA = (props: Props) => {
    const [count, setCount] = useState(props.initialValue);


const handleClick = () =>{
    setCount(count + 1);
};

return (
    <div>
        <p> count: {count}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
);
}
export default ComponentA;