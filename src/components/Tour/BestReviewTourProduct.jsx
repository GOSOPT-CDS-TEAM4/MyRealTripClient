import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function BestReviewTourProduct() {
  return (
    <Flex justifycontent="space-between" alignitems="center" style={{ marginTop: '41px' }}>
      <Text type="title_bold_18" innerText="Best 리뷰 인기 투어 상품" />
      <Flex alignitems="center" style={{ width: 'auto' }}>
        <Text type="body_bold_14" innerText="더보기" style={{ color: theme.Color.blue1 }} />
        <Icon type="arrow_right_blue" />
      </Flex>
    </Flex>
  );
}

export default BestReviewTourProduct;
