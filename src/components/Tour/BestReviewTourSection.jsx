import { styled } from 'styled-components';

import Flex from '../layout/atom/Flex';
import Text from '../layout/atom/Text';

function BestReviewTourSection({ bestReviewData }) {
  return (
    <Flex column justifycontent="center" alignitems="center" style={{ gap: '15px', marginTop: '11px' }}>
      <St.IndivBestReviewTourWrapper src={bestReviewData.image}>
        <Text type="detail_regular_12" innerText={bestReviewData.itemType} style={{ color: '#fff' }} />
        <Flex justifycontent="space-between" alignitems="center">
          <Text type="body_bold_14" innerText={bestReviewData.name} style={{ color: '#fff' }} />
        </Flex>
      </St.IndivBestReviewTourWrapper>
    </Flex>
  );
}

export default BestReviewTourSection;

const St = {
  IndivBestReviewTourWrapper: styled.article`
    position: relative;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${({ src }) => src});
    background-size: cover;
    width: 345px;
    height: 103px;
    :nth-child(1) {
      position: absolute;
      top: 51px;
      left: 15px;
    }
    :nth-child(2) {
      position: absolute;
      top: 71px;
      left: 15px;
    }
  `,
};
