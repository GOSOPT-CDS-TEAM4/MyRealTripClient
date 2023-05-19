import React from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';
import BottomSheet from '../BottomSheet';

function TourListHeaderSection() {
  const [modal, setModal] = useState(true);
  useEffect(() => {
    console.log(modal);
  }, [modal]);
  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      <Flex
        style={{
          width: '100%',
          flexDirection: 'column',
          padding: '15px',
        }}>
        <Text type="title_bold_24" innerText="파리의 투어" style={{ margin: '14px 17px' }} />

        <Flex
          justifycontent="start"
          style={{
            margin: '0px 15px',
            width: '100%',
          }}>
          <St.FilterBtn onClick={() => showModal()}>
            <Text type="body_bold_14" innerText="일정" style={{ color: theme.Color.black }} />
          </St.FilterBtn>
          <St.FilterBtn onClick={() => showModal()}>
            <Text type="body_bold_14" innerText="가격" style={{ color: theme.Color.black }} />
          </St.FilterBtn>
          <St.FilterBtn onClick={() => showModal()}>
            <Text type="body_bold_14" innerText="투어 형태" style={{ color: theme.Color.black }} />
          </St.FilterBtn>
          <St.FilterBtn onClick={() => showModal()}>
            <Text type="body_bold_14" innerText="여행지" style={{ color: theme.Color.black }} />
          </St.FilterBtn>
          <St.FilterBtn>
            <Icon type="tune" />
          </St.FilterBtn>
        </Flex>
      </Flex>
      <St.HorizonLine />
      {modal && <BottomSheet setModal={setModal} />}
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
