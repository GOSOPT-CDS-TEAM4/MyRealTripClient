import { styled } from 'styled-components';

import TourListHeaderSection from '../components/TourListHeaderSection/TourListHeaderSection';

function TourListPage() {
  return (
    <St.PageWrapper>
      <TourListHeaderSection />
    </St.PageWrapper>
  );
}

export default TourListPage;

const St = {
  PageWrapper: styled.section`
    padding: 15px 15px;
    width: 100vw;
    ${({ theme }) => theme.Text.Header.title_bold_24};
    /* background-color: red; */
  `,
  NavWrapper: styled.nav`
    padding: 15px 15px;
  `,
};
