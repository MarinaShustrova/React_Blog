/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from 'react';
// import PostItem from './components/PostItem';
// import Counter  from './components/Counter';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
  const  [posts, setPosts ] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript', body: 'Description'},
    {id: 3, title: 'JavaScript', body: 'Description'},
  ])
//todo hook useRef неуправляемый инпут обращаемся к элементу в дом и забираем его вэлью


 
  const [ title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);

  }
  return (
    <div className="App">
    <form>
    {/* //todo управляемый инпут */}
      <MyInput
      value={title}
      onChange={e=>setTitle(e.target.value)}
       type='text'
        placeholder='Название поста'

        />

{/* //todo hook useRef неуправляемый инпут обращаемся к элементу в дом и забираем его вэлью   */}
      <MyInput
      ref={bodyInputRef}
       type='text'
        placeholder='Описание поста'

        />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
    <PostList posts={posts} title='List of posts about JS' />
    </div>
  );
}

export default App;
