import styled from 'styled-components';
import { header } from '../../Styles';

const SHeader = styled.header`
  background-color: ${header.background};
  border-bottom: solid 5px black;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  div:nth-child(1) {
    display: flex;
    align-items: center;
  };

  div:nth-child(1) img {
      width: 120px;
      transition: all 0.1 ease-in-out;
    };

  div:nth-child(1) img:hover {
    transform: translateY(2px);
  };

  div:nth-child(1) span {
    color: ${header.fontColor};
    font-size: 15px;
    margin-left: 20px
  };

  button {
    align-items: center;
    background-color: ${header.background};
    cursor: pointer;
    display: flex;
    font-size: 40px;
    margin-right: 90px;
    transition: all 0.4 ease-in-out;
  };

  button:hover {
      transform: translateY(4px);
  };

  @media screen and (max-width: 768px) {
    background-color: ${header.background};
    border-bottom: solid 5px black;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    div:nth-child(1) {
      display: flex;
      align-items: center;
    };

    div:nth-child(1) img {
      width: 96px;
      transition: all 0.1 ease-in-out;
    };

    div:nth-child(1) img:hover {
      transform: translateY(2px);
    }

    div:nth-child(1) span {
      color: ${header.fontColor};
      font-size: 12px;
      margin-left: 10px
    };

    button {
      align-items: center;
      background-color: ${header.background};
      cursor: pointer;
      display: flex;
      font-size: 35px;
      margin-right: 38px;
      transition: all 0.4 ease-in-out;
    };

    button:hover {
      transform: translateY(4px);
    }
  };
`;

export default SHeader;
