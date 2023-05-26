import { useEffect, useState } from 'react';

import { Slider } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import {
  minimumPriceData,
  tourFullData,
  maximumPriceData,
  setModalData,
  clickedPriceData,
} from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import addCommasInNumbers from '../../../utils/addCommasInNumber';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BsPrice() {
  const [clickedPrice, setClickedPrice] = useRecoilState(clickedPriceData);
  const [modal, setModal] = useRecoilState(setModalData);
  const [minimumPrice, setMinimumPrice] = useRecoilState(minimumPriceData);
  const [maximumPrice, setMaximumPrice] = useRecoilState(maximumPriceData);
  const [value, setValue] = useState([2000, 390000]);
  const labeltext = (value) => `${addCommasInNumbers(value)}원`;
  const [handleMinimum, setHandleMinimum] = useState(2000);
  const [handleMaximum, setHandleMaximum] = useState(390000);

  const tourFull = useRecoilValue(tourFullData);
  const resetPrice = () => {
    setMinimumPrice(2000);
    setMaximumPrice(390000);
    document.body.style.overflowY = 'auto';
    setModal(false);
    setClickedPrice(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setHandleMinimum(value[0]);
    setHandleMaximum(value[1]);
  };
  const PriceValue = () => {
    setMinimumPrice(handleMinimum);
    setMaximumPrice(handleMaximum);
    document.body.style.overflowY = 'auto';
    setModal(false);
    setClickedPrice(true);
  };
  useEffect(() => {
    console.log(handleMaximum);
    console.log(handleMinimum);
  }, [handleMaximum, handleMinimum]);

  return (
    <>
      <St.BsPriceContent>
        <Text
          type="body_regular_14"
          innerText={`투어의 평균 요금은 ${addCommasInNumbers(tourFull.averageTourPrice)}원 입니다.`}
          style={{ color: theme.Color.gray2 }}
        />

        <div className="slider_box">
          <Slider
            step={1000}
            min={2000}
            max={390000}
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            valueLabelFormat={labeltext}
            getAriaValueText={labeltext}
          />
        </div>
        <Flex justifycontent="space-between" style={{ marginTop: '0px' }}>
          <Flex column={true}>
            <Text type="detail_regular_12" innerText="최저 요금" style={{ color: theme.Color.gray3 }} />
            <Text
              type="body_bold_16"
              innerText={`${addCommasInNumbers(handleMinimum)}원`}
              style={{ color: theme.Color.black }}
            />
          </Flex>
          <Flex column={true} style={{ textAlign: 'right' }}>
            <Text type="detail_regular_12" innerText="최고 요금" style={{ color: theme.Color.gray3 }} />
            <Text
              type="body_bold_16"
              innerText={`${addCommasInNumbers(handleMaximum)}원`}
              style={{ color: theme.Color.black }}
            />
          </Flex>
        </Flex>
      </St.BsPriceContent>

      <St.BottomSheetFooter>
        <button className="refresh" onClick={resetPrice}>
          <Icon type="ic_reset" style={{ marginLeft: '5px' }} />
          <Text type="body_bold_14" innerText="초기화" />
        </button>
        <button className="submit" onClick={PriceValue}>
          <Text type="body_bold_14" innerText="적용하기" />
        </button>
      </St.BottomSheetFooter>
    </>
  );
}

export default BsPrice;

const St = {
  BsPriceContent: styled.div`
    display: flex;
    margin: 27px;
    flex-direction: column;
    justify-content: space-evenly;
    width: 370px;

    /* slider */
    .slider_box {
      margin: 16px;
    }
    .MuiSlider-track {
      width: 5px;
      color: ${({ theme }) => theme.Color.blue1};
    }
    .MuiSlider-rail {
      color: ${({ theme }) => theme.Color.gray8};
    }

    .MuiSlider-thumb {
      border: 7px solid white;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      background-color: ${({ theme }) => theme.Color.blue1};
      width: 26px;
      height: 26px;
      &:hover {
      }
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
