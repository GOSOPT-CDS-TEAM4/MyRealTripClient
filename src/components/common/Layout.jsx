import { styled } from 'styled-components';

import Header from './Header';

function Layout({ children, headerType }) {
  return (
    <St.LayoutWrapper>
      <Header headerType={headerType} />
      {children}
    </St.LayoutWrapper>
  );
}

export default Layout;

const St = {
  LayoutWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    /* background: ${({ theme }) => theme.Color.blue2}; */
    width: 100vw;
    /* height: 100vh; */

    overflow-y: scroll;
  `,
};
