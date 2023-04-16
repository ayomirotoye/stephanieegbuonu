import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.png"
import { useState } from 'react'
import { useAuthContext } from "../context/Authcontext.js";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const { logout, currentUser} = useAuthContext();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // have modal for failed to log out
    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/");

        } catch {
            setError("Failed to log out");
        }
        
    }
  return (
    <div>
        <Nav>
            <Header>
                <div>
                    <img src={logo} alt="feedforward" srcset="" />
                </div>
                <p>HOME</p>
                <p>ABOUT US</p>
                <p>MEDIA</p>
                <p>CAREERS</p>
            </Header>

            <Button>
                <button>CONTACT</button>
                {currentUser && <button onClick={handleLogout}>LOG OUT</button> }
                
            </Button>
        </Nav>
    </div>
  )
}

export default Navbar

const Nav = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 80px 7px 80px;
    box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);

    @media (max-width: 760px) {
        padding: 10px 30px 10px 30px;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 220px;
        height: 90px;
        margin-right: 5rem;

        @media (max-width: 760px) {
            width: 140px;
            height: 70px;
            margin-right: 3rem;
        }
    }

    p {
        font-size: 18px;
        padding: 10px;

        @media (max-width: 760px) {
            display: none;
        }
    }

    p:hover {
        color: rgb(87,208,209);
    }
`

const Button = styled.div`
    display: flex;
    margin-left: auto;
    gap: 1.5rem;

    button {
        display: flex;
        gap: 2rem;
        margin-left: auto;
        background-color: rgb(50,101,116);
        color: white;
        padding: 15px 50px 15px 50px;

        @media screen and (max-width: 760px) {
            padding: 10px 20px 10px 20px;
            font-size: 10px;
            font-weight: bold;
        }
    }
    
`