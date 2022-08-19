import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
  padding: 0px 20px 0px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
  };

  div:nth-child(1) img {
      width: 110px;
    };

  div:nth-child(1) span {
    color: black;
    font-size: 15px;
    margin-left: 10px
  };

  div:nth-child(2) {
    align-items: center;
    display: flex;
    font-size: 37px;
    margin-right: 8px;
  };

  @media screen and (max-width: 768px) {
    padding: 0px 8px 0px;
    margin: 8px 0px;

    div:nth-child(1) {
      display: flex;
      align-items: center;
    };

    div:nth-child(1) img {
      width: 92px;
    };

    div:nth-child(1) span {
      color: black;
      font-size: 13px;
      margin-left: 5px
    };

    div:nth-child(2) {
      align-items: center;
      display: flex;
      font-size: 35px;
      margin-right: 5px;
    };
  };
`;

export default SHeader;
