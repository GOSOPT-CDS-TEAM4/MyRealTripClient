import React from 'react';
import { useNavigate } from 'react-router-dom';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function MainNavBanner() {
  const navigate = useNavigate();

  return (
    <Flex justifycontent="center" style={{ paddingTop: '10px' }}>
      <Flex
        onClick={() => navigate('/tourList')}
        column
        alignitems="center"
        style={{ borderBottom: `3px solid ${theme.Color.blue2}`, width: '111px', cursor: 'pointer' }}>
        <Icon type="img_tourticket" />
        <Text type="body_bold_14" innerText="투어·티켓" style={{ color: theme.Color.blue1 }} />
      </Flex>
      <Flex column alignitems="center" style={{ borderBottom: `3px solid ${theme.Color.gray9}`, width: '111px' }}>
        <Icon type="img_ lodging" />
        <Text type="body_bold_14" innerText="숙소" style={{ color: theme.Color.gray4 }} />
      </Flex>
      <Flex column alignitems="center" style={{ borderBottom: `3px solid ${theme.Color.gray9}`, width: '111px' }}>
        <Icon type="img_ticket" />
        <Text type="body_bold_14" innerText="항공권" style={{ color: theme.Color.gray4 }} />
      </Flex>
    </Flex>
  );
}

export default MainNavBanner;
