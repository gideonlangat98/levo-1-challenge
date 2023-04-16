import React, { useState, useEffect } from 'react'

// function Counter() {
//     const [count, setCount] = useState(0);

//     function handleClick(){
//         setCount((count) => count + 1);
//     }
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increase Count</button>
//     </div>
//   );
// }
function Counter() {
    const [count, setCount] = useState(() =>
      parseInt(localStorage.getItem("count")) || 0
    );
  
    useEffect(() => {
      localStorage.setItem("count", count.toString());
    }, [count]);
  
    const handleClick = () => {
      setCount((prevClickCount) => prevClickCount + 1);
    };
  
    return (
      <div className='border-solid border-2 border-fuchsia-400 border-x-transparent py-10'>
        <button className='border-solid border-2 border-fuchsia-500 bg-fuchsia-500 
        py-2 px-8 rounded-md text-white' 
        onClick={handleClick}>Click Me!</button>
        <p className='my-4 mx-4 text-2xl'>Clicks: {count}</p>
      </div>
    );
  }

export default Counter;
