import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleonchange = (event) => setText(event.target.value);

  return (
    <>
      <div>
        <p>
          {" "}
          Enter your name:
          <input
            type="text"
            value={text}
            onChange={handleonchange}
          ></input>{" "}
          &ensp;
          <button>Log In</button>
        </p>
        <Welcome title={text}></Welcome>
        <p>Assignment done by Diwakar Dixit: 12111559</p>
      </div>
    </>
  );
}

export default App;
