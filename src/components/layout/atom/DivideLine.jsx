import { styled } from 'styled-components';
function DivideLine({ margin }) {
  return <St.Line margin={margin} />;
}

export default DivideLine;

const St = {
  Line: styled.div`
    display: flex;
    width: 345px;

    border: 1px solid ${({ theme }) => theme.Color.gray8};
    margin: ${({ margin }) => margin};
  `,
};
