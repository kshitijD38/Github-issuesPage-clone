import "./styles.css";
// import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// const apiURL2 =
//   "https://api.github.com/repos/facebook/create-react-app/issues";
function App() {
  const [username, setUsername] = useState("kshitijD38");
  const [repo, setRepo] = useState("React-Assignment-5---Digital-Clock");
  const [state, setState] = useState({ items: [], isLoaded: false });

  const apiURL1 = `https://api.github.com/users/${username}/repos`;
  const apiURL2 = `https://api.github.com/repos/${username}/${repo}/issues`;

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}/issues`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setState((prev) => {
          return { ...prev, isLoaded: true, items: json };
        });
      });
  }, [repo]);

  // console.log(state.items);
  // console.log(state);
  // state.items.map((item) =>
  //   // console.log(item.title)
  //   item.labels.map((temp, index) =>
  //     console.log("----", index, "---", temp.color)
  //   )
  // );

  let textInput1 = React.createRef();
  let textInput2 = React.createRef();

  const handleUserName = (event) => {
    setUsername(event.target.value);
    // setUsername(textInput1.current.value);
  };
  const handleRepo = (event) => {
    // setRepo(event.target.value);
    setRepo(textInput2.current.value);
  };

  return (
    <div className="App">
      <input onChange={handleUserName} placeholder="Type UserName here..." />
      <br />
      <input ref={textInput2} placeholder="Type RepoName here... " />
      <br />
      <button onClick={handleRepo}>search</button>
      <div className="list">
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.title}
              {item.labels.map((temp, index) => (
                <span
                  id={index}
                  key={temp.id}
                  style={{
                    color: `#${temp.color}`,
                    fontSize: 25
                  }}
                >
                  {temp.name}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  // }
}
export default App;

/* <select onChange={handleRepo}>
        {.map((item, itemIndex) => {
          return (
            <option key={itemIndex} value={itemIndex}>
              {item.name}
            </option>
          );
        })}
      </select> */
