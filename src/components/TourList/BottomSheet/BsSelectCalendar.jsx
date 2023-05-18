import React from 'react';
import { styled } from 'styled-components';

function BsSelectCalendar() {
  return (
    <>
      <ST.HorizonLine />
      <div>
        <span>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </div>
      <ST.HorizonLine />
      <span>2023.05</span>
      <div></div>
    </>
  );
}

export default BsSelectCalendar;

const ST = {
  HorizonLine: styled.div`
    width: 100%;
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
  `,
};
