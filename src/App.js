import React, { Component } from 'react';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <div>
         <Post />
         <Post />
         <Post />

       </div>
     </div>
    );
  }
}

export default App;
