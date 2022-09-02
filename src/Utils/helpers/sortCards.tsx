import ICards from '../../Interfaces/Cards';

const cardSort = (a: ICards, b: ICards): number => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export default cardSort;
