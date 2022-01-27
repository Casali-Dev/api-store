import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 5rem;

  .header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 100%;

    background-color: ${(props) => props.theme.colors.headerBackground};
    box-shadow: 0px 3px 10px rgba(27, 54, 94, 0.4);
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1080px;
    height: 5rem;

    img {
      height: 3rem;
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;
