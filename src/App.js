import "./styles.css";
import Posts from "./components/posts.js";
import Pagination from "./components/Pagination.js";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// const apiURL2 =
//   "https://api.github.com/repos/facebook/create-react-app/issues";
function App() {
  // const [username, setUsername] = useState("kshitijD38");
  const [username, setUsername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [state, setState] = useState({ items: [], isLoaded: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

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

  console.log("state is ", state);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(currentPage, postsPerPage, indexOfLastPost, indexOfFirstPost);
  const currentPosts = state.items.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPost is ", currentPosts);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="searchBar">
        <img src="http://pngimg.com/uploads/github/github_PNG83.png" />
        {/* <img src="http://pngimg.com/uploads/github/github_PNG34.png" /> */}
        {/* <div> */}
        <input
          className="input1"
          onChange={handleUserName}
          placeholder="Type UserName here..."
        />
        {/* <br /> */}
        <input
          className="input2"
          ref={textInput2}
          placeholder="Type RepoName here... "
        />
        {/* </div> */}
        {/* <br /> */}
        <button onClick={handleRepo}>search</button>
      </div>
      <span>
        <h4>
          <span className="usernameHead">{username} </span>
          <span style={{ fontSize: "25px" }}>/</span>
          <span className="repoHead">
            <b> {repo}</b>
          </span>
        </h4>
      </span>
      {/* <Posts state={state.items} /> */}
      <Posts state={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={state.items.length}
        paginate={paginate}
      />
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

/* <div className="list">
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.title}
              <span> </span>
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
                  <span> </span>
                </span>
              ))}
            </li>
          ))}
          <br />
        </ul>
      </div> */
