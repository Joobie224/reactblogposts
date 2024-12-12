import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

import Homepage from "./components/Homepage";

import Navbar from "./components/Navbar";

import CreateBlogPost from "./components/CreateBlogPost";

const SingleBlogPost = ({ blogPosts }) => {
  const { blogPostID } = useParams();

  // .find helps you find a specific item in the array
  const specificBlogPost = blogPosts.find(
    (post) => String(post.id) === blogPostID
  );

  // if you cannot find specific blog post, return like "not found"
  if (!specificBlogPost) {
    return <h1>Not found</h1>;
  }

  // we have a blog post ID
  // you have a blogPosts array
  // find the specific blog post with that ID
  return (
    <div>
      <h1>{specificBlogPost.name}</h1>
      <p>{specificBlogPost.body}</p>
    </div>
  );
};

// parent component/root component
function App() {
  // this is your source of truth for all the blog posts
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      name: "dummy blog post",
      body: "this is a dummy blog post body that I createdjust for testing purposes",
    },
  ]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage blogPosts={blogPosts} />} />
        <Route path="/:id" element={<SingleBlogPost blogPosts={blogPosts} />} />
        <Route
          path="/create"
          element={
            <CreateBlogPost setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
