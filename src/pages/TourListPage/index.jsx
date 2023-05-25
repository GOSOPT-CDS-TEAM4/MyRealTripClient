import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { getRawTourList } from '../../api/tourListAxios';
import TourListHeaderSection from '../../components/TourList/TourListHeaderSection';
import TourListItemSection from '../../components/TourList/TourListItemSection';
import TourListSortNav from '../../components/TourList/TourListSortNav';
import { tourListData, tourFullData } from '../../recoil/tourListRecoil';

function TourListPage() {
  const [tourList, setTourList] = useRecoilState(tourListData);
  const [tour, setTour] = useRecoilState(tourFullData);

  async function getRawTourInfo() {
    const response = await getRawTourList();
    setTourList(response.data.tourList);
    setTour(response.data);
  }

  useEffect(() => {
    getRawTourInfo();
  }, []);

  return (
    <>
      <TourListHeaderSection />
      <St.PageWrapper>
        <TourListSortNav />
        <TourListItemSection />
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
