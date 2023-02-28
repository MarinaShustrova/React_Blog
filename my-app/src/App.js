import React, { useState } from 'react';
import PostItem from './components/PostItem';
// import Counter  from './components/Counter';
import './styles/App.css'

function App() {

  
  return (
    <div className="App">
 
     <PostItem  post={{id: 1, title: 'JavaScript', body: 'Description'}}/>
     <PostItem  post={{id: 2, title: 'React', body: 'Description'}}/>
     <PostItem  post={{id: 3, title: 'Vue', body: 'Description'}}/>
    </div>
  );
}

export default App;
