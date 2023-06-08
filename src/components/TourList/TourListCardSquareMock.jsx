import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { likeItData } from '../../recoil/tourListRecoil';
import { theme } from '../../styles/theme';
// import addCommasInNumbers from '../../utils/addCommasInNumber';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function TourListCardSquareMock({ tourData }) {
  const [likeIt, setLikeIt] = useRecoilState(likeItData);
  const navigate = useNavigate();

  const MoveToDetail = () => {
    navigate(`/detailTour/${tourData.id}`);
  };

  const ClickedLikeBtn = () => {
    setLikeIt(!likeIt);
  };

  return (
    <>
      <Flex onClick={MoveToDetail} column="column" style={{ margin: '36px 8px' }}>
        <St.ItemImgWrapper>
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
          {likeIt ? (
            <Icon
              type="heart_white"
              onClick={ClickedLikeBtn}
              style={{
                position: 'absolute',
                right: '9px',
                top: '11px',
              }}
            />
          ) : (
            <Icon
              type="heart_fill"
              onClick={ClickedLikeBtn}
              style={{
                position: 'absolute',
                right: '7px',
                top: '9px',
              }}
            />
          )}
          <Img
            type="img_paris"
            width="170px"
            height="170px"
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </St.ItemImgWrapper>

        <Text
          type="body_medium_14"
          innerText="(루브르) 10일 오후 가능, 루브르 박물관 전문 공인 가이..."
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
          <Text type="body_bold_14" innerText="5 " />
          <Text type="body_medium_14" innerText="(22)" />
        </Flex>
        <Text type="body_bold_16" innerText="230,000" />
        <Text type="detail_regular_12" innerText="파리 · 투어" style={{ color: `theme.Color.gray3` }} />
      </Flex>
    </>
  );
}

export default TourListCardSquareMock;

const St = {
  ItemImgWrapper: styled.div`
    position: relative;
  `,
};
