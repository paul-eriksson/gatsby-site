import React from 'react';
import PropTypes from 'prop-types';
import './IconText.scss';

const IconText = props => (
    <div title={props.text} className="icontext__container">
        <p className="icontext__text" style={{ display: props.reversed ? 'block' : 'none' }}>{props.text}</p>
        <div className="icontext__image" style={{ visiblity: props.reversed ? 'none' : 'block' }}>{props.icon}</div>
    </div>
);

IconText.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    reversed: PropTypes.bool,
};

IconText.defaultProps ={
    reversed: false,
};

export default IconText;
