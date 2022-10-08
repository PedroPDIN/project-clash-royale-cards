import styled from 'styled-components';

const SLoading = styled.div`
  align-items: center;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;

  .icon-load {
    animation: rotation 1s infinite linear;
    font-size: 80px;
    transform: rotate(90deg);
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

export default SLoading;
