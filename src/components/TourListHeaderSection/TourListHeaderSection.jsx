import React from 'react';
import { styled } from 'styled-components';

function TourListHeaderSection() {
  return (
    <St.HeaderWrapper>
      <St.Title> 파리의 투어 </St.Title>
      <St.BtnFilterWrapper>
        <St.FilterBtn> 일정 </St.FilterBtn>
        <St.FilterBtn> 가격 </St.FilterBtn>
        <St.FilterBtn> 투어 형태 </St.FilterBtn>
        <St.FilterBtn> 여행지 </St.FilterBtn>
        <St.FilterBtn>
          <img src="assets/icon/tune.png" alt="tuneIcon" />
        </St.FilterBtn>
      </St.BtnFilterWrapper>
      <hr />
    </St.HeaderWrapper>
  );
}

export default TourListHeaderSection;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.Text.Header.title_bold_24};
    margin: 0px 17px;
  `,
  BtnFilterWrapper: styled.div`
    display: flex;
    margin: 14px 15px;
  `,
  FilterBtn: styled.button`
    border-color: #dee2e6; //이거 테마 바꿔달라고 하고
    border-width: 1px;
    ${({ theme }) => theme.Color.white};
    ${({ theme }) => theme.Text.Body.body_medium_14};
    padding: 10px 18px;
    margin: 0px 6px;
    border-radius: 20px;
    outline: 0px;
  `,
};
