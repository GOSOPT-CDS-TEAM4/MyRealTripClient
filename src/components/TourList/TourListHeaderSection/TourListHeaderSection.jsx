import React from 'react';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { setModalData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';
import BottomSheet from '../BottomSheet';
import BsCalendar from '../BottomSheet/BsCalendar';
import BsPrice from '../BottomSheet/BsPrice';
import BsSelectCalendar from '../BottomSheet/BsSelectCalendar';
import BsTourType from '../BottomSheet/BsTourType';

function TourListHeaderSection() {
  const [modal, setModal] = useRecoilState(setModalData);
  const [clickedValue, setClickedValue] = useState('');
  const [clickedModal, setClickedModal] = useState();
  const [title, setTitle] = useState('');

  const showModal = (e) => {
    document.body.style.overflowY = 'hidden';
    setModal(true);
    setClickedValue(e.target.value);
    setTitle(e.target.innerText);
  };
  useEffect(() => {
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
        modalComponent = 'NOT SELECTED';
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
          marginTop: '24px',
        }}>
        <Text type="title_bold_24" innerText="파리의 투어" style={{ margin: '14px 17px' }} />

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

          <St.FilterBtn value="tourType" onClick={(e) => showModal(e)}>
            <Text
              value="tourType"
              type="body_bold_14"
              innerText="투어 형태"
              style={{ color: theme.Color.black }}
              onClick={showModal}
            />
          </St.FilterBtn>

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
