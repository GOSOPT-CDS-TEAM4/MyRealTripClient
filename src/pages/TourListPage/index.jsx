import { styled } from 'styled-components';

import TourListAxios from '../../api/tourListAxios';
import Layout from '../../components/common/Layout';
import TourListHeaderSection from '../../components/TourList/TourListHeaderSection';
import TourListItemSection from '../../components/TourList/TourListItemSection';
import TourListSortNav from '../../components/TourList/TourListSortNav';

function TourListPage() {
  return (
    <Layout headerType="blue">
      <TourListAxios />
      <TourListHeaderSection />
      <St.PageWrapper>
        <TourListSortNav />
        <TourListItemSection />
      </St.PageWrapper>
    </Layout>
  );
}

export default TourListPage;

const St = {
  PageWrapper: styled.section`
    height: 100%;
    margin: 0 auto;
    ${({ theme }) => theme.Text.title_bold_24};
  `,
  NavWrapper: styled.nav`
    width: 100vw;
  `,
};
