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
    };

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
    };
  };
`;

export default SHeader;
