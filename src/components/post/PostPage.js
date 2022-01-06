import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import Posts from './post';
import PostForm from './postform';
import NavBar from '../NavBar';


class PostPage extends Component {
    render() {
        return (

            <div className="App">
                <NavBar loading={true}/>
                <header className="App-header" style={{textAlign:'center'}}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Redux</h1>
                </header>
                <PostForm />
                <hr />
                <Posts />
            </div>

        );
    }
}

export default PostPage;
