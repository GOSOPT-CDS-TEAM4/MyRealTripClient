import styled from 'styled-components';

import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//이미지 하단 투어에 관한 제목, 별점, 가격
function DetailTourTitle() {
  return (
    <>
      <Flex column justifycontent="center" style={{ marginTop: '20px', marginLeft: '15px' }}>
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
      <DivideLine margintop="20px" />
    </>
  );
}

export default DetailTourTitle;

const St = {
  Location: styled.h3`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
  `,

  Header: styled.header`
    ${({ theme }) => theme.Text.title_bold_24};
    width: 336px;
    margin-top: 16px;
    margin-bottom: 16px;
  `,

  Container: styled.section`
    display: flex;
    justify-content: space-between;
    width: 345px;
  `,

  Star: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  ReviewWrapper: styled.article`
    display: flex;
  `,

  ReviewCount: styled.h2`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
    margin-left: 2px;
  `,

  MoneyWrapper: styled.article`
    display: flex;
    justify-content: center;
    align-items: baseline;
  `,
  Money: styled.h2`
    ${({ theme }) => theme.Text.title_bold_18};
  `,

  People: styled.h3`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
    margin-left: 4px;
  `,
};
