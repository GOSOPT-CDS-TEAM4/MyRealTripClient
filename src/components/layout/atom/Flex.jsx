import { styled } from 'styled-components';

function Flex({ children, column, justifycontent, alignitems, style, onClick }) {
  return (
    <St.FlexWrapper
      column={column}
      justifycontent={justifycontent}
      alignitems={alignitems}
      style={style}
      onClick={onClick}>
      {children}
    </St.FlexWrapper>
  );
}

export default Flex;

const St = {
  FlexWrapper: styled.div`
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    align-items: ${({ alignitems }) => alignitems || 'flex-start'};
    justify-content: ${({ justifycontent }) => justifycontent || 'flex-start'};
  `,
};
