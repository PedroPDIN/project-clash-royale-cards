import styled from 'styled-components';
import backgroundScreen from '../../Utils/Images/background_other_screens.png';
import backgroundMobile from '../../Utils/Images/background_mobile.jpeg';

const SMain = styled.main`
  background-image: url(${backgroundScreen});
  background-attachment: fixed;
  background-size: 100% 100%;
  height: 100vh;
  padding: 114px 0px 15px 0px;
  z-index: 1;

  article {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border: 3px solid black;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 89%;
    margin: -20px 50px 0px 50px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  };

  article a:after {
    background-color: white;
    border-radius: 10px;
    content: attr(aria-label);
    color: black;
    font-size: 10px;
    margin-top: -1em;
    padding: 5px;
    position: absolute;
    opacity: 0; 
    text-align: center;
    transition: 0.5s ease-in-out;
    width: 100px;
   } 

  article a:hover::after {
    opacity: 1;
    position: absolute;
    transform: translateY(6px);
  }

  article a img {
    display: flex;
    justify-content: center;
    padding: 5px 8px;
    transition: all 0.3s ease-in-out;
    width: 112px;
  };
  
  article a img:hover {
    transform: translateY(-12px);
  };

  @media screen and (max-width: 768px) {
    background-image: url(${backgroundMobile});
    background-attachment: fixed;
    background-size: 100% 100%;
    height: 100vh;
    z-index: 1;
    
    article {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 96%;
      margin: -36px 10px 0px 10px;
      padding: 12px 0px;
    }

     article a:after {
       background-color: white;
       border-radius: 10px;
       content: attr(aria-label);
       color: black;
       font-size: 7px;
       margin-top: -1em;
       padding: 5px;
       position: absolute;
       opacity: 0; 
       text-align: center;
       transition: 0.5s ease-in-out;
       width: 63px;
    } 

    article a:hover::after {
      opacity: 1;
      position: absolute;
      transform: translateY(6px);
    }

    article a img {
      display: flex;
      justify-content: center;
      padding: 5px 8px;
      transition: all 0.3s ease-in-out;
      width: 73px;
    };
    
    article a img:hover, span {
      transform: translateY(-10px);
    }
  }
`;

export default SMain;
