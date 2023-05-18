import { styled } from 'styled-components';

// import BottomSheet from '../components/BottomSheet/BottomSheet';
import TourListHeaderSection from '../components/TourListHeaderSection/TourListHeaderSection';
import TourListItemSection from '../components/TourListItemSection';
import TourListSortNav from '../components/TourListSortNav';

function TourListPage() {
  return (
    <>
      <St.PageWrapper>
        <TourListHeaderSection />
        <TourListSortNav />
        <TourListItemSection />
      </St.PageWrapper>
      {/* <BottomSheet /> */}
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
