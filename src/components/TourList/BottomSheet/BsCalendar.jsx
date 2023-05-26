import { useEffect } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { clickedDateData, selectedDateData, setModalData } from '../../../recoil/tourListRecoil';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BsCalendar() {
  const [modal, setModal] = useRecoilState(setModalData);
  const [clickedDate, setClickedDate] = useRecoilState(clickedDateData);

  const resetDate = () => {
    setSelectedDate(['2023-05-25T15:00:00.000Z', '2023-05-26T14:59:59.999Z']);
    document.body.style.overflowY = 'auto';
    setModal(false);
    setClickedDate(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submitDate = () => {
    document.body.style.overflowY = 'auto';
    setModal(false);
    setClickedDate(true);
  };

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateData);
  // 요일 텍스트
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDays = () =>
    week.map((day, index) => (
      <div className="week_days" key={index}>
        {day}
      </div>
    ));
  // 요일 텍스트를 숨기기
  const formatShortWeekday = (locale, date) => '';
  const toCalendarType = (weekStartDay) => (weekStartDay === 0 ? 'US' : 'ISO 8601');
  const tileDisabled = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (view === 'month' && date < today) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    selectedDate && console.log(selectedDate);
  }, [selectedDate]);
  return (
    <>
      <Flex
        column="true"
        style={{
          width: '100%',
          alignItems: 'center',
          height: '80vh',
          overflowY: 'auto',
        }}>
        <St.CalendarWrapper>
          <St.HorizonLine />
          <St.weekWrapper>{weekDays()}</St.weekWrapper>
          <St.HorizonLine />
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
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
          />
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
        </St.CalendarWrapper>
      </Flex>

      <St.BottomSheetFooter>
        <button className="refresh" onClick={resetDate}>
          <Icon type="ic_reset" style={{ marginLeft: '5px' }} />
          <Text type="body_bold_14" innerText="초기화" />
        </button>
        <button className="submit" onClick={submitDate}>
          <Text type="body_bold_14" innerText="적용하기" />
        </button>
      </St.BottomSheetFooter>
    </>
  );
}

export default BsCalendar;

const St = {
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
      background-color: ${({ theme }) => theme.Color.white};
      color: ${({ theme }) => theme.Color.black};
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
    .react-calendar__tile:hover {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      border-radius: 50%;
    }
    .react-calendar__tile--range {
      background-color: ${({ theme }) => theme.Color.gray8};
      border-radius: 0%;
    }
    .react-calendar__tile--active:focus {
      background-color: ${({ theme }) => theme.Color.gray8};
    }

    .react-calendar__tile--rangeStart {
      position: relative;
      border-radius: 50% 0 0 50%;
      z-index: 150;
      background-color: ${({ theme }) => theme.Color.gray8};

      abbr {
        position: relative;
        z-index: 200;
      }

      &::after {
        position: absolute;
        content: '';
        border-radius: 50%;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: ${({ theme }) => theme.Color.blue2};
      }

      :focus {
        background-color: ${({ theme }) => theme.Color.white};
      }
    }

    .react-calendar__tile--rangeEnd {
      position: relative;
      border-radius: 0 50% 50% 0;
      z-index: 150;
      background-color: ${({ theme }) => theme.Color.gray8};
      abbr {
        position: relative;
        z-index: 200;
      }

      &::after {
        position: absolute;
        content: '';
        border-radius: 50%;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: ${({ theme }) => theme.Color.blue2};
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
