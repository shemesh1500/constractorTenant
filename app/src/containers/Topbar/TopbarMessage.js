import React from 'react';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';
import Scrollbar from '@iso/components/utility/customScrollBar';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

import Image from '@iso/assets/images/user3.png';

const demoMassage = [
  {
    id: 1,
    name: 'שלמה שמש',
    time: 'לפני 3 דקות',
    massage:
      'היי מתי השלד אמור להיות בנוי?',
  },
  {
    id: 2,
    name: 'יהוני דנוך',
    time: 'לפני 4 דקות',
    massage:
      'בחרתי רצפות את יכולה לאשר?',
  },
  {
    id: 3,
    name: 'שלמה שמש',
    time: 'לפני 3 דקות',
    massage:
      'אפשר לקבל ממך תמונות של הבניין?',
  },
  {
    id: 4,
    name: 'יהוני דנוך',
    time: 'לפני 4 דקות',
    massage:
      'אני רוצה לשנות את המיקום של השקע במטבח',
  },
];

export default function TopbarMessage() {
  const [visible, setVisiblity] = React.useState(false);
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);

  function handleVisibleChange() {
    setVisiblity(visible => !visible);
  }
  const content = (
    <TopbarDropdownWrapper className="topbarMessage withImg">
      <div className="isoDropdownHeader">
        <h3>
          <IntlMessages id="sidebar.message" />
        </h3>
      </div>
      <div className="isoDropdownBody">
        <Scrollbar style={{ height: 300 }}>
          {demoMassage.map(massage => (
            <a className="isoDropdownListItem" key={massage.id} href="# ">
              <div className="isoImgWrapper">
                <img alt="#" src={Image} />
              </div>

              <div className="isoListContent">
                <div className="isoListHead">
                  <h5>{massage.name}</h5>
                  <span className="isoDate">{massage.time}</span>
                </div>
                <p>{massage.massage}</p>
              </div>
            </a>
          ))}
        </Scrollbar>
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
          className="ion-chatbubbles"
          style={{ color: customizedTheme.textColor }}
        />
        <span>{demoMassage.length}</span>
      </div>
    </Popover>
  );
}
