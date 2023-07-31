import React, { useState } from 'react';

const Auth = ({ token }) => {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
            const result = await response.json()
            console.log(result)
            if (result) setSuccessMessage(result.message)
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}

export default Auth;
