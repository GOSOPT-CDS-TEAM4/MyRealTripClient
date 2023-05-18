import styled from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
//이미지 하단 투어에 관한 제목, 별점, 가격
function DetailTourTitle() {
  return (
    <Flex column justifyContent="flex-start" alignItems="flex-start">
      <St.Location>
        프랑스 {'>'}
        <Icon type="location_gray" style={{ padding: '0 8.5px' }} />
        파리
      </St.Location>
      <St.Header>파리 뮤지엄 패스(2일/7일)</St.Header>

      <St.Container>
        <St.ReviewWrapper>
          <St.Star>
            <Icon type="star_five_small" style={{ padding: '0 6px' }} />
            4.9
          </St.Star>
          <St.ReviewCount>(2,406) {'>'}</St.ReviewCount>
        </St.ReviewWrapper>

        <St.MoneyWrapper>
          <St.Money>55,000원</St.Money>
          <St.People>1인</St.People>
        </St.MoneyWrapper>
      </St.Container>
    </Flex>
  );
}

export default DetailTourTitle;

const St = {
  Location: styled.div`
    ${({ theme }) => theme.Text.body_medium_14};
    ${({ theme }) => theme.Color.gray4};
  `,

  Header: styled.header`
    ${({ theme }) => theme.Text.title_bold_24};
  `,

  Container: styled.section`
    display: flex;
    width: 150%;
    justify-content: space-between;
  `,
  Star: styled.span`
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  ReviewWrapper: styled.div`
    display: flex;
  `,

  ReviewCount: styled.span`
    ${({ theme }) => theme.Text.body_medium_14};
    ${({ theme }) => theme.Color.gray4};
    margin-left: 2px;
  `,

  MoneyWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  `,
  Money: styled.span`
    ${({ theme }) => theme.Text.title_bold_18};
  `,

  People: styled.span`
    ${({ theme }) => theme.Text.body_medium_14};
    ${({ theme }) => theme.Color.gray4};
    margin-left: 4px;
  `,
};
