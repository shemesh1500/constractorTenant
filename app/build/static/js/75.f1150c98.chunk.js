(this["webpackJsonp@iso/cra"]=this["webpackJsonp@iso/cra"]||[]).push([[75],{1585:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),r=t.n(a),l=t(74),o=t(100),c=t(763),i=t(16),s=i.a.toggleViewProfile,u=i.a.toggleMobileProfile;function m(){var e=Object(l.c)(),n=Object(l.d)((function(e){return e.Chat})),t=n.user,a=n.userId,i=n.selectedChatRoom,m=n.messages;r.a.useEffect((function(){!function(){var e=document.getElementById("messageChat");e.scrollTop=e.scrollHeight}()}));return r.a.createElement(c.l,{id:"messageChat"},m.map((function(n){var l=a===n.sender,m=l?t:i.otherUserInfo;return l?r.a.createElement(c.n,{className:"loggedUser",key:n.messageTime},r.a.createElement("div",{className:"messageContent isUser"},r.a.createElement("div",{className:"messageContentText"},r.a.createElement("p",null,n.text)),r.a.createElement("div",{className:"messageTime"},r.a.createElement("p",null,Object(o.e)(n.messageTime)))),r.a.createElement("div",{className:"messageGravatar"},r.a.createElement("img",{alt:"#",src:m.profileImageUrl,onClick:function(){e(u(!0)),e(s(m))}}))):r.a.createElement(c.n,{key:n.messageTime},r.a.createElement("div",{className:"messageGravatar"},r.a.createElement("img",{alt:"#",src:m.profileImageUrl,onClick:function(){e(u(!0)),e(s(m))}})),r.a.createElement("div",{className:"messageContent notUser"},r.a.createElement("div",{className:"messageContentText"},r.a.createElement("p",null,n.text)),r.a.createElement("div",{className:"messageTime"},r.a.createElement("p",null,Object(o.e)(n.messageTime)))))})))}},1586:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(109),r=t(0),l=t.n(r),o=t(74),c=t(196),i=t(561),s=t(16),u=t(763),m=s.a.sendMessage;function d(e){var n=Object(o.c)(),t=l.a.useState(""),r=Object(a.a)(t,2),s=r[0],d=r[1];return l.a.createElement(u.g,null,l.a.createElement(u.p,{autosize:e.autosize,value:s,onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s&&s.length>0?(n(m(s)),d("")):Object(i.a)("error","Please type something"))},placeholder:"Type your message"}),e.showButton&&l.a.createElement("div",{className:"sendMessageButton"},l.a.createElement(c.b,{type:"primary",onClick:function(){return n(m(s))}},"Send Message")))}},1599:function(e,n,t){"use strict";var a=t(109),r=t(0),l=t.n(r),o=t(74),c=t(62),i=t.n(c),s=t(110),u=t(924),m=t(666),d=t(769),p=t(628),f=t(561),g=t(16),b=t(763),h="DD/MM/YYYY",v=g.a.updateNewUsersProp,E=g.a.addNewUser;function x(){var e=Object(o.d)((function(e){return e.Chat})),n=e.user,t=e.users,a=e.addNewUsersProp,r=Object(o.c)(),c=function(){r(v({modalActive:!1}))},g=a.modalActive,x=a.name,w=a.dob,O=a.mobileNo,j=a.gender,y=a.language;return l.a.createElement("div",null,l.a.createElement(u.a,{placement:"topRight",title:"Add a new user (For demo only)"},l.a.createElement(b.a,{onClick:function(){r(v({modalActive:!0,name:"New User",dob:"22/04/1992",mobileNo:"9429692135",gender:"Male",language:"English",profileImageUrl:"https://thumb7.shutterstock.com/display_pic_with_logo/818215/552201991/stock-photo-beautiful-young-grinning-professional-black-woman-in-office-with-eyeglasses-folded-arms-and-552201991.jpg"}))}},l.a.createElement("i",{className:"ion-android-add"}))),l.a.createElement(p.a,{visible:g,onClose:c,title:"Add New User",okText:"Add User",onOk:function(){var e;a.name?(e=a,-1!==t.findIndex((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?Object(f.a)("error","User name already exists"):(r(E(n,a)),Object(f.a)("success","New user created successfuly"))):Object(f.a)("error","please add new user name")},onCancel:c},l.a.createElement(b.i,null,l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Name"),l.a.createElement(s.d,{label:"Name",placeholder:"Enter Name",value:x||"",onChange:function(e){a.name=e.target.value,r(v(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Mobile"),l.a.createElement(s.d,{label:"Mobile",placeholder:"Mobile No",value:O||"",onChange:function(e){a.mobileNo=e.target.value,r(v(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Gender"),l.a.createElement(m.b,{id:"gender",name:"gender",value:j,onChange:function(e){a.gender=e.target.value,r(v(a))}},l.a.createElement(m.c,{value:"Male"},"Male"),l.a.createElement(m.c,{value:"Female"},"Female"),l.a.createElement(m.c,{value:"Other"},"Other"))),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Language"),l.a.createElement(s.d,{label:"Language",placeholder:"Language",value:y||"",onChange:function(e){a.language=e.target.value,r(v(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Date"),l.a.createElement(d.b,{allowClear:!1,format:h,value:i()(w,h),onChange:function(e,n){a.dob=n,r(v(a))}})))))}var w=t(725),O=t(196),j=t(834),y=t(100);t.d(n,"a",(function(){return I}));var C=g.a.setSelectedChatroom,N=g.a.toggleMobileList,k=g.a.toggleCompose;function P(e){return e.filter((function(e){return e.lastMessageTime>0}))}function I(){var e=Object(o.c)(),n=Object(o.d)((function(e){return e.Chat})),t=n.users,r=n.chatRooms,c=n.selectedChatRoom,i=Object(o.d)((function(e){return e.App})).view,s=l.a.useState(P(r)),u=Object(a.a)(s,2),m=u[0],d=u[1];l.a.useEffect((function(){d(P(r))}),[r]);var p="DesktopView"===i?c:{};return l.a.createElement(b.d,null,l.a.createElement(b.o,null,l.a.createElement(b.j,{onChange:function(e){var n=e.target.value,t=P(r);n.trim()&&(t=t.filter((function(e){return e.otherUserInfo.name.toLowerCase().includes(n.toLowerCase())}))),d(t)},placeholder:"Search Contact"}),l.a.createElement(x,null)),l.a.createElement(b.s,null,l.a.createElement(w.a,{style:{height:"100%"}},0===m.length?l.a.createElement(j.a,{text:"No Conversation",className:"messageHelperText"}):m.map((function(n,t){var a=n.otherUserInfo,r=n.lastMessage,o=n.lastMessageTime,c=a.name,i=a.profileImageUrl,s=p.id===n.id,u={background:s?"#f7f7f7":"rgba(0,0,0,0)"};return l.a.createElement(b.r,{key:t,style:u,onClick:function(t){t.stopPropagation(),s||e(C(n)),N&&e(N(!1))}},l.a.createElement("div",{className:"userListsGravatar"},l.a.createElement("img",{alt:"#",style:{width:45,height:45},src:i})),l.a.createElement("div",{className:"userListsContent"},l.a.createElement("h4",null,c),l.a.createElement("div",{className:"chatExcerpt"},l.a.createElement("p",null,r),l.a.createElement("span",{className:"userListsTime"},Object(y.e)(o)))))})))),t.length>0&&l.a.createElement("div",{className:"ComposeMessageButton"},l.a.createElement(O.b,{onClick:function(){return e(k())},type:"primary"},"Compose")))}},1600:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(27),o=t(21),c=t(6);function i(){var e=Object(l.a)(["\n  display: flex;\n\n  .viewProfileTitle {\n    width: 35%;\n    font-size: 13px;\n    font-weight: 500;\n    font-weight: light;\n    color: ",";\n    margin-bottom: 30px;\n  }\n  .viewProfileValue {\n    width: 65%;\n    text-align: right;\n    font-size: 13px;\n    color: ",";\n    margin-bottom: 30px;\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(l.a)(["\n  background: #ffffff;\n  border: 1px solid ",";\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  width: 95%;\n  height: 100%;\n\n  .viewProfileTopBar {\n    background: ",";\n    border-bottom: 1px solid ",";\n    padding: 25px 20px 25px 30px;\n    display: flex;\n    justify-content: space-between;\n    line-height: 1;\n\n    span {\n      margin: 0;\n      margin-left: 15px;\n      cursor: pointer;\n      i {\n        font-size: 14px;\n        font-weight: normal;\n      }\n    }\n  }\n  .viewProfileContent {\n    padding: 30px 30px 0;\n  }\n  .viewProfileImage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  h1 {\n    font-size: 21px;\n    text-align: center;\n    font-weight: 300;\n    margin-bottom: 30px;\n    margin-top: 10px;\n    color: #212121;\n  }\n  img {\n    height: 120px;\n    border-radius: 6px;\n  }\n  .viewProfileQuickInfo {\n    border-top: 1px solid ",";\n    padding-top: 40px;\n  }\n  @media only screen and (min-width: 768px) {\n    width: 350px;\n  }\n"]);return s=function(){return e},e}var u=o.d.div(s(),Object(c.palette)("border",0),Object(c.palette)("grayscale",4),Object(c.palette)("border",0),Object(c.palette)("border",2)),m=o.d.div(i(),Object(c.palette)("text",0),Object(c.palette)("text",1)),d=function(e){var n=e.title,t=e.value;return r.a.createElement(m,null,r.a.createElement("span",{className:"viewProfileTitle"},n),r.a.createElement("span",{className:"viewProfileValue"},t))};n.a=function(e){var n=e.viewProfile,t=e.toggleViewProfile,a=e.toggleMobileProfile;if(!n)return null;var l=n.name,o=n.dob,c=n.mobileNo,i=n.gender,s=n.language,m=n.profileImageUrl;return r.a.createElement(u,null,r.a.createElement("div",{className:"viewProfileTopBar"},"Contact Info",r.a.createElement("span",{onClick:function(){a&&a(!1),t(!1)}},r.a.createElement("i",{className:"ion-android-close"}))),r.a.createElement("div",{className:"viewProfileContent"},r.a.createElement("div",{className:"viewProfileImage"},r.a.createElement("img",{alt:"#",src:m}),r.a.createElement("h1",null,l)),r.a.createElement("div",{className:"viewProfileQuickInfo"},r.a.createElement(d,{title:"Name",value:l}),r.a.createElement(d,{title:"Date of Birth",value:o}),r.a.createElement(d,{title:"Mobile No",value:c}),r.a.createElement(d,{title:"Gender",value:i}),r.a.createElement(d,{title:"Language",value:s}))))}},1601:function(e,n,t){"use strict";var a=t(5),r=t(109),l=t(0),o=t.n(l),c=t(736),i=t(27),s=t(21),u=t(6);function m(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n\n  .userImg {\n    width: 35px;\n    height: 35px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 15px;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .suggetionText {\n    font-size: 13px;\n    color: ",";\n    font-weight: 500;\n    margin: 0;\n  }\n"]);return m=function(){return e},e}var d=s.d.div(m(),Object(u.palette)("text",0));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(e){var n=o.a.useState({value:"",result:[]}),t=Object(r.a)(n,2),a=t[0],l=t[1],i=a.result,s=a.value;return o.a.createElement(c.b,{value:s,onSelect:function(e){e&&a.result.forEach((function(n){n.id===e&&l(f({},a,{value:n.name}))}))},onSearch:function(n){var t=[];n&&e.users.forEach((function(e){e.name.toLowerCase().indexOf(n.toLowerCase())>-1&&t.push(e)})),l(f({},a,{result:t,value:n}))},placeholder:"find your buddy",style:{marginBottom:10}},i.map((function(n){return o.a.createElement(c.a,{key:n.id,style:{display:"flex"}},o.a.createElement(d,{onClick:function(){l(f({},a,{value:n.name,result:[]})),e.setComposedId(n.id)}},o.a.createElement("div",{className:"userImg"},o.a.createElement("img",{alt:"#",src:n.profileImageUrl})),o.a.createElement("span",{className:"suggetionText"},n.name)))})))}},2609:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(74),o=t(1599),c=t(1585),i=t(1586),s=t(1600),u=t(1601),m=t(219),d=t(628),p=t(763);t(2),t(5),t(29),t(14);var f=t(16);t.d(n,"default",(function(){return E}));var g=f.a.toggleCompose,b=f.a.setComposedId,h=f.a.toggleViewProfile,v=f.a.chatInit;function E(e){var n=e.className,t=Object(l.c)(),a=Object(l.d)((function(e){return e.Chat})),f=a.loading,E=a.users,x=a.userId,w=a.openCompose,O=a.selectedChatRoom,j=a.viewProfile;return r.a.useEffect((function(){E||t(v(x))}),[x]),f?r.a.createElement(m.a,null):r.a.createElement(p.f,{className:"ChatWindow"},r.a.createElement(o.a,null),r.a.createElement(p.c,{style:{height:"100%"}},r.a.createElement(d.a,{visible:w,onCancel:function(){return t(g())},title:"Compose Message",footer:null},r.a.createElement(p.m,null,r.a.createElement("h5",null,"Starting your chat with..."),r.a.createElement(u.a,{users:E,setComposedId:function(e){return t(b(e))},className:n}),r.a.createElement(i.a,{autosize:{minRows:5,maxRows:9},showButton:!0,rows:8}))),O&&r.a.createElement(p.q,null,r.a.createElement("span",{onClick:function(){return t(h(O.otherUserInfo))}},O.otherUserInfo.name)),r.a.createElement(c.a,null),r.a.createElement(i.a,{autosize:{minRows:2,maxRows:6}})),!1!==j?r.a.createElement(s.a,{user:O.otherUserInfo,toggleViewProfile:function(){return t(h())},viewProfile:j}):null)}},561:function(e,n,t){"use strict";t(574);var a=t(575);n.a=function(e,n,t){a.a[e]({message:n,description:t})}},666:function(e,n,t){"use strict";t(642);var a=t(598),r=t(27),l=t(21),o=t(6);function c(){var e=Object(r.a)(["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper,\n  &.ant-radio-button-wrapper {\n    font-size: 13px;\n    color: ",";\n   \n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  .ant-radio-button-wrapper {\n    &.ant-radio-button-wrapper-checked {\n      background-color: ",";\n      border-color: ",";\n\n      &:not(.ant-radio-button-wrapper-disabled) {\n        /* background-color: ","; */\n        border-color: ",";\n\n        &:hover {\n          /* background-color: ","; */\n          border-color: ",";\n        }\n      }\n      \n    }\n    :focus{\n      outline:none;\n    }\n  }\n"]);return c=function(){return e},e}var i=function(e){return Object(l.d)(e)(c(),Object(o.palette)("text",1),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0))};t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return m}));var s=i(a.a),u=i(a.a.Group),m=i(a.a.Button);n.c=s},736:function(e,n,t){"use strict";t(782);var a=t(787),r=t(27),l=t(21),o=t(6);function c(){var e=Object(r.a)(["\n  width: 100%;\n\n  &.ant-select {\n    .ant-select-selection {\n      &.ant-select-selection--single {\n        height: 35px;\n\n        .ant-select-selection__rendered {\n          line-height: 35px;\n          margin: 0;\n\n          .ant-select-selection__placeholder,\n          .ant-select-search__field__placeholder {\n            top: 8px;\n            margin: 0 10px;\n            left: ",";\n            right: ",";\n            color: ",";\n          }\n\n          .ant-input {\n            padding: 4px 10px;\n            width: 100%;\n            height: 35px;\n            font-size: 13px;\n            text-align: ",";\n            line-height: 1.5;\n            color: ",";\n            border: 1px solid ",";\n            transition: all 0.3s;\n\n            &:focus {\n              border-color: ",";\n              outline: 0;\n              box-shadow: 0 0 0 2px ",";\n            }\n\n            &:hover {\n              border-color: ",";\n            }\n          }\n        }\n      }\n    }\n\n    .ant-select-search__field {\n      padding: 10px;\n    }\n  }\n"]);return c=function(){return e},e}var i=t(60);t.d(n,"a",(function(){return d}));var s,u=(s=a.a,Object(l.d)(s)(c(),(function(e){return"rtl"===e["data-rtl"]?"inherit":"0"}),(function(e){return"rtl"===e["data-rtl"]?"9px":"inherit"}),Object(o.palette)("grayscale",1),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),Object(o.palette)("text",1),Object(o.palette)("border",0),Object(o.palette)("primary",0),Object(o.palette)("primary",3),Object(o.palette)("primary",0))),m=Object(i.a)(u),d=a.a.Option;n.b=m},769:function(e,n,t){"use strict";t(909);var a=t(931),r=t(27),l=t(21),o=t(6),c=t(33);function i(){var e=Object(r.a)(["\n  .ant-input {\n    padding: 4px 10px;\n    width: 100%;\n    height: 35px;\n    cursor: text;\n    font-size: 13px;\n    line-height: 1.5;\n    color: ",";\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid ",";\n    ",";\n    ",";\n\n    &:focus {\n      border-color: ",";\n    }\n\n    &::-webkit-input-placeholder {\n      color: ",";\n    }\n\n    &:-moz-placeholder {\n      color: ",";\n    }\n\n    &::-moz-placeholder {\n      color: ",";\n    }\n    &:-ms-input-placeholder {\n      color: ",";\n    }\n  }\n"]);return i=function(){return e},e}var s=function(e){return Object(l.d)(e)(i(),Object(o.palette)("text",1),Object(o.palette)("border",0),Object(c.a)("4px"),Object(c.c)(),Object(o.palette)("primary",0),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0))};t.d(n,"a",(function(){return m}));var u=s(a.a),m=s(a.a.RangePicker);n.b=u},834:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.text,t=void 0===n?"":n;return r.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},r.a.createElement("h3",null,t))}},924:function(e,n,t){"use strict";t(603);var a=t(201);n.a=a.a}}]);
//# sourceMappingURL=75.f1150c98.chunk.js.map