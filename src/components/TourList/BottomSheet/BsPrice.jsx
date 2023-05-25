import { useState } from 'react';

import { Slider } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { minimumPriceData, tourFullData, maximumPriceData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import addCommasInNumbers from '../../../utils/addCommasInNumber';
import Flex from '../../layout/atom/Flex';
import Text from '../../layout/atom/Text';

function BsPrice() {
  const [minimumPrice, setMinimumPrice] = useRecoilState(minimumPriceData);
  const [maximumPrice, setMaximumPriceData] = useRecoilState(maximumPriceData);
  const labeltext = (value) => `${addCommasInNumbers(value)}원`;
  const [value, setValue] = useState([2000, 390000]);

  const tourFull = useRecoilValue(tourFullData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinimumPrice(value[0]);
    setMaximumPriceData(value[1]);
  };

  return (
    <St.BsPriceContent>
      <Text
        type="body_regular_14"
        innerText={`투어의 평균 요금은 ${addCommasInNumbers(tourFull.averageTourPrice)}원 입니다.`}
        style={{ color: theme.Color.gray2 }}
      />

      <div className="slider_box">
        <Slider
          step={1000}
          min={1000}
          max={100000}
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="On"
          valueLabelFormat={labeltext}
          getAriaValueText={labeltext}
        />
      </div>
      <Flex justifycontent="space-between" style={{ marginTop: '0px' }}>
        <Flex column={true}>
          <Text type="detail_regular_12" innerText="최저 요금" style={{ color: theme.Color.gray3 }} />
          <Text type="body_bold_16" innerText="2,000원" style={{ color: theme.Color.black }} />
        </Flex>
        <Flex column={true} style={{ textAlign: 'right' }}>
          <Text type="detail_regular_12" innerText="최고 요금" style={{ color: theme.Color.gray3 }} />
          <Text type="body_bold_16" innerText="390,000원" style={{ color: theme.Color.black }} />
        </Flex>
      </Flex>
    </St.BsPriceContent>
  );
}

export default BsPrice;

const St = {
  BsPriceContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 27px;
    width: 90%;

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
};
