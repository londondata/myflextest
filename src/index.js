import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const post = {
  title: "Eff Off Zuck",
  author: "Miss London",
  body: "I secretly recruited a group of superheroes to save the Internet",
}

ReactDOM.render(
  <React.StrictMode>
    <Welcome name={"Teri"} location={"San Francisco"}/>
    <Post 
			title={post.title} 
			author={post.author} 
			body={post.body} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
