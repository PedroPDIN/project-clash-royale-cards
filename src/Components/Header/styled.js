import styled from 'styled-components';
import { header } from '../../Styles';

const SHeader = styled.header`
  background-color: ${header.background};
  border-bottom: solid 5px black;
  display: flex;
  justify-content: space-between;
  padding: 10px 35px;

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
    margin-right: 20px;
    transition: all 0.4 ease-in-out;
  };

  button:hover {
      transform: translateY(-4px);
  };

  @media screen and (max-width: 768px) {
    border-bottom: solid 4px black;
    padding: 5px 12px;

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
      margin-left: 14px
    };

    button {
      align-items: center;
      background-color: ${header.background};
      cursor: pointer;
      display: flex;
      font-size: 35px;
      margin-right: 5px;
      transition: all 0.4 ease-in-out;
    };

    button:hover {
      transform: translateY(-4px);
    }
  };
`;

export default SHeader;
