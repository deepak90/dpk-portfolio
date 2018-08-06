import React from 'react';

const Tags = props => {
    return (
        <button
            onClick={props.handleTagClick.bind(this, props.title)}
            className="tag"
            data-active={props.isActive}
        >
            {props.title}
        </button>
    );
};

export default Tags;
