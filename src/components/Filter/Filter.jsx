import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input className={css.input} type="text" name="filter" onChange={onChange} value={value} />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;