import styled from 'styled-components';
import { header } from '../../Styles/ColorPattern';

const SHeader = styled.header`
  background-color: ${header.background};
  border-bottom: solid 5px black;
  display: flex;
  justify-content: space-between;
  padding: 4px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

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
    margin: -7px 60px 0px 0px;
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
    padding: 6px 5px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;

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
      align-items: flex-start;
      display: flex;
      color: ${header.fontColor};
      font-size: 9px;
      margin: 18px 0px 0px 3px;
    };

    button {
      align-items: center;
      background-color: ${header.background};
      cursor: pointer;
      display: flex;
      font-size: 35px;
      margin: -7px 10px 0px 0px;
      transition: all 0.4 ease-in-out;
    };

    button:hover {
      transform: translateY(4px);
    }
  };
`;

export default SHeader;
