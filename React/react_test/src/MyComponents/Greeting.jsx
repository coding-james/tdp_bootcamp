const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <h1> Welcome Back! </h1>
    }
        return <h1> Please Sign up. </h1>
}

export default Greeting;