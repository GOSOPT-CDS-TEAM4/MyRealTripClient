import React from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function TourListCardSquare({ tourData }) {
  const navigate = useNavigate();
  const MoveToDetail = () => {
    navigate(`/detailTour/${tourData.id}`);
  };
  return (
    <>
      <Flex onClick={MoveToDetail} column="column" style={{ margin: '36px 8px' }}>
        <St.ItemImgWrapper>
          {tourData.freeCancel && (
            <Text
              type="detail_medium_12"
              innerText="무료취소"
              style={{
                position: 'absolute',
                margin: '8px',
                borderRadius: '5px',
                padding: '2px 8px',
                backgroundColor: `${theme.Color.gray9}`,
              }}
            />
          )}
          <Icon
            type="heart_white"
            style={{
              position: 'absolute',
              right: '9px',
              top: '11px',
            }}
          />
          <img className="CardImg" src={`${tourData.image}`} alt="" />
        </St.ItemImgWrapper>

        <Text
          type="body_medium_14"
          innerText={`${tourData.name}`}
          style={{
            width: '165px',
            color: `$theme.Color.black`,
            height: '40px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        />
        <Flex alignitems="start">
          <Icon type="star" />
          <Text type="body_bold_14" innerText={Number(`${tourData.totalRating}`).toFixed(2)} />
          <Text type="body_medium_14" innerText={`(${tourData.reviewNumber})`} />
        </Flex>
        <Text
          type="body_bold_16"
          innerText={`${tourData.price.originalPrice}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
        <Text type="detail_regular_12" innerText="파리 · 투어" style={{ color: `theme.Color.gray3` }} />
      </Flex>
    </>
  );
}

export default TourListCardSquare;

const St = {
  ItemImgWrapper: styled.div`
    position: relative;
    .CardImg {
      border-radius: 10px;
      width: 170px;
      height: 170px;
      object-fit: cover;
    }
  `,
};
