import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const username = location.state.username;
    return (
        <h1>Hello {username}</h1>
    )
}

export default Home;