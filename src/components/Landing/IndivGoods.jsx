import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

import axiosInstance from '../../api/axios';
import { theme } from '../../styles/theme';
import addCommasInNumbers from '../../utils/addCommasInNumber';
import EllipsisText from '../layout/atom/EllipsisText';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import ImgWithSrc from '../layout/atom/ImgWithSrc';
import Text from '../layout/atom/Text';

function IndivGoods({ randomData }) {
  const navigate = useNavigate();
  const [heartState, setHeartState] = useState(randomData.isScrap ? 'heart_fill' : 'heart_empty');
  const handleScrap = async (method, tourId) => {
    switch (method) {
      case 'POST':
        await axiosInstance.post('/api/scrap', { tourId }).then((res) => {
          console.log(res);
          if (res.status <= 300) {
            setHeartState('heart_fill');
          }
        });
        return;
      case 'DELETE':
        await axiosInstance.delete(`/api/scrap/${tourId}`).then((res) => {
          console.log(res);
          if (res.status <= 300) {
            setHeartState('heart_empty');
          }
        });
        return;
    }
  };

  return (
    <St.IndivGoodsWrapper onClick={() => navigate(`/detailTour/2`)}>
      <Flex column alignitems="start">
        <ImgWithSrc src={randomData.image} height="103px" width="149px" />
        <Icon
          type={heartState}
          onClick={() => handleScrap(heartState === 'heart_fill' ? 'DELETE' : 'POST', randomData.id)}
        />
        <Text
          type="detail_regular_12"
          innerText={randomData.itemType}
          style={{ marginTop: '9px', color: theme.Color.gray4 }}
        />
        <EllipsisText type="body_bold_14" innerText={randomData.name} width="149px" />
        <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
          <Text
            type="body_bold_14"
            innerText={`${addCommasInNumbers(
              randomData.price.discountPrice !== null ? randomData.price.originalPrice : randomData.price.discountPrice,
            )}원`}
          />
          {randomData.price.discountFlag && (
            <Text
              type="detail_regular_12"
              innerText={`${addCommasInNumbers(randomData.price.originalPrice)}원`}
              style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}`, marginLeft: '5px' }}
            />
          )}
        </Flex>
      </Flex>
    </St.IndivGoodsWrapper>
  );
}

export default IndivGoods;

const St = {
  IndivGoodsWrapper: styled.article`
    position: relative;
    margin-top: 12px;
    cursor: pointer;
    width: fit-content;
    div {
      border-radius: 5px;
      img:nth-child(2) {
        position: absolute;
        top: 8px;
        right: 10px;
        z-index: 999;
      }
    }
  `,
  EllipsisText: styled.span`
    ${({ type }) => theme.Text[type]}
    display: inline-block;
    width: 149px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
