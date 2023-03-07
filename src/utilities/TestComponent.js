import React from "react";

function TestComponent() {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 50) {
        setCounter((prevCount) => prevCount + 1); // <-- Change this line!
      } else {
        setCounter((prevCount) => prevCount);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Pass in empty array to run effect only once!

  return <h>Count: {counter}</h>;
}

export default TestComponent;
