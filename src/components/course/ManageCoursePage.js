import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import NavBar from '../NavBar';
import * as courseActions from '../../actions/courseActions'
import logo from './../../logo.svg';
import './../../App.css'
import { connect } from 'react-redux';
import CoursFrom from './CourseFrom';
import PropTypes from 'prop-types';
import toastr from 'toastr';

class ManageCoursePage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }


    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course).then(() => {
            toastr.success('Course Saved Successfully...!');
            this.props.history.push('/CoursePage');
            this.setState({ saving: false });
        }).catch(error => {
            toastr.error(error);
            this.setState({ saving: false });
        });

    }


    render() {
        return (
            <div className="App">
                <NavBar loading={this.props.loading} />
                <header className="App-header" style={{ textAlign: 'center' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Redux</h1>
                </header>
                <div>
                    <CoursFrom
                        onChange={this.updateCourseState}
                        onSave={this.saveCourse}
                        allAuthors={this.props.authors}
                        course={this.state.course}
                        errors={this.state.errors}
                        saving={this.state.saving} />
                </div>
            </div>
        )
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course)
        return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id

    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropDown = state.author.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropDown,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 