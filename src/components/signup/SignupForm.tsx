import "../../styles/Signup.css"

const SignupForm = () => {
    return (
        <div className="signup-form">
            <h2>Create your Account</h2>
            <form action="/register" method="post">
                <label htmlFor="username"></label>
                <input type="text" id="username" placeholder="Full Name" name="username" required/>
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Enter your Email" name="email" required/>
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Password" name="password" required/>
                <button type="submit" className="signup">Register</button>
            </form>
        </div>
    );
};

export default SignupForm;