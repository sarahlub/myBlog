import "./register.css"

export default function Register() {
return (
    <div className="register">
        <span className="registerTitle">Sign-up</span>
        <form className="registerForm">
            <label>username</label>
            <input type="text" className="registerInput"  />
            <label>Email</label>
            <input type="text" className="loginInput"  />
            <label>Password</label>
            <input type="password" className="registerInput"  />
            <button className="registerButton">Sign-up</button>
        </form>
        <button className="registerLoginButton">Login</button>
        </div>
)
}