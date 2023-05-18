import { styled } from 'styled-components';

import BottomSheet from '../components/TourList/BottomSheet/BottomSheet';
import TourListHeaderSection from '../components/TourList/TourListHeaderSection/TourListHeaderSection';
import TourListItemSection from '../components/TourList/TourListItemSection/TourListItemSection';
import TourListSortNav from '../components/TourList/TourListSortNav/TourListSortNav';

function TourListPage() {
  return (
    <>
      <St.PageWrapper>
        <TourListHeaderSection />
        <TourListSortNav />
        <TourListItemSection />
      </St.PageWrapper>
      <BottomSheet />
    </>
  );
}

export default TourListPage;

const St = {
  PageWrapper: styled.section`
    height: 100%;
    margin: 0 auto;
    padding: 15px 15px;
    ${({ theme }) => theme.Text.title_bold_24};
  `,
  NavWrapper: styled.nav`
    width: 100vw;
  `,
};
