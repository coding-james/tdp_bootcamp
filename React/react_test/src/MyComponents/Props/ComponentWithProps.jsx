function ComponentWithProps(props) {
    return (
        <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>Here is some text and a number, {props.number}</p>
        <p>Here is a nonexistent prop {props.non}</p>
    </>
    );
};

export default ComponentWithProps;