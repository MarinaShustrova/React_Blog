/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useState} from 'react';
// import PostItem from './components/PostItem';
// import Counter  from './components/Counter';
import './styles/App.css'
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton'
// import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm';

function App() {
 const  [posts, setPosts ] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript', body: 'Description'},
    {id: 3, title: 'JavaScript', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  return (
    <div className="App">
  <PostForm  create={createPost}/>
   {
    posts.length !== 0
    ?  <PostList remove={removePost}  posts={posts} title= 'POST ABOUT JS' />
    :<h1 style={{textAlign: 'center'}}> Posts not found!</h1>
   }
    </div>
  );
}

export default App;

