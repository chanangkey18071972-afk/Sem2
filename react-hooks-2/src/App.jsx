import { useState, useEffect } from "react"

const App = () => {
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0)
    
    // useEffect Dependency Array behaviors
    // No dependency array - Effect will run on every re-render, that means
    // no matter what useState variable is being updated, it will run.
    // Empty Dependency Array - Effect will run ONLY on the first load of the component.
    // Dependecy Array with useState variable - Effect will run when useState variable value changes, or
    // respective setter function of the useState variable is called

    useEffect(() => {
    //    setCount(count + 1) // DO NOT DO THIS 
      document.title = `You clicked ${count} times, another count${count} times`
    }, [count, secondCount])
    
    return (
        <div className="d-flex justify-content-center">
            <p>You clicked {count} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
                Click me +
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setCount(count - 1)}>
                Click me -
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setCount(count * 2)}>
                Click me *
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setCount(count / 2)}>
                Click me /
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setCount(count * 0)}>
                Clear
            </button>

            <p>You clicked {secondCount} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setSecondCount(secondCount + 1)}>
                Click me
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setSecondCount(count - 1)}>
                Click me -
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setSecondCount(count * 2)}>
                Click me *
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setSecondCount(count / 2)}>
                Click me /
            </button>
            <br />
            <button className="btn btn-primary ml-3" onClick={() => setSecondCount(count * 0)}>
                Clear
            </button>
        </div>
    );
}

export default App