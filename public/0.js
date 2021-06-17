(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/photoeditorsdk/esm/serialization/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/photoeditorsdk/esm/serialization/index.js ***!
  \****************************************************************/
/*! exports provided: Deserializer, Serializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deserializer", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serializer", function() { return u; });
/* harmony import */ var _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunk.IQZ6RVTD.js */ "./node_modules/photoeditorsdk/esm/chunk.IQZ6RVTD.js");
var x="@photoeditorsdk/root",w="5.8.0",F="The most comprehensive photo editor SDK for HTML5",P="http://github.com/imgly/pesdk-html5",M="PhotoEditorSDK (img.ly GmbH) <contact@img.ly>",E="SEE LICENSE IN LICENSE.md",j=!0,A={},H={start:"yarn workspace @example/react start",build:"yarn sdk-script build","build:rollup":"yarn sdk-script build rollup","package:release":"cd dist/photoeditorsdk && npm publish","package:pre-release":"cd dist/photoeditorsdk && npm publish --tag next","lint:css":"stylelint './packages/**/*.tsx'","lint:ts":"eslint ./packages","lint:ts-engine":"eslint ./engine","lint:types":"tsc --noEmit -p tsconfig.json --skipLibCheck","lint:types-engine":"tsc --noEmit -p engine/tsconfig.json --skipLibCheck",lint:"run-p lint:*",test:"$(npm bin)/jest",e2e:"cypress open","e2e:server":"sdk-script ui -P 3000 -D build","e2e:ci":"CYPRESS_RETRIES=2 cypress run --browser chrome --headless",deploy:"yarn workspace examp run deploy:pages",docs:"rm -rf ./docs && typedoc",postinstall:"yarn sdk-script server:build"},D={"@elv1n/cypress-plugin-snapshots":"1.4.4","@types/jest":"^24.0.11","@types/pixelmatch":"^5.2.2","@types/pngjs":"^3.4.2","@types/react":"^16.8.13","@types/react-dom":"^16.8.4","@types/styled-components":"4.4.0","@typescript-eslint/eslint-plugin":"4.6.0","@typescript-eslint/parser":"4.6.0",autoprefixer:"^9.7.4","cross-env":"^7.0.2",cypress:"5.6.0",eslint:"7.10.0","eslint-config-airbnb":"18.2.0","eslint-config-prettier":"6.12.0","eslint-import-resolver-typescript":"^2.3.0","eslint-plugin-cypress":"^2.11.2","eslint-plugin-import":"2.22.1","eslint-plugin-jsx-a11y":"6.3.1","eslint-plugin-no-only-tests":"^2.4.0","eslint-plugin-prettier":"3.1.4","eslint-plugin-react":"7.21.3",husky:"4.3.0",jest:"24.9.0",jsdoc:"^3.6.3","lint-staged":"10.4.0","lodash.defaults":"^4.2.0","mobx-react-devtools":"^6.1.1","npm-run-all":"^4.1.5",prettier:"^2.0.5",react:"16.8.6","react-dom":"16.8.6","start-server-and-test":"1.11.5","styled-components":"4.4.1",stylelint:"^13.7.2","stylelint-config-recommended":"^3.0.0","stylelint-config-standard":"^20.0.0","stylelint-config-styled-components":"^0.1.1","stylelint-processor-styled-components":"^1.10.0","ts-jest":"24.3.0",typedoc:"^0.17.8",typescript:"3.8.3","utility-types":"^3.10.0"},L={"@juggle/resize-observer":"3.2.0","can-use-dom":"0.1.0","lodash.debounce":"4.0.8","lodash.memoize":"4.1.2","lodash.throttle":"4.1.1",mobx:"4.15.7","mobx-react":"6.3.1",photoeditorsdk:"1.0.0","react-app-polyfill":"1.0.6"},V={node:"10.x || 11.x || 12.x || 13.x || 14.x || 15.x"},B={eslint:"7.10.0"},G=["examples/server","examples/material-ui","examples/react","packages/*","!packages/ui","packages/ui/*","!packages/ui/components","packages/ui/components/*","engine/*","test/*","scripts"],N={hooks:{"pre-commit":"lint-staged","pre-push":"true"}},C={name:x,version:w,description:F,repository:P,author:M,license:E,private:j,bin:A,scripts:H,devDependencies:D,dependencies:L,devEngines:V,resolutions:B,workspaces:G,husky:N};class u{constructor(e,i,t,o,p,s){this.mapImagePointToRelativeCropPoint=e=>{const i=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["aa"].pointFromSpaceToSpace(e,this.imageSpace,this.cropSpace,!1);return _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["aa"].absoluteToRelativePoint(i,this.cropSpace,!1)};this.mapSizeToRelativeUnscaledCropSize=e=>e/Math.min(this.outputSize.height,this.outputSize.width);this.mapSizeToRelativeScaledCropSize=e=>e/Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y);this.getPointInDirection=(e,i=0,t=3)=>{const o=Math.tan(i),p=Math.sqrt(o**2+1);return{x:e.x+t/p,y:e.y+t*o/p}};this.previewPosition=e,this.previewSize=i,this.outputSize=t,this.imageSize=o,this.imageSpace=p,this.cropSpace=s,this.outputScale=s.getScale()}static serializeFilters(e){return{type:"filter",options:{intensity:e.intensity,identifier:e.identifier}}}static serializeAdjustments(e){return{type:"adjustments",options:e}}static serializeOverlay(e){return{type:"overlay",options:{identifier:e.identifier,intensity:e.opacity,blendMode:e.blendMode.replace(/[A-Z]/g,i=>` ${i.toLowerCase()}`)}}}static serializeMetaData(){return{platform:"html5",version:C.version,createdAt:new Date().toISOString()}}serialise(e,i,t){const o=u.serializeMetaData(),p={width:this.imageSize.width,height:this.imageSize.height};i&&(p.type=t,p.data=i);const s=[],d=[],{adjustment:z}=e;Object.keys(z).map(r=>z[r]).filter(Boolean).length&&s.push(u.serializeAdjustments(z));const{filter:a}=e;a.identifier!=="identity"&&s.push(u.serializeFilters(a));const{overlay:c}=e;if(c.identifier!=="identity"&&d.push(u.serializeOverlay(c)),e.transform){const{transform:r,orientation:m}=this.serializeTransform(e.transform),v=[r.options.start.x!==0,r.options.start.y!==0,r.options.end.x!==1,r.options.end.y!==1,r.options.rotation!==0],y=[m.options.rotation!==0,m.options.flipVertically!==!1,m.options.flipHorizontally!==!1];v.some(f=>f)&&s.push(r),y.some(f=>f)&&s.push(m)}const{frame:O}=e;O.identifier!=="identity"&&d.push(this.serialzeFrame(O));const{focus:T}=e;if(T.identifier!=="identity"&&s.push(this.serializeFocus(T)),e.sprite&&e.sprite.spriteIdList.forEach(r=>{const m=e.sprite.common[r];switch(m.tool){case"sticker":const v=e.sprite.sticker[r];d.push(this.serializeSticker(v,m,e.transform));break;case"text":const y=e.sprite.text[r];d.push(this.serializeText(y,m));break;case"textdesign":const f=e.sprite.textdesign[r];d.push(this.serializeTextDesign(f,m));break}}),e.brush.strokes.length&&d.push({type:"brush",options:{paths:e.brush.strokes.map(r=>({points:r.path.controlPoints.map(this.mapImagePointToRelativeCropPoint),brush:{color:{rgba:r.brush.color},size:r.brush.size,hardness:r.brush.hardness}}))}}),d.length){const r={type:"sprite",options:{sprites:d}};s.push(r)}const k=e.customStickers,I={assets:{stickers:k}};return{version:u.version,meta:o,image:p,operations:s,assetLibrary:I}}serialzeFrame(e){return{type:"frame",options:{identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.color},size:this.mapSizeToRelativeUnscaledCropSize(e.width)}}}serializeFocus(e){const i=Math.sqrt(this.previewSize.width**2+this.previewSize.height**2);switch(e.identifier){case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["k"].LINEAR:return{type:"focus",options:{type:"linear",options:{start:this.mapImagePointToRelativeCropPoint(e.linear.start),end:this.mapImagePointToRelativeCropPoint(e.linear.end),blurRadius:this.mapSizeToRelativeScaledCropSize(e.linear.blurRadius)}}};case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["k"].RADIAL:return{type:"focus",options:{type:"radial",options:{start:this.mapImagePointToRelativeCropPoint(e.radial.center),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(e.radial.center,0,e.radial.radius)),blurRadius:this.mapSizeToRelativeScaledCropSize(e.radial.blurRadius),gradientRadius:.1}}};case _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["k"].MIRRORED:const{mirrored:t}=e;return{type:"focus",options:{type:"mirrored",options:{start:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,i/2)),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,-i/2)),size:this.mapSizeToRelativeScaledCropSize(e.mirrored.size),blurRadius:this.mapSizeToRelativeScaledCropSize(e.mirrored.blurRadius),gradientSize:.1}}};default:return{type:"focus",options:{type:"gaussian",options:{blurRadius:this.mapSizeToRelativeScaledCropSize(e.gaussian.blurRadius)}}}}}serializeSticker(e,i,t){return{type:"sticker",options:{position:this.mapImagePointToRelativeCropPoint(i.position),dimensions:{x:this.mapSizeToRelativeScaledCropSize(i.size.width),y:this.mapSizeToRelativeScaledCropSize(i.size.height)},rotation:i.rotation,flipVertically:(i.flipVertically||!1)!==(t.flipVertically||!1),flipHorizontally:(i.flipHorizontally||!1)!==(t.flipHorizontally||!1),identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.tintColor},tintMode:e.tintMode}}}serializeText(e,i){return{type:"text",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,fontIdentifier:e.identifier,fontSize:this.mapSizeToRelativeScaledCropSize(e.fontSize),maxWidth:this.mapSizeToRelativeScaledCropSize(e.width),text:e.text,lineHeight:e.lineHeight,color:{rgba:e.textColor},backgroundColor:{rgba:e.backgroundColor},alignment:e.alignment}}}serializeTextDesign(e,i){return{type:"textdesign",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,identifier:e.identifier,inverted:e.isInverted,text:e.text,seed:e.seed,width:this.mapSizeToRelativeScaledCropSize(e.width),padding:this.mapSizeToRelativeScaledCropSize(e.padding),color:{rgba:e.color}}}}serializeTransform(e){const{start:i,end:t}=e,o={type:"transform",options:{start:i,end:t,rotation:e.rotation,meta:{identifier:e.identifier}}},p={type:"orientation",options:{rotation:e.outputRotation,flipHorizontally:e.flipHorizontally,flipVertically:e.flipVertically}};return{transform:o,orientation:p}}}u.version="3.9.0";const R=(e=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["e"].PNG)=>`data:${e};base64,`;class n{constructor(e){this.spriteOrder=0;this.mapRelativeCropPointToImageSpace=e=>{const i=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["aa"].relativeToAbsolutePoint(e,this.cropSpace,!1);return _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["aa"].pointFromSpaceToSpace(i,this.cropSpace,this.imageSpace,!1)};this.mapRelativeCropSizeToScaledImageSize=e=>e*Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y);this.mapRelativeCropSizeToUnscaledImageSize=e=>e*Math.min(this.outputSize.height,this.outputSize.width);this.editor=e}static deserializeFilter(e){return{intensity:e.intensity,identifier:e.identifier}}static deserializeAdjustments(e){return Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["N"])({},e)}static deserializeOverlay(e){return{identifier:e.identifier,opacity:e.intensity,blendMode:e.blendMode.replace(/([ _][a-z])/g,i=>i.toUpperCase().replace(" ","").replace("_",""))}}static initializeEmptyTransform(){return{outputRotation:0,flipHorizontally:!1,flipVertically:!1,start:{x:0,y:0},end:{x:1,y:1},rotation:0}}static deserialzeColor(e){return e&&e.rgba?e.rgba:[0,0,0,0]}static validateVersion(e){return n.version===e}static checkIfPlatformHTML(e){return e==="html5"}static deserializeStickers(e){return{identifier:e.identifier,opacity:e.alpha||0,tintMode:e.tintMode||"none",tintColor:n.deserialzeColor(e.tintColor)}}static checkIsSerialisationValid(e){if(typeof e!="string"&&n.validateVersion(e.version))return!0;if(typeof e=="string")throw new Error("Invalid input of type string, please provide an object");return!1}static deserializeImage(e){const i={};return e.image&&(i.image={width:e.image.width,height:e.image.height,data:e.image.data?e.image.data.replace(R(),""):""},i.image.data=i.image.data?R()+i.image.data:""),i}deserializeTransformation(e){const i={},t=e.operations.find(s=>s.type==="orientation"),o=e.operations.find(s=>s.type==="transform"),[p]=this.editor.engine.getRootContainers();return this.previewPosition=this.editor.transformToolStore.defaultCropMaskPosition,this.previewSize=this.editor.transformToolStore.maxCropMaskSize,this.imageSpace=p,i.transform=n.initializeEmptyTransform(),t!=null&&(i.transform.outputRotation=t.options.rotation,i.transform.flipHorizontally=t.options.flipHorizontally||!1,i.transform.flipVertically=t.options.flipVertically||!1),o&&(i.transform.start=o.options.start,i.transform.end=o.options.end,i.transform.rotation=o.options.rotation||0,i.transform.identifier=o.options.meta?o.options.meta.identifier:""),i}deserialize(e){var p,s;const i={};(e.meta?!n.checkIfPlatformHTML(e.meta.platform):!1)&&console.warn("Read serialisation from another Platform");const t=this.editor.engineMediator.output.container.getResolution(),{size:o}=this.editor.engineMediator.image.container.getBounds();return this.outputSize=t,this.imageSize=o,this.cropSpace=this.editor.engine.getOutputContainer(),this.outputScale=this.cropSpace.getScale(),e.operations.forEach(d=>{switch(d.type){case"filter":i.filter=n.deserializeFilter(d.options);break;case"adjustments":i.adjustment=n.deserializeAdjustments(d.options);break;case"focus":i.focus=this.deserializeFocus(d.options);break;case"sprite":const{sprites:z}=d.options;z.forEach(a=>{switch(a.type){case"frame":i.frame=this.deserializeFrame(a.options);break;case"overlay":i.overlay=n.deserializeOverlay(a.options);break;case"brush":i.brush?i.brush.strokes.push(...this.deserializeBrush(a.options).strokes):i.brush=this.deserializeBrush(a.options);break;case"sticker":case"text":case"textdesign":i.sprite||(i.sprite={spriteIdList:[],sticker:{},text:{},textdesign:{},common:{}});const c=Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["H"])();i.sprite.spriteIdList.push(c),i.sprite.common[c]={order:this.spriteOrder,position:this.mapRelativeCropPointToImageSpace(a.options.position),tool:_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].STICKER,rotation:a.options.rotation||0,flipHorizontally:a.options.flipHorizontally,flipVertically:a.options.flipVertically},this.spriteOrder+=1,a.type===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].STICKER?(i.sprite.common[c].tool=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].STICKER,i.sprite.common[c].size={width:this.mapRelativeCropSizeToScaledImageSize(a.options.dimensions.x),height:this.mapRelativeCropSizeToScaledImageSize(a.options.dimensions.y)},i.sprite.sticker[c]=n.deserializeStickers(a.options)):a.type===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].TEXT?(i.sprite.common[c].tool=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].TEXT,i.sprite.text[c]=this.deserializeTexts(a.options)):a.type===_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].TEXT_DESIGN&&(i.sprite.common[c].tool=_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["c"].TEXT_DESIGN,i.sprite.textdesign[c]=this.deserializeTextDesign(a.options));break;default:break}});break;default:break}}),e.assetLibrary&&(i.customStickers=((s=(p=e.assetLibrary)==null?void 0:p.assets)==null?void 0:s.stickers)||[]),i}deserializeFrame(e){return{identifier:e.identifier,opacity:e.alpha,width:this.mapRelativeCropSizeToUnscaledImageSize(e.size),color:n.deserialzeColor(e.tintColor)}}deserializeFocus(e){switch(e.type){case"linear":return{identifier:"linear",linear:this.deserializeLinearFocus(e.options)};case"gaussian":return{identifier:"gaussian",gaussian:this.deserializeGaussianFocus(e.options)};case"radial":return{identifier:"radial",radial:this.deserializeRadialFocus(e.options)};case"mirrored":return{identifier:"mirrored",mirrored:this.deserializeMirroredFocus(e.options)}}return}deserializeRadialFocus(e){return{center:this.mapRelativeCropPointToImageSpace(e.start),radius:new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.start)).subtract(new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.end))).magnitude,blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeLinearFocus(e){return{start:this.mapRelativeCropPointToImageSpace(e.start),end:this.mapRelativeCropPointToImageSpace(e.end),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeGaussianFocus(e){return{blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeMirroredFocus(e){const i=new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.start)).subtract(new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.end)));return{origin:new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.start)).add(new _chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["C"](this.mapRelativeCropPointToImageSpace(e.end))).divide(2),rotation:Math.atan2(i.y,i.x),size:this.mapRelativeCropSizeToScaledImageSize(e.size),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeTexts(e){return{identifier:Object(_chunk_IQZ6RVTD_js__WEBPACK_IMPORTED_MODULE_0__["t"])(e.fontIdentifier),fontSize:this.mapRelativeCropSizeToScaledImageSize(e.fontSize),width:this.mapRelativeCropSizeToScaledImageSize(e.maxWidth),alignment:e.alignment,textColor:n.deserialzeColor(e.color),backgroundColor:n.deserialzeColor(e.backgroundColor),lineHeight:e.lineHeight,text:e.text}}deserializeTextDesign(e){return{identifier:e.identifier,width:this.mapRelativeCropSizeToScaledImageSize(e.width),padding:this.mapRelativeCropSizeToScaledImageSize(e.padding),color:n.deserialzeColor(e.color),seed:e.seed,text:e.text,isInverted:e.inverted}}deserializeBrush(e){return{strokes:e.paths.map(i=>({path:{controlPoints:i.points.map(this.mapRelativeCropPointToImageSpace)},brush:{id:"imgly_brush_radial",color:n.deserialzeColor(i.brush.color),size:i.brush.size,hardness:i.brush.hardness}}))}}}n.version="3.9.0";


/***/ })

}]);