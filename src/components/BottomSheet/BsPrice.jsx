import { Slider } from '@mui/material';
import { useState } from 'react';
import { styled } from 'styled-components';

function BsPrice() {
  const valuetext = (value) => `${value}°C`;
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <St.BottomSheetContent>
      <p>투어의 평균 요금은 174,031,231원 입니다. </p>
      {/* <input type="range" min="1" max="100" value="50"></input> */}
      <div className="slider_box">
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
      <div className="prices">
        <div className="min_price">
          <span className="price_title"> 최저 요금 </span>
          <span className="price_num"> 1,000원 </span>
        </div>
        <div className="max_price">
          <span className="price_title"> 최고 요금 </span>
          <span className="price_num"> 388,215,000원 </span>
        </div>
      </div>
    </St.BottomSheetContent>
  );
}

export default BsPrice;

const St = {
  BottomSheetContent: styled.div`
    display: flex;
    flex-direction: column;
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
    }

    > p {
      margin-left: 11px;
      ${({ theme }) => theme.Text.body_regular_14};
      color: ${({ theme }) => theme.Color.gray2};
    }
    .prices {
      margin-top: 0;
      display: flex;
      justify-content: space-between;
    }
    .min_price {
      display: flex;
      flex-direction: column;
    }
    .max_price {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    .price_title {
      color: ${({ theme }) => theme.Color.gray3};
      ${({ theme }) => theme.Text.detail_regular_12};
    }
  `,
};
