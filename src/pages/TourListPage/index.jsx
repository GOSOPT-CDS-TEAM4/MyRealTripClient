import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import TourListHeaderSection from '../../components/TourList/TourListHeaderSection';
import TourListItemSection from '../../components/TourList/TourListItemSection';
import TourListSortNav from '../../components/TourList/TourListSortNav';

function TourListPage() {
  const [tourList, setTourList] = useState();

  useEffect(() => {
    getTourList();
  }, []);

  async function getTourList() {
    try {
      const response = await axios.get(
        `http://15.165.135.183:8080/api/tour/filter?city=%ED%8C%8C%EB%A6%AC&order=%EC%B6%94%EC%B2%9C%EC%88%9C&minimumPrice=100&maximumPrice=100000000000&tourType=all&page=1`,
      );
      const data = response.data.data;
      setTourList(data.tourList);
      console.log(tourList);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <TourListHeaderSection />
      <St.PageWrapper>
        <TourListSortNav />
        <TourListItemSection tourList={tourList} />
      </St.PageWrapper>
    </>
  );
}

export default TourListPage;

const St = {
  PageWrapper: styled.section`
    height: 100%;
    margin: 0 auto;
    padding: 15px;
    ${({ theme }) => theme.Text.title_bold_24};
  `,
  NavWrapper: styled.nav`
    width: 100vw;
  `,
};
