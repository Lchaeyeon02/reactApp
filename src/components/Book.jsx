import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h1>{`설명 ${props.name}`}</h1>
            <h2>{`페이지 ${props.numOfpage}`}</h2>
        </div>
    );
};

export default Book;

// rsc탭하면 자동완성