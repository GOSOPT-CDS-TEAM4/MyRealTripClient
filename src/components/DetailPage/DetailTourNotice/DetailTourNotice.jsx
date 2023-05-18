import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//About 밑의 원스톱 서비스 관련 안내
function DetailTourNotice() {
  return (
    <Flex column justifycontent="center">
      <St.NoticeBox>
        <St.NoticeWrapper>
          <St.NoticeTitle>
            <Icon type="info" style={{ marginRight: '8.67px' }} />
            쇼콜라트래블의 원스톱 서비스
          </St.NoticeTitle>
          <St.NoticeInnerWrapper>
            <St.NoticeQ>① 뮤지엄패스 사용해요.</St.NoticeQ>
            <St.NoticeA>✔ 저희 회사에서 온라인 사전 방문 예약을 대행해 드립니다.</St.NoticeA>
            <St.NoticeQ>② 뮤지엄패스를 구매하고 싶어요.</St.NoticeQ>
            <St.NoticeA>
              2일권: 85,100원(58€) 4일권: 108,500원(74€) 6일권: 130,400원(89€) 패스값을 입금해 주시면 구매대행해 드리고,
              온라인 사전 방문 예약도 대행해 드립니다.
            </St.NoticeA>
            <St.NoticeQ>③ 입장권을 구매하고 싶어요.</St.NoticeQ>
            <St.NoticeA>
              ✔ 1인 기준 25,000원(17€) 티켓값을 입금해 주시 면 구매대행해 드립니다. 입장권 구매자는 사전예약이 필요하지
              않습니다.
            </St.NoticeA>
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
    height: 475px;
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
    height: 399px;
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
