import styled from 'styled-components';
import { footer } from '../../Styles/ColorPattern';

const SFooter = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: ${footer.background};
  position: fixed;
  padding: 8px 0px 10px 0px;
  width: 100%;
  

  div:nth-child(1) {
    align-items: center;
    display: flex;
  };

  div:nth-child(1) .social_person {
    align-items: center;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    margin-left: 25px;
    width: 80px;
  };

  div:nth-child(1) .social_person a {
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  };

  div:nth-child(1) span {
    justify-content: center;
    display: flex;
    height: 35px;
    color: ${footer.fontColor};
    flex-direction: column;
    font-size: 15px;
    margin-left: 80px;
  };

  div:nth-child(2) img {
    margin-right: 10em;
    transition: all 0.1 ease-in-out;
    width: 16vh;
  };

  div:nth-child(2) img:hover {
    transform: translateY(2px);
  };

  @media screen and (max-width: 768px) {
    align-items: center;
    bottom: 0;
    background-color: ${footer.background};
    border-top: solid 2px black;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    position: fixed;
    padding: 8px 0px 10px 0px;
    width: 100%;

    div:nth-child(1) {
      align-items: center;
      display: flex;
    };

    div:nth-child(1) .social_person {
      align-items: center;
      display: flex;
      font-size: 20px;
      justify-content: start;
      margin-left: 20px;
    };

    div:nth-child(1) .social_person a {
      align-items: center;
      display: flex;
      color: #ffffff;
      flex-direction: column;
      margin-right: 10px;
    };

    div:nth-child(1) span {
      justify-content: end;
      display: flex;
      height: 35px;
      color: ${footer.fontColor};
      flex-direction: column;
      font-size: 10px;
      margin-left: 20px;
    };

    div:nth-child(2) img {
      margin-right: 20px;
      transition: all 0.1 ease-in-out;
      width: 12vh;
    };

    div:nth-child(2) img:hover {
      transform: translateY(2px);
    };
  };
`;

export default SFooter;
