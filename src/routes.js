import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CoursePage from './components/course/coursepage';
import PostPage from './components/post/PostPage';
import ManageCoursePage from './components/course/ManageCoursePage';



export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={CoursePage} />
                    <Route path="/CoursePage" component={CoursePage} />
                    <Route path="/PostPage" component={PostPage} />
                    <Route path="/Course" component={ManageCoursePage} />
                    <Route path="/CourseUpdate/:id" component={ManageCoursePage} />
                </div>
            </BrowserRouter>
        )
    }
}
