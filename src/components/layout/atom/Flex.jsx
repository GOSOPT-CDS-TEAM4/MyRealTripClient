import { styled } from 'styled-components';

function Flex({ children, column, justifycontent, alignitems, style }) {
  return (
    <St.FlexWrapper column={column} justifycontent={justifycontent} alignitems={alignitems} style={style}>
      {children}
    </St.FlexWrapper>
  );
}

export default Flex;

const St = {
  FlexWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    justify-content: ${({ justifycontent }) => justifycontent || 'flex-start'};
    align-items: ${({ alignitems }) => alignitems || 'flex-start'};
  `,
};
