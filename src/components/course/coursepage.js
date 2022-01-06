import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css'
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import NavBar from '../NavBar';
import CourseList from './CourseList';
import toastr from 'toastr';

class CoursePage extends Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.DeleteCourse = this.DeleteCourse.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}> <b> {index + 1}. </b> {course.title} </div>;
    }

    redirectToAddCoursePage() {
        this.props.history.push('/course');
    }

    DeleteCourse(CourseID) {

        this.props.actions.DeleteCourse(CourseID).then(() => {
            this.props.actions.loadCourses();
            toastr.success('Course Delete Successfully...!');

        }).catch(error => {
            toastr.error("Error Getting");
        });
    }

    render() {
        const { courses } = this.props;
        return (
            <div className="App">
                <NavBar loading={this.props.loading} />
                <header className="App-header" style={{ textAlign: 'center' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Redux</h1>
                </header>
                <div>
                    <h1> Course List </h1>
                    <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
                    <CourseList courses={courses} DeleteCourse={this.DeleteCourse} />
                </div>
            </div>
        )
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {

    return {
        courses: state.courses,
        loading: state.ajaxCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //course : course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); 