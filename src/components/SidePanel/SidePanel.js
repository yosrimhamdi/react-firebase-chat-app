import React from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

import Channels from './Channels';

function SidePanel() {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
    >
      <UserPanel />
      <Channels />
    </Menu>
  );
}

export default SidePanel;