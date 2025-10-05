import styled from "styled-components";
import { TextMedium } from "../Utilities/Texts";
import Button from "../Buttons";
import { useNavigate } from "react-router";

const NavBar = styled.div`
    margin: 0px;
    background-color: #D9D9D9;
    border-bottom: solid 1vh #CECECE;
    padding: 2vh;
    display: flex;
    gap: 3vh;
`

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <NavBar>
            <Button onClick={()=>{
                navigate('/')
            }}>INICIO</Button>
            <Button onClick={()=>{
                navigate('/projects')
            }}>PROYECTOS REALIZADOS</Button>

            <Button onClick={()=>{
                navigate('/creator')
            }}>CREADOR DE LA WEB</Button>
        </NavBar>
    );
};

export default Navbar;