import React from 'react';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';
import PropTypes from 'prop-types';

const CoursFrom = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
    return (

        <div className="form-row">
            <div className="col-md-2">
            </div>

            <div className="col-md-8">
                <form>
                    <h1> Add Course </h1>
                    <TextInput
                        name="title" lable="Title" value={course.title}
                        onChange={onChange} error={errors.title}
                    />

                    <SelectInput
                        name="authorId" lable="Author" value={course.authorId}
                        defaultOption="Select Author" options={allAuthors}
                        onChange={onChange} error={errors.authorId}
                    />

                    <TextInput
                        name="category" lable="Category" value={course.category}
                        onChange={onChange} error={errors.category}
                    />

                    <TextInput
                        name="length" lable="Length" value={course.length}
                        onChange={onChange} error={errors.length}
                    />

                    <input type="submit" disabled={saving}
                        value={saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary" onClick={onSave} />

                </form>
            </div>

            <div className="col-md-2">
            </div>
        </div>

    )
}


CoursFrom.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object,
}

export default CoursFrom;