import styled from 'styled-components';
import backgroundScreen from '../../Utils/Images/background_other_screens.png';
import backgroundMobile from '../../Utils/Images/background_mobile.jpeg';

const SMain = styled.main`
  background-image: url(${backgroundScreen});
  background-attachment: fixed;
  background-size: 100% 100%;
  padding: 114px 0px 15px 0px;
  z-index: 1;

  article {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 60px 30px 60px;
    padding-top: 20px;
  };

  article a img {
    display: flex;
    justify-content: center;
    padding: 5px 8px;
    transition: all 0.3s ease-in-out;
    width: 95px;
  };
  
  article a img:hover {
    transform: translateY(-12px);
  };

  @media screen and (max-width: 768px) {
    background-image: url(${backgroundMobile});
    background-attachment: fixed;
    background-size: 100% 100%;
    margin-bottom: 20px;
    padding-bottom: 25px;
    z-index: 1;
    
    article {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: -18px 10px 0px 10px;
      padding: 12px 0px;
    }

    article a img {
      display: flex;
      justify-content: center;
      padding: 5px 8px;
      transition: all 0.3s ease-in-out;
      width: 69px;
    };
    
    article a img:hover, span {
      transform: translateY(-10px);
    }
  }
`;

export default SMain;
