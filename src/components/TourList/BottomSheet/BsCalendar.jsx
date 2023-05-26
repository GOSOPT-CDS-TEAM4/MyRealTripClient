import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
function BsCalendar() {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDays = () =>
    week.map((day, index) => (
      <div className="week_days" key={index}>
        {day}
      </div>
    ));
  const formatShortWeekday = (locale, date) =>
    // 요일 텍스트를 숨깁니다.
    '';
  const toCalendarType = (weekStartDay) => (weekStartDay === 0 ? 'US' : 'ISO 8601');
  const tileDisabled = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 날짜를 하루의 시작으로 설정합니다.

    // 오늘 이전의 날짜를 비활성화합니다. (오늘은 선택 가능하게 유지)
    if (view === 'month' && date < today) {
      return true;
    }
    return false;
  };
  return (
    <Flex
      column="true"
      style={{
        width: '100%',
        alignItems: 'center',
        height: '80vh',
        overflowY: 'auto',
      }}>
      <ST.CalendarWrapper>
        <ST.HorizonLine />
        <ST.weekWrapper>{weekDays()}</ST.weekWrapper>
        <ST.HorizonLine />
        <Calendar
          calendarType={toCalendarType(0)}
          formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          selectRange={true}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          minDetail={'month'}
          tileDisabled={tileDisabled}
          formatShortWeekday={formatShortWeekday}
        />{' '}
        <Calendar
          calendarType={toCalendarType(0)}
          defaultActiveStartDate={new Date(2023, 5, 1)}
          formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          selectRange={true}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          minDetail={'month'}
          formatShortWeekday={formatShortWeekday}
        />
      </ST.CalendarWrapper>
    </Flex>
  );
}

export default BsCalendar;

const ST = {
  HorizonLine: styled.div`
    text-align: center;
    width: 100%;
    margin: 10px 0px;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
  `,
  weekWrapper: styled.div`
    display: grid;
    text-align: center;
    width: 350px;
    grid-template-columns: repeat(7, 1fr);
    ${({ theme }) => theme.Text.detail_regular_12};
    color: ${({ theme }) => theme.Color.gray2};
    .week_days {
    }
  `,
  CalendarWrapper: styled.div`
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.Text.body_bold_18};
    .react-calendar {
      border: none;
    }
    .react-calendar__navigation__label {
      text-align: right;
    }
    .react-calendar__navigation__label__labelText {
    }
    .react-calendar__tile--now {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      border-radius: 50%;
    }
    .react-calendar__tile--now:hover {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      border-radius: 50%;
    }
    .react-calendar__navigation__label.active {
      background-color: ${({ theme }) => theme.Color.red};
    }
    .react-calendar__month-view__days__day--weekend {
      background-color: ${({ theme }) => theme.Color.grey2};
    }
    .react-calendar__tile {
      height: 48px;
      width: 48px;
    }
    .react-calendar__navigation button:disabled {
      background-color: ${({ theme }) => theme.Color.white};
    }
    .react-calendar__month-view__weekdays__weekday {
      display: none;
    }
    .react-calendar__tile:disabled {
      background-color: ${({ theme }) => theme.Color.white};
      color: ${({ theme }) => theme.Color.gray6};
    }
    .react-calendar__tile--active {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      border-radius: 50%;
    }
    .react-calendar__tile:hover {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      border-radius: 50%;
    }
  `,
};
