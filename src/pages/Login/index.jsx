import "./style.css";
import ApiService from '../../services/ApiService';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await ApiService.login(dispatch, email, password);
            navigate("/profile"); // Redirect to the profile page after successful login
        } catch (error) {
            setLoginError("Invalid email or password. Please try again."); // Set the login error message
        }
    };

    console.log(isAuthenticated);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {loginError && <p className="error-message">{loginError}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;
