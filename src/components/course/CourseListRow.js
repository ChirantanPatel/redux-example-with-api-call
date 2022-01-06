import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CourseListRow = ({ course, DeleteCourse }) => {
    return (
        <tr>
            <td> <a href={course.watchRef} target="_blank"> Watch </a> </td>
            <td> <Link to={'/CourseUpdate/' + course.id} >{course.title} </Link> </td>
            <td> {course.authorId} </td>
            <td> {course.category} </td>
            <td> {course.length} </td>
            <td onClick={DeleteCourse.bind(this, course.id)}><input type="submit" value="Delete" className="btn btn-primary" /></td>
        </tr>
    );
};

CourseListRow.prototype = {
    course: PropTypes.object.isRequired,
    DeleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;