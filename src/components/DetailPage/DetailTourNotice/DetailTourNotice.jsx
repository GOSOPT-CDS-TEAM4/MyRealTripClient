import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//About 밑의 원스톱 서비스 관련 안내
function DetailTourNotice() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);
  return (
    <Flex column justifycontent="center">
      <St.NoticeBox>
        <St.NoticeWrapper>
          <St.NoticeTitle>
            <Icon type="info" style={{ marginRight: '8.67px' }} />
            {detailTour.noticeTitle}
          </St.NoticeTitle>
          <St.NoticeInnerWrapper>
            <St.NoticeA>{detailTour.notice}</St.NoticeA>
          </St.NoticeInnerWrapper>
        </St.NoticeWrapper>
      </St.NoticeBox>
    </Flex>
  );
}

export default DetailTourNotice;

const St = {
  NoticeBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    height: auto;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
    margin: 24px 0;
  `,

  NoticeWrapper: styled.div`
    margin: 16px;
  `,
  NoticeTitle: styled.div`
    display: flex;
    color: ${({ theme }) => theme.Color.blue2};
    ${({ theme }) => theme.Text.body_bold_16};
  `,

  NoticeInnerWrapper: styled.div`
    width: 276px;
    margin-left: 40px;
  `,
  NoticeQ: styled.div`
    ${({ theme }) => theme.Text.body_regular_14};
    margin-top: 20px;
  `,

  NoticeA: styled.div`
    ${({ theme }) => theme.Text.body_regular_14};
    margin-top: 25px;
  `,
};
