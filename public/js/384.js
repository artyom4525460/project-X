(self.webpackChunk=self.webpackChunk||[]).push([[384],{7384:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BasicUI:()=>Oe});var l=n(3974),a=n(463),o=n(8821),r=n(7294),i=n(9163);const s=(0,i.ZP)(a.N)`
  margin: 2px;
  min-width: ${e=>e.theme.measurements.basicCard.large.width}px;
  height: ${e=>e.theme.measurements.basicCard.large.height}px;
  color: ${e=>e.theme.card.foreground};
`,c=(0,i.ZP)(a.N)`
  margin: 2px;
  min-width: ${e=>e.theme.measurements.basicCard.medium.width}px;
  height: ${e=>e.theme.measurements.basicCard.medium.height}px;
  color: ${e=>e.theme.card.foreground};
`,m=e=>{const t=e.type===o.w.LARGE;let n=c;return t&&(n=s),r.createElement(n,(0,o.N)({},e))};m.defaultProps={type:o.w.MEDIUM};const d=(0,i.ZP)(a.C)`
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  height: ${e=>e.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`,h=(0,i.ZP)(l.m)`
  &&& {
    min-height: 32px;
    font-size: ${e=>e.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${e=>e.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${e=>e.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`,u=i.ZP.div`
  display: flex;
  /* This fixes an IE11 issue where the items are behind the category */
  flex: 1 0 auto;
`,p=i.ZP.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  transition: max-height 0.4s ease-in-out;
  ${e=>e.show?i.iv`
          max-height: 80px;
        `:i.iv`
          max-height: 0px;
        `}
`;var b=p;p.defaultProps={show:!0};var g=i.ZP.div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${e=>e.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`;var E=i.ZP.div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`;const C=i.ZP.div.attrs((()=>({"data-test":a.T.ToolControlBarControls})))`
  position: absolute;
  left: 0%;
  transform: translateY(0%) scaleY(0);
  justify-content: center;
  padding: 0 5vw;
  width: 90%;
  height: ${e=>e.theme.measurements.basicToolControlBar.controlsBarHeight}px;
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out;
  z-index: ${e=>e.theme.measurements.zIndex.controlsBar};
  background: ${e=>e.theme.toolControlBar.background};
  color: ${e=>e.theme.toolControlBar.inputLabelForeground};

  ${({show:e})=>e&&i.iv`
      transform: translateY(-100%) scaleY(1);
    `}
`,f=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;var y=({label:e,className:t,children:n})=>r.createElement(f,{"aria-label":e,className:t},n);var x=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${a.W.scale} 0.2s linear;
  animation-fill-mode: both;
  height: 40px;
  min-width: 350px;
  @media all and (min-width: 0) and (max-width: 599px) {
    min-width: 280px;
  }
`;const S=i.iv`
  background: ${e=>e.theme.tabTitle.activeBackground};
  color: ${e=>e.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${e=>e.theme.tabTitle.activeBorderColor};
`,v=(0,i.ZP)(l.f)`
  display: inline-flex;
  align-items: center;
  font-size: ${e=>e.theme.measurements.fontSystem.basicUITabLabel.size}px;
  letter-spacing: ${e=>e.theme.measurements.fontSystem.basicUITabLabel.letterSpacing}px;
  text-transform: ${e=>e.theme.measurements.fontSystem.basicUITabLabel.case};
  color: ${e=>e.theme.tabTitle.foreground};
  border-radius: 0px;
  padding: 1px 12px 2px;
  background: ${e=>e.theme.tabTitle.background};

  ${({isActive:e})=>e&&S}

  &:active {
    ${S}
  }

  @media all and (min-width: 0) and (max-width: 599px) {
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;class T extends r.Component{constructor(){super(...arguments),this.onClick=()=>{const{label:e,onClick:t}=this.props;t(e)}}render(){const{activeTab:e,label:t}=this.props;return r.createElement(v,{ariaLabel:t,isActive:e===t,onClick:this.onClick},t)}}const w=(0,i.ZP)(a.u)`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,k=(0,i.ZP)(l.i)`
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
`;class I extends r.Component{constructor(e){super(e),this.onTabClick=e=>{this.setState({activeTab:e,toggleExtend:!1})},this.getDropUp=()=>{const{length:e}=this.props,{toggleExtend:t}=this.state,n=r.Children.toArray(this.props.children),a=r.Children.count(this.props.children),o=n.slice(e,a);return r.createElement(k,{show:t},o.map((e=>{const t=e.props.label||"";return r.createElement(l.f,{onClick:()=>this.onTabClick(t),key:t,ariaLabel:"More Options"},t)})))},this.extend=()=>{this.setState((({toggleExtend:e})=>({toggleExtend:!e})))},this.getExtension=()=>r.createElement(w,{onClick:this.extend,ariaLabel:"Select Next"},"...");const t=r.Children.count(this.props.children),n=r.Children.toArray(this.props.children);this.state={activeTab:t&&n[0].props&&n[0].props.label||"",toggleExtend:!1}}render(){const{length:e}=this.props,{activeTab:t,toggleExtend:n}=this.state,l=r.Children.toArray(this.props.children).slice(0,e),a=r.Children.count(this.props.children)>e;return r.createElement("div",null,l.map((e=>{if(e){const n=e.props.label||"";return r.createElement(T,{activeTab:t,key:n,label:n,onClick:this.onTabClick})}return null})),a?this.getExtension():null,n?this.getDropUp():null,r.Children.map(this.props.children,(e=>!e||e.props&&e.props.label!==t?null:r.createElement(x,{key:e.props.label},e.props.children))))}}var $=I;const B=i.ZP.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`;class R extends r.Component{constructor(e){super(e),this.updateLength=()=>{const{maxWidth:e,children:t}=this.props;let n=0;if(e)n=e;else{const e=window.innerWidth;n=e-(e>600?300:200)}const l=r.Children.count(t),a=n-l*R.TAB_WIDTH;if(a<0){const e=Math.round(Math.abs(a/R.TAB_WIDTH));this.setState({length:l-e})}},this.state={length:r.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){const{children:e}=this.props,{length:t}=this.state;return t?r.createElement(B,null,r.createElement($,{length:t},e)):null}}R.TAB_WIDTH=120;var L=i.ZP.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${e=>e.full?i.iv`
            left: -24px;
            width: calc(100% + 48px);
          `:"\n      left: 24px;\n      width: calc(100% - 48px);\n    "}
    border-bottom: 1px solid ${e=>e.theme.toolControlBar.separatorColor};
  }
`;var D=(0,i.ZP)(a.X.Input.Slider).attrs((()=>({centerSlider:!0})))`
  max-width: 224px;
`;var U=i.ZP.div`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:e})=>e&&i.iv`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`;const A=i.ZP.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  height: ${e=>e.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  z-index: ${e=>e.theme.measurements.zIndex.toolControlBar};

  ${e=>e.show?i.iv`
          transition-timing-function: ease-in;
          transition-duration: 0.3s;
          transition-property: all;
          padding: 2px 0px;
          max-height: ${e.theme.measurements.basicToolControlBar.itemsBarHeight}px;
          background: ${e.theme.toolControlBar.background};
          color: ${e.theme.toolControlBar.inputLabelForeground};
        `:i.iv`
          max-height: 0px;
        `}
`;A.defaultProps={show:!0};var P=i.ZP.div`
  height: ${e=>e.theme.measurements.basicToolControlBar.itemsBarHeight}px;
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
      ${e=>e.theme.toolControlBar.separatorColor};
  }
`;const O=i.ZP.span`
  display: flex;
  cursor: pointer;
  z-index: ${e=>e.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;
`,M=i.iv`
  background-color: ${e=>e.theme.toolbar.activeBackground};
  color: ${e=>e.theme.toolbar.activeForeground};
`,Z=(0,i.ZP)(a.L)`
  display: block;
  height: 100%;
  width: 100%;
  color: ${e=>e.theme.toolbar.foreground};
  background-color: ${e=>e.theme.toolbar.background};
  border: unset;
  box-shadow: unset;
  font-size: ${e=>e.theme.measurements.fontSystem.label.size}px;
  letter-spacing: ${e=>e.theme.measurements.fontSystem.label.letterSpacing}px;
  text-transform: ${e=>e.theme.measurements.fontSystem.label.case};
  font-family: '${e=>e.theme.typography.fontFamily}', sans-serif;

  ${({isActive:e})=>e&&M}

  &:active {
    ${M}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,X=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,W=i.ZP.div.attrs({role:"none"})`
  display: flex;
  height: ${e=>e.theme.measurements.basicUIToolbar.openHeight-2}px;
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
`,F=i.ZP.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  transition: height 0.2s ease-out, display 0.1s fade-out;
  background-color: ${e=>e.theme.toolbar.background};
  color: ${e=>e.theme.toolbar.foreground};
  z-index: ${e=>e.theme.measurements.zIndex.toolbar};

  ${e=>e.show?i.iv`
          height: ${e.theme.measurements.basicUIToolbar.closeHeight}px;
          ${Z} {
            svg {
              visibility: hidden;
              opacity: 0;
              height: 0;
            }
          }
          ${W} {
            height: ${e.theme.measurements.basicUIToolbar.closeHeight}px;
          }
        `:i.iv`
          height: ${e.theme.measurements.basicUIToolbar.openHeight}px;
        `}
`;var z=i.ZP.li.attrs({role:"none"})`
  ${e=>e.active?i.iv`
          height: ${e.theme.measurements.basicUIToolbar.closeHeight}px;
        `:i.iv`
          height: ${e.theme.measurements.basicUIToolbar.openHeight}px;
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
      ${e=>e.theme.toolControlBar.separatorColor};
  }
