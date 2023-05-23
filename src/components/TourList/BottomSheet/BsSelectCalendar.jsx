import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

function BsSelectCalendar() {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();
  const month = today.getMonth() + 1; // 월은 0부터 시작하니 +1
  const day = today.getDate();

  const weekDays = () =>
    week.map((day, index) => (
      <div className="week_days" key={index}>
        {day}
      </div>
    ));
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const days_bf = Array.from({ length: day - 1 }, (_, index) => index + 1);
  const days_af = Array.from({ length: 31 - day }, (_, index) => index + day + 1);
  const daysNums = () =>
    days.map((day) => (
      <div className="days_num_af" key={day}>
        {day}
      </div>
    ));
  const dayNumsBf = () =>
    days_bf.map((day) => (
      <div className="days_num_bf" key={day}>
        {day}
      </div>
    ));
  const dayNumsAf = () =>
    days_af.map((day) => (
      <div className="days_num_af" key={day}>
        {day}
      </div>
    ));
  return (
    <>
      <Flex
        column="true"
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <ST.CalendarWrapper>
          <ST.HorizonLine />
          <ST.weekWrapper>{weekDays()}</ST.weekWrapper>
          <ST.HorizonLine />
          <div className="month_title"> 2023.{month} </div>
          <ST.dayWrapper>
            <div className="days_num" />
            {dayNumsBf()}
            <div className="day">
              <Icon type="ellipse" />
              {day}
            </div>
            {dayNumsAf()}
          </ST.dayWrapper>
          <div className="month_title"> 2023.6 </div>
          <ST.dayWrapper>
            <div className="day">{day}</div>
            <div className="day">{day}</div>
            <div className="day">{day}</div>
            <div className="day">{day}</div>
            {daysNums()}
          </ST.dayWrapper>
        </ST.CalendarWrapper>
      </Flex>
    </>
  );
}

export default BsSelectCalendar;

const ST = {
  HorizonLine: styled.div`
    text-align: center;
    width: 100%;
    margin: 10px 0px;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
  `,
  CalendarWrapper: styled.div`
    display: flex;
    flex-direction: column;
    .month_title {
      text-align: right;
      margin-top: 12px;
      margin-bottom: 18px;
      ${({ theme }) => theme.Text.body_bold_16};
      color: ${({ theme }) => theme.Color.black};
    }
  `,
  weekWrapper: styled.div`
    column-gap: 40px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    ${({ theme }) => theme.Text.detail_regular_12};
    color: ${({ theme }) => theme.Color.gray2};
  `,
  dayWrapper: styled.div`
    column-gap: 40px;
    row-gap: 30px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 15px;
    ${({ theme }) => theme.Text.body_medium_14};
    .day {
      position: relative;
      ${({ theme }) => theme.Text.body_bold_14};
      color: ${({ theme }) => theme.Color.white};
      > img {
        position: absolute;
        z-index: -9;
        left: -12px;
        top: -9px;
      }
    }
    .days_num_bf {
      color: ${({ theme }) => theme.Color.gray6};
    }
    .days_num_af {
      color: ${({ theme }) => theme.Color.gray1};
    }
  `,
};
