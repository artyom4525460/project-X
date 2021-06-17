(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/photoeditorsdk/esm/ui/basic/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/photoeditorsdk/esm/ui/basic/index.js ***!
  \***********************************************************/
/*! exports provided: BasicUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUI", function() { return It; });
/* harmony import */ var _chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunk.MDEDY36T.js */ "./node_modules/photoeditorsdk/esm/chunk.MDEDY36T.js");
/* harmony import */ var _chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunk.UODY7UPN.js */ "./node_modules/photoeditorsdk/esm/chunk.UODY7UPN.js");
/* harmony import */ var _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunk.IQZ6RVTD.js */ "./node_modules/photoeditorsdk/esm/chunk.IQZ6RVTD.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const vo=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["N"])`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.large.width}px;
  height: ${o=>o.theme.measurements.basicCard.large.height}px;
  color: ${o=>o.theme.card.foreground};
`;const Uo=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["N"])`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.medium.width}px;
  height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  color: ${o=>o.theme.card.foreground};
`,Co=o=>{const r=o.type===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].LARGE;let e=Uo;return r&&(e=vo),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(e,Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["N"])({},o))};Co.defaultProps={type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM};const wo=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["C"])`
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;const Lo=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["m"])`
  &&& {
    min-height: 32px;
    font-size: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`;const Ao=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  /* This fixes an IE11 issue where the items are behind the category */
  flex: 1 0 auto;
