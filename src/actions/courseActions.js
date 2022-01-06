import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusAction';


export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCoursesSuccess(course) {
    return { type: types.CREATE_COURSES_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSES_SUCCESS, course };
}

export function DeleteCourseSuccess(course) {
    return { type: types.DELETE_COURSES_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses))
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then(Savecourses => {
            course.id ? dispatch(updateCourseSuccess(Savecourses)) :
                dispatch(createCoursesSuccess(Savecourses));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    }
}


export function DeleteCourse(courseID) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.deleteCourse(courseID).then(course => {
            dispatch(DeleteCourseSuccess(course))
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
}