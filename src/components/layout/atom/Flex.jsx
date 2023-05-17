import { styled } from 'styled-components';

function Flex({ children, column, justifyContent, alignItems }) {
  return (
    <St.FlexWrapper column={column} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </St.FlexWrapper>
  );
}

export default Flex;

const St = {
  FlexWrapper: styled.div`
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  `,
};
