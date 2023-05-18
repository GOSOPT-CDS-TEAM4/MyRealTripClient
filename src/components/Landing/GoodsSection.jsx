import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function GoodsSection() {
  return (
    <St.GoodsSectionWrapper>
      <Flex justifycontent="space-between" alignitems="center">
        <Text type="title_bold_18" innerText="실시간 베스트 상품" />
        <Flex alignitems="center" style={{ width: 'auto' }}>
          <Text type="body_bold_14" innerText="더보기" style={{ color: theme.Color.blue1 }} />
          <Icon type="arrow_right_blue" />
        </Flex>
      </Flex>
      <Flex style={{ gap: '10px' }}>
        <St.IndivGoodsWrapper>
          <Flex column alignitems="start">
            <Img type="img_sono" />
            <Icon type="heart_fill" />
            <Text
              type="detail_regular_12"
              innerText="티켓/패스 · 강원도"
              style={{ marginTop: '9px', color: theme.Color.gray4 }}
            />
            <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
            <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
              <Text type="body_bold_14" innerText="224,000원" />
              <Text
                type="detail_regular_12"
                innerText="540,000원"
                style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
              />
            </Flex>
          </Flex>
        </St.IndivGoodsWrapper>
        <St.IndivGoodsWrapper>
          <Flex column alignitems="start">
            <Img type="img_sono" />
            <Icon type="heart_fill" />
            <Text
              type="detail_regular_12"
              innerText="티켓/패스 · 강원도"
              style={{ marginTop: '9px', color: theme.Color.gray4 }}
            />
            <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
            <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
              <Text type="body_bold_14" innerText="224,000원" />
              <Text
                type="detail_regular_12"
                innerText="540,000원"
                style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
              />
            </Flex>
          </Flex>
        </St.IndivGoodsWrapper>
        <St.IndivGoodsWrapper>
          <Flex column alignitems="start">
            <Img type="img_sono" />
            <Icon type="heart_fill" />
            <Text
              type="detail_regular_12"
              innerText="티켓/패스 · 강원도"
              style={{ marginTop: '9px', color: theme.Color.gray4 }}
            />
            <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
            <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
              <Text type="body_bold_14" innerText="224,000원" />
              <Text
                type="detail_regular_12"
                innerText="540,000원"
                style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
              />
            </Flex>
          </Flex>
        </St.IndivGoodsWrapper>
        <St.IndivGoodsWrapper>
          <Flex column alignitems="start">
            <Img type="img_sono" />
            <Icon type="heart_fill" />
            <Text
              type="detail_regular_12"
              innerText="티켓/패스 · 강원도"
              style={{ marginTop: '9px', color: theme.Color.gray4 }}
            />
            <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
            <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
              <Text type="body_bold_14" innerText="224,000원" />
              <Text
                type="detail_regular_12"
                innerText="540,000원"
                style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
              />
            </Flex>
          </Flex>
        </St.IndivGoodsWrapper>
        <St.IndivGoodsWrapper>
          <Flex column alignitems="start">
            <Img type="img_sono" />
            <Icon type="heart_fill" />
            <Text
              type="detail_regular_12"
              innerText="티켓/패스 · 강원도"
              style={{ marginTop: '9px', color: theme.Color.gray4 }}
            />
            <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
            <Flex alignitems="center" style={{ marginTop: '14.5px' }}>
              <Text type="body_bold_14" innerText="224,000원" />
              <Text
                type="detail_regular_12"
                innerText="540,000원"
                style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
              />
            </Flex>
          </Flex>
        </St.IndivGoodsWrapper>
      </Flex>
    </St.GoodsSectionWrapper>
  );
}

export default GoodsSection;

const St = {
  GoodsSectionWrapper: styled.section`
    margin-top: 32px;
    width: 100%;
  `,
  IndivGoodsWrapper: styled.article`
    position: relative;
    margin-top: 12px;
    width: fit-content;
    div {
      width: auto;
      img:nth-child(2) {
        position: absolute;
        top: 8px;
        right: 10px;
        z-index: 999;
      }
    }
  `,
};
