import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <div>
                <button onClick={() => props.handleOrganic()}>Toggle Organic</button>
                <button onClick={() => props.sortByRating()}>Sort by Rating</button>
            </div>
        </div>
    );
};

export default Filter;

