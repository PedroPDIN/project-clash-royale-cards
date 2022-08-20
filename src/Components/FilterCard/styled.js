import styled from 'styled-components';

const SFilter = styled.div`
  align-items: flex-end;
  animation-duration: 3s;
  animation-name: slideFilter;
  // background-color: red;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 99%;

  @keyframes slideFilter {
    from {
      margin-bottom: 100%;
      width: 100%;
  }

    to {
      margin-bottom: 80%;
      width: 90%;
    }
  }

  input, select {
    font-size: 15px;
    padding: 2px;
    transition: all 0.1 ease-in-out;
  };


  input {
    width: 20%;
  }

  select {
    width: 15%;
  }
`;

export default SFilter;