`;const Fo=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  transition: max-height 0.4s ease-in-out;
  ${o=>o.show?styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          max-height: 80px;
        `:styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          max-height: 0px;
        `}
`;var $o=Fo;Fo.defaultProps={show:!0};const Ft=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${o=>o.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`;var Po=Ft;const Pt=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`;var Do=Pt;const Oo=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.attrs(()=>({"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].ToolControlBarControls}))`
  position: absolute;
  left: 0%;
  transform: translateY(0%) scaleY(0);
  justify-content: center;
  padding: 0 5vw;
  width: 90%;
  height: ${o=>o.theme.measurements.basicToolControlBar.controlsBarHeight}px;
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out;
  z-index: ${o=>o.theme.measurements.zIndex.controlsBar};
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.inputLabelForeground};

  ${({show:o})=>o&&styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
      transform: translateY(-100%) scaleY(1);
    `}
`;const jt=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
`,zt=({label:o,className:r,children:e})=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(jt,{"aria-label":o,className:r},e);var ho=zt;const Gt=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["W"].scale} 0.2s linear;
  animation-fill-mode: both;
  height: 40px;
  min-width: 350px;
  @media all and (min-width: 0) and (max-width: 599px) {
    min-width: 280px;
  }
`;var Wo=Gt;const jo=styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
  background: ${o=>o.theme.tabTitle.activeBackground};
  color: ${o=>o.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${o=>o.theme.tabTitle.activeBorderColor};
`,Xt=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["f"])`
  display: inline-flex;
  align-items: center;
  font-size: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.case};
  color: ${o=>o.theme.tabTitle.foreground};
  border-radius: 0px;
  padding: 1px 12px 2px;
  background: ${o=>o.theme.tabTitle.background};

  ${({isActive:o})=>o&&jo}

  &:active {
    ${jo}
  }

  @media all and (min-width: 0) and (max-width: 599px) {
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;class fo extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.onClick=()=>{const{label:o,onClick:r}=this.props;r(o)}}render(){const{activeTab:o,label:r}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Xt,{ariaLabel:r,isActive:o===r,onClick:this.onClick},r)}}const Kt=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["u"])`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,qt=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["i"])`
  display: inline-flex;
  justify-content: center;
  transform: translate(-100%, -100%);
  @media all and (min-width: 0) and (max-width: 499px) {
    left: 0;
    right: 0;
    transform: translateY(-120%);
    background: transparent;
    button {
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`;class Qt extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(o){super(o);this.onTabClick=o=>{this.setState({activeTab:o,toggleExtend:!1})};this.getDropUp=()=>{const{length:o}=this.props,{toggleExtend:r}=this.state,e=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(this.props.children),n=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(this.props.children),s=e.slice(o,n);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(qt,{show:r},s.map(a=>{const m=a.props.label||"";return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["f"],{onClick:()=>this.onTabClick(m),key:m,ariaLabel:"More Options"},m)}))};this.extend=()=>{this.setState(({toggleExtend:o})=>({toggleExtend:!o}))};this.getExtension=()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Kt,{onClick:this.extend,ariaLabel:"Select Next"},"...");const r=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(this.props.children),e=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(this.props.children);this.state={activeTab:r&&(e[0].props&&e[0].props.label)||"",toggleExtend:!1}}render(){const{length:o}=this.props,{activeTab:r,toggleExtend:e}=this.state,n=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(this.props.children).slice(0,o),s=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(this.props.children)>o;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,n.map(a=>{if(a){const m=a.props.label||"";return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fo,{activeTab:r,key:m,label:m,onClick:this.onTabClick})}return null}),s?this.getExtension():null,e?this.getDropUp():null,react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(this.props.children,a=>!a||a.props&&a.props.label!==r?null:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wo,{key:a.props.label},a.props.children)))}}var Y=Qt;const Rt=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: relative;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`;class _ extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(o){super(o);this.updateLength=()=>{const{maxWidth:o,children:r}=this.props;let e=0;if(o)e=o;else{const a=window.innerWidth,m=a>600?300:200;e=a-m}const n=react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(r),s=e-n*_.TAB_WIDTH;if(s<0){const a=Math.round(Math.abs(s/_.TAB_WIDTH));this.setState({length:n-a})}};this.state={length:react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){const{children:o}=this.props,{length:r}=this.state;return r?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Rt,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Y,{length:r},o)):null}}_.TAB_WIDTH=120;const ee=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
            left: -24px;
            width: calc(100% + 48px);
          `:`
      left: 24px;
      width: calc(100% - 48px);
    `}
    border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var Ho=ee;const ne=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Slider).attrs(()=>({centerSlider:!0}))`
  max-width: 224px;
`;var No=ne;const ae=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:o})=>o&&styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`;var Go=ae;const go=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};

  ${o=>o.show?styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          transition-timing-function: ease-in;
          transition-duration: 0.3s;
          transition-property: all;
          padding: 2px 0px;
          max-height: ${o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
          background: ${o.theme.toolControlBar.background};
          color: ${o.theme.toolControlBar.inputLabelForeground};
        `:styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          max-height: 0px;
        `}
`;go.defaultProps={show:!0};const pe=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  width: 2px;
  margin: 0 10px;
  display: inline-flex;
  position: relative;
  &:after {
    content: ' ';
    right: 0px;
    position: absolute;
    top: 8px;
    height: calc(100% - 16px);
    border-right: 1px solid
      ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var Yo=pe;const Xo=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span`
  display: flex;
  cursor: pointer;
  z-index: ${o=>o.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;
`,_o=styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
  background-color: ${o=>o.theme.toolbar.activeBackground};
  color: ${o=>o.theme.toolbar.activeForeground};
`,no=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["L"])`
  display: block;
  height: 100%;
  width: 100%;
  color: ${o=>o.theme.toolbar.foreground};
  background-color: ${o=>o.theme.toolbar.background};
  border: unset;
  box-shadow: unset;
  font-size: ${o=>o.theme.measurements.fontSystem.label.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.label.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.label.case};
  font-family: '${o=>o.theme.typography.fontFamily}', sans-serif;

  ${({isActive:o})=>o&&_o}

  &:active {
    ${_o}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,Jo=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,so=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.attrs({role:"none"})`
  display: flex;
  height: ${o=>o.theme.measurements.basicUIToolbar.openHeight-2}px;
  text-align: center;
  min-width: 100px;
  /* Allow the text to grow in this limit */
  max-width: 150px;
  position: relative;
  /* Position inline-block box at the top of the line box */
  vertical-align: top;
  /* Allow text to wrap again, overwriting the Toolbar style */
  white-space: normal;
  margin: 1px;
`,be=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  transition: height 0.2s ease-out, display 0.1s fade-out;
  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};

  ${o=>o.show?styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          ${no} {
            svg {
              visibility: hidden;
              opacity: 0;
              height: 0;
            }
          }
          ${so} {
            height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          }
        `:styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
`,Qo=({show:o=!1,children:r})=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(be,{"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].Toolbar,show:o},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["C"],null,r));const Zo=({children:o,label:r,isActive:e,onClick:n})=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(so,{"aria-haspopup":!0,"aria-expanded":e},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(no,{"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].ToolbarItem,ariaLabel:r,onClick:n,isActive:e},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Jo,null,o,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Xo,null,r))));const ue=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.attrs({role:"none"})`
  ${o=>o.active?styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
        `:styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
  width: 2px;
  display: inline-block;
  position: relative;
  &:after {
    content: ' ';
    right: 0px;
    position: absolute;
    top: 8px;
    height: calc(100% - 16px);
    border-right: 1px solid
      ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var ot=ue;const t={CardContainer:wo,ExpandableContainer:Go,CategoryContainer:Ao,Card:Co,CardAvatar:_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["q"],CardLabel:Lo,Toolbar:{Index:Qo,Item:Zo,Separator:ot},BarSeparator:Ho,ItemsSeparator:Yo,Itemsbar:go,Controlsbar:$o,ControlsbarContainer:Oo,ResponsiveTabWrapper:_,Slider:No,TabWrapper:Y,Tab:ho,Other:{ControlsWrapper:Po,EmptyDiv:Do}},ye=({config:o,active:r})=>{const{tools:e}=o,n=r.tool,s=d=>{const g=_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["r"][d];return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(g,null)||null},a=d=>o.locale[d].title,m=(d,g)=>d&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Toolbar.Item,{onClick:()=>r.selectTool(d),key:d,label:a(d),isActive:n===d},s(d))||react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Toolbar.Separator,{key:d+g,active:!!n});return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Toolbar.Index,{show:!!n},e.map(m))},tt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("config","active")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(ye));const Se=({adjustmentsTool:o,custom:r})=>{const e=o.selectedAdjustmentType.toLowerCase(),n=r.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot()};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:Boolean(e)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(n,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].ADJUSTMENT,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:o.locale.controls.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!e,adjust:!0,style:{width:"280px"},label:o.selectedOptionLabel,value:o[e],onChange:a=>o.editAdjustments({type:e,value:a}),onMouseUp:s,onTouchEnd:s,snap:0}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))};var et=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("adjustmentsTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Se));const xe=t.TabWrapper,{Tab:yo}=t,Ie=({brushTool:o,custom:r})=>{const{colorList:e,locale:n,localeColor:s}=o,a=n.controls,m=s.colorPicker,d=r.getButton("toolControlBarSecondaryButton");return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(d,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].BRUSH,ariaLabel:a.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),isDisabled:!o.isDirty,label:a.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Form,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(xe,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(yo,{label:a.tabColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:1}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{showLabel:!1,label:a.selectColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeColor:o.color,colors:e,labelsColor:m,colorPickerDirection:"top",onChange:o.changeColor}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(yo,{label:a.tabSize},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(yo,{label:a.tabHardness},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness}))))))},rt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("brushTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Ie));const Be=({filterTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,s=r.getButton("toolControlBarSecondaryButton"),a=()=>{o.toolSnapshot()};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(s,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FILTER,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:o.locale.controls.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:n.sliderIntensity,value:e.intensity,min:0,max:1,onMouseUp:a,onTouchEnd:a,onChange:o.changeIntensity,snap:e.isDuotone?.5:null}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))};var nt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("filterTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Be));const ke=({focusTool:o,custom:r})=>{const e=o.locale.controls,n=r.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot(e.sliderIntensity)};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(n,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FOCUS,ariaLabel:e.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:e.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:o.intensity,min:_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["S"].minIntensity,max:o.maxIntensity,divider:1,onChange:o.changeIntensity,onMouseUp:s,onTouchEnd:s}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))};var st=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("focusTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(ke));const ve=t.TabWrapper,{Tab:So}=t,Ue=({frameTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{tintable:s,colorList:a}=o,m=r.getButton("toolControlBarSecondaryButton"),d=g=>{o.toolSnapshot(g)};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(m,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FRAME,ariaLabel:e.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:e.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ve,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(So,{label:e.tabOpacity},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:()=>{d(e.sliderOpacity)},onTouchEnd:()=>{d(e.sliderOpacity)}})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(So,{label:e.tabSize},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:()=>{d(e.sliderSize)},onTouchEnd:()=>{d(e.sliderSize)}})),s&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(So,{label:e.tabColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:1}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{label:e.selectColor,showLabel:!1},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeColor:o.color,colors:a,labelsColor:n,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})))||null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))},it=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("frameTool","canvas","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Ue));const Ee=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(t.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
      > :first-child {
        margin-right: 16px;
      }
    `}
`,Fe=({library:o,active:r,custom:e})=>{const n=o.locale.controls.placeholderSearch,{config:s}=o,a=e.getButton("toolControlBarPrimaryButton"),m=k=>{o.fetchImages(k)},d=k=>{const{files:G}=k.target;if(G.length){const S=new FileReader;S.onload=N=>{r.newImage(N.target.result)},S.readAsDataURL(G[0])}},g=()=>{r.selectWebcam(!0)},P=()=>{const k=document.getElementById("fileUpload");k&&k.click()};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ee,{firstChildMargin:s.enableWebcam&&!o.libraryProvider,show:!0},s.enableUpload&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(a,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:P,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].uploadImage,null),label:o.locale.controls.buttonUpload},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.File,{onChange:d})),o.libraryProvider&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Search,{onChange:m,placeholder:n})),s.enableWebcam&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["h"],{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY,onClick:g,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null))};var at=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("library","active","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Fe));const $e=t.TabWrapper,{Tab:lt}=t,Pe=({overlayTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,{allBlendModes:s}=o,{blendMode:a}=o,m=r.getButton("toolControlBarSecondaryButton"),d=()=>{o.toolSnapshot()},g=P=>{o.changeBlendMode(P)};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(m,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].OVERLAY,ariaLabel:n.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:n.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement($e,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(lt,{label:n.tabBlendMode},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.CarouselSlider,{showLabel:!1,label:n.carouselBlendMode,defaultIdentifier:a,onSelect:g,list:s})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(lt,{label:n.tabOpacity},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:e.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:d,onTouchEnd:d}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))};var mt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("overlayTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Pe));const We=t.TabWrapper,{Tab:pt}=t,Me=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["V"].VisuallyHidden}
`,je=({stickerTool:o,custom:r})=>{const{colorList:e}=o,n=o.locale.controls,s=o.localeColor.colorPicker,a=r.getButton("toolControlBarPrimaryButton"),m=()=>{o.toolSnapshot()},d=()=>{const S=document.getElementById("fileUpload");S&&(S.value=null,S.click())},g=S=>{const{files:N}=S.target;o.addFiles(N)},P=()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{isDisabled:!o.isStickerSelected,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:o.changeOpacity}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:2})),k=()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(We,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pt,{label:n.tabColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,{count:1}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:!1,label:n.selectColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeSprite:o.id,activeColor:o.tintColor,colors:e,labelsColor:s,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pt,{label:n.tabOpacity},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{isDisabled:!o.isStickerSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:o.changeOpacity})))),G=()=>o.isCustomStickerEnabled?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(a,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].STICKER,ariaLabel:n.buttonUpload,onClick:d,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].uploadImage,null),label:n.buttonUpload},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Me,{onChange:g})):null;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:!0},G(),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,o.tintable&&k()||P(),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))},ct=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("stickerTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(je));const Ne=t.ResponsiveTabWrapper,{Tab:J}=t,Ge=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,Ve=({textTool:o,custom:r})=>{const{colorList:e,backgroundColorList:n}=o,s=o.locale.controls,a=o.localeColor.colorPicker,m=["left","center","right"],d=r.getButton("textAlignment"),g=r.getButton("toolControlBarPrimaryButton"),P=()=>m.map(S=>{const N=_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["s"][S];return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(d,{tool:S,isDisabled:!o.isTextSelected,ariaLabel:`Align ${S}`,isActive:S===o.alignment,key:S,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(N,null),onClick:()=>o.changeAlignment(S)})}),k=()=>{o.toolSnapshot()},G=S=>{const N=S?parseFloat(S):0;o.setFontSize(Math.max(10,Math.min(690,N)))};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:!0},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(g,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT,ariaLabel:s.buttonNew,onClick:o.add,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].addText,null),label:s.buttonNew}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ne,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(J,{label:s.tabFontSize},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ge,{value:o.fontSize.toFixed(0),onSubmit:G,isDisabled:!o.isTextSelected})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(J,{label:s.tabAlignment},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectAlignment},P())),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(J,{label:s.tabColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectFontColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeSprite:o.id,activeColor:o.textColor,colors:e,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(J,{label:s.tabBgColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectBackgroundColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeSprite:o.id,activeColor:o.backgroundColor,colors:n,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(J,{label:s.tabLineHeight},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Slider,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:k,onTouchEnd:k,snap:1,divider:1,decimal:1}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))},dt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("textTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Ve));const Ye=({textDesignTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{colorList:s}=o,a=r.getButton("toolControlBarSecondaryButton"),m=r.getButton("toolControlBarPrimaryButton");return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:!0},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(m,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT_DESIGN,ariaLabel:e.buttonNew,onClick:o.add,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].addText,null),label:e.buttonNew}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Input.Selection,{isDisabled:!o.isTextDesignSelected,label:e.selectColor},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["g"],{activeSprite:o.id,activeColor:o.color,colors:s,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(a,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT_DESIGN,ariaLabel:e.buttonShuffle,onClick:o.changeSeed,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].shuffle,null),label:e.buttonShuffle}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null))},Ct=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("textDesignTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Ye));const Je=t.ResponsiveTabWrapper,{Tab:xo}=t,Ke=({transformTool:o,custom:r})=>{const e=o.locale.controls,{forceDimensions:n}=o,s=r.getCheckbox(),a=r.getButton("toolControlBarSecondaryButton");return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ControlsbarContainer,{show:!0},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(a,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TRANSFORM,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["t"].reset,null),label:o.locale.controls.buttonReset}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.ControlsWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Spacer,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Je,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(xo,{label:e.tabCropSize},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["n"],{isDisabled:n,showLabel:!1,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:e.inputCropSize,labelHeight:e.inputHeight,labelWidth:e.inputWidth})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(xo,{label:e.tabFlipAndRotate},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["p"],null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(xo,{label:e.tabResolution},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(s,{isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:e.checkboxKeepResolution,onClick:o.changeLockResolution}))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.BarSeparator,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Other.EmptyDiv,null))};var bt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("transformTool","custom")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Ke));let K=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{render(){const{active:o}=this.props,r=o.tool;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Controlsbar,{show:!!r},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Index,{type:r},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FILTER},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(nt,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FOCUS},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(st,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].ADJUSTMENT},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(et,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].OVERLAY},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(mt,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].STICKER},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ct,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(dt,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT_DESIGN},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ct,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(at,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FRAME},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(it,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].BRUSH},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rt,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Switch.Case,{value:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TRANSFORM},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(bt,null))))}};K=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("active","config"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],K);const Ze=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`,Re=({adjustmentsTool:o})=>{const r=(e,n)=>{const s=_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["v"][e.identifier];return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].ADJUSTMENT,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>o.toggleOptionSelection(e.identifier),isActive:e.identifier===o.selectedAdjustmentType,key:`${e.identifier}-${n}`,label:e.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(n)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ze,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(s,null)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,null,o.locale.items[e.identifier]||e.name))};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,o.items.map(r))};var ht=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("adjustmentsTool")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(Re));let Q=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{filterTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{filterTool:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FILTER,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>e.selectFilter(o.identifier,o.defaultIntensity),isActive:e.identifier===o.identifier,key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},e.locale.categories[o.identifier]||e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{filterTool:e}=this.props,{selectedCategoryIdentifier:n}=e,s=n===o.identifier;return o.items?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CategoryContainer,{key:o.identifier},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FILTER,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},o.name)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ExpandableContainer,{show:s},o.items.map(this.renderItem))):null}}render(){const{filterTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,n.map(this.renderItem)):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,r.map(this.renderCategory))}};Q=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("filterTool","active"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],Q);const or=({focusTool:o})=>{const r=n=>{o.selectFocus(n)},e=(n,s)=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{isActive:n.identifier===o.identifier,tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FOCUS,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>r(n.identifier),key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},o.locale.items[n.identifier]||n.name));return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,o.items.map(e))};var ut=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("focusTool")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(or));const tr=({frameTool:o})=>{const r=o.identifier,e=(n,s)=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FRAME,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===r,key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s)}s`,backgroundSize:"60%"}}," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{hidden:!0},o.locale.items[n.identifier]||n.name));return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,o.items.map(e))};var ft=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("frameTool")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(tr));let Z=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{library:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{active:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>e.newImage(o.rawUrl),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}})};this.renderCategory=(o,r)=>{const{library:e}=this.props,{selectedCategoryIdentifier:n}=e,s=n===o.identifier;return o.items?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CategoryContainer,{key:o.identifier},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},o.name)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ExpandableContainer,{show:s},o.items.map(this.renderItem))):null}}render(){const{library:o}=this.props,{query:r,categories:e,items:n,locale:s,config:a}=o;return r?n.length?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,n.map(this.renderItem)):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",{"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].NoResult},s.controls.noResults):a.flattenCategories?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,n.map(this.renderItem)):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,e.map(this.renderCategory))}};Z=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("library","active"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],Z);const er=({overlayTool:o})=>{const{identifier:r,items:e,selectOverlay:n,locale:s}=o,a=(m,d)=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].OVERLAY,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>n(m.identifier),isActive:m.identifier===r,key:`${m.identifier}-${d}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(d)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},s.items[m.identifier]||m.name));return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,e.map(a))};var gt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("overlayTool")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(er));let R=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{stickerTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{stickerTool:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].STICKER,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>e.add(o.identifier),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["b"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{hidden:!0},e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{stickerTool:e}=this.props,{selectedCategoryIdentifier:n,locale:s}=e,a=n===o.identifier;return o.items?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CategoryContainer,{key:o.identifier},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].STICKER,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{withBackground:!0},s.categories[o.identifier]||o.name)),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem))):null}}render(){const{stickerTool:o}=this.props,{categories:r,items:e,config:n}=o;return n.flattenCategories?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,e.map(this.renderItem)):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,r.map(this.renderCategory))}};R=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("stickerTool","active"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],R);const ir=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`;class ar extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:o,fontStyle:r,fontWeight:e},n)=>{const s=document.createElement("canvas"),a=s.getContext("2d");return a.font=`${r} ${e} 20px ${o}`,a.fillText(n,0,0),a.measureText(n).width};this.renderItem=(o,r)=>{const{config:e,textTool:n}=this.props,{fontFamily:s,fontWeight:a,fontStyle:m,identifier:d}=o,g=`${o.fontFamily} ${_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["P"].getDisplayFontStyle(o)}`,P=this.getWidth(o,g),k=(e.measurements.basicCard.medium.width-20)/P;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>n.changeFont(d),isDisabled:!this.textTool.isTextSelected,isActive:n.identifier===d,key:`${o.identifier}-${r}`,label:g,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ir,{style:{transform:`scale(${k}) translate(-50%, -50%)`,fontFamily:s,fontStyle:m,fontWeight:a}},g))}}get textTool(){return this.props.textTool}render(){const{textTool:o}=this.props,{fontsLoaded:r,fontFamilies:e}=o;return r?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,e.map(this.renderItem)):null}}var yt=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("textTool","config")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(ar));const lr=({textDesignTool:o})=>{const{items:r,changeIdentifier:e,isTextDesignSelected:n,identifier:s}=o,a=(m,d)=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT_DESIGN,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>e(m.identifier),isDisabled:!n,isActive:s===m.identifier,key:`${m.identifier}-${d}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(d)}s`,backgroundSize:"60%"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,{hidden:!0},m.name));return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,r.map(a))};var St=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("textDesignTool")(Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"])(lr));const pr=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  svg {
    margin-bottom: 12px;
  }
