import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
export default ({ id, style, children, className }) => (
  <Scrollbars
    id={id}
    className={className}
    style={style}
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    // for rtl side bar
    renderView={props =>
      (<div
        {...props} style={{ ...props.style, marginLeft: props.style.marginRight, marginRight: 0, }}
      />)
    }
    // autoHeight
    autoHeightMin={0}
    autoHeightMax={200}
    thumbMinSize={30}
    universal={true}
  >
    {children}
  </Scrollbars>
);
