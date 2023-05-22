import React from 'react';
import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function TourListCardSquare() {
  return (
    <>
      <Flex column="column" style={{ margin: '36px 8px' }}>
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
          <Icon
            type="heart_white"
            style={{
              position: 'absolute',
              right: '9px',
              top: '11px',
            }}
          />
          <img
            className="CardImg"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MjFfMTEw/MDAxNTM0ODM4OTUwNjI3.enJDiMDXYbjE9KikcZM9FCBEUfhYGrSSxB8fGpd9_XEg.O1sh2G1EoZzSj91g4P7Wux6b7ZU-E5fwLIXShK11Qg4g.JPEG.tiratravel/image_3975768381534827773050.jpg?type=w800"
            alt=""
          />
        </St.ItemImgWrapper>

        <Text
          type="body_medium_14"
          innerText="(루브르) 10일 오후 가능, 루브르 박물관 전문 공인 가이..."
          style={{ width: '165px', color: `$theme.Color.black` }}
        />
        <Flex alignitems="start">
          <Icon type="star" />
          <Text type="body_bold_14" innerText="4.9" />
          <Text type="body_medium_14" innerText="(2407)" />
        </Flex>
        <Text type="body_bold_16" innerText="55,000원" />
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
