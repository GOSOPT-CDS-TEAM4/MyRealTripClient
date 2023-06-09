//코스 소개 안내
import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import Button from '../../common/Button';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
function DetailTourCourse() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return (
    <>
      <Flex column justifycontent="center">
        {detailTour.courseResponseDtoList?.length && (
          <>
            <St.CourseTitle>코스 소개</St.CourseTitle>
            <St.TimeWrapper>
              <Icon type="location_blue" />
              <St.Time>{detailTour.courseResponseDtoList[0].time.slice(0, 5)}</St.Time>
              <St.TimeDescription>{detailTour.courseResponseDtoList[0].title}</St.TimeDescription>
            </St.TimeWrapper>
            <Flex alignitems="center" style={{ marginLeft: '15px' }}>
              <St.CourseLineTitle />
              <St.CourseDescriptionWrapper>
                <St.Address>{detailTour.courseResponseDtoList[0].address}</St.Address>
                <St.CourseDesciption>{detailTour.courseResponseDtoList[0].description}</St.CourseDesciption>
              </St.CourseDescriptionWrapper>
            </Flex>
          </>
        )}
        {detailTour.courseResponseDtoList?.length >= 2 && (
          <Flex column justifycontent="center" style={{ gap: '20px' }}>
            <St.TimeWrapper>
              <Icon type="location_black" />
              <St.Time>{detailTour.courseResponseDtoList[1].time.slice(0, 5)}</St.Time>
              <St.TimeDescription>{detailTour.courseResponseDtoList[1].title}</St.TimeDescription>
            </St.TimeWrapper>
            <Flex alignitems="center" style={{ marginLeft: '15px' }}>
              <St.CourseLine />
              <St.CourseDescriptionWrapper>
                <St.CourseDesciption>{detailTour.courseResponseDtoList[1].description}</St.CourseDesciption>
                <St.CourseImg src={detailTour.courseResponseDtoList[1]?.image} alt="투어이미지" />
              </St.CourseDescriptionWrapper>
            </Flex>
            <Button>코스소개 더 보기</Button>
            <DivideLine margintop="24px" marginbottom="30px" />
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default DetailTourCourse;

const St = {
  CourseTitle: styled.h1`
    ${({ theme }) => theme.Text.title_medium_20};
    margin-bottom: 28px;
  `,

  TimeWrapper: styled.article`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 9px 0;
  `,

  Time: styled.h2`
    ${({ theme }) => theme.Text.body_bold_16};
    margin-right: 5px;
  `,

  TimeDescription: styled.h3`
    ${({ theme }) => theme.Text.detail_regular_12};
    ${({ theme }) => theme.Color.gray4};
  `,

  CourseDescriptionWrapper: styled.article`
    display: flex;
    flex-direction: column;
    width: 293px;

    margin-left: 20px;
  `,

  CourseLineTitle: styled.span`
    height: 156px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  CourseLine: styled.span`
    height: 256px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  Address: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
    margin-bottom: 15px;
  `,

  CourseDesciption: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
    margin-bottom: 15px;
  `,

  CourseWrapper: styled.article`
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 20px;
  `,

  CourseImg: styled.img`
    display: flex;
    width: 293px;
    height: 189px;

    border-radius: 8px;
  `,
};
