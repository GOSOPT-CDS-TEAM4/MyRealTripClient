import React from 'react';
import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import {
  clickedDateData,
  clickedPriceData,
  clickedTypeData,
  maximumPriceData,
  minimumPriceData,
  selectedDateData,
  setModalData,
  tourTypeData,
} from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import addCommasInNumbers from '../../../utils/addCommasInNumber';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';
import BottomSheet from '../BottomSheet';
import BsCalendar from '../BottomSheet/BsCalendar';
import BsPrice from '../BottomSheet/BsPrice';
import BsTourType from '../BottomSheet/BsTourType';

function TourListHeaderSection() {
  const [clickedValue, setClickedValue] = useState('');
  const [clickedModal, setClickedModal] = useState();
  const [title, setTitle] = useState('');
  const [koreanType, setKoreanType] = useState('');

  const [modal, setModal] = useRecoilState(setModalData);
  const tourType = useRecoilValue(tourTypeData);
  const clickedType = useRecoilValue(clickedTypeData);
  const clickedPrice = useRecoilValue(clickedPriceData);
  const minimumPrice = useRecoilValue(minimumPriceData);
  const maximumPrice = useRecoilValue(maximumPriceData);
  const clickedDate = useRecoilValue(clickedDateData);
  const selectedDate = useRecoilValue(selectedDateData);

  const showModal = (e) => {
    document.body.style.overflowY = 'hidden';
    setModal(true);
    setClickedValue(e.target.innerText);
    setTitle(e.target.innerText);
  };

  useEffect(() => {
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
  }, [tourType, koreanType]);

  useEffect(() => {
    let modalComponent;

    switch (clickedValue) {
      case '일정':
        modalComponent = <BsCalendar />;
        break;
      case '가격':
        modalComponent = <BsPrice />;
        break;
      case '투어 형태':
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
          flexWrap: 'nowrap',
          overflowX: 'scroll',
        }}>
        <Text type="title_bold_24" innerText={`파리의 투어`} style={{ margin: '14px 17px' }} />

        <Flex
          justifycontent="start"
          style={{
            margin: '0px 15px',
            width: 'auto',
            overflowX: 'auto',
          }}>
          {!clickedDate ? (
            <St.FilterBtn value="date" onClick={(e) => showModal(e)}>
              <Text
                value="date"
                type="body_bold_14"
                innerText="일정"
                style={{ color: theme.Color.black }}
                onClick={showModal}
              />
            </St.FilterBtn>
          ) : (
            <St.ClickedFilterBtn value="date" onClick={(e) => showModal(e)}>
              <Text
                value="date"
                type="body_bold_14"
                innerText={`${selectedDate[0].getMonth() + 1}월 ${selectedDate[0].getDate()}일 ~ ${
                  selectedDate[1].getMonth() + 1
                }월 ${selectedDate[1].getDate()}일`}
                style={{ color: theme.Color.blue1 }}
                onClick={showModal}
              />
            </St.ClickedFilterBtn>
          )}
          {!clickedPrice ? (
            <St.FilterBtn
              value="price"
              onClick={(e) => {
                showModal(e);
              }}>
              <Text value="price" type="body_bold_14" innerText="가격" style={{ color: theme.Color.black }} />
            </St.FilterBtn>
          ) : (
            <St.ClickedFilterBtn value="price" onClick={(e) => showModal(e)}>
              <Text
                value="price"
                type="body_bold_14"
                innerText={`${addCommasInNumbers(minimumPrice)}원 이상 ${addCommasInNumbers(maximumPrice)}원 이하`}
                style={{ color: theme.Color.blue1 }}
                onClick={showModal}
              />
            </St.ClickedFilterBtn>
          )}
          {!clickedType ? (
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
            <St.ClickedFilterBtn value="tourType" onClick={showModal}>
              <Text
                value="tourType"
                type="body_bold_14"
                innerText={`${koreanType} 투어`}
                style={{ color: theme.Color.blue1 }}
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
    white-space: nowrap;
  `,
  ClickedFilterBtn: styled.div`
    /* width: fit-content; */
    /* height: fit-content; */
    all: unset;
    margin-right: 6px;
    outline: 0px;
    border: 1px solid;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.Color.blue1};
    background-color: ${({ theme }) => theme.Color.white};
    padding: 10px 18px;
    ${({ theme }) => theme.Text.body_bold_14};
    white-space: nowrap;
  `,
  HorizonLine: styled.div`
    width: 100%;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
  `,
};
