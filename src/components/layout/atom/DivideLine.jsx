import { styled } from 'styled-components';

import Icon from './Icon';

function DivideLine({ margintop, marginbottom }) {
  return (
    <St.Line margintop={margintop} marginbottom={marginbottom}>
      <Icon type="line" />
    </St.Line>
  );
}

export default DivideLine;

const St = {
  Line: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: ${({ margintop }) => margintop};
    margin-bottom: ${({ marginbottom }) => marginbottom};
  `,
};
