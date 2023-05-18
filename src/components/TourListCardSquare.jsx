import React from 'react';
import { styled } from 'styled-components';

function TourListCardSquare() {
  return (
    <>
      <St.CardWrapper>
        <St.ItemImgWrapper>
          <span> 무료취소 </span>
          <img className="heartBtn" src="assets/icon/heart_white.png" alt="" />
          <img
            className="CardImg"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MjFfMTEw/MDAxNTM0ODM4OTUwNjI3.enJDiMDXYbjE9KikcZM9FCBEUfhYGrSSxB8fGpd9_XEg.O1sh2G1EoZzSj91g4P7Wux6b7ZU-E5fwLIXShK11Qg4g.JPEG.tiratravel/image_3975768381534827773050.jpg?type=w800"
            alt=""
          />
        </St.ItemImgWrapper>

        <St.ItemRating>
          <img src="assets/icon/star.png" alt="" />
          4.9
          <span> (2407) </span>
        </St.ItemRating>
        <St.ItemPrice>55,000원</St.ItemPrice>
        <St.ItemCategory>파리 · 투어</St.ItemCategory>
      </St.CardWrapper>
    </>
  );
}

export default TourListCardSquare;

const St = {
  CardWrapper: styled.article`
    margin: 36px 8px;
  `,
  ItemImgWrapper: styled.div`
    position: relative;
    > span {
      position: absolute;
      margin: 8px;
      border-radius: 5px;
      padding: 2px 8px;
      background-color: ${({ theme }) => theme.Color.gray9};
      ${({ theme }) => theme.Text.detail_medium_12};
    }
    .CardImg {
      width: 170px;
      object-fit: cover;
      border-radius: 10px;
    }
    .heartBtn {
      position: absolute;
      right: 9px;
      top: 11px;
    }
  `,
  ItemRating: styled.div`
    display: flex;
    ${({ theme }) => theme.Text.body_bold_14};
    > span {
      ${({ theme }) => theme.Text.body_medium_14};
      color: ${({ theme }) => theme.Color.gray1};
    }
  `,
  ItemPrice: styled.div`
    ${({ theme }) => theme.Text.body_bold_16};
  `,
  ItemCategory: styled.div`
    ${({ theme }) => theme.Text.detail_regular_12};
    color: ${({ theme }) => theme.Color.gray3};
  `,
};
