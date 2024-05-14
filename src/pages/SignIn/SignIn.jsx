import "./styles.css";
import { useState } from "react";
import axios from 'axios';
import * as Components from './Components.js';
import { useNavigate, Link } from 'react-router-dom';
import validator from 'validator';

function SignIn() {
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    async function SignInn(e) {
        if (!email || !password || !validator.isEmail(email)) {
            return;
        }
        e.preventDefault();
        try {
            await axios.post('https://weafore-backend-git-main-baokhanh1701s-projects.vercel.app/signin', {
                username, email, password
            })
                .then(res => {
                    if (res.data.message === "Login successful") {
                        navigate('/home', { state: { username: res.data.username } });
                    }
                    else if (res.data === "Incorrect password") {
                        alert("Incorrect password");
                    }
                    else if (res.data === "User not found") {
                        alert("User not found");
                    }
                })
                .catch(e => {
                    alert("Wrong details")
                    console.log(e);
                });
        }
        catch (e) {
            console.log(e);
        }
    }
    async function SignUpp(e) {
        if (!username || !email || !password || !validator.isEmail(email)) {
            return;
        }
        e.preventDefault();
        try {
            await axios.post('https://weafore-backend-git-main-baokhanh1701s-projects.vercel.app/signup', {
                username, email, password
            })
                .then(res => {
                    if (res.data === "User already exists") {
                        alert("User already exists");
                    }
                    else if (res.data === "User created") {
                        alert("Register successful, please login to continue");
                    }
                })
                .catch(e => {
                    alert("There is something while processing this request, please try again later.    ")
                    console.log(e);
                });
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="main">
            <Components.Container>
                <Components.SignUpContainer signinin={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Name' required />
                        <Components.Input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                        <Components.Input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        <Components.Button type="submit" onClick={SignUpp}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinin={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                        <Components.Input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type="submit" onClick={SignInn}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinin={signIn}>
                    <Components.Overlay signinin={signIn}>

                        <Components.LeftOverlayPanel signinin={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinin={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}

export default SignIn;