import { Slider } from '@mui/material';
import { useState } from 'react';
import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Text from '../../layout/atom/Text';

function BsPrice() {
  const valuetext = (value) => `${value}°C`;
  const [value, setValue] = useState([100000000, 288000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <St.BsPriceContent>
      <Text
        type="body_regular_14"
        innerText="투어의 평균 요금은 174,031,231원 입니다."
        style={{ color: theme.Color.gray2 }}
      />

      <div className="slider_box">
        <Slider
          step={1000}
          min={1000}
          max={388215000}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
        />
      </div>
      <Flex justify_content="space-between" style={{ marginTop: '0px' }}>
        <Flex column={true}>
          <Text type="detail_regular_12" innerText="최저 요금" style={{ color: theme.Color.gray3 }} />
          <Text type="body_bold_16" innerText="1,000원" style={{ color: theme.Color.black }} />
        </Flex>
        <Flex column={true} style={{ textAlign: 'right' }}>
          <Text type="detail_regular_12" innerText="최고 요금" style={{ color: theme.Color.gray3 }} />
          <Text type="body_bold_16" innerText="388,215,000원" style={{ color: theme.Color.black }} />
        </Flex>
      </Flex>
    </St.BsPriceContent>
  );
}

export default BsPrice;

const St = {
  BsPriceContent: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 90%;
    margin: 27px;

    /* slider */
    .slider_box {
      margin: 16px;
    }
    .MuiSlider-track {
      color: ${({ theme }) => theme.Color.blue1};
      width: 5px;
    }
    .MuiSlider-rail {
      color: ${({ theme }) => theme.Color.gray8};
    }

    .MuiSlider-thumb {
      width: 26px;
      height: 26px;
      background-color: ${({ theme }) => theme.Color.blue1};
      border: 7px solid white;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      &:hover {
      }
    }
  `,
};
