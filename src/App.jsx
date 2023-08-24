/**
 * -------
 * USEREF
 * -------
 * use to reach out to an element and check what its value is
 * used in form inputs
 * called an uncontrolled component
 * useRef doesnt re render, you have to check the current's value
 */

import "./App.css";
import { useRef } from "react";

function App() {
  const colorText = useRef();
  const hexColor = useRef();
  // console.log(colorText); // returns an object that has a current field

  const submit = (event) => {
    event.preventDefault();

    const title = colorText.current.value; // get the current input
    const color = hexColor.current.value; // get the current input
    alert(`${title}, ${color}`);
    colorText.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <div className="App container">
      <h2>useRef</h2>
      <h3></h3>
      <form onSubmit={submit}>
        <input ref={colorText} type="text" placeholder="color title..." />
        <input ref={hexColor} type="color" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
