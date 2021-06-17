(self.webpackChunk=self.webpackChunk||[]).push([[528],{5528:(e,i,t)=>{"use strict";t.r(i),t.d(i,{Deserializer:()=>n,Serializer:()=>a});var o=t(8821),r="5.8.0";class a{constructor(e,i,t,r,a,s){this.mapImagePointToRelativeCropPoint=e=>{const i=o.aa.pointFromSpaceToSpace(e,this.imageSpace,this.cropSpace,!1);return o.aa.absoluteToRelativePoint(i,this.cropSpace,!1)},this.mapSizeToRelativeUnscaledCropSize=e=>e/Math.min(this.outputSize.height,this.outputSize.width),this.mapSizeToRelativeScaledCropSize=e=>e/Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y),this.getPointInDirection=(e,i=0,t=3)=>{const o=Math.tan(i),r=Math.sqrt(o**2+1);return{x:e.x+t/r,y:e.y+t*o/r}},this.previewPosition=e,this.previewSize=i,this.outputSize=t,this.imageSize=r,this.imageSpace=a,this.cropSpace=s,this.outputScale=s.getScale()}static serializeFilters(e){return{type:"filter",options:{intensity:e.intensity,identifier:e.identifier}}}static serializeAdjustments(e){return{type:"adjustments",options:e}}static serializeOverlay(e){return{type:"overlay",options:{identifier:e.identifier,intensity:e.opacity,blendMode:e.blendMode.replace(/[A-Z]/g,(e=>` ${e.toLowerCase()}`))}}}static serializeMetaData(){return{platform:"html5",version:r,createdAt:(new Date).toISOString()}}serialise(e,i,t){const o=a.serializeMetaData(),r={width:this.imageSize.width,height:this.imageSize.height};i&&(r.type=t,r.data=i);const s=[],n=[],{adjustment:l}=e;Object.keys(l).map((e=>l[e])).filter(Boolean).length&&s.push(a.serializeAdjustments(l));const{filter:p}=e;"identity"!==p.identifier&&s.push(a.serializeFilters(p));const{overlay:d}=e;if("identity"!==d.identifier&&n.push(a.serializeOverlay(d)),e.transform){const{transform:i,orientation:t}=this.serializeTransform(e.transform),o=[0!==i.options.start.x,0!==i.options.start.y,1!==i.options.end.x,1!==i.options.end.y,0!==i.options.rotation],r=[0!==t.options.rotation,!1!==t.options.flipVertically,!1!==t.options.flipHorizontally];o.some((e=>e))&&s.push(i),r.some((e=>e))&&s.push(t)}const{frame:c}=e;"identity"!==c.identifier&&n.push(this.serialzeFrame(c));const{focus:h}=e;if("identity"!==h.identifier&&s.push(this.serializeFocus(h)),e.sprite&&e.sprite.spriteIdList.forEach((i=>{const t=e.sprite.common[i];switch(t.tool){case"sticker":const o=e.sprite.sticker[i];n.push(this.serializeSticker(o,t,e.transform));break;case"text":const r=e.sprite.text[i];n.push(this.serializeText(r,t));break;case"textdesign":const a=e.sprite.textdesign[i];n.push(this.serializeTextDesign(a,t))}})),e.brush.strokes.length&&n.push({type:"brush",options:{paths:e.brush.strokes.map((e=>({points:e.path.controlPoints.map(this.mapImagePointToRelativeCropPoint),brush:{color:{rgba:e.brush.color},size:e.brush.size,hardness:e.brush.hardness}})))}}),n.length){const e={type:"sprite",options:{sprites:n}};s.push(e)}const u={assets:{stickers:e.customStickers}};return{version:a.version,meta:o,image:r,operations:s,assetLibrary:u}}serialzeFrame(e){return{type:"frame",options:{identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.color},size:this.mapSizeToRelativeUnscaledCropSize(e.width)}}}serializeFocus(e){const i=Math.sqrt(this.previewSize.width**2+this.previewSize.height**2);switch(e.identifier){case o.k.LINEAR:return{type:"focus",options:{type:"linear",options:{start:this.mapImagePointToRelativeCropPoint(e.linear.start),end:this.mapImagePointToRelativeCropPoint(e.linear.end),blurRadius:this.mapSizeToRelativeScaledCropSize(e.linear.blurRadius)}}};case o.k.RADIAL:return{type:"focus",options:{type:"radial",options:{start:this.mapImagePointToRelativeCropPoint(e.radial.center),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(e.radial.center,0,e.radial.radius)),blurRadius:this.mapSizeToRelativeScaledCropSize(e.radial.blurRadius),gradientRadius:.1}}};case o.k.MIRRORED:const{mirrored:t}=e;return{type:"focus",options:{type:"mirrored",options:{start:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,i/2)),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,-i/2)),size:this.mapSizeToRelativeScaledCropSize(e.mirrored.size),blurRadius:this.mapSizeToRelativeScaledCropSize(e.mirrored.blurRadius),gradientSize:.1}}};default:return{type:"focus",options:{type:"gaussian",options:{blurRadius:this.mapSizeToRelativeScaledCropSize(e.gaussian.blurRadius)}}}}}serializeSticker(e,i,t){return{type:"sticker",options:{position:this.mapImagePointToRelativeCropPoint(i.position),dimensions:{x:this.mapSizeToRelativeScaledCropSize(i.size.width),y:this.mapSizeToRelativeScaledCropSize(i.size.height)},rotation:i.rotation,flipVertically:(i.flipVertically||!1)!==(t.flipVertically||!1),flipHorizontally:(i.flipHorizontally||!1)!==(t.flipHorizontally||!1),identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.tintColor},tintMode:e.tintMode}}}serializeText(e,i){return{type:"text",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,fontIdentifier:e.identifier,fontSize:this.mapSizeToRelativeScaledCropSize(e.fontSize),maxWidth:this.mapSizeToRelativeScaledCropSize(e.width),text:e.text,lineHeight:e.lineHeight,color:{rgba:e.textColor},backgroundColor:{rgba:e.backgroundColor},alignment:e.alignment}}}serializeTextDesign(e,i){return{type:"textdesign",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,identifier:e.identifier,inverted:e.isInverted,text:e.text,seed:e.seed,width:this.mapSizeToRelativeScaledCropSize(e.width),padding:this.mapSizeToRelativeScaledCropSize(e.padding),color:{rgba:e.color}}}}serializeTransform(e){const{start:i,end:t}=e;return{transform:{type:"transform",options:{start:i,end:t,rotation:e.rotation,meta:{identifier:e.identifier}}},orientation:{type:"orientation",options:{rotation:e.outputRotation,flipHorizontally:e.flipHorizontally,flipVertically:e.flipVertically}}}}}a.version="3.9.0";const s=(e=o.e.PNG)=>`data:${e};base64,`;class n{constructor(e){this.spriteOrder=0,this.mapRelativeCropPointToImageSpace=e=>{const i=o.aa.relativeToAbsolutePoint(e,this.cropSpace,!1);return o.aa.pointFromSpaceToSpace(i,this.cropSpace,this.imageSpace,!1)},this.mapRelativeCropSizeToScaledImageSize=e=>e*Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y),this.mapRelativeCropSizeToUnscaledImageSize=e=>e*Math.min(this.outputSize.height,this.outputSize.width),this.editor=e}static deserializeFilter(e){return{intensity:e.intensity,identifier:e.identifier}}static deserializeAdjustments(e){return(0,o.N)({},e)}static deserializeOverlay(e){return{identifier:e.identifier,opacity:e.intensity,blendMode:e.blendMode.replace(/([ _][a-z])/g,(e=>e.toUpperCase().replace(" ","").replace("_","")))}}static initializeEmptyTransform(){return{outputRotation:0,flipHorizontally:!1,flipVertically:!1,start:{x:0,y:0},end:{x:1,y:1},rotation:0}}static deserialzeColor(e){return e&&e.rgba?e.rgba:[0,0,0,0]}static validateVersion(e){return n.version===e}static checkIfPlatformHTML(e){return"html5"===e}static deserializeStickers(e){return{identifier:e.identifier,opacity:e.alpha||0,tintMode:e.tintMode||"none",tintColor:n.deserialzeColor(e.tintColor)}}static checkIsSerialisationValid(e){if("string"!=typeof e&&n.validateVersion(e.version))return!0;if("string"==typeof e)throw new Error("Invalid input of type string, please provide an object");return!1}static deserializeImage(e){const i={};return e.image&&(i.image={width:e.image.width,height:e.image.height,data:e.image.data?e.image.data.replace(s(),""):""},i.image.data=i.image.data?s()+i.image.data:""),i}deserializeTransformation(e){const i={},t=e.operations.find((e=>"orientation"===e.type)),o=e.operations.find((e=>"transform"===e.type)),[r]=this.editor.engine.getRootContainers();return this.previewPosition=this.editor.transformToolStore.defaultCropMaskPosition,this.previewSize=this.editor.transformToolStore.maxCropMaskSize,this.imageSpace=r,i.transform=n.initializeEmptyTransform(),null!=t&&(i.transform.outputRotation=t.options.rotation,i.transform.flipHorizontally=t.options.flipHorizontally||!1,i.transform.flipVertically=t.options.flipVertically||!1),o&&(i.transform.start=o.options.start,i.transform.end=o.options.end,i.transform.rotation=o.options.rotation||0,i.transform.identifier=o.options.meta?o.options.meta.identifier:""),i}deserialize(e){var i,t;const r={};e.meta&&!n.checkIfPlatformHTML(e.meta.platform)&&console.warn("Read serialisation from another Platform");const a=this.editor.engineMediator.output.container.getResolution(),{size:s}=this.editor.engineMediator.image.container.getBounds();return this.outputSize=a,this.imageSize=s,this.cropSpace=this.editor.engine.getOutputContainer(),this.outputScale=this.cropSpace.getScale(),e.operations.forEach((e=>{switch(e.type){case"filter":r.filter=n.deserializeFilter(e.options);break;case"adjustments":r.adjustment=n.deserializeAdjustments(e.options);break;case"focus":r.focus=this.deserializeFocus(e.options);break;case"sprite":const{sprites:i}=e.options;i.forEach((e=>{switch(e.type){case"frame":r.frame=this.deserializeFrame(e.options);break;case"overlay":r.overlay=n.deserializeOverlay(e.options);break;case"brush":r.brush?r.brush.strokes.push(...this.deserializeBrush(e.options).strokes):r.brush=this.deserializeBrush(e.options);break;case"sticker":case"text":case"textdesign":r.sprite||(r.sprite={spriteIdList:[],sticker:{},text:{},textdesign:{},common:{}});const i=(0,o.H)();r.sprite.spriteIdList.push(i),r.sprite.common[i]={order:this.spriteOrder,position:this.mapRelativeCropPointToImageSpace(e.options.position),tool:o.c.STICKER,rotation:e.options.rotation||0,flipHorizontally:e.options.flipHorizontally,flipVertically:e.options.flipVertically},this.spriteOrder+=1,e.type===o.c.STICKER?(r.sprite.common[i].tool=o.c.STICKER,r.sprite.common[i].size={width:this.mapRelativeCropSizeToScaledImageSize(e.options.dimensions.x),height:this.mapRelativeCropSizeToScaledImageSize(e.options.dimensions.y)},r.sprite.sticker[i]=n.deserializeStickers(e.options)):e.type===o.c.TEXT?(r.sprite.common[i].tool=o.c.TEXT,r.sprite.text[i]=this.deserializeTexts(e.options)):e.type===o.c.TEXT_DESIGN&&(r.sprite.common[i].tool=o.c.TEXT_DESIGN,r.sprite.textdesign[i]=this.deserializeTextDesign(e.options))}}))}})),e.assetLibrary&&(r.customStickers=(null==(t=null==(i=e.assetLibrary)?void 0:i.assets)?void 0:t.stickers)||[]),r}deserializeFrame(e){return{identifier:e.identifier,opacity:e.alpha,width:this.mapRelativeCropSizeToUnscaledImageSize(e.size),color:n.deserialzeColor(e.tintColor)}}deserializeFocus(e){switch(e.type){case"linear":return{identifier:"linear",linear:this.deserializeLinearFocus(e.options)};case"gaussian":return{identifier:"gaussian",gaussian:this.deserializeGaussianFocus(e.options)};case"radial":return{identifier:"radial",radial:this.deserializeRadialFocus(e.options)};case"mirrored":return{identifier:"mirrored",mirrored:this.deserializeMirroredFocus(e.options)}}}deserializeRadialFocus(e){return{center:this.mapRelativeCropPointToImageSpace(e.start),radius:new o.C(this.mapRelativeCropPointToImageSpace(e.start)).subtract(new o.C(this.mapRelativeCropPointToImageSpace(e.end))).magnitude,blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeLinearFocus(e){return{start:this.mapRelativeCropPointToImageSpace(e.start),end:this.mapRelativeCropPointToImageSpace(e.end),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeGaussianFocus(e){return{blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeMirroredFocus(e){const i=new o.C(this.mapRelativeCropPointToImageSpace(e.start)).subtract(new o.C(this.mapRelativeCropPointToImageSpace(e.end)));return{origin:new o.C(this.mapRelativeCropPointToImageSpace(e.start)).add(new o.C(this.mapRelativeCropPointToImageSpace(e.end))).divide(2),rotation:Math.atan2(i.y,i.x),size:this.mapRelativeCropSizeToScaledImageSize(e.size),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeTexts(e){return{identifier:(0,o.t)(e.fontIdentifier),fontSize:this.mapRelativeCropSizeToScaledImageSize(e.fontSize),width:this.mapRelativeCropSizeToScaledImageSize(e.maxWidth),alignment:e.alignment,textColor:n.deserialzeColor(e.color),backgroundColor:n.deserialzeColor(e.backgroundColor),lineHeight:e.lineHeight,text:e.text}}deserializeTextDesign(e){return{identifier:e.identifier,width:this.mapRelativeCropSizeToScaledImageSize(e.width),padding:this.mapRelativeCropSizeToScaledImageSize(e.padding),color:n.deserialzeColor(e.color),seed:e.seed,text:e.text,isInverted:e.inverted}}deserializeBrush(e){return{strokes:e.paths.map((e=>({path:{controlPoints:e.points.map(this.mapRelativeCropPointToImageSpace)},brush:{id:"imgly_brush_radial",color:n.deserialzeColor(e.brush.color),size:e.brush.size,hardness:e.brush.hardness}})))}}}n.version="3.9.0"}}]);