import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogPost = ({ blogPosts, setBlogPosts }) => {
  const [blogPostName, setBlogPostName] = useState("");
  const [blogPostBody, setBlogPostBody] = useState("");

  // what does useNavigate sound like?
  // useNavigate is a hook, it has to start with "use"
  // can only be used in component bodies
  // cannot be conditionally rendered

  const navigate = useNavigate();

  const createBlogPost = () => {
    // our goal is to put blogPost into the blogPosts array state
    // we have setBlogPosts
    const blogPost = {
      id: blogPosts.length + 1,
      name: blogPostName,
      body: blogPostBody,
    };

    // spreading out existing blog posts
    // throw in the new bblog post at the end
    setBlogPosts([...blogPosts, blogPost]);

    // when I click create, auto navigate me back to homepage
    // navigate is a function that navigates you to any url you want
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 16,
      }}
    >
      <input
        value={blogPostName}
        onChange={(event) => setBlogPostName(event.target.value)}
        placeholder="Name of the blog post"
        style={{ marginBottom: 8 }}
      />
      <textarea
        value={blogPostBody}
        onChange={(event) => setBlogPostBody(event.target.value)}
        rows={20}
        placeholder="Your actual blog post"
        style={{ marginBottom: 8 }}
      />
      <button onClick={createBlogPost}>Create</button>
    </div>
  );
};

export default CreateBlogPost;
