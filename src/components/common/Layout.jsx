import { styled } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Flex from '../layout/atom/Flex';

function Layout({ children, headerType }) {
  return (
    <Flex justifycontent="center" style={{ width: '100vw', height: 'fit-content' }}>
      <St.LayoutWrapper>
        <Header headerType={headerType} />
        {children}
        <Footer />
      </St.LayoutWrapper>
    </Flex>
  );
}

export default Layout;

const St = {
  LayoutWrapper: styled.div`
    position: relative;
    /* position: absolute; */
    top: 0;
    /* left: 50%; */
    /* transform: translate(-50%); */
    /* background: ${({ theme }) => theme.Color.blue2}; */
    width: 100%;
    /* height: 100vh; */

    overflow-x: hidden;
    overflow-y: scroll;
    @media screen and (min-width: 430px) {
      width: 430px;
    }
  `,
};
