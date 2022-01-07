// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="row bg-secondary d-flex d-flex align-items-center">
        <h1 className="col-4 d-flex text-light ">MyChatApp</h1>
        <p className="col text-light">
          by ( Vaibhav Patil) (131_kh)
        </p>
      </header>

      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function send() {
    if (message === "") {
      alert("Message can't be empty");
    } else {
      const newList = [message, ...list];

      setList(newList);
      setMessage("");
    }
  }

  return (
    <div className="mx-4">
      <div className="row">
        <input
          className=" col form-control form-control-lg mt-4"
          type="text"
          value={message}
          onChange={handleMessage}
        />

        <input
          className="col-2 mt-4 mx-2 "
          type="button"
          value="SEND"
          onClick={send}
        />
      </div>

      {list.map((item, index) => (
        <>
          <div
            key={index}
            className="alert alert-secondary fs-4 mt-3 text-start"
          >
            {item}
          </div>

          {/* <div key={index} className="alert alert-secondary fs-4 mt-3 text-end">
            {item}
          </div> */}
        </>
      ))}
    </div>
  );
}