import { styled } from 'styled-components';

import TourListHeaderSection from '../../components/TourList/TourListHeaderSection';
import TourListItemSection from '../../components/TourList/TourListItemSection';
import TourListSortNav from '../../components/TourList/TourListSortNav';

function TourListPage() {
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
