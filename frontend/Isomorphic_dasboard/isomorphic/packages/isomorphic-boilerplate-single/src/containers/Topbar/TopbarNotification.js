import React from 'react';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

const demoNotifications = [
  {
    id: 1,
    name: 'שלמה שמש בחר ריצוף',
    notification:
      ' דירה 17 קומה 5 ריצוף : 1312',
  },
  {
    id: 2,
    name: 'שלמה שמש בחר ריצוף',
    notification:
      ' דירה 17 קומה 5 ריצוף : 1312',
  },
  {
    id: 3,
    name: 'שלמה שמש בחר ריצוף',
    notification:
      ' דירה 17 קומה 5 ריצוף : 1312',
  },
  {
    id: 4,
    name: 'שלמה שמש בחר ריצוף',
    notification:
      ' דירה 17 קומה 5 ריצוף : 1312',
  },
  {
    id: 5,
    name: 'שלמה שמש בחר ריצוף',
    notification:
      ' דירה 17 קומה 5 ריצוף : 1312',
  },
];

export default function TopbarNotification() {
  const [visible, setVisiblity] = React.useState(false);
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);

  function handleVisibleChange() {
    setVisiblity(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="topbarNotification">
      <div className="isoDropdownHeader">
        <h3>
          <IntlMessages id="sidebar.notification" />
        </h3>
      </div>
      <div className="isoDropdownBody">
        {demoNotifications.map(notification => (
          <a className="isoDropdownListItem" key={notification.id} href="# ">
            <h5>{notification.name}</h5>
            <p>{notification.notification}</p>
          </a>
        ))}
      </div>
      <a className="isoViewAllBtn" href="# ">
        <IntlMessages id="topbar.viewAll" />
      </a>
    </TopbarDropdownWrapper>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <div className="isoIconWrapper">
        <i
          className="ion-android-notifications"
          style={{ color: customizedTheme.textColor }}
        />
        <span>{demoNotifications.length}</span>
      </div>
    </Popover>
  );
}
