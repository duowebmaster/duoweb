(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],d=0,h=[];d<n.length;d++)o=n[d],a[o]&&h.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,n=1;n<i.length;n++){var l=i[n];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/duoweb/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("1356"),a=i.n(s);a.a},"0b65":function(t,e,i){},"0cdf":function(t,e,i){},"0fc8":function(t,e,i){"use strict";var s=i("a9a1"),a=i.n(s);a.a},1356:function(t,e,i){},1899:function(t,e,i){},"1a9d":function(t,e,i){},"247b":function(t,e,i){"use strict";var s=i("b8d9"),a=i.n(s);a.a},"24b2":function(t,e,i){},"24e7":function(t,e,i){"use strict";var s=i("8cfc"),a=i.n(s);a.a},"31cb":function(t,e,i){},"3ed2":function(t,e,i){"use strict";var s=i("5f1a"),a=i.n(s);a.a},"4b5f":function(t,e,i){},5510:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=i("bb71");i("da64"),i("d1e7");s["default"].use(a["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("top-bar"),i("mobile-top-bar"),i("transition",{attrs:{name:"fade"}},[i("router-view",{staticClass:"view-wrapper"})],1),i("transition",{attrs:{name:"fade"}},[i("router-view",{staticClass:"image-view",attrs:{name:"imageView"}})],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top-bar"},[i("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{fixed:""}},[i("v-container",{staticClass:"main-nav nav",attrs:{fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[i("v-img",{style:t.config.logo.style,attrs:{id:"logo",src:t.config.logo.src}})],1)],1),i("v-spacer"),i("v-spacer"),i("v-spacer"),i("v-flex",{attrs:{width:"500px"}},[i("v-container",{staticClass:"nav",attrs:{fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",{staticClass:"nav-major-item"},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[i("v-card-text",{staticClass:"header"},[t._v("HOME")])],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-card-text",t._g({staticClass:"header"},s),[t._v("\n                      PHOTOGRAPHY\n                      "),i("v-icon",{attrs:{color:"black"}},[t._v("keyboard_arrow_down")])],1)]}}])},[i("v-list",{staticClass:"down-menu",class:{"before-scrolled":!t.scrolled&&t.isIndex}},[i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography/#architecture"}},[i("v-list-tile-title",[t._v("ARCHITECTURE")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography/#urban"}},[i("v-list-tile-title",[t._v("URBAN")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography/#landscape"}},[i("v-list-tile-title",[t._v("LANDSCAPE")])],1)],1)],1)],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/motion"}},[i("v-card-text",{staticClass:"header"},[t._v("MOTION")])],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-card-text",t._g({staticClass:"header"},s),[t._v("\n                      PARTNER\n                      "),i("v-icon",{attrs:{color:"black"}},[t._v("keyboard_arrow_down")])],1)]}}])},[i("v-list",{staticClass:"down-menu",class:{"before-scrolled":!t.scrolled&&t.isIndex}},t._l(this.config.partner,function(e,s){return i("v-list-tile",{key:s},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/partner/"+e.url}},[i("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)}),1)],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/client"}},[i("v-card-text",{staticClass:"header"},[t._v("CLIENT")])],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/story"}},[i("v-card-text",{staticClass:"header"},[t._v("STORY")])],1)],1),i("v-flex",{staticClass:"nav-major-item"},[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/team"}},[i("v-card-text",{staticClass:"header"},[t._v("ABOUT & CONTACT")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=i("2ef0"),u=i.n(c),d=(i("6b54"),function(t){if(!t)return"[]";var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText}),h={httpGetSync:d},p=JSON.parse(h.httpGetSync("https://raw.githubusercontent.com/duowebmaster/duowebresources/master/hongguozhuo.json").toString()),v=JSON.parse(h.httpGetSync("").toString()),f=JSON.parse(h.httpGetSync("").toString()),m={baseurl:"/duoweb",font:"Arial",logo:{src:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/5d0BRT2.png",style:{height:"64px",width:"100px"}},slides:[{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/_DSC3849.jpg",title:"珠江新城"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/_DSC4896.jpg",title:"九分"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/1_1.jpg",title:"梅州古建筑"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/20181028-DSC02628-Edit-3.jpg",title:"广州大剧院"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/DSC00607.jpg",title:"台北天际线"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/DSCF3713.jpg",title:"亚洲协会"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/DSCF3891.jpg",title:"歌剧院"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/DSCF3925.jpg",title:"营造"},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/ORG_DSC04741.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/ORG_DSC04742.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/ORG_DSC04743.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/ORG_DSC04748.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E5%B9%BF%E5%B7%9E%E5%A4%A7%E5%89%A7%E9%99%A2.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E6%A2%85%E5%B7%9E%E5%8F%A4%E5%BB%BA%E7%AD%91.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E6%AD%8C%E5%89%A7%E9%99%A2%20%285%29.jpg?x-oss-process=style/large",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E7%8F%A0%E6%B1%9F%E6%96%B0%E5%9F%8E.jpg",title:""},{src:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E8%90%A5%E9%80%A0.jpg",title:""}],profile:{content:{src:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/profile.txt",style:{"margin-left":"10%","margin-right":"10%"}},clients:{src:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/5d0BRT2.png",style:{width:"50%",height:"50%"}}},story:[{images:["https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E6%A2%85%E5%B7%9E%E5%8F%A4%E5%BB%BA%E7%AD%91.jpg?x-oss-process=style/large"],title:"毕业特刊 | “轻度跨界”——建筑学徒的摄影之路",description:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/profile.txt",url:"/story/article/#1"},{images:["https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9Cube%20House/4BFFBB52-AAD2-48F7-AD90-27088FA8AC9E.jpg?x-oss-process=style/large"],title:"在路上｜卓泓铎：BIG设计师的五大洲摄影之路",description:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/profile.txt",url:"/story/article/#2"},{images:["https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/%E5%8F%B0%E5%8C%97%E5%A4%A9%E9%99%85%E7%BA%BF%20%283%29.jpg?x-oss-process=style/large"],title:"专访 | 谢光源：现实世界的追光者",description:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/profile.txt",url:"/story/article/#3"},{images:["https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/index/ORG_DSC04748.jpg?x-oss-process=style/large"],title:"专访｜卓泓铎：未预料的远方与风景",description:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/profile.txt",url:"/story/article/#4"}],partner:[{name:"HONGGUO ZHUO",url:"#hongguozhuo",projects:p},{name:"GUAN YUAN",url:"#guanyuan",projects:v},{name:"SIMING WU",url:"#simingwu",projects:f}]},g=m,x={data:function(){return{scrolled:!1,isIndex:!0,config:g}},methods:{listendScrolled:function(t){scroll=window.scrollY,scroll>100?this.scrolled=!0:this.scrolled=!1},toPhotography:function(){this.$router.push({path:"photography"})},handleRouteChange:function(){"/"==this.$route.path?this.isIndex=!0:this.isIndex=!1}},mounted:function(){window.addEventListener("scroll",u.a.throttle(this.listendScrolled,100)),this.handleRouteChange()},watch:{$route:"handleRouteChange"}},b=x,y=(i("abc2"),i("2877")),w=i("6544"),_=i.n(w),C=i("99d9"),S=i("a523"),V=i("0e8f"),E=i("132d"),k=i("adda"),T=i("a722"),I=i("8860"),j=i("ba95"),A=i("5d23"),O=i("e449"),z=i("9910"),$=i("71d9"),H=Object(y["a"])(b,n,l,!1,null,"2812b492",null),M=H.exports;_()(H,{VCardText:C["a"],VContainer:S["a"],VFlex:V["a"],VIcon:E["a"],VImg:k["a"],VLayout:T["a"],VList:I["a"],VListTile:j["a"],VListTileTitle:A["a"],VMenu:O["a"],VSpacer:z["a"],VToolbar:$["a"]});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mobile-top-bar"},[i("v-navigation-drawer",{attrs:{temporary:"",fixed:"",transition:"slide-y-transition",height:"auto",width:t.width+"px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{flat:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-spacer"),i("v-toolbar-title",{staticClass:"mobile"},[i("b",[t._v("DUO ")]),t._v("建筑影像")]),i("v-spacer")],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[i("v-card-text",{staticClass:"header"},[t._v("HOME")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography"}},[i("v-list-tile-title",[t._v("PHOTOGRAPHY")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/motion"}},[i("v-list-tile-title",[t._v("MOTION")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/partner"}},[i("v-list-tile-title",[t._v("PARTNER")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/client"}},[i("v-list-tile-title",[t._v("CLIENT")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/story"}},[i("v-list-tile-title",[t._v("STORY")])],1)],1),i("v-list-tile",[i("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/team"}},[i("v-list-tile-title",[t._v("ABOUT & CONTACT")])],1)],1)],1),i("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{fixed:"",height:"30"}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-spacer"),i("v-toolbar-title",{staticClass:"mobile"},[i("b",[t._v("DUO ")]),t._v("建筑影像")]),i("v-spacer")],1)],1)},L=[],B={data:function(){return{scrolled:!1,drawer:null,isIndex:!0,height:0,width:0}},methods:{listendScrolled:function(t){scroll=window.scrollY,scroll>100?this.scrolled=!0:this.scrolled=!1},handleRouteChange:function(){"/"==this.$route.path?this.isIndex=!0:this.isIndex=!1}},mounted:function(){window.addEventListener("scroll",u.a.throttle(this.listendScrolled,100)),this.handleRouteChange(),this.width=window.innerWidth}},F=B,N=(i("d6e2"),i("f774")),R=i("706c"),G=i("2a7f"),P=Object(y["a"])(F,D,L,!1,null,null,null),W=P.exports;_()(P,{VCardText:C["a"],VListTile:j["a"],VListTileTitle:A["a"],VNavigationDrawer:N["a"],VSpacer:z["a"],VToolbar:$["a"],VToolbarSideIcon:R["a"],VToolbarTitle:G["a"]});var U={name:"App",components:{TopBar:M,MobileTopBar:W},data:function(){return{}}},Y=U,J=(i("034f"),i("7496")),q=Object(y["a"])(Y,r,o,!1,null,null,null),X=q.exports;_()(q,{VApp:J["a"]});var Z=i("8c4f"),K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"story-wrapper"},[i("v-container",{class:{"story-inner-wrapper":!t.isStory}},[t.displayList||t.isStory?t._e():i("v-btn",{attrs:{color:"gray",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.showMenu}},[i("v-icon",[t._v("menu")])],1),i("v-layout",{attrs:{row:"",wrap:""}},t._l(this.config.story,function(e,s){var a;return i("v-flex",t._b({key:s},"v-flex",(a={},a["xs12"]=t.isMobile&&t.isStory,a["xs6"]=!t.isMobile&&t.isStory,a["xs3"]=!t.isStory,a),!1),[i("div",{staticClass:"profile-wrapper"},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return i("v-card",{staticClass:"mx-auto",class:"elevation-"+(a?8:2),attrs:{height:t.cardHeight},on:{click:function(i){return t.toArticle(e.url)}}},[i("v-img",{attrs:{src:e.images[0],height:t.height}}),i("v-card-text",[i("p",{staticClass:"card-text-style"},[t._v(t._s(e.title))])])],1)}}],null,!0)})],1)])}),1)],1),t.displayList&&!t.isStory?i("div",{staticClass:"placeholder"}):t._e(),i("router-view",{staticClass:"ifram-wrapper"})],1)},Q=[],tt={data:function(){return{displayList:!0,isStory:!0,renderedText:"",isMobile:!1,config:g}},methods:{toArticle:function(t){this.$router.push(t)},onScroll:function(){"/story"!==this.$route&&"/story/"!==this.$route?window.innerWidth<1230?this.displayList=!1:window.document.documentElement.scrollTop>20?this.displayList=!1:window.document.documentElement.scrollTop<300&&(this.displayList=!0):this.displayList=!1},onResize:function(){window.innerWidth<1230?(this.displayList=!1,this.isMobile=!0):this.isMobile=!1},showMenu:function(){window.scrollTo(0,0)}},mounted:function(){"/story"==this.$route.path&&(this.isStory=!0),"/story/article/"!=this.$route.path&&"/story/article"!=this.$route.path||(this.isStory=!1),window.innerWidth<1230&&(this.isMobile=!0),document.querySelector("body").classList.add("story_body")},destroyed:function(){document.querySelector("body").classList.remove("story_body")},computed:{height:function(){return window.innerWidth<1230?200:this.isStory?400:200},cardHeight:function(){return this.isStory?null:280},mobileShow:function(){return!(window.innerWidth<1231&&-1!==this.$route.path.indexOf("/story/article"))}},watch:{$route:function(t,e){"/story/"!=t.path&&"/story"!=t.path||(this.isStory=!0),"/story/article/"==t.path&&(this.isStory=!1)}}},et=tt,it=(i("247b"),i("8336")),st=i("b0af"),at=i("ce87"),rt=i("269a"),ot=i.n(rt),nt=i("0d3d"),lt=i("acdd"),ct=Object(y["a"])(et,K,Q,!1,null,"8be0dd1c",null),ut=ct.exports;_()(ct,{VBtn:it["a"],VCard:st["a"],VCardText:C["a"],VContainer:S["a"],VFlex:V["a"],VHover:at["a"],VIcon:E["a"],VImg:k["a"],VLayout:T["a"]}),ot()(ct,{Resize:nt["a"],Scroll:lt["a"]});var dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.listenedScrolled,expression:"listenedScrolled"}],staticClass:"photography-wrapper"},[i("v-toolbar",{staticClass:"tab-fix",attrs:{fixed:""}},[i("v-tabs",{attrs:{centered:"","show-arrows":""},on:{change:t.changePhoto},model:{value:t.photo_item,callback:function(e){t.photo_item=e},expression:"photo_item"}},[i("v-tab",{attrs:{href:"#architecture"}},[t._v("Architecture")]),i("v-tab",{attrs:{href:"#urban"}},[t._v("Urban")]),i("v-tab",{attrs:{href:"#landscape"}},[t._v("Landscape")])],1)],1),i("MyWaterFall",{attrs:{items:t.displayedItems}})],1)},ht=[],pt=(i("a481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.mobile?t._e():i("v-dialog",{attrs:{width:800},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedItem?i("ImageViewDesktop",{attrs:{item:t.selectedItem}}):t._e()],1),t.mobile?i("v-dialog",{attrs:{width:"100%",height:"100%","content-class":"image_dialog",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedItem?i("ImageViewMobile",{attrs:{items:t.selectedItem.detail}}):t._e(),i("div",{staticClass:"button-wrapper"},[i("v-btn",{attrs:{flat:"",icon:"",dark:"",large:"",color:"black"},on:{click:function(e){t.dialog=!1}}},[i("v-icon",{attrs:{dark:""}},[t._v("close")])],1)],1)],1):t._e(),0!=t.displayedItems.length?i("Waterfall",{attrs:{gutterWidth:20,gutterHeight:20}},t._l(t.displayedItems,function(e,s){return i("WaterfallItem",{key:s,attrs:{width:360}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return i("v-card",{staticClass:"mx-auto",class:"elevation-"+(a?8:2),on:{click:function(i){return t.goToDetail(e)}}},[i("v-img",{attrs:{src:e.cover,contain:""}}),i("v-card-text",[i("p",{staticClass:"card-head mb-0"},[t._v(t._s(e.title))])])],1)}}],null,!0)})],1)}),1):t._e()],1)}),vt=[],ft=i("eae8"),mt=i("9029"),gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("v-layout",{attrs:{row:""}},[i("v-card",[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("div",{staticClass:"headline"},[t._v(t._s(t.item.title))]),i("span",{staticClass:"grey--text"},[t._v(t._s(t.item.description))])])]),t.item?i("Lingallery",{staticClass:"inner",attrs:{items:t.item.detail,width:800}}):t._e()],1)],1)],1)},xt=[],bt=i("039c"),yt=i.n(bt),wt={props:["item"],components:{Lingallery:yt.a}},_t=wt,Ct=(i("86e3"),i("12b2")),St=Object(y["a"])(_t,gt,xt,!1,null,null,null),Vt=St.exports;_()(St,{VCard:st["a"],VCardTitle:Ct["a"],VLayout:T["a"]});var Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-carousel",{ref:"imageShow",attrs:{height:"100%",interval:"60000000000000000000","hide-delimiters":"","active-class":"image-active"},on:{change:t.inputNewValue}},t._l(t.items,function(t,e){return i("v-carousel-item",{key:e,staticClass:"image-view-item",attrs:{"active-class":"image-active",src:t.src,contain:""}})}),1),i("v-card-text",{staticClass:"image-counter"},[t._v(t._s(t.currentIndex+1)+"/"+t._s(t.items.length))])],1)},kt=[],Tt={props:["items"],data:function(){return{dialog:!0,currentIndex:1}},methods:{inputNewValue:function(t){this.currentIndex=t},exit:function(){this.dialog=!1}}},It=Tt,jt=(i("adc9"),i("5e66")),At=i("3e35"),Ot=Object(y["a"])(It,Et,kt,!1,null,null,null),zt=Ot.exports;_()(Ot,{VCardText:C["a"],VCarousel:jt["a"],VCarouselItem:At["a"]});var $t={props:["items"],data:function(){return{selectedItem:void 0,dialog:!1}},components:{Waterfall:ft["Waterfall"],WaterfallItem:ft["WaterfallItem"],ImageViewDesktop:Vt,ImageViewMobile:zt},computed:{displayedItems:function(){return this.items},mobile:function(){return mt["isMobile"]}},loaded:function(){},methods:{goToDetail:function(t){this.selectedItem=t,this.selectedItem.transformed||(this.selectedItem.detail=t.detail.map(function(t){return{thumbnail:t,src:t}}),this.selectedItem.transformed=!0),this.dialog=!0}},watch:{dialog:function(t,e){!0===e&&(this.selectedItem=void 0)}}},Ht=$t,Mt=(i("beab"),i("169a")),Dt=Object(y["a"])(Ht,pt,vt,!1,null,null,null),Lt=Dt.exports;_()(Dt,{VBtn:it["a"],VCard:st["a"],VCardText:C["a"],VDialog:Mt["a"],VHover:at["a"],VIcon:E["a"],VImg:k["a"]});var Bt={components:{MyWaterFall:Lt},data:function(){return{photo_item:"tab-1",tabs:["architecture","urban","landscape"],items:[],displayedItems:[],config:g}},methods:{changePhoto:function(){this.$router.push("#".concat(this.photo_item)),window.scrollTo(0,0)},listenedScrolled:function(){}},mounted:function(){for(var t=0;t<g.partner.length;t++)this.items=this.items.concat(g.partner[t].projects);this.displayedItems=this.items,this.photo_item=this.$route.hash.replace("#","")},watch:{$route:function(t,e){this.photo_item=t.hash.replace("#","")}}},Ft=Bt,Nt=(i("24e7"),i("8de2"),i("71a3")),Rt=i("fe57"),Gt=Object(y["a"])(Ft,dt,ht,!1,null,"4802187a",null),Pt=Gt.exports;_()(Gt,{VTab:Nt["a"],VTabs:Rt["a"],VToolbar:$["a"]}),ot()(Gt,{Scroll:lt["a"]});var Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.listenedScrolled,expression:"listenedScrolled"}]},[i("carousal"),i("div",{staticClass:"holder-div",style:t.holderStyle}),i("v-content",[i("v-container",[i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",{attrs:{xs12:""}},[i("MyWaterFall",{attrs:{items:t.displayedItems}})],1)],1)],1)],1)],1)},Ut=[],Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-carousel",{staticClass:"fixed-carousel",attrs:{"hide-delimiters":""}},t._l(t.config.slides,function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src}})}),1)],1)},Jt=[],qt={data:function(){return{config:g}},methods:{goToDetail:function(){this.$router.push("detail")}},computed:{fullHeight:function(){return window.innerWidth>1025?window.innerHeight:500}}},Xt=qt,Zt=(i("b793"),Object(y["a"])(Xt,Yt,Jt,!1,null,"6ae9cffa",null)),Kt=Zt.exports;_()(Zt,{VCarousel:jt["a"],VCarouselItem:At["a"]});var Qt={components:{Carousal:Kt,MyWaterFall:Lt},data:function(){return{items:[],displayedItems:[]}},computed:{fullHeight:function(){return window.innerHeight},holderStyle:function(){return{height:this.fullHeight+"px"}}},mounted:function(){for(var t=0;t<g.partner.length;t++)this.items=this.items.concat(g.partner[t].projects);this.items=this.items.reverse();for(var e=Math.min(this.items.length,10),i=0;i<e;i++)this.displayedItems.push(this.items.pop())},methods:{listenedScrolled:function(){if(this.scrolled=window.scrollY,this.viewHeight=window.innerHeight,this.bodyHeight=document.body.clientHeight,this.scrolled+this.viewHeight>.9*this.bodyHeight)for(var t=Math.min(this.items.length,10),e=0;e<t;e++)this.displayedItems.push(this.items.pop())}}},te=Qt,ee=(i("0fc8"),i("549c")),ie=Object(y["a"])(te,Wt,Ut,!1,null,null,null),se=ie.exports;_()(ie,{VContainer:S["a"],VContent:ee["a"],VFlex:V["a"],VLayout:T["a"]}),ot()(ie,{Scroll:lt["a"]});var ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"team-wrapper"},[i("v-layout",t._b({attrs:{"justify-space-around":""}},"v-layout",{row:!t.isMobile,column:t.isMobile},!1),[i("v-flex",{attrs:{xs8:""}},[i("p",{staticClass:"sub_title"},[t._v("Who we are")]),i("p",{staticClass:"sub_content"},[t._v("\n       Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography\n      ")]),i("p",{staticClass:"sub_title"},[t._v("What different do we make")]),i("p",{staticClass:"sub_content"},[t._v("\n       Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography\n      ")])]),t.isMobile?t._e():i("v-flex",{staticClass:"sub_intro",attrs:{xs2:""}},[i("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/3/3_files/640",contain:""}}),i("div",{staticClass:"intro_line"}),i("p",{staticClass:"intro_p"},[t._v("GUANGYUAN XIE")]),i("p",{staticClass:"intro_p"},[t._v("城市设计师")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),i("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/4/4_files/640",contain:""}}),i("div",{staticClass:"intro_line"}),i("p",{staticClass:"intro_p"},[t._v("HONGGUO ZHUO")]),i("p",{staticClass:"intro_p"},[t._v("景观设计师")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")])],1)],1),t.isMobile?i("v-layout",{staticClass:"mobile-profile",attrs:{column:""}},[i("v-flex",{staticClass:"sub_intro",attrs:{xs12:""}},[t.isMobile?i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",{attrs:{xs4:""}},[i("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/3/3_files/640",contain:""}})],1),i("v-flex",{attrs:{xs6:""}},[i("div",{staticClass:"intro_line"}),i("p",{staticClass:"intro_p"},[t._v("GUANGYUAN XIE")]),i("p",{staticClass:"intro_p"},[t._v("城市设计师")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")])])],1):t._e()],1),i("v-flex",{staticClass:"sub_intro",attrs:{xs12:""}},[t.isMobile?i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",{attrs:{xs4:""}},[i("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/4/4_files/640",contain:""}})],1),i("v-flex",{attrs:{xs6:""}},[i("div",{staticClass:"intro_line"}),i("p",{staticClass:"intro_p"},[t._v("HONGGUO ZHUO")]),i("p",{staticClass:"intro_p"},[t._v("景观设计师")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),i("p",{staticClass:"intro_p"},[t._v("xxxxxx")])])],1):t._e()],1)],1):t._e(),i("div",{staticClass:"copyright"},[t._v(" ©2019 DUO All Rights Reserved ")])],1)},re=[],oe={data:function(){return{isMobile:!1}},mounted:function(){window.innerWidth<1230&&(this.isMobile=!0)}},ne=oe,le=(i("9e6c"),Object(y["a"])(ne,ae,re,!1,null,"afc66428",null)),ce=le.exports;_()(le,{VContainer:S["a"],VFlex:V["a"],VImg:k["a"],VLayout:T["a"]});var ue=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"photography-wrapper"},[i("v-toolbar",{staticClass:"tab-fix",attrs:{fixed:""}},[i("v-tabs",{attrs:{centered:"","show-arrows":""},on:{change:t.switchTab},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.config.partner,function(e,s){return i("v-tab",{key:s,attrs:{href:e.url}},[t._v(t._s(e.name))])}),1)],1),i("MyWaterFall",{attrs:{items:t.displayedItems}})],1)},de=[],he={components:{MyWaterFall:Lt},data:function(){return{tab:"tab-1",displayedItems:[],config:g,partner:void 0}},methods:{switchTab:function(){this.$router.push("#".concat(this.tab))},getPartner:function(){for(var t=0;t<this.config.partner.length;t++)if(this.config.partner[t].url==this.$route.hash)return this.config.partner[t]},load:function(){this.partner=this.getPartner(),this.displayedItems=this.partner.projects,this.tab=this.$route.hash.replace("#","")}},mounted:function(){""==this.$route.hash&&(location.href+="#hongguozhuo"),this.load()},watch:{$route:function(){this.load()}}},pe=he,ve=(i("3ed2"),Object(y["a"])(pe,ue,de,!1,null,"7306152c",null)),fe=ve.exports;_()(ve,{VTab:Nt["a"],VTabs:Rt["a"],VToolbar:$["a"]});var me=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"motion-wrapper"},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(9,function(e){return i("v-flex",{key:e},[i("div",{staticClass:"video-wrapper"},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return i("v-card",{staticClass:"mx-auto",class:"elevation-"+(s?8:2),on:{click:t.goToVideo}},[i("v-img",{attrs:{src:"http://archexist.lianxiangmu.com/For8Hq2JJoh4agXntOV6xPKFQU5Y",height:"200",width:"300px",contain:""}},[i("v-expand-transition",[s?i("div",{staticClass:"d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[i("v-icon",[t._v("play_circle_outline")])],1):t._e()])],1),i("v-card-text",[i("p",{staticClass:"card-text-style"},[t._v("Kangaroo Valley Safari")])])],1)}}],null,!0)})],1)])}),1),i("v-dialog",{attrs:{persistent:"","max-width":"960px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("v-btn",{staticClass:"close-button",attrs:{flat:"",dark:"",fab:"",color:"pink"},on:{click:t.closeVideo}},[i("v-icon",[t._v("add")])],1),i("video",{ref:"video",attrs:{controls:"",width:"960px",name:"media"}},[i("source",{attrs:{src:"http://archexist.lianxiangmu.com/luHVR_A94s0IsPO3fF1fWWFGcG1z",type:"video/mp4"}})])],1)],1)},ge=[],xe={data:function(){return{showDialog:!1}},methods:{goToVideo:function(){this.showDialog=!0},closeVideo:function(){this.$refs.video.pause(),this.showDialog=!1}}},be=xe,ye=(i("7143"),i("0789")),we=Object(y["a"])(be,me,ge,!1,null,"af5bc960",null),_e=we.exports;_()(we,{VBtn:it["a"],VCard:st["a"],VCardText:C["a"],VContainer:S["a"],VDialog:Mt["a"],VExpandTransition:ye["a"],VFlex:V["a"],VHover:at["a"],VIcon:E["a"],VImg:k["a"],VLayout:T["a"]});var Ce=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"view-wrapper"},[i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("v-flex",{staticClass:"header-flex",attrs:{xs12:""}},[i("p",{staticClass:"client-header"},[t._v("PROFILE")])]),i("v-container",[i("v-layout",{attrs:{row:"","justify-space-between":"",wrap:"","fill-height":""}},[i("v-flex",{attrs:{xs12:""}},[i("p",{staticClass:"intro",style:this.config.profile.content.style},[t._v(t._s(this.content))])])],1)],1),i("v-flex",{staticClass:"header-flex",attrs:{xs12:""}},[i("p",{staticClass:"client-header"},[t._v("CLIENTS")])]),i("v-container",{staticStyle:{"text-align":"center"}},[i("v-layout",{attrs:{row:"",justify:"center"}},[i("v-img",{style:this.config.profile.clients.style,attrs:{src:this.config.profile.clients.src}})],1)],1)],1)],1)],1)},Se=[],Ve=i("bc3a"),Ee=i.n(Ve),ke={data:function(){return{isMobile:!0,config:g}},asyncComputed:{content:{get:function(){return Ee.a.get(g.profile.content.src).then(function(t){return t.status>=200&&t.status<300?t.data:"Network Error"}).catch(function(t){return t})},default:""}}},Te=ke,Ie=(i("a705"),Object(y["a"])(Te,Ce,Se,!1,null,"21118155",null)),je=Ie.exports;_()(Ie,{VContainer:S["a"],VFlex:V["a"],VImg:k["a"],VLayout:T["a"]});var Ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-wrapper"},[i("iframe",{attrs:{src:t.url}})])},Oe=[],ze={data:function(){return{text:"",url:"",renderedText:""}},mounted:function(){this.url="http://article.duo-visual.com/".concat(this.$route.hash.replace("#",""),"/").concat(this.$route.hash.replace("#",""),".html"),window.innerWidth>1230&&window.scrollTo(0,300)},watch:{$route:function(t,e){-1!=t.path.indexOf("/story/article")&&(this.url="http://article.duo-visual.com/".concat(this.$route.hash.replace("#",""),"/").concat(this.$route.hash.replace("#",""),".html"))}}},$e=ze,He=(i("7703"),Object(y["a"])($e,Ae,Oe,!1,null,null,null)),Me=He.exports,De=i("b1fa"),Le=i.n(De),Be=(i("d601"),i("3003"));s["default"].use(Le.a),s["default"].config.productionTip=!1,s["default"].use(Z["a"]),s["default"].use(Be["a"]);var Fe=[{path:g.baseurl+"/",component:se},{path:g.baseurl+"/photography",component:Pt,children:[{path:"detail",component:void 0}]},{path:g.baseurl+"/story",component:ut,children:[{path:"article",component:Me}]},{path:g.baseurl+"/team",component:ce},{path:g.baseurl+"/partner",component:fe},{path:g.baseurl+"/detail",component:Pt},{path:g.baseurl+"/motion",component:_e},{path:g.baseurl+"/client",component:je}],Ne=new Z["a"]({mode:"history",routes:Fe});new s["default"]({render:function(t){return t(X)},router:Ne}).$mount("#app")},"5f1a":function(t,e,i){},"68b8":function(t,e,i){},7143:function(t,e,i){"use strict";var s=i("1a9d"),a=i.n(s);a.a},7703:function(t,e,i){"use strict";var s=i("1899"),a=i.n(s);a.a},"86e3":function(t,e,i){"use strict";var s=i("f7c4"),a=i.n(s);a.a},"8cfc":function(t,e,i){},"8de2":function(t,e,i){"use strict";var s=i("5510"),a=i.n(s);a.a},"9e6c":function(t,e,i){"use strict";var s=i("0b65"),a=i.n(s);a.a},a705:function(t,e,i){"use strict";var s=i("0cdf"),a=i.n(s);a.a},a9a1:function(t,e,i){},abc2:function(t,e,i){"use strict";var s=i("24b2"),a=i.n(s);a.a},adc9:function(t,e,i){"use strict";var s=i("4b5f"),a=i.n(s);a.a},b793:function(t,e,i){"use strict";var s=i("ff02"),a=i.n(s);a.a},b8d9:function(t,e,i){},beab:function(t,e,i){"use strict";var s=i("31cb"),a=i.n(s);a.a},d6e2:function(t,e,i){"use strict";var s=i("68b8"),a=i.n(s);a.a},f7c4:function(t,e,i){},ff02:function(t,e,i){}});
//# sourceMappingURL=app.20a58db3.js.map