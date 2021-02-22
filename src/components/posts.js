import React from "react";
import "../styles.css";

const Posts = ({ state }) => {
  return (
    <div className="list">
      <ul>
        {state.map((item) => (
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
    </div>
  );
};
export default Posts;
