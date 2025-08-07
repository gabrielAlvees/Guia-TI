import styled from "styled-components";

export const Container = styled.div`
    font-family: Arial;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;

    &::before,
    &::after {
        content: "";
        flex: 1;
        height: 5px;
        background: linear-gradient(to right, dodgerblue, dodgerblue);
        margin: 0 15px;
        border-radius: 10px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
    gap: 15px;

    &::before,
    &::after {
        content: "";
        flex: 1;
        height: 5px;
        background: linear-gradient(to right, dodgerblue, dodgerblue);
        border-radius: 10px;
    }
`;


export const Acess = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    text-decoration: none;
`;

export const Link = styled.a`
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    text-decoration: none;
    color: dodgerblue;

    &:hover {
        transform: scale(1.05);
    }

    &:hover span {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const OverlayText = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.82), transparent);
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    border-radius: 0 0 15px 15px;
`;