`;const H={CardContainer:d,ExpandableContainer:U,CategoryContainer:u,Card:m,CardAvatar:a.q,CardLabel:h,Toolbar:{Index:({show:e=!1,children:t})=>r.createElement(F,{"data-test":a.T.Toolbar,show:e},r.createElement(a.C,null,t)),Item:({children:e,label:t,isActive:n,onClick:l})=>r.createElement(W,{"aria-haspopup":!0,"aria-expanded":n},r.createElement(Z,{"data-test":a.T.ToolbarItem,ariaLabel:t,onClick:l,isActive:n},r.createElement(X,null,e,r.createElement(O,null,t)))),Separator:z},BarSeparator:L,ItemsSeparator:P,Itemsbar:A,Controlsbar:b,ControlsbarContainer:C,ResponsiveTabWrapper:R,Slider:D,TabWrapper:$,Tab:y,Other:{ControlsWrapper:g,EmptyDiv:E}},N=(0,a.aa)("config","active")((0,a.Z)((({config:e,active:t})=>{const{tools:n}=e,a=t.tool,o=t=>e.locale[t].title;return r.createElement(H.Toolbar.Index,{show:!!a},n.map(((e,n)=>e&&r.createElement(H.Toolbar.Item,{onClick:()=>t.selectTool(e),key:e,label:o(e),isActive:a===e},(e=>{const t=l.r[e];return r.createElement(t,null)||null})(e))||r.createElement(H.Toolbar.Separator,{key:e+n,active:!!a}))))})));var j=(0,a.aa)("adjustmentsTool","custom")((0,a.Z)((({adjustmentsTool:e,custom:t})=>{const n=e.selectedAdjustmentType.toLowerCase(),i=t.getButton("toolControlBarSecondaryButton"),s=()=>{e.toolSnapshot()};return r.createElement(H.ControlsbarContainer,{show:Boolean(n)},r.createElement(i,{tool:o.c.ADJUSTMENT,ariaLabel:e.locale.controls.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:e.locale.controls.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,{count:2}),r.createElement(H.Slider,{"aria-hidden":!n,adjust:!0,style:{width:"280px"},label:e.selectedOptionLabel,value:e[n],onChange:t=>e.editAdjustments({type:n,value:t}),onMouseUp:s,onTouchEnd:s,snap:0}),r.createElement(a.X.Spacer,{count:2}),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))})));const Y=H.TabWrapper,{Tab:_}=H,G=(0,a.aa)("brushTool","custom")((0,a.Z)((({brushTool:e,custom:t})=>{const{colorList:n,locale:i,localeColor:s}=e,c=i.controls,m=s.colorPicker,d=t.getButton("toolControlBarSecondaryButton");return r.createElement(H.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},r.createElement(d,{tool:o.c.BRUSH,ariaLabel:c.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),isDisabled:!e.isDirty,label:c.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Input.Form,null,r.createElement(Y,null,r.createElement(_,{label:c.tabColor},r.createElement(a.X.Spacer,{count:1}),r.createElement(a.X.Input.Selection,{showLabel:!1,label:c.selectColor},r.createElement(l.g,{activeColor:e.color,colors:n,labelsColor:m,colorPickerDirection:"top",onChange:e.changeColor}))),r.createElement(_,{label:c.tabSize},r.createElement(H.Slider,{style:{width:"280px"},showLabel:!1,label:c.sliderSize,value:e.relativeSize,min:1,max:100,divider:1,onChange:e.changeRelativeSize})),r.createElement(_,{label:c.tabHardness},r.createElement(H.Slider,{style:{width:"280px"},showLabel:!1,label:c.sliderHardness,value:e.hardness,min:0,max:1,onChange:e.changeHardness}))))))})));var K=(0,a.aa)("filterTool","custom")((0,a.Z)((({filterTool:e,custom:t})=>{const{state:n}=e,i=e.locale.controls,s=t.getButton("toolControlBarSecondaryButton"),c=()=>{e.toolSnapshot()};return r.createElement(H.ControlsbarContainer,{show:e.isOptionSelected},r.createElement(s,{tool:o.c.FILTER,ariaLabel:e.locale.controls.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:e.locale.controls.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,{count:2}),r.createElement(H.Slider,{"aria-hidden":!e.isOptionSelected,style:{width:"280px"},label:i.sliderIntensity,value:n.intensity,min:0,max:1,onMouseUp:c,onTouchEnd:c,onChange:e.changeIntensity,snap:n.isDuotone?.5:null}),r.createElement(a.X.Spacer,{count:2}),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))})));var V=(0,a.aa)("focusTool","custom")((0,a.Z)((({focusTool:e,custom:t})=>{const n=e.locale.controls,i=t.getButton("toolControlBarSecondaryButton"),s=()=>{e.toolSnapshot(n.sliderIntensity)};return r.createElement(H.ControlsbarContainer,{show:e.isOptionSelected},r.createElement(i,{tool:o.c.FOCUS,ariaLabel:n.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:n.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,{count:2}),r.createElement(H.Slider,{"aria-hidden":!e.isOptionSelected,style:{width:"280px"},label:n.sliderIntensity,value:e.intensity,min:a.S.minIntensity,max:e.maxIntensity,divider:1,onChange:e.changeIntensity,onMouseUp:s,onTouchEnd:s}),r.createElement(a.X.Spacer,{count:2}),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))})));const J=H.TabWrapper,{Tab:q}=H,Q=(0,a.aa)("frameTool","canvas","custom")((0,a.Z)((({frameTool:e,custom:t})=>{const n=e.locale.controls,i=e.localeColor.colorPicker,{tintable:s,colorList:c}=e,m=t.getButton("toolControlBarSecondaryButton"),d=t=>{e.toolSnapshot(t)};return r.createElement(H.ControlsbarContainer,{show:e.isOptionSelected},r.createElement(m,{tool:o.c.FRAME,ariaLabel:n.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:n.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,null),r.createElement(J,null,r.createElement(q,{label:n.tabOpacity},r.createElement(H.Slider,{"aria-hidden":!e.isOptionSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:()=>{d(n.sliderOpacity)},onTouchEnd:()=>{d(n.sliderOpacity)}})),r.createElement(q,{label:n.tabSize},r.createElement(H.Slider,{"aria-hidden":!e.isOptionSelected,showLabel:!1,style:{width:"280px"},label:n.sliderSize,value:e.size,min:e.minSize,max:e.maxSize,divider:1,onChange:e.changeWidth,onMouseUp:()=>{d(n.sliderSize)},onTouchEnd:()=>{d(n.sliderSize)}})),s&&r.createElement(q,{label:n.tabColor},r.createElement(a.X.Spacer,{count:1}),r.createElement(a.X.Input.Selection,{label:n.selectColor,showLabel:!1},r.createElement(l.g,{activeColor:e.color,colors:c,labelsColor:i,colorPickerDirection:"top",onChange:e.changeColor,onAddSnapshot:e.colorSnapshot})))||null),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))}))),ee=(0,i.ZP)(H.ControlsbarContainer)`
  ${e=>e.firstChildMargin&&i.iv`
      > :first-child {
        margin-right: 16px;
      }
    `}
