import React from 'react';
import { styled } from 'styled-components';

function TourListHeaderSection() {
  return (
    <>
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
      </St.HeaderWrapper>
      {/* horizonLine 양쪽 마진 지우기 */}
      <St.HorizonLine />
    </>
  );
}

export default TourListHeaderSection;

const St = {
  HeaderWrapper: styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.Text.title_bold_24};
    margin: 17px 0px;
  `,
  BtnFilterWrapper: styled.div`
    width: 100%;
    display: flex;
  `,
  FilterBtn: styled.button`
    all: unset;
    margin-right: 6px;
    outline: 0px;
    border: 1px solid;
    border-radius: 20px;

    border-color: #dee2e6; //이거 테마 바꿔달라고 하고
    background-color: ${({ theme }) => theme.Color.white};
    padding: 10px 18px;
    ${({ theme }) => theme.Text.body_bold_14};
    color: ${({ theme }) => theme.Color.black};
  `,
  HorizonLine: styled.div`
    width: 100%;
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
  `,
};
