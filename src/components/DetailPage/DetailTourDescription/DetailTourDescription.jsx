//Notice 밑의 Q&A
import { styled } from 'styled-components';

import Button from '../../common/Button';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';

function DetailTourDescription() {
  return (
    <Flex column style={{ marginLeft: '15px' }}>
      <St.DescriptionTitle>
        경력 10년 이상의 베테랑 프랑스 정부 공인 가이드가 명작의 세계로 여러분을 안내해 드립니다. {'<'}후기 2377개 전체
        평점 4.9점{'>'} 루브르 투어는 쇼콜라트래블에서!
      </St.DescriptionTitle>
      <St.DescriptionWrapper>
        <St.Division />
        ❓ 자주 묻는 질문 <St.Division /> Q. 루브르 사이트에 예약증이 매진되었어요. 투어를 신청하면 루브르 입장
        가능한가요?
        <St.Division />
        A. 네 가능합니다. 루브르 사이트에서 예약증이 매진되었더라도 투어를 신청해 주시면 문제없이 입장하실 수 있도록
        회사에서 모든 준비를 도와드립니다.
        <St.Division />
        Q. 투어 마감되었나요? 캘린더에서 예약이 안돼요.
        <St.Division />
        A. 마이리얼트립 시스템상 투어일 기준 12시간 전부터는 예약창이 자동으로 닫힙니다. 내일 날짜를 선택하신 후 결제 시
        요청사항에 {'"'}0월 0일 오전/오후 투어 참여 희망합니다{'"'}라고 기재해 주시면 됩니다.
        <St.Division />
        Q. 예약했습니다. 아직 확정 대기 중으로 뜨는데 투어는 언제 확
      </St.DescriptionWrapper>
      <Button>상품 설명 더보기</Button>
      <DivideLine margintop="24px" />
    </Flex>
  );
}

export default DetailTourDescription;

const St = {
  DescriptionTitle: styled.header`
    width: 336px;
    ${({ theme }) => theme.Text.title_medium_20};
    color: ${({ theme }) => theme.Color.black};
  `,

  DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    height: 375px;

    margin-bottom: 10px;

    ${({ theme }) => theme.Text.body_regular_14};

    background: linear-gradient(180deg, black, rgba(0, 0, 0, 0.8) 26.79%, rgba(0, 0, 0, 0) 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  `,

  Division: styled.div`
    display: flex;
    height: 21px;
  `,
};
