import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import IndivGoods from './IndivGoods';
import axiosInstance from '../../api/axios';
import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';
function ParisGoodsSection() {
  const [randomData, setRandomData] = useState([]);

  const getRandomData = async () => {
    try {
      const data = await axiosInstance.get('/api/tour/random', {
        headers: {
          Location: 'paris',
        },
      });
      setRandomData(data.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRandomData();
  }, []);
  return (
    <St.GoodsSectionWrapper>
      <Flex justifycontent="space-between" alignitems="center">
        <Text type="title_bold_18" innerText="파리 관심 급상승 상품" />
        <Flex alignitems="center" style={{ width: 'auto' }}>
          <Text type="body_bold_14" innerText="더보기" style={{ color: theme.Color.blue1 }} />
          <Icon type="arrow_right_blue" />
        </Flex>
      </Flex>
      {randomData[0] && (
        <St.IndivGoodsWrapper>
          {randomData.map((indivgoods, idx) => (
            <IndivGoods randomData={indivgoods} key={idx} />
          ))}
        </St.IndivGoodsWrapper>
      )}
    </St.GoodsSectionWrapper>
  );
}

export default ParisGoodsSection;

const St = {
  GoodsSectionWrapper: styled.section`
    margin-top: 32px;
    width: 100%;
  `,
  IndivGoodsWrapper: styled.section`
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  EllipsisText: styled(Text)`
    display: inline-block;
    width: 149px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
