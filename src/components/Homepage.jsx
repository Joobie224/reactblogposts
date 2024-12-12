import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ blogPosts }) => {
  // console.log(blogPosts);
  // blogPosts is an array of objects
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {blogPosts.map((post) => (
        <div key={post.name}>
          {/* whenever I click on it, I want it to bring me to /${name} */}
          <Link to={`/${post.name}`}>{post.name}</Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
