import { useState } from "react";

export default function Calculator() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const addButtonClick = (e) => {
        e.preventDefault();
        setCount((count) => count + Number(inputValue));
    };
    const addButtonClickSubtract = (e) => {
        e.preventDefault();
        setCount((count) => count - Number(inputValue));
    };
    const addButtonClickMultiply = (e) => {
        e.preventDefault();
        setCount((count) => count * Number(inputValue));
    };
    const addButtonClickDivide = (e) => {
        e.preventDefault();
        setCount((count) => count / Number(inputValue));
    };
    const addButtonClear = (e) => {
        e.preventDefault();
        setCount((count) => count => 0 (inputValue));
    };
    return (
        <div>
            <h2>Addition Calculator</h2>
            <p>Current value is {count}</p>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <br />
            <button onClick={addButtonClick}>Add (+)</button>
            <br />
            <button onClick={addButtonClickSubtract}>Add (-)</button>
            <br />
            <button onClick={addButtonClickMultiply}>Add (*)</button>
            <br />
            <button onClick={addButtonClickDivide}>Add (/)</button>
            <br />
            <button onClick={addButtonClear}>Add ()</button>
        </div>
    );
}
