import { atom } from 'recoil';

export const tourListData = atom({
  key: 'tourListData',
  default: '',
});

export const tourFullData = atom({
  key: 'tourFullData',
  default: '',
});

export const cityNameData = atom({
  key: 'cityNameData',
  default: '파리',
});

export const sortData = atom({
  key: 'sortData',
  default: '추천순',
});
export const pageData = atom({
  key: 'pageData',
  default: '1',
});
export const tourTypeData = atom({
  key: 'tourTypeData',
  default: 'all',
});
export const minimumPriceData = atom({
  key: 'minimumPriceData',
  default: 2000,
});
export const maximumPriceData = atom({
  key: 'maximumPriceData',
  default: 390000,
});
export const selectedDateData = atom({
  key: 'selectedDateData',
  default: [],
});

export const setModalData = atom({
  key: 'setModalData',
  default: false,
});
export const clickedDateData = atom({
  key: 'clickedNavData',
  default: false,
});
export const clickedPriceData = atom({
  key: 'clickedPriceData',
  default: false,
});

export const clickedTypeData = atom({
  key: 'clickedTypeData',
  default: false,
});
export const likeItData = atom({
  key: 'likeItData',
  default: false,
});
