(self.webpackChunk=self.webpackChunk||[]).push([[77],{4077:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Color:()=>P,ColorPicker:()=>nt});var o=r(463),n=r(8821),a=r(7294),s=r(9163),i=r(3935);function h(t,e){(function(t){return"string"==typeof t&&t.includes(".")&&1===parseFloat(t)})(t)&&(t="100%");const r=function(t){return"string"==typeof t&&t.includes("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function l(t){return t=parseFloat(t),(Number.isNaN(t)||t<0||t>1)&&(t=1),t}function c(t){return t<=1?100*Number(t)+"%":t}function u(t){return 1===t.length?`0${t}`:String(t)}function f(t,e,r){return{r:255*h(t,255),g:255*h(e,255),b:255*h(r,255)}}function d(t,e,r){t=h(t,255),e=h(e,255),r=h(r,255);const o=Math.max(t,e,r),n=Math.min(t,e,r);let a=0,s=0;const i=(o+n)/2;if(o===n)s=0,a=0;else{const h=o-n;switch(s=i>.5?h/(2-o-n):h/(o+n),o){case t:a=(e-r)/h+(e<r?6:0);break;case e:a=(r-t)/h+2;break;case r:a=(t-e)/h+4}a/=6}return{h:a,s,l:i}}function g(t,e,r){t=h(t,255),e=h(e,255),r=h(r,255);const o=Math.max(t,e,r),n=Math.min(t,e,r);let a=0;const s=o,i=o-n,l=0===o?0:i/o;if(o===n)a=0;else{switch(o){case t:a=(e-r)/i+(e<r?6:0);break;case e:a=(r-t)/i+2;break;case r:a=(t-e)/i+4}a/=6}return{h:a,s:l,v:s}}function m(t,e,r,o){const n=[u(Math.round(t).toString(16)),u(Math.round(e).toString(16)),u(Math.round(r).toString(16))];return o&&n[0].charAt(0)===n[0].charAt(1)&&n[1].charAt(0)===n[1].charAt(1)&&n[2].charAt(0)===n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function p(t){return Math.round(255*parseFloat(t)).toString(16)}function b(t){return parseInt(t,16)}function x(t){return b(t)/255}const v={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},k="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",C=`[\\s|\\(]+(${k})[,|\\s]+(${k})[,|\\s]+(${k})\\s*\\)?`,w=`[\\s|\\(]+(${k})[,|\\s]+(${k})[,|\\s]+(${k})[,|\\s]+(${k})\\s*\\)?`,y={CSS_UNIT:new RegExp(k),rgb:new RegExp(`rgb${C}`),rgba:new RegExp(`rgba${w}`),hsl:new RegExp(`hsl${C}`),hsla:new RegExp(`hsla${w}`),hsv:new RegExp(`hsv${C}`),hsva:new RegExp(`hsva${w}`),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function S(t){return Boolean(y.CSS_UNIT.exec(String(t)))}function $(t){let e={r:0,g:0,b:0},r=1,o=null,n=null,a=null,s=!1,i=!1;if("string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(v[t])t=v[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let r=y.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=y.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=y.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=y.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=y.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=y.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=y.hex8.exec(t),r?{r:b(r[1]),g:b(r[2]),b:b(r[3]),a:x(r[4]),format:e?"name":"hex8"}:(r=y.hex6.exec(t),r?{r:b(r[1]),g:b(r[2]),b:b(r[3]),format:e?"name":"hex"}:(r=y.hex4.exec(t),r?{r:b(r[1]+r[1]),g:b(r[2]+r[2]),b:b(r[3]+r[3]),a:x(r[4]+r[4]),format:e?"name":"hex8"}:(r=y.hex3.exec(t),!!r&&{r:b(r[1]+r[1]),g:b(r[2]+r[2]),b:b(r[3]+r[3]),format:e?"name":"hex"})))))))))}(t)),Array.isArray(t)){const[o,n,a]=t;S(o)&&S(n)&&S(a)&&(e=f(255*o,255*n,255*a),s=!0,i="rgb"),4===t.length&&(r=t[3])}return"object"==typeof t&&(S(t.r)&&S(t.g)&&S(t.b)?(e=f(t.r,t.g,t.b),s=!0,i="%"===String(t.r).substr(-1)?"prgb":"rgb"):S(t.h)&&S(t.s)&&S(t.v)?(o=c(t.s),n=c(t.v),e=function(t,e,r){t=6*h(t,360),e=h(e,100),r=h(r,100);const o=Math.floor(t),n=t-o,a=r*(1-e),s=r*(1-n*e),i=r*(1-(1-n)*e),l=o%6;return{r:255*[r,s,a,a,i,r][l],g:255*[i,r,r,s,a,a][l],b:255*[a,a,i,r,r,s][l]}}(t.h,o,n),s=!0,i="hsv"):S(t.h)&&S(t.s)&&S(t.l)&&(o=c(t.s),a=c(t.l),e=function(t,e,r){let o,n,a;function s(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=h(t,360),e=h(e,100),r=h(r,100),0===e)n=r,a=r,o=r;else{const i=r<.5?r*(1+e):r+e-r*e,h=2*r-i;o=s(h,i,t+1/3),n=s(h,i,t),a=s(h,i,t-1/3)}return{r:255*o,g:255*n,b:255*a}}(t.h,o,a),s=!0,i="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=l(r),{ok:s,format:t.format||i,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}class P{constructor(t="",e={}){if(t instanceof P)return t;this.originalInput=t;const r=$(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format||r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}getAlpha(){return this.a}setAlpha(t){return this.a=l(t),this.roundA=Math.round(100*this.a)/100,this}toHsv(){const t=g(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=g(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${r}%, ${o}%)`:`hsva(${e}, ${r}%, ${o}%, ${this.roundA})`}toHsl(){const t=d(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=d(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${r}%, ${o}%)`:`hsla(${e}, ${r}%, ${o}%, ${this.roundA})`}toHex(t=!1){return m(this.r,this.g,this.b,t)}toHexString(t=!1){return`#${this.toHex(t)}`}toHex8(t=!1){return function(t,e,r,o,n){const a=[u(Math.round(t).toString(16)),u(Math.round(e).toString(16)),u(Math.round(r).toString(16)),u(p(o))];return n&&a[0].charAt(0)===a[0].charAt(1)&&a[1].charAt(0)===a[1].charAt(1)&&a[2].charAt(0)===a[2].charAt(1)&&a[3].charAt(0)===a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return`#${this.toHex8(t)}`}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbArray(){return[Math.round(this.r),Math.round(this.g),Math.round(this.b),this.a]}toRgbString(){return`rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*h(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*h(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t=`#${m(this.r,this.g,this.b,!1)}`;for(const e of Object.keys(v))if(v[e]===t)return e;return!1}toString(t){const e=Boolean(t);t=t||this.format;const r=this.a<1&&this.a>=0;if(!e&&r&&t&&(t.startsWith("hex")||"name"===t))return"name"===t&&0===this.a?this.toName():this.toRgbString();switch(t){case"rgb":return this.toRgbString();case"prgb":return this.toPercentageRgbString();case"hex":case"hex6":return this.toHexString();case"hex3":return this.toHexString(!0);case"hex4":return this.toHex8String(!0);case"hex8":return this.toHex8String();case"hsl":return this.toHslString();case"hsv":return this.toHsvString();case"name":return this.toName();default:return this.toHexString()}}clone(){return new P(this.toString())}}var M=s.ZP.div`
  position: absolute;
  width: ${t=>t.theme.measurements.color.colorPicker.arrow.width}px;
  height: ${t=>t.theme.measurements.color.colorPicker.arrow.width/2}px;
  overflow: hidden;
  pointer-events: none;
  ${t=>"bottom"===t.direction?s.iv`
          bottom: 100%;
        `:s.iv`
          top: 100%;
        `}
  left: ${t=>t.arrowOffset}px;
  :after {
    content: '';
    position: absolute;
    width: ${t=>t.theme.measurements.color.colorPicker.arrow.width/2}px;
    height: ${t=>t.theme.measurements.color.colorPicker.arrow.width/2}px;
    left: 50%;
    ${t=>"bottom"===t.direction?s.iv`
            transform: translate(-50%, 50%) rotate(45deg);
          `:s.iv`
            transform: translate(-50%, -50%) rotate(45deg);
          `}
    background-color: ${t=>t.theme.colorPicker.listBackground};
    pointer-events: none;
  }
`;const A=s.ZP.div`
  text-align: center;
  width: 28px;
  padding-left: 4px;
`,R=(0,s.ZP)(o.X.Input.Text)`
  input {
    text-align: center;
    border-bottom: 1px solid
      ${t=>t.theme.colorPicker.inputBorderColor};
  }
`;var E=({value:t,label:e,onChange:r})=>a.createElement(A,null,a.createElement(o.X.Input.Label,{label:e}),a.createElement(R,{min:0,max:255,value:t,onChange:r}));const F=s.ZP.div`
  text-align: left;
  width: 62px;
`,H=(0,s.ZP)(o.X.Input.Text)`
  input {
    text-align: left;
    border-bottom: 1px solid
      ${t=>t.theme.colorPicker.inputBorderColor};
  }
`;var I=({value:t,label:e,onChange:r})=>a.createElement(F,null,a.createElement(o.X.Input.Label,{label:e}),a.createElement(H,{value:t.toUpperCase(),onChange:r}));const O=s.ZP.div.attrs((t=>({style:{left:t.position.x||"0px",top:t.position.y||"0px"}})))`
  &&& {
    position: absolute;
    height: ${t=>t.theme.measurements.color.colorPicker.thumb.size}px;
    width: ${t=>t.theme.measurements.color.colorPicker.thumb.size}px;
    border-radius: 50%;
    border: 2px solid ${t=>t.theme.colorPicker.controlsColor};
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);
    z-index: 2;
    pointer-events: none;
  }
`;var z=O;O.defaultProps={theme:o.v};const Z=(0,n.U)((0,o.Y)()),q=s.ZP.div`
  position: relative;
  height: 14px;
  width: 100%;
`;class N extends a.Component{constructor(t){super(t),this.onDragStart=t=>{this.setState({dragging:!0}),this.onPositionChange(t)},this.onPositionChange=t=>{const{onChange:e,config:r}=this.props,o=r.measurements.color.colorPicker.thumb.size/2,n=r.measurements.color.colorPicker.thumb.size;let a=0,s=0;a=t.clientX,s=t.clientY;const h=i.findDOMNode(this);if(h&&h instanceof HTMLElement){const{top:t,left:r,width:i,height:l}=h.getBoundingClientRect();let c=a-r-o,u=s-t-o;c=Math.max(0,Math.min(i-n,c)),u=Math.max(0,Math.min(l-n,u)),e&&e({x:c,y:u}),this.setState({x:c,y:u})}},this.onDrag=t=>{this.state.dragging&&this.onPositionChange(t)},this.onDragStop=()=>{this.state.dragging&&this.setState({dragging:!1})},this.state={dragging:!1,x:t.defaultPosition.x,y:t.defaultPosition.y},this.debouncedOnDrag=Z.default(this.onDrag,10)}componentWillUnmount(){this.setState({dragging:!1})}render(){const{surface:t,setInnerRef:e,className:r,children:n}=this.props;return a.createElement(q,{ref:e,className:r},a.createElement(o.X.DraggableCore,{onStart:this.onDragStart,onDrag:this.debouncedOnDrag,onStop:this.onDragStop},t),n)}}N.defaultProps={defaultPosition:{x:0,y:0}};var D=(0,o.aa)("config","active")((0,o.Z)(N));var L=s.iv`
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;const V=s.ZP.div`
  ${L}
  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  height: 8px;
`;class B extends a.Component{constructor(t){super(t),this.onKnob=({x:t})=>{const{onChange:e,config:r}=this.props,{offsetWidth:o}=this.node,n=t*o/(o-r.measurements.color.colorPicker.thumb.size);e(Math.max(0,Math.min(360,n/o*360))),this.setState({x:t})},this.setPositionFromColor=t=>{const{config:e}=this.props,{offsetWidth:r}=this.node;let o=0;const n=r-e.measurements.color.colorPicker.thumb.size;this.node&&(o=t.toHsv().h*r/360),this.setState({x:o*n/r})},this.nodeRef=t=>{this.node=t},this.state={x:0}}render(){const{x:t}=this.state;return a.createElement(D,{surface:a.createElement(V,null),setInnerRef:this.nodeRef,onChange:this.onKnob},a.createElement(z,{position:{x:t,y:0}}))}}var X=(0,o.aa)("config")((0,o.Z)(B));const W=s.ZP.div.attrs((t=>({style:{background:`linear-gradient(to left, ${t.transparentColor} 0%, ${t.opaqueColor} 100%)`}})))`
  ${L}
  z-index: 1;
`,j=s.ZP.div.attrs((t=>({style:{backgroundImage:`url(${t.url})`}})))`
  ${L}
  z-index: 0;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: left;
`;class T extends a.Component{constructor(t){super(t),this.onKnob=({x:t})=>{const{onChange:e,config:r}=this.props,{offsetWidth:o}=this.node,n=(o-t*o/(o-r.measurements.color.colorPicker.thumb.size))/o,a=Math.round(100*(n+Number.EPSILON))/100;e(Math.min(1,Math.max(0,a))),this.setState({x:t})},this.setPositionFromColor=t=>{const{config:e}=this.props,{offsetWidth:r}=this.node;let o=0;const n=r-e.measurements.color.colorPicker.thumb.size;this.node&&(o=(1-t.toHsv().a)*r),this.setState({x:o*n/r})},this.nodeRef=t=>{this.node=t},this.state={x:0}}render(){const{opaqueColor:t,transparentColor:e,config:r}=this.props,{x:o}=this.state,n=r.assetProvider.getPath("controls","/tiled-background.png");return a.createElement(D,{surface:a.createElement(W,{opaqueColor:t,transparentColor:e}),setInnerRef:this.nodeRef,onChange:this.onKnob},a.createElement(j,{url:n}),a.createElement(z,{position:{x:o,y:0}}))}}var U=(0,o.aa)("config")((0,o.Z)(T));const K=s.ZP.div.attrs((t=>({style:{backgroundColor:`hsl(${t.hue}, 100%, 50%)`}})))`
  ${L}
  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  height: ${t=>t.theme.measurements.color.colorPicker.saturationSlider.height}px;
  top: 0px;
`,Y=(0,s.ZP)(D)`
  height: ${t=>t.theme.measurements.color.colorPicker.saturationSlider.height}px;
  margin-top: 0px;
`;class _ extends a.Component{constructor(t){super(t),this.setPositionFromColor=t=>{const{config:e}=this.props,r={x:0,y:0};if(this.node){const{s:o,v:n}=t.toHsv(),{offsetWidth:a,offsetHeight:s}=this.node,i=a-e.measurements.color.colorPicker.thumb.size,h=s-e.measurements.color.colorPicker.thumb.size,l=o*a,c=(1-n)*s;r.x=l*i/a,r.y=c*h/s}this.setState({position:r})},this.onChange=({x:t,y:e})=>{const{onChange:r,config:o}=this.props,{offsetHeight:n,offsetWidth:a}=this.node,s=t*a/(a-o.measurements.color.colorPicker.thumb.size),i=e*n/(n-o.measurements.color.colorPicker.thumb.size);r(Math.min(1,Math.max(0,s/a)),Math.min(1,Math.max(0,(n-i)/n))),this.setState({position:{x:t,y:e}})},this.nodeRef=t=>{this.node=t},this.state={position:{x:0,y:0}}}render(){const{hue:t}=this.props,{position:e}=this.state;return a.createElement(Y,{surface:a.createElement(K,{hue:t}),setInnerRef:this.nodeRef,onChange:this.onChange},a.createElement(z,{position:e}))}}var G=(0,o.aa)("config")((0,o.Z)(_));const J=s.ZP.div`
  position: absolute;
  left: ${t=>t.leftOffset}px;
  top: ${t=>t.topOffset}px;
  z-index: ${t=>t.theme.measurements.zIndex.input.list};
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  ${t=>t.show&&s.iv`
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    `}
`,Q=s.ZP.div`
  &&& {
    position: absolute;
    ${t=>"top"===t.direction&&s.iv`
        transform: translate(0, -100%);
      `}
    padding: 16px;
    box-sizing: border-box;
    box-shadow: ${t=>t.theme.colorPicker.listShadow};
    background: ${t=>t.theme.colorPicker.listBackground};
    border-radius: ${t=>t.theme.shape.radiusMedium}px;
    width: ${t=>t.theme.measurements.color.colorPicker.width}px;
    height: ${t=>t.theme.measurements.color.colorPicker.height}px;
    left: 8px;
    z-index: 1;
  }
`,tt=(0,s.ZP)(X)`
  margin-top: 8px;
`,et=(0,s.ZP)(U)`
  margin-top: 8px;
`,rt=s.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,ot=s.ZP.div`
  display: flex;
`;class nt extends a.Component{constructor(t){super(t),this.node=a.createRef(),this.saturationRef=null,this.hueRef=null,this.opacityRef=null,this.checkId=(t,e,r)=>{let o=t,n=0;for(;o.parentElement&&n<r;)if(o=o.parentElement,n+=1,o.id===e)return!0;return!1},this.handleOutsideClick=t=>{var e;const{onRequestClose:r,onAddSnapshot:o}=this.props,{color:n}=this.state;(null==(e=this.node.current)?void 0:e.contains(t.target))||(this.setState({hexInputValue:n.toHexString()}),r&&r(),o&&o())},this.onChange=t=>{const{onChange:e}=this.props;e({color:t.toRgbArray(),colorString:t.toRgbString()})},this.onHexValueChange=t=>{if(t.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)){const e=new P(t);this.onChange(e),this.setState({color:e,hue:e.toHsl().h}),this.saturationRef.current.setPositionFromColor(e),this.hueRef.current.setPositionFromColor(e)}this.setState({hexInputValue:t})},this.onAlphaChange=t=>{const{color:e}=this.state,r=e.setAlpha(t);this.onChange(r),this.setState({color:r,hexInputValue:r.toHexString()})},this.onHueChange=t=>{const{color:e}=this.state,{s:r,v:o,a:n}=e.toHsv(),a=new P({h:t,s:r,v:o,a:n});this.onChange(a),this.setState({color:a,hexInputValue:a.toHexString(),hue:t})},this.onSaturationBrightnessChange=(t,e)=>{const{color:r,hue:o}=this.state,{a:n}=r.toHsv(),a=new P({h:o,s:t,v:e,a:n});this.onChange(a),this.setState({color:a,hexInputValue:a.toHexString()})},this.onInputChange=t=>e=>{const{color:r}=this.state;if(e.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g)||!e.trim()){const o=r.toRgb();o[t]=parseInt(e,10)||0;const n=new P(o);this.onChange(n),this.saturationRef.current.setPositionFromColor(n),this.hueRef.current.setPositionFromColor(n),this.setState({color:n,hexInputValue:n.toHexString(),hue:n.toHsl().h})}};const{color:e}=this.props,r=new P(e);this.state={color:r,hue:r.toHsl().h,hexInputValue:r.toHexString()},this.saturationRef=a.createRef(),this.hueRef=a.createRef(),this.opacityRef=a.createRef()}componentDidMount(){const{color:t}=this.state;document.addEventListener("mousedown",this.handleOutsideClick,!1),document.addEventListener("touchstart",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleOutsideClick,!1),this.saturationRef.current.setPositionFromColor(t),this.hueRef.current.setPositionFromColor(t),this.opacityRef.current.setPositionFromColor(t)}componentDidUpdate(t){const{color:e,show:r}=this.props;if(r&&!t.show){const t=new P(e);this.saturationRef.current.setPositionFromColor(t),this.hueRef.current.setPositionFromColor(t),this.opacityRef.current.setPositionFromColor(t),this.setState({color:t,hue:t.toHsl().h,hexInputValue:t.toHexString()})}}componentWillUnmount(){document.removeEventListener("mousedown",this.handleOutsideClick,!1),document.removeEventListener("touchstart",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleOutsideClick,!1)}render(){const{show:t,showArrow:e,direction:r,arrowOffset:n,topOffset:s,leftOffset:i,labelHex:h,labelR:l,labelG:c,labelB:u,labelSliderHue:f,labelSliderOpacity:d}=this.props,{color:g,hexInputValue:m,hue:p}=this.state,{r:b,g:x,b:v}=g.toRgb(),k=g.clone().setAlpha(1).toRgbString(),C=g.clone().setAlpha(0).toRgbString();return a.createElement("div",{ref:this.node},a.createElement(J,{show:t,direction:r,leftOffset:i,topOffset:s},a.createElement(Q,{direction:r},e&&a.createElement(M,{direction:r,arrowOffset:n}),a.createElement(G,{ref:this.saturationRef,hue:p,onChange:this.onSaturationBrightnessChange}),a.createElement(o.X.Spacer,{count:2}),a.createElement(o.X.Input.Label,{label:f}),a.createElement(tt,{ref:this.hueRef,onChange:this.onHueChange}),a.createElement(o.X.Spacer,{count:2}),a.createElement(o.X.Input.Label,{label:d}),a.createElement(et,{ref:this.opacityRef,opaqueColor:k,transparentColor:C,onChange:this.onAlphaChange}),a.createElement(rt,null,a.createElement(I,{value:m,label:h,onChange:this.onHexValueChange}),a.createElement(ot,null,a.createElement(E,{value:b,label:l,onChange:this.onInputChange("r")}),a.createElement(E,{value:x,label:c,onChange:this.onInputChange("g")}),a.createElement(E,{value:v,label:u,onChange:this.onInputChange("b")}))))))}}nt.defaultProps={direction:"bottom",showArrow:!0},Q.defaultProps={theme:o.v}}}]);