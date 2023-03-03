/** @format */

import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
 
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      {/* //todo управляемый инпут */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />

      {/* //todo hook useRef неуправляемый инпут обращаемся к элементу в дом и забираем его вэлью   */}
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.valu })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
