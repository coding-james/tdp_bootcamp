import React from "react";
import AnotherComponent from "./Footer"
import ComponentWithProps from "./Props/ComponentWithProps";

const MyComponent = () => {
    
    return (
        <React.Fragment>
            <h1>Hello World</h1>
            <AnotherComponent></AnotherComponent>
            <ComponentWithProps header="Header from props" content="Here is some content for my prop" number={ 6 }/>
        </React.Fragment>
    );
};

export default MyComponent;