/* eslint-disable quote-props */
/* eslint-disable quotes */
import axios from 'axios';

const getAllCards = () => {
  const allCards = axios.get('https://api.clashroyale.com/v1/cards', {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  }).then((res) => console.log(res));
  return allCards;
};

export default getAllCards;
