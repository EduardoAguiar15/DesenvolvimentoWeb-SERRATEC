import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 300px;

  input {
    padding: 12px;
    border-radius: 8px;
    width: 240px;
    background-color: transparent;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    list-style-type: none;
    margin-top: 20px;

    li {
      width: 365px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 12px;
      background-color: white;
      padding-bottom: 20px;
      cursor: pointer;

      &:hover {
        position: relative;
        top: -3px;
        
      }

      img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
      }

      h2 {
        margin: 15px 0 10px;
      }

      p {
        font-weight: bold;
        margin-bottom: 12px;
      }

      button {
        padding: 12px;
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
        border-radius: 8px;

        &:hover {
          background-color: #00009c;
          transition: ease 0.5s;
        }
      }
    }
  }

  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(16, 16, 16, 0.79);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 30%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 30%;
      background-color: white;
      border-radius: 12px;

      img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
      }

      h2 {
        margin: 15px 0 10px;
      }

      p {
        font-weight: bold;
        margin-bottom: 12px;
        padding: 0 40px;
      }

      button {
        padding: 12px;
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
        border-radius: 8px;
        margin-bottom: 20px;

        &:hover {
          background-color: #00009c;
          transition: ease 0.5s;
        }
      }
    }
  }

`;

export const Rodape = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: 50px;

  img {
    width: 100%;
    height: 144px;
    object-fit: cover;
  }
`;
