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


 
  const [ post, setPost] = useState({title: '', body: ''});
  

  const addNewPost = (e) => {
    e.preventDefault();
  
 setPosts([...posts, {...post, id: Date.now()}])
setPost({title:'', body:''})

  }
  return (
    <div className="App">
    <form>
    {/* //todo управляемый инпут */}
      <MyInput
      value={post.title}
      onChange={e=>setPost({...post, title: e.target.value})}
       type='text'
        placeholder='Название поста'

        />

{/* //todo hook useRef неуправляемый инпут обращаемся к элементу в дом и забираем его вэлью   */}
      <MyInput
      value={post.body}
      onChange={e=>setPost({...post, body: e.target.valu})}
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