`;var te=(0,a.aa)("library","active","custom")((0,a.Z)((({library:e,active:t,custom:n})=>{const i=e.locale.controls.placeholderSearch,{config:s}=e,c=n.getButton("toolControlBarPrimaryButton");return r.createElement(ee,{firstChildMargin:s.enableWebcam&&!e.libraryProvider,show:!0},s.enableUpload&&r.createElement(c,{tool:o.c.LIBRARY,ariaLabel:e.locale.controls.buttonUpload,onClick:()=>{const e=document.getElementById("fileUpload");e&&e.click()},icon:r.createElement(l.t.uploadImage,null),label:e.locale.controls.buttonUpload},r.createElement(a.X.Input.File,{onChange:e=>{const{files:n}=e.target;if(n.length){const e=new FileReader;e.onload=e=>{t.newImage(e.target.result)},e.readAsDataURL(n[0])}}})),e.libraryProvider&&r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Input.Search,{onChange:t=>{e.fetchImages(t)},placeholder:i})),s.enableWebcam&&r.createElement(l.h,{tool:o.c.LIBRARY,onClick:()=>{t.selectWebcam(!0)},icon:r.createElement(l.t.openWebcam,null),label:e.locale.controls.buttonWebcamOpen}),r.createElement(H.BarSeparator,null))})));const ne=H.TabWrapper,{Tab:le}=H;var ae=(0,a.aa)("overlayTool","custom")((0,a.Z)((({overlayTool:e,custom:t})=>{const{state:n}=e,i=e.locale.controls,{allBlendModes:s}=e,{blendMode:c}=e,m=t.getButton("toolControlBarSecondaryButton"),d=()=>{e.toolSnapshot()};return r.createElement(H.ControlsbarContainer,{show:e.isOptionSelected},r.createElement(m,{tool:o.c.OVERLAY,ariaLabel:i.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:i.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,null),r.createElement(ne,null,r.createElement(le,{label:i.tabBlendMode},r.createElement(a.X.Input.CarouselSlider,{showLabel:!1,label:i.carouselBlendMode,defaultIdentifier:c,onSelect:t=>{e.changeBlendMode(t)},list:s})),r.createElement(le,{label:i.tabOpacity},r.createElement(H.Slider,{"aria-hidden":!e.isOptionSelected,showLabel:!1,style:{width:"280px"},label:i.sliderOpacity,value:n.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:d,onTouchEnd:d}))),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))})));const oe=H.TabWrapper,{Tab:re}=H,ie=i.ZP.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${a.V.VisuallyHidden}
`,se=(0,a.aa)("stickerTool","custom")((0,a.Z)((({stickerTool:e,custom:t})=>{const{colorList:n}=e,i=e.locale.controls,s=e.localeColor.colorPicker,c=t.getButton("toolControlBarPrimaryButton"),m=()=>{e.toolSnapshot()},d=()=>{const e=document.getElementById("fileUpload");e&&(e.value=null,e.click())},h=t=>{const{files:n}=t.target;e.addFiles(n)};return r.createElement(H.ControlsbarContainer,{show:!0},e.isCustomStickerEnabled?r.createElement(c,{tool:o.c.STICKER,ariaLabel:i.buttonUpload,onClick:d,icon:r.createElement(l.t.uploadImage,null),label:i.buttonUpload},r.createElement(ie,{onChange:h})):null,r.createElement(H.Other.ControlsWrapper,null,e.tintable&&r.createElement("div",null,r.createElement(a.X.Spacer,null),r.createElement(oe,null,r.createElement(re,{label:i.tabColor},r.createElement(a.X.Spacer,{count:1}),r.createElement(a.X.Input.Selection,{isDisabled:!e.isStickerSelected,showLabel:!1,label:i.selectColor},r.createElement(l.g,{activeSprite:e.id,activeColor:e.tintColor,colors:n,labelsColor:s,isDisabled:!e.isStickerSelected,colorPickerDirection:"top",onChange:e.changeTintColor,onAddSnapshot:e.tintColorSnapshot}))),r.createElement(re,{label:i.tabOpacity},r.createElement(H.Slider,{isDisabled:!e.isStickerSelected,showLabel:!1,style:{width:"280px"},label:i.sliderOpacity,value:e.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:e.changeOpacity}))))||r.createElement("div",null,r.createElement(a.X.Spacer,{count:2}),r.createElement(H.Slider,{isDisabled:!e.isStickerSelected,style:{width:"280px"},label:i.sliderOpacity,value:e.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:e.changeOpacity}),r.createElement(a.X.Spacer,{count:2})),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))}))),ce=H.ResponsiveTabWrapper,{Tab:me}=H,de=(0,i.ZP)(a.X.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,he=(0,a.aa)("textTool","custom")((0,a.Z)((({textTool:e,custom:t})=>{const{colorList:n,backgroundColorList:i}=e,s=e.locale.controls,c=e.localeColor.colorPicker,m=["left","center","right"],d=t.getButton("textAlignment"),h=t.getButton("toolControlBarPrimaryButton"),u=()=>{e.toolSnapshot()};return r.createElement(H.ControlsbarContainer,{show:!0},r.createElement(h,{tool:o.c.TEXT,ariaLabel:s.buttonNew,onClick:e.add,icon:r.createElement(l.t.addText,null),label:s.buttonNew}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,null),r.createElement(ce,null,r.createElement(me,{label:s.tabFontSize},r.createElement(de,{value:e.fontSize.toFixed(0),onSubmit:t=>{const n=t?parseFloat(t):0;e.setFontSize(Math.max(10,Math.min(690,n)))},isDisabled:!e.isTextSelected})),r.createElement(me,{label:s.tabAlignment},r.createElement(a.X.Input.Selection,{isDisabled:!e.isTextSelected,showLabel:!1,label:s.selectAlignment},m.map((t=>{const n=l.s[t];return r.createElement(d,{tool:t,isDisabled:!e.isTextSelected,ariaLabel:`Align ${t}`,isActive:t===e.alignment,key:t,icon:r.createElement(n,null),onClick:()=>e.changeAlignment(t)})})))),r.createElement(me,{label:s.tabColor},r.createElement(a.X.Spacer,null),r.createElement(a.X.Input.Selection,{isDisabled:!e.isTextSelected,showLabel:!1,label:s.selectFontColor},r.createElement(l.g,{activeSprite:e.id,activeColor:e.textColor,colors:n,labelsColor:c,colorPickerDirection:"top",isDisabled:!e.isTextSelected,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot}))),r.createElement(me,{label:s.tabBgColor},r.createElement(a.X.Spacer,null),r.createElement(a.X.Input.Selection,{isDisabled:!e.isTextSelected,showLabel:!1,label:s.selectBackgroundColor},r.createElement(l.g,{activeSprite:e.id,activeColor:e.backgroundColor,colors:i,labelsColor:c,colorPickerDirection:"top",isDisabled:!e.isTextSelected,onChange:e.changeBackgroundColor,onAddSnapshot:e.backgroundColorSnapshot}))),r.createElement(me,{label:s.tabLineHeight},r.createElement(H.Slider,{isDisabled:!e.isTextSelected,showLabel:!1,label:s.sliderLineSpacing,value:e.lineHeight,min:.5,max:3,onChange:e.changeLineHeight,onMouseUp:u,onTouchEnd:u,snap:1,divider:1,decimal:1}))),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))}))),ue=(0,a.aa)("textDesignTool","custom")((0,a.Z)((({textDesignTool:e,custom:t})=>{const n=e.locale.controls,i=e.localeColor.colorPicker,{colorList:s}=e,c=t.getButton("toolControlBarSecondaryButton"),m=t.getButton("toolControlBarPrimaryButton");return r.createElement(H.ControlsbarContainer,{show:!0},r.createElement(m,{tool:o.c.TEXT_DESIGN,ariaLabel:n.buttonNew,onClick:e.add,icon:r.createElement(l.t.addText,null),label:n.buttonNew}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Input.Selection,{isDisabled:!e.isTextDesignSelected,label:n.selectColor},r.createElement(l.g,{activeSprite:e.id,activeColor:e.color,colors:s,labelsColor:i,colorPickerDirection:"top",isDisabled:!e.isTextDesignSelected,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot}))),r.createElement(c,{tool:o.c.TEXT_DESIGN,ariaLabel:n.buttonShuffle,onClick:e.changeSeed,icon:r.createElement(l.t.shuffle,null),label:n.buttonShuffle}),r.createElement(H.BarSeparator,null))}))),pe=H.ResponsiveTabWrapper,{Tab:be}=H;var ge=(0,a.aa)("transformTool","custom")((0,a.Z)((({transformTool:e,custom:t})=>{const n=e.locale.controls,{forceDimensions:i}=e,s=t.getCheckbox(),c=t.getButton("toolControlBarSecondaryButton");return r.createElement(H.ControlsbarContainer,{show:!0},r.createElement(c,{tool:o.c.TRANSFORM,ariaLabel:e.locale.controls.buttonReset,onClick:e.reset,icon:r.createElement(l.t.reset,null),label:e.locale.controls.buttonReset}),r.createElement(H.Other.ControlsWrapper,null,r.createElement(a.X.Spacer,null),r.createElement(pe,null,r.createElement(be,{label:n.tabCropSize},r.createElement(l.n,{isDisabled:i,showLabel:!1,valueHeight:e.localOutputHeight,valueWidth:e.localOutputWidth,onSubmitWidth:e.onPixelWidth,onSubmitHeight:e.onPixelHeight,label:n.inputCropSize,labelHeight:n.inputHeight,labelWidth:n.inputWidth})),r.createElement(be,{label:n.tabFlipAndRotate},r.createElement(l.p,null)),r.createElement(be,{label:n.tabResolution},r.createElement(s,{isDisabled:i,style:{paddingTop:"5px",justifyContent:"center"},value:e.lockResolution,checkMarkPosition:"left",label:n.checkboxKeepResolution,onClick:e.changeLockResolution}))),r.createElement(H.BarSeparator,null)),r.createElement(H.Other.EmptyDiv,null))})));let Ee=class extends r.Component{render(){const{active:e}=this.props,t=e.tool;return r.createElement(H.Controlsbar,{show:!!t},r.createElement(a.X.Switch.Index,{type:t},r.createElement(a.X.Switch.Case,{value:o.c.FILTER},r.createElement(K,null)),r.createElement(a.X.Switch.Case,{value:o.c.FOCUS},r.createElement(V,null)),r.createElement(a.X.Switch.Case,{value:o.c.ADJUSTMENT},r.createElement(j,null)),r.createElement(a.X.Switch.Case,{value:o.c.OVERLAY},r.createElement(ae,null)),r.createElement(a.X.Switch.Case,{value:o.c.STICKER},r.createElement(se,null)),r.createElement(a.X.Switch.Case,{value:o.c.TEXT},r.createElement(he,null)),r.createElement(a.X.Switch.Case,{value:o.c.TEXT_DESIGN},r.createElement(ue,null)),r.createElement(a.X.Switch.Case,{value:o.c.LIBRARY},r.createElement(te,null)),r.createElement(a.X.Switch.Case,{value:o.c.FRAME},r.createElement(Q,null)),r.createElement(a.X.Switch.Case,{value:o.c.BRUSH},r.createElement(G,null)),r.createElement(a.X.Switch.Case,{value:o.c.TRANSFORM},r.createElement(ge,null))))}};Ee=(0,a.R)([(0,a.aa)("active","config"),a.Z],Ee);const Ce=i.ZP.div`
  position: relative;
  top: -8px;
  color: ${e=>e.theme.card.foreground};
`;var fe=(0,a.aa)("adjustmentsTool")((0,a.Z)((({adjustmentsTool:e})=>r.createElement(H.CardContainer,null,e.items.map(((t,n)=>{const a=l.v[t.identifier];return r.createElement(H.Card,{tool:o.c.ADJUSTMENT,type:o.w.MEDIUM,onClick:()=>e.toggleOptionSelection(t.identifier),isActive:t.identifier===e.selectedAdjustmentType,key:`${t.identifier}-${n}`,label:t.name,style:{animationDelay:`${(0,l.a)(n)}s`}},r.createElement(Ce,null,r.createElement(a,null)),r.createElement(H.CardLabel,null,e.locale.items[t.identifier]||t.name))}))))));let ye=class extends r.Component{constructor(){super(...arguments),this.onCategoryClick=e=>{const{filterTool:t}=this.props;t.toggleCategorySelection(e)},this.renderItem=(e,t)=>{const{filterTool:n}=this.props;return r.createElement(H.Card,{tool:o.c.FILTER,type:o.w.MEDIUM,onClick:()=>n.selectFilter(e.identifier,e.defaultIntensity),isActive:n.identifier===e.identifier,key:`${e.identifier}-${t}`,image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}},r.createElement(H.CardLabel,{withBackground:!0},n.locale.categories[e.identifier]||n.locale.items[e.identifier]||e.name))},this.renderCategory=(e,t)=>{const{filterTool:n}=this.props,{selectedCategoryIdentifier:a}=n,i=a===e.identifier;return e.items?r.createElement(H.CategoryContainer,{key:e.identifier},r.createElement(H.Card,{tool:o.c.FILTER,type:o.w.LARGE,onClick:()=>this.onCategoryClick(e.identifier),image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}},r.createElement(H.CardLabel,{withBackground:!0},e.name)),r.createElement(H.ExpandableContainer,{show:i},e.items.map(this.renderItem))):null}}render(){const{filterTool:e}=this.props,{categories:t,config:n,items:l}=e;return n.flattenCategories?r.createElement(H.CardContainer,null,l.map(this.renderItem)):r.createElement(H.CardContainer,null,t.map(this.renderCategory))}};ye=(0,a.R)([(0,a.aa)("filterTool","active"),a.Z],ye);var xe=(0,a.aa)("focusTool")((0,a.Z)((({focusTool:e})=>r.createElement(H.CardContainer,null,e.items.map(((t,n)=>r.createElement(H.Card,{isActive:t.identifier===e.identifier,tool:o.c.FOCUS,type:o.w.MEDIUM,onClick:()=>(t=>{e.selectFocus(t)})(t.identifier),key:`${t.identifier}-${n}`,image:t.thumbnailURI,label:t.name,style:{animationDelay:`${(0,l.a)(n)}s`}},r.createElement(H.CardLabel,{withBackground:!0},e.locale.items[t.identifier]||t.name))))))));var Se=(0,a.aa)("frameTool")((0,a.Z)((({frameTool:e})=>{const t=e.identifier;return r.createElement(H.CardContainer,null,e.items.map(((n,a)=>r.createElement(H.Card,{tool:o.c.FRAME,type:o.w.MEDIUM,onClick:()=>e.selectFrame(n.identifier),isActive:n.identifier===t,key:`${n.identifier}-${a}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${(0,l.a)(a)}s`,backgroundSize:"60%"}}," ",r.createElement(H.CardLabel,{hidden:!0},e.locale.items[n.identifier]||n.name)))))})));let ve=class extends r.Component{constructor(){super(...arguments),this.onCategoryClick=e=>{const{library:t}=this.props;t.toggleCategorySelection(e)},this.renderItem=(e,t)=>{const{active:n}=this.props;return r.createElement(H.Card,{tool:o.c.LIBRARY,type:o.w.MEDIUM,onClick:()=>n.newImage(e.rawUrl),key:`${e.identifier}-${t}`,image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}})},this.renderCategory=(e,t)=>{const{library:n}=this.props,{selectedCategoryIdentifier:a}=n,i=a===e.identifier;return e.items?r.createElement(H.CategoryContainer,{key:e.identifier},r.createElement(H.Card,{tool:o.c.LIBRARY,type:o.w.LARGE,onClick:()=>this.onCategoryClick(e.identifier),image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}},r.createElement(H.CardLabel,{withBackground:!0},e.name)),r.createElement(H.ExpandableContainer,{show:i},e.items.map(this.renderItem))):null}}render(){const{library:e}=this.props,{query:t,categories:n,items:l,locale:o,config:i}=e;return t?l.length?r.createElement(H.CardContainer,null,l.map(this.renderItem)):r.createElement("p",{"data-test":a.T.NoResult},o.controls.noResults):i.flattenCategories?r.createElement(H.CardContainer,null,l.map(this.renderItem)):r.createElement(H.CardContainer,null,n.map(this.renderCategory))}};ve=(0,a.R)([(0,a.aa)("library","active"),a.Z],ve);var Te=(0,a.aa)("overlayTool")((0,a.Z)((({overlayTool:e})=>{const{identifier:t,items:n,selectOverlay:a,locale:i}=e;return r.createElement(H.CardContainer,null,n.map(((e,n)=>r.createElement(H.Card,{tool:o.c.OVERLAY,type:o.w.MEDIUM,onClick:()=>a(e.identifier),isActive:e.identifier===t,key:`${e.identifier}-${n}`,image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(n)}s`}},r.createElement(H.CardLabel,{withBackground:!0},i.items[e.identifier]||e.name)))))})));let we=class extends r.Component{constructor(){super(...arguments),this.onCategoryClick=e=>{const{stickerTool:t}=this.props;t.toggleCategorySelection(e)},this.renderItem=(e,t)=>{const{stickerTool:n}=this.props;return r.createElement(H.Card,{tool:o.c.STICKER,type:o.w.MEDIUM,onClick:()=>n.add(e.identifier),key:`${e.identifier}-${t}`,image:e.thumbnailURI,label:e.name,style:{backgroundSize:"55%",animationDelay:`${(0,l.b)(t)}s`}},r.createElement(H.CardLabel,{hidden:!0},n.locale.items[e.identifier]||e.name))},this.renderCategory=(e,t)=>{const{stickerTool:n}=this.props,{selectedCategoryIdentifier:a,locale:i}=n,s=a===e.identifier;return e.items?r.createElement(H.CategoryContainer,{key:e.identifier},r.createElement(H.Card,{tool:o.c.STICKER,type:o.w.LARGE,onClick:()=>this.onCategoryClick(e.identifier),image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}},r.createElement(H.CardLabel,{withBackground:!0},i.categories[e.identifier]||e.name)),r.createElement(H.ExpandableContainer,{show:s},e.items.map(this.renderItem))):null}}render(){const{stickerTool:e}=this.props,{categories:t,items:n,config:l}=e;return l.flattenCategories?r.createElement(H.CardContainer,null,n.map(this.renderItem)):r.createElement(H.CardContainer,null,t.map(this.renderCategory))}};we=(0,a.R)([(0,a.aa)("stickerTool","active"),a.Z],we);const ke=i.ZP.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`;class Ie extends r.Component{constructor(){super(...arguments),this.getWidth=({fontFamily:e,fontStyle:t,fontWeight:n},l)=>{const a=document.createElement("canvas").getContext("2d");return a.font=`${t} ${n} 20px ${e}`,a.fillText(l,0,0),a.measureText(l).width},this.renderItem=(e,t)=>{const{config:n,textTool:i}=this.props,{fontFamily:s,fontWeight:c,fontStyle:m,identifier:d}=e,h=`${e.fontFamily} ${a.P.getDisplayFontStyle(e)}`,u=this.getWidth(e,h),p=(n.measurements.basicCard.medium.width-20)/u;return r.createElement(H.Card,{tool:o.c.TEXT,type:o.w.MEDIUM,onClick:()=>i.changeFont(d),isDisabled:!this.textTool.isTextSelected,isActive:i.identifier===d,key:`${e.identifier}-${t}`,label:h,style:{animationDelay:`${(0,l.a)(t)}s`}},r.createElement(ke,{style:{transform:`scale(${p}) translate(-50%, -50%)`,fontFamily:s,fontStyle:m,fontWeight:c}},h))}}get textTool(){return this.props.textTool}render(){const{textTool:e}=this.props,{fontsLoaded:t,fontFamilies:n}=e;return t?r.createElement(H.CardContainer,null,n.map(this.renderItem)):null}}var $e=(0,a.aa)("textTool","config")((0,a.Z)(Ie));var Be=(0,a.aa)("textDesignTool")((0,a.Z)((({textDesignTool:e})=>{const{items:t,changeIdentifier:n,isTextDesignSelected:a,identifier:i}=e;return r.createElement(H.CardContainer,null,t.map(((e,t)=>r.createElement(H.Card,{tool:o.c.TEXT_DESIGN,type:o.w.MEDIUM,onClick:()=>n(e.identifier),isDisabled:!a,isActive:i===e.identifier,key:`${e.identifier}-${t}`,image:e.thumbnailURI,label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`,backgroundSize:"60%"}},r.createElement(H.CardLabel,{hidden:!0},e.name)))))})));const Re=i.ZP.div`
  svg {
    margin-bottom: 12px;
  }
`,Le=i.ZP.div`
  svg {
    width: ${e=>e.theme.measurements.basicCard.medium.height}px;
    height: ${e=>e.theme.measurements.basicCard.medium.height}px;
  }

  ${l.d} {
    width: ${e=>e.theme.measurements.basicCard.medium.width-32}px;
    height: ${e=>e.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`;let De=class extends r.Component{constructor(){super(...arguments),this.onCategoryClick=e=>{const{transformTool:t}=this.props;t.toggleCategorySelection(e)},this.renderItem=(e,t)=>{const{transformTool:n,config:a}=this.props,{locale:i}=n,s=n.checkIfTransformThumbnailExits(e.thumbnailURI),c=l.u.crops[e.identifier]||l.u.crops.imgly_transform_common_custom,m=r.createElement(H.CardLabel,null,i.items[e.identifier]||e.name),d=s?m:r.createElement(Le,null,r.createElement(c,{main:a.theme.transform.crops.main,highlight:a.theme.transform.crops.highlight,shadow:a.theme.transform.crops.shadow}),m);return r.createElement(H.Card,{tool:o.c.TRANSFORM,type:o.w.MEDIUM,onClick:()=>n.changeIdentifier(e.identifier,!0),key:`${e.identifier}-${t}`,image:e.thumbnailURI,label:e.name,style:{backgroundSize:"55%",animationDelay:`${(0,l.a)(t)}s`}},d)},this.renderCategory=(e,t)=>{const{transformTool:n}=this.props,{selectedCategoryIdentifier:a,locale:i}=n,s=a===e.identifier;if(!e.items)return null;const c=n.checkIfTransformThumbnailExits(e.thumbnailURI),m=r.createElement(H.CardLabel,null,i.categories[e.identifier]||e.name),d=c?m:r.createElement(Re,null,l.u.categories[e.identifier]&&r.createElement(l.u.categories[e.identifier]),m);return r.createElement(H.CategoryContainer,{key:e.identifier},r.createElement(H.Card,{tool:o.c.TRANSFORM,type:o.w.LARGE,onClick:()=>this.onCategoryClick(e.identifier),image:c?e.thumbnailURI:"",label:e.name,style:{animationDelay:`${(0,l.a)(t)}s`}},d),r.createElement(H.ExpandableContainer,{show:s},e.items.map(this.renderItem)))}}render(){const{transformTool:e}=this.props,{categories:t,config:n,items:l}=e;return n.flattenCategories?r.createElement(H.CardContainer,null,l.map(this.renderItem)):r.createElement(H.CardContainer,null,t.map(this.renderCategory))}};De=(0,a.R)([(0,a.aa)("transformTool","config"),a.Z],De);let Ue=class extends r.Component{constructor(){super(...arguments),this.getToolItemsComponent=e=>{switch(e){case o.c.LIBRARY:return r.createElement(ve,null);case o.c.FILTER:return r.createElement(ye,null);case o.c.FOCUS:return r.createElement(xe,null);case o.c.ADJUSTMENT:return r.createElement(fe,null);case o.c.OVERLAY:return r.createElement(Te,null);case o.c.STICKER:return r.createElement(we,null);case o.c.TEXT:return r.createElement($e,null);case o.c.TEXT_DESIGN:return r.createElement(Be,null);case o.c.FRAME:return r.createElement(Se,null);case o.c.TRANSFORM:return r.createElement(De,null);default:return null}}}render(){const{library:e,active:t}=this.props,n=t.tool;return n===o.c.BRUSH||n===o.c.LIBRARY&&!e.libraryProvider?null:r.createElement(H.Itemsbar,{"data-test":a.T.ToolControlBar,show:!!n},this.getToolItemsComponent(n))}};Ue=(0,a.R)([(0,a.aa)("active","library"),a.Z],Ue);const Ae=i.ZP.div`
  position: absolute;
  width: 100%;
  height: ${e=>e.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${e=>e.theme.webcam.backdrop};
  z-index: ${e=>e.theme.measurements.zIndex.disable};
`;let Pe=class extends r.Component{static getDerivedStateFromError(e){return console.error(e),{hasError:!0}}render(){const{active:e}=this.props;return r.createElement(a.X.Container,{"data-test":a.T.EditorContainer},e.isWebcam?r.createElement(Ae,null):null,r.createElement(l.o,null),r.createElement(l.c,null,r.createElement(l.q,null),r.createElement(l.l,null),r.createElement(Ee,null),r.createElement(Ue,null),r.createElement(N,null)))}};Pe=(0,a.R)([(0,a.aa)("active"),a.Z],Pe);class Oe extends r.Component{componentDidMount(){const{editor:e,storeProps:t}=this.props;this.editor=e,this.storeProps=t;const n=new l.k(this.editor.configStore.config.custom.components,{}),a={getDialog:n.getDialog,getButton:n.getButton,getColorItem:n.getColorItem,getCheckbox:n.getCheckbox};this.storeProps.custom=a,this.forceUpdate()}render(){return this.storeProps?r.createElement(a.$,(0,o.N)({},this.storeProps),r.createElement(i.f6,{theme:(0,o.N)((0,o.N)({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},r.createElement(Pe,null))):null}}}}]);