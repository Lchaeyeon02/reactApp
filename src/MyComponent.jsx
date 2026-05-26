import React from 'react';

// props를 쑬때는 ${props.name}
const MyComponent = ({name, a}) => {
    return (
        <div>
            <h1>마이컴포넌트 {name}</h1>
            <h1>마이컴포넌트 {a}</h1>
        </div>
    );
};

export default MyComponent;