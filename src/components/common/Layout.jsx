import { styled } from 'styled-components';

import Footer from './Footer';
import Header from './Header';

function Layout({ children, headerType }) {
  return (
    <St.LayoutWrapper>
      <Header headerType={headerType} />
      {children}
      <Footer />
    </St.LayoutWrapper>
  );
}

export default Layout;

const St = {
  LayoutWrapper: styled.div`
    /* position: absolute; */
    top: 0;
    /* left: 50%; */
    /* transform: translate(-50%); */
    /* background: ${({ theme }) => theme.Color.blue2}; */
    width: 100vw;
    /* height: 100vh; */

    overflow-x: hidden;
    overflow-y: scroll;
  `,
};
