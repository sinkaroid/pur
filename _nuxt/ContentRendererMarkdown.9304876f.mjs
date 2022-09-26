import{f as G,q as Q,i as R,T as w,a as nn,r as A,j as ln}from"./entry.5f0fb7fe.mjs";const en=/[0-9]/;function on(n=""){return en.test(n)?null:n.toUpperCase()===n}const tn=["-","_","/","."];function rn(n,e=tn){const t=[];if(!n||typeof n!="string")return t;let o="",r=null,a=null;for(const u of n.split("")){const s=e.includes(u);if(s===!0){t.push(o),o="",r=null;continue}const c=on(u);if(a===!1){if(r===!1&&c===!0){t.push(o),o=u,r=c;continue}if(r===!0&&c===!1&&o.length>1){const g=o[o.length-1];t.push(o.substr(0,o.length-1)),o=g+u,r=c;continue}}o+=u,r=c,a=s}return t.push(o),t}function an(n){return n?n[0].toUpperCase()+n.substring(1):""}function un(n=""){return(Array.isArray(n)?n:rn(n)).map(e=>an(e)).join("")}class C{constructor(e,t,o){this.property=e,this.normal=t,o&&(this.space=o)}}C.prototype.property={};C.prototype.normal={};C.prototype.space=null;function U(n,e){const t={},o={};let r=-1;for(;++r<n.length;)Object.assign(t,n[r].property),Object.assign(o,n[r].normal);return new C(t,o,e)}function D(n){return n.toLowerCase()}class y{constructor(e,t){this.property=e,this.attribute=t}}y.prototype.space=null;y.prototype.boolean=!1;y.prototype.booleanish=!1;y.prototype.overloadedBoolean=!1;y.prototype.number=!1;y.prototype.commaSeparated=!1;y.prototype.spaceSeparated=!1;y.prototype.commaOrSpaceSeparated=!1;y.prototype.mustUseProperty=!1;y.prototype.defined=!1;let sn=0;const i=v(),d=v(),z=v(),l=v(),p=v(),b=v(),h=v();function v(){return 2**++sn}const L=Object.freeze(Object.defineProperty({__proto__:null,boolean:i,booleanish:d,overloadedBoolean:z,number:l,spaceSeparated:p,commaSeparated:b,commaOrSpaceSeparated:h},Symbol.toStringTag,{value:"Module"})),O=Object.keys(L);class T extends y{constructor(e,t,o,r){let a=-1;if(super(e,t),M(this,"space",r),typeof o=="number")for(;++a<O.length;){const u=O[a];M(this,O[a],(o&L[u])===L[u])}}}T.prototype.defined=!0;function M(n,e,t){t&&(n[e]=t)}const cn={}.hasOwnProperty;function k(n){const e={},t={};let o;for(o in n.properties)if(cn.call(n.properties,o)){const r=n.properties[o],a=new T(o,n.transform(n.attributes||{},o),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),e[o]=a,t[D(o)]=o,t[D(a.attribute)]=o}return new C(e,t,n.space)}const B=k({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),I=k({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _(n,e){return e in n?n[e]:e}function j(n,e){return _(n,e.toLowerCase())}const F=k({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:j,properties:{xmlns:null,xmlnsXLink:null}}),H=k({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:d,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:p,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:l,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:p,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:d,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),pn=k({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:j,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:b,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:p,autoFocus:i,autoPlay:i,capture:i,charSet:null,checked:i,cite:null,className:p,cols:l,colSpan:null,content:null,contentEditable:d,controls:i,controlsList:p,coords:l|b,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:z,draggable:d,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:p,height:l,hidden:i,high:l,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:p,itemRef:p,itemScope:i,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:l,pattern:null,ping:p,placeholder:null,playsInline:i,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:p,required:i,reversed:i,rows:l,rowSpan:l,sandbox:p,scope:null,scoped:i,seamless:i,selected:i,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:d,width:l,wrap:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:l,security:null,unselectable:null}}),dn=k({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:_,properties:{about:h,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:b,g2:b,glyphName:b,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:h,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:h,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:h,rev:h,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:h,requiredFeatures:h,requiredFonts:h,requiredFormats:h,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:h,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:h,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:h,to:null,transform:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),gn=/^data[-\w.:]+$/i,E=/-[a-z]/g,hn=/[A-Z]/g;function fn(n,e){const t=D(e);let o=e,r=y;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&gn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(E,yn);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!E.test(a)){let u=a.replace(hn,mn);u.charAt(0)!=="-"&&(u="-"+u),e="data"+u}}r=T}return new r(o,e)}function mn(n){return"-"+n.toLowerCase()}function yn(n){return n.charAt(1).toUpperCase()}const vn=U([I,B,F,H,pn],"html");U([I,B,F,H,dn],"svg");function bn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var N={exports:{}};const kn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];(function(n){n.exports=kn})(N);const V=bn(N.exports),S="default",q=/^@|^v-on:/,W=/^:|^v-bind:/,K=/^v-model/,Sn=["select","textarea","input"],An=G({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},async setup(n){var t;const{content:{tags:e={}}}=Q().public;return await Mn(n.value.body,{tags:{...e,...((t=n.value)==null?void 0:t._components)||{},...n.components}}),{tags:e}},render(n){var g;const{tags:e,tag:t,value:o,components:r}=n;if(!o)return null;let a=o.body||o;n.excerpt&&o.excerpt&&(a=o.excerpt);const u={...o,tags:{...e,...(o==null?void 0:o._components)||{},...r}};let s=u.component||t;typeof u.component=="object"&&(s=u.component.name),s=X(s);const c=(a.children||[]).map(f=>x(f,R,u));return R(s,{...(g=u.component)==null?void 0:g.props,...this.$attrs},{default:$(c)})}});function x(n,e,t,o={}){var c;if(n.type==="text")return e(w,n.value);const r=n.tag,a=typeof((c=n.props)==null?void 0:c.__ignoreMap)>"u"&&t.tags[r]||r;if(n.tag==="binding")return Cn(n,e,t,o);const u=X(a);typeof u=="object"&&(u.tag=r);const s=wn(n,t);return e(u,s,xn(n,e,t,{...o,...s}))}function Cn(n,e,t,o={}){var c;const r={...o,$route:()=>nn(),$document:t,$doc:t},a=/\.|\[(\d+)\]/,s=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((g,f)=>f in g?typeof g[f]=="function"?g[f]():g[f]:{},r);return e(w,s)}function xn(n,e,t,o){const a=(n.children||[]).reduce((s,c)=>{if(!Z(c))return s[S].push(x(c,e,t,o)),s;if(Tn(c))return s[S].push(...(c.children||[]).map(f=>x(f,e,t,o))),s;const g=Y(c);return s[g]=(c.children||[]).map(f=>x(f,e,t,o)),s},{[S]:[]}),u=Object.entries(a).map(([s,c])=>[s,$(c)]);return Object.fromEntries(u)}function wn(n,e){const{tag:t="",props:o={}}=n;return Object.keys(o).reduce(function(r,a){if(a==="__ignoreMap")return r;const u=o[a];if(K.test(a)&&!Sn.includes(t))return Pn(a,u,r,e);if(a==="v-bind")return On(a,u,r,e);if(q.test(a))return Dn(a,u,r,e);if(W.test(a))return Ln(a,u,r,e);const{attribute:s}=fn(vn,a);return Array.isArray(u)&&u.every(c=>typeof c=="string")?(r[s]=u.join(" "),r):(r[s]=u,r)},{})}function Pn(n,e,t,o){const r=m=>+m,a=m=>m.trim(),u=m=>m,s=n.replace(K,"").split(".").filter(m=>m).reduce((m,J)=>(m[J]=!0,m),{}),c="value",g=s.lazy?"change":"input",f=s.number?r:s.trim?a:u;return t[c]=P(e,o),t.on=t.on||{},t.on[g]=m=>o[e]=f(m),t}function On(n,e,t,o){const r=P(e,o);return t=Object.assign(t,r),t}function Dn(n,e,t,o){return n=n.replace(q,""),t.on=t.on||{},t.on[n]=()=>P(e,o),t}function Ln(n,e,t,o){return n=n.replace(W,""),t[n]=P(e,o),t}const X=n=>{if(!V.includes(n)){const e=A(un(n),!1);if(typeof e=="object")return e}return n};function P(n,e){const t=n.split(".").reduce((o,r)=>typeof o=="object"?o[r]:void 0,e);return typeof t>"u"?ln(n):t}function Y(n){let e="";for(const t of Object.keys(n.props||{}))if(!(!t.startsWith("#")&&!t.startsWith("v-slot:"))){e=t.split(/[:#]/,2)[1];break}return e||S}function $(n){return n.length?()=>Rn(n):void 0}function Tn(n){return Z(n)&&Y(n)===S}function Z(n){return n.tag==="template"}function Rn(n){const e=[];for(const t of n){const o=e[e.length-1];t.type===w&&(o==null?void 0:o.type)===w?o.children=o.children+t.children:e.push(t)}return e}async function Mn(n,e){const t=Array.from(new Set(o(n,e)));await Promise.all(t.map(async r=>{const a=A(r);(a==null?void 0:a.__asyncLoader)&&!a.__asyncResolved&&await a.__asyncLoader()}));function o(r,a){var c;if(r.type==="text"||r.tag==="binding")return[];const u=typeof((c=r.props)==null?void 0:c.__ignoreMap)>"u"&&a.tags[r.tag]||r.tag,s=[];r.type!=="root"&&!V.includes(u)&&s.push(u);for(const g of r.children||[])s.push(...o(g,a));return s}}export{An as default};
