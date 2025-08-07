import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden; /* Evita que algo vaze */
    
    width: 100%;
    height: 80px;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 200px;
    height: auto;
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input{
        border: #C4C4C4 1px solid ;
        height: 30px;
        width: 300px;
        border-radius: 5px;
        outline: none;
        padding: 5px;
        margin-right: 10px;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 5vw, 3rem);

    width: 100%;
    height: 80px;
    background: #0064F5;
`;

export const Link = styled.a`
    font-family: Arial;
    color: white;
`;

export const Section = styled.div`
    font-family: Arial;
    width: 100%;
    height: 7vh;
    background: #50ABFA;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        gap: clamp(1rem, 1vw, 3rem);
        display:flex;
        align-self: center;
        justify-content: center;
    }
`;

export const Text = styled.p`
    font-family: Arial;
    color: white;
`;

export const Acess = styled.a`
    text-decoration: none;
    color: white;
`;