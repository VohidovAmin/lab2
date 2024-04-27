import React from 'react';

function Container({ children }) {
    return (
        <div style={{ border: "2px solid black" }}>
            {children}
        </div>
    );
}

export default Container;