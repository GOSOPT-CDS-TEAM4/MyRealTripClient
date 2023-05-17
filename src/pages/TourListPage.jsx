import { styled } from 'styled-components';

import TourListHeaderSection from '../components/TourListHeaderSection/TourListHeaderSection';
import TourListItemSection from '../components/TourListItemSection';
import TourListSortNav from '../components/TourListSortNav';

function TourListPage() {
  return (
    <St.PageWrapper>
      <TourListHeaderSection />
      <TourListSortNav />
      <TourListItemSection />
    </St.PageWrapper>
  );
}

export default TourListPage;

const St = {
  PageWrapper: styled.section`
    width: 385px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 15px;
    ${({ theme }) => theme.Text.title_bold_24};
  `,
  NavWrapper: styled.nav`
    width: 100vw;
  `,
};
