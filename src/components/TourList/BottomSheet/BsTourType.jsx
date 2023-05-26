import React, { useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { clickedTypeData, setModalData, tourTypeData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BsTourType() {
  const [modal, setModal] = useRecoilState(setModalData);
  const [tourType, setTourType] = useRecoilState(tourTypeData);
  const [handleType, setHandleType] = useState('all');
  const [clickedType, setClickedType] = useRecoilState(clickedTypeData);

  const handleTourType = (e) => {
    setHandleType(e.target.value);
  };
  const clickedTourType = () => {
    setTourType(handleType);
    setModal(false);
    setClickedType(true);
    document.body.style.overflowY = 'auto';
  };

  const resetTourType = () => {
    setTourType('all');
    setModal(false);
    document.body.style.overflowY = 'auto';
    setClickedType(false);
  };

  return (
    <>
      <St.TourTypeWrapper>
        <label>
          <input
            type="radio"
            name="tour-type-radio"
            value="all"
            onChange={handleTourType}
            checked={handleType === 'all'}
          />
          <Text type="body_regular_14" innerText="전체" style={{ color: theme.Color.gray2 }} />
        </label>
        <label>
          <input
            type="radio"
            name="tour-type-radio"
            value="group"
            onChange={handleTourType}
            checked={handleType === 'group'}
          />
          <Text type="body_regular_14" innerText="그룹" style={{ color: theme.Color.gray2 }} />
        </label>
        <label>
          <input
            type="radio"
            name="tour-type-radio"
            value="private"
            onChange={handleTourType}
            checked={handleType === 'private'}
          />
          <Text type="body_regular_14" innerText="프라이빗" style={{ color: theme.Color.gray2 }} />
        </label>
      </St.TourTypeWrapper>

      <St.BottomSheetFooter>
        <button className="refresh" onClick={resetTourType}>
          <Icon type="ic_reset" style={{ marginLeft: '5px' }} />
          <Text type="body_bold_14" innerText="초기화" />
        </button>
        <button className="submit" onClick={clickedTourType}>
          <Text type="body_bold_14" innerText="적용하기" />
        </button>
      </St.BottomSheetFooter>
    </>
  );
}

export default BsTourType;

const St = {
  TourTypeWrapper: styled.section`
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    > label {
      margin-bottom: 27px;
      margin-left: 38px;
    }
  `,
  BottomSheetFooter: styled.div`
    display: flex;
    width: 380px;
    gap: 6px;
    color: ${({ theme }) => theme.Color.gray4};
    margin: 10px 18px;
    .refresh {
      display: flex;
      width: 87px;
      align-items: center;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.Color.gray8};
      padding: 11px 14px 11px 14px;
      border-radius: 4px;
    }
    .submit {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      width: 80%;
      padding: 11px 14px 11px 14px;
      border-radius: 4px;
      text-align: center;
    }
  `,
};
