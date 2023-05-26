import React from 'react';
import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { clickedTypeData, setModalData, tourTypeData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';
import BottomSheet from '../BottomSheet';
import BsCalendar from '../BottomSheet/BsCalendar';
import BsPrice from '../BottomSheet/BsPrice';
import BsTourType from '../BottomSheet/BsTourType';

function TourListHeaderSection() {
  const [modal, setModal] = useRecoilState(setModalData);
  const [clickedValue, setClickedValue] = useState('');
  const [clickedModal, setClickedModal] = useState();
  const [title, setTitle] = useState('');
  const [koreanType, setKoreanType] = useState('');
  const tourType = useRecoilValue(tourTypeData);
  const clickedType = useRecoilValue(clickedTypeData);

  const showModal = (e) => {
    document.body.style.overflowY = 'hidden';
    setModal(true);
    setClickedValue(e.target.value);
    setTitle(e.target.innerText);
  };

  useState(() => {
    switch (tourType) {
      case 'group':
        setKoreanType('그룹');
        break;
      case 'private':
        setKoreanType('프라이빗');
        break;
      default:
        setKoreanType('모든');
        break;
    }
  });

  useEffect(() => {
    console.log(clickedType);
    let modalComponent;

    switch (clickedValue) {
      case 'date':
        modalComponent = <BsCalendar />;
        break;
      case 'price':
        modalComponent = <BsPrice />;
        break;
      case 'tourType':
        modalComponent = <BsTourType />;
        break;
      default:
        modalComponent = 'WRONG SELECTED';
        break;
    }

    setClickedModal(modalComponent);
  }, [clickedValue]);

  return (
    <>
      <Flex
        style={{
          width: '100%',
          flexDirection: 'column',
          padding: '15px',
          marginTop: '65px',
        }}>
        <Text type="title_bold_24" innerText={`파리의 투어`} style={{ margin: '14px 17px' }} />

        <Flex
          justifycontent="start"
          style={{
            margin: '0px 15px',
            width: '100%',
          }}>
          <St.FilterBtn value="date" onClick={(e) => showModal(e)}>
            <Text
              value="date"
              type="body_bold_14"
              innerText="일정"
              style={{ color: theme.Color.black }}
              onClick={showModal}
            />
          </St.FilterBtn>
          <St.FilterBtn value="price" onClick={(e) => showModal(e)}>
            <Text
              value="price"
              type="body_bold_14"
              innerText="가격"
              style={{ color: theme.Color.black }}
              onClick={showModal}
            />
          </St.FilterBtn>
          {clickedType ? (
            <St.FilterBtn value="tourType" onClick={(e) => showModal(e)}>
              <Text
                value="tourType"
                type="body_bold_14"
                innerText="투어 형태"
                style={{ color: theme.Color.black }}
                onClick={showModal}
              />
            </St.FilterBtn>
          ) : (
            <St.ClickedFilterBtn value="tourType" onClick={(e) => showModal(e)}>
              <Text
                value="tourType"
                type="body_bold_14"
                innerText={`${koreanType} 투어`}
                style={{ color: theme.Color.blue1 }}
                onClick={showModal}
              />
            </St.ClickedFilterBtn>
          )}
          <St.FilterBtn>
            <Text type="body_bold_14" innerText="여행지" style={{ color: theme.Color.black }} />
          </St.FilterBtn>
          <St.FilterBtn>
            <Icon type="tune" />
          </St.FilterBtn>
        </Flex>
      </Flex>
      <St.HorizonLine />

      {modal && <BottomSheet setModal={setModal} clickedModal={clickedModal} title={title} setTitle={setTitle} />}
    </>
  );
}

export default TourListHeaderSection;

const St = {
  FilterBtn: styled.button`
    all: unset;
    margin-right: 6px;
    outline: 0px;
    border: 1px solid;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.Color.gray8};
    background-color: ${({ theme }) => theme.Color.white};
    padding: 10px 18px;
    ${({ theme }) => theme.Text.body_bold_14};
  `,
  ClickedFilterBtn: styled.button`
    all: unset;
    margin-right: 6px;
    outline: 0px;
    border: 1px solid;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.Color.blue1};
    background-color: ${({ theme }) => theme.Color.white};
    padding: 10px 18px;
    ${({ theme }) => theme.Text.body_bold_14};
  `,
  HorizonLine: styled.div`
    width: 100%;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
  `,
};
