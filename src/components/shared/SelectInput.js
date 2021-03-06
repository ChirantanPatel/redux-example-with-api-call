import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ name, lable, onChange, defaultOption, value, error, options }) => {

    return (
        <div className="from-group">
            <label htmlFor={name}> {lable} : </label>
            <div className="field">
                <select name={name} value={value} onChange={onChange} className="form-control">
                    <option value=""> {defaultOption} </option>
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}> {option.text} </option>;
                    })

                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}


SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default SelectInput;