import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

export const Form = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    input {
        padding: 5px;
        flex: 1;
    }

    button {
        padding: 5px 10px;
    }
`;

export const Lista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ChamadoCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;

    button {
        margin-top: 5px;
        margin-right: 5px;
        padding: 5px 10px;
    }
`;