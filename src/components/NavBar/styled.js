import styled from "styled-components";

export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 45px 500px 0 0;

  .logo {
    padding-left: 20px;
    h1 {
      color: red;
      font-size: 60px;
      font-family: "New Super Mario Font U", sans-serif;
    }
  }

  .paginas{
    display: flex;
    gap: 30px;
    align-items: center;
  }

  a {
    font-family: "New Super Mario Font U", sans-serif;
    font-size: 40px;
    color: #d10000;
  }
`;
