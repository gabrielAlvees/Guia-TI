import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const Notice = styled.div`
  position: relative;
  width: 500px;
  height: 615px;
  border-radius: 10px;
  overflow: hidden;
    font-family: Arial;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }

  .welcome-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #fff;
    padding: 24px 32px;
    border-radius: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;


export const Break = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
    font-family: Arial;
`;

export const OverlayCard = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
    cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

    .overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: white;
        padding: 20px;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }

    &:hover .overlay {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1) 60%, transparent);
    }

  &:hover .overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .button {
    background: white;
    color: black;
    border: none;
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.85rem;
    align-self: flex-start;
  }
`;