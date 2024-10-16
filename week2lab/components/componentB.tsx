import React, {useState} from "react";

interface Props {
    initialValue: string;
}

const ComponentB = (props: Props) => {
    const [text, setText] = useState(props.initialValue);


const handleClick = () =>{
    setText(text + ' Welcome, Have a good day!!!!');
};

return (
    <div>
        <p> count: {text}</p>
        <button onClick={handleClick}>Click Here</button>
        </div>
);
}
export default ComponentB;