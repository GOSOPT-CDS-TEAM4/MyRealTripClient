import { styled } from 'styled-components';

function Flex({ children, column, justify_content, align_items, style }) {
  return (
    <St.FlexWrapper column={column} justify_content={justify_content} align_items={align_items} style={style}>
      {children}
    </St.FlexWrapper>
  );
}

export default Flex;

const St = {
  FlexWrapper: styled.div`
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    align-items: ${({ align_items }) => align_items || 'flex-start'};
    justify-content: ${({ justify_content }) => justify_content || 'flex-start'};
  `,
};
