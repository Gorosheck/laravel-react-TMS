import { useEffect, useState } from "react";

function Counter({save, load, initial = 0}) {
    const [count, setCount] = useState(parseInt(load() ?? initial));

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`
        save(count);
    });

    const increase = () => {
        setCount(count + 1);
        
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;