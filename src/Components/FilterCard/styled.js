import styled from 'styled-components';

const SFilter = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 150px;
  position: fixed;
  top: 2px;
  width: 97%;
  z-index: 0;
  
  input, select {
    animation-duration: 0.5s;
    animation-name: slideFilter;
    font-size: 15px;
    padding: 2px;
    transition: all 0.1 ease-in-out;
  };
  
  @keyframes slideFilter {
    from {
      transform: translateY(-100px);
  };
    to {
      transform: translateY(auto);
    };
  };

  input {
    border-radius: 5px;
    width: 20%;
  };

  select {
    border-radius: 5px;
    margin-top: 3px;
    text-align: center;
    width: 15%;
  };


@media screen and (max-width: 768px) {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 142px;
  position: fixed;
  top: 1px;
  width: 97%;
  z-index: 0;
  
  input, select {
    animation-duration: 0.5s;
    animation-name: slideFilter;
    font-size: 15px;
    padding: 2px;
    transition: all 0.1 ease-in-out;
  };
  
  @keyframes slideFilter {
    from {
      transform: translateY(-90px);
  }
    to {
      transform: translateY(auto);
    };
  };

  input {
    border-radius: 5px;
    width: 50%;
  };

  select {
    border-radius: 5px;
    margin-top: 3px;
    text-align: center;
    width: 40%;
  };
};
`;

export default SFilter;