`,cr=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["d"]} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`;let oo=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{transformTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{transformTool:e,config:n}=this.props,{locale:s}=e,a=e.checkIfTransformThumbnailExits(o.thumbnailURI),m=_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["u"].crops[o.identifier]||_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["u"].crops.imgly_transform_common_custom,d=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,null,s.items[o.identifier]||o.name),g=a?d:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cr,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(m,{main:n.theme.transform.crops.main,highlight:n.theme.transform.crops.highlight,shadow:n.theme.transform.crops.shadow}),d);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TRANSFORM,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].MEDIUM,onClick:()=>e.changeIdentifier(o.identifier,!0),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},g)};this.renderCategory=(o,r)=>{const{transformTool:e}=this.props,{selectedCategoryIdentifier:n,locale:s}=e,a=n===o.identifier;if(!o.items)return null;const m=e.checkIfTransformThumbnailExits(o.thumbnailURI),d=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardLabel,null,s.categories[o.identifier]||o.name),g=m?d:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pr,null,_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["u"].categories[o.identifier]&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["u"].categories[o.identifier]),d);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CategoryContainer,{key:o.identifier},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Card,{tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TRANSFORM,type:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["w"].LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:m?o.thumbnailURI:"",label:o.name,style:{animationDelay:`${Object(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r)}s`}},g),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem)))}}render(){const{transformTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,n.map(this.renderItem)):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.CardContainer,null,r.map(this.renderCategory))}};oo=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("transformTool","config"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],oo);let to=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);this.getToolItemsComponent=o=>{switch(o){case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Z,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FILTER:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Q,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FOCUS:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ut,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].ADJUSTMENT:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ht,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].OVERLAY:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gt,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].STICKER:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(R,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(yt,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TEXT_DESIGN:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(St,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].FRAME:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ft,null);case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].TRANSFORM:return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(oo,null);default:return null}}}render(){const{library:o,active:r}=this.props,e=r.tool;return e===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].BRUSH||e===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["c"].LIBRARY&&!o.libraryProvider?null:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(t.Itemsbar,{"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].ToolControlBar,show:!!e},this.getToolItemsComponent(e))}};to=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("active","library"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],to);const fr=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`;let eo=class extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{static getDerivedStateFromError(o){return console.error(o),{hasError:!0}}render(){const{active:o}=this.props;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["X"].Container,{"data-test":_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["T"].EditorContainer},o.isWebcam?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fr,null):null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["o"],null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["c"],null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["q"],null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["l"],null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(K,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(to,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(tt,null)))}};eo=Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["R"])([Object(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["aa"])("active"),_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["Z"]],eo);class It extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{componentDidMount(){const{editor:o,storeProps:r}=this.props;this.editor=o,this.storeProps=r;const e=new _chunk_MDEDY36T_js__WEBPACK_IMPORTED_MODULE_0__["k"](this.editor.configStore.config.custom.components,{}),n={getDialog:e.getDialog,getButton:e.getButton,getColorItem:e.getColorItem,getCheckbox:e.getCheckbox};this.storeProps.custom=n,this.forceUpdate()}render(){return this.storeProps?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chunk_UODY7UPN_js__WEBPACK_IMPORTED_MODULE_1__["$"],Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["N"])({},this.storeProps),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"],{theme:Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["N"])(Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_2__["N"])({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eo,null))):null}}


/***/ })

}]);