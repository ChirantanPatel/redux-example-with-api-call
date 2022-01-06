import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types';

const CourseList = ({ courses, DeleteCourse }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th> &nbsp; </th>
                    <th> Title </th>
                    <th> Author </th>
                    <th> Category </th>
                    <th> Length </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course} DeleteCourse={DeleteCourse} />
                )}
            </tbody>
        </table>
    )
}

CourseList.prototype = {
    courses: PropTypes.array.isRequired,
    DeleteCourse: PropTypes.func.isRequired
};

export default CourseList;