import styled from 'styled-components';
import colorsFooter from '../../styles';

const SFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colorsFooter.background};
  bottom: 0;
  position: absolute;
  padding: 15px 0px 30px 0px;
  width: 100%;

  div:nth-child(1) span {
    color: ${colorsFooter.colorWhite};
    font-size: 15px;
    margin-left: 80px;
  };

  div:nth-child(2) img {
    width: 16vh;
    margin-right: 10em;
  };

  @media screen and (max-width: 768px) {
    align-items: center;
    background-color: ${colorsFooter.background};
    bottom: 0;
    position: absolute;
    padding: 10px 0px 22px 0px;
    width: 100%;

    div:nth-child(1) span {
      color: ${colorsFooter.colorWhite};
      font-size: 10px;
      margin-left: 20px;
    };

    div:nth-child(2) img {
      width: 12vh;
      margin-right: 20px;
    };
  };
`;

export default SFooter;
