(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)n=o[d],s[n]&&h.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/duoweb/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("1356"),s=a.n(i);s.a},"03cd":function(t,e,a){"use strict";var i=a("271a"),s=a.n(i);s.a},"0b65":function(t,e,a){},"0fc8":function(t,e,a){"use strict";var i=a("a9a1"),s=a.n(i);s.a},1356:function(t,e,a){},1899:function(t,e,a){},"1a9d":function(t,e,a){},"247b":function(t,e,a){"use strict";var i=a("b8d9"),s=a.n(i);s.a},"271a":function(t,e,a){},"31cb":function(t,e,a){},3818:function(t,e,a){"use strict";var i=a("fe86"),s=a.n(i);s.a},"44fa":function(t,e,a){"use strict";var i=a("77eb"),s=a.n(i);s.a},"4b5f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("ac6a"),a("456d"),a("6b54"),a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=a("bb71");a("da64"),a("d1e7");i["default"].use(s["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("top-bar"),a("mobile-top-bar"),a("transition",{attrs:{name:"fade"}},[a("router-view",{staticClass:"view-wrapper"})],1),a("transition",{attrs:{name:"fade"}},[a("router-view",{staticClass:"image-view",attrs:{name:"imageView"}})],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-bar"},[a("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{fixed:""}},[a("v-container",{staticClass:"main-nav nav",attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[a("v-card-text",t._g({staticClass:"header"},t.on),[t._v("DUO 建筑影像工作室")])],1)],1),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-flex",{attrs:{width:"500px"}},[a("v-container",{staticClass:"nav",attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{staticClass:"nav-major-item"},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[a("v-card-text",{staticClass:"header"},[t._v("HOME")])],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-card-text",t._g({staticClass:"header"},i),[t._v("\n                      PHOTOGRAPHY\n                      "),a("v-icon",{attrs:{color:"black"}},[t._v("keyboard_arrow_down")])],1)]}}])},[a("v-list",{staticClass:"down-menu",class:{"before-scrolled":!t.scrolled&&t.isIndex}},t._l(t.config.photography,function(e,i){return a("v-list-tile",{key:i},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography/"+e.url}},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)}),1)],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/motion"}},[a("v-card-text",{staticClass:"header"},[t._v("MOTION")])],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-card-text",t._g({staticClass:"header"},i),[t._v("\n                      PARTNER\n                      "),a("v-icon",{attrs:{color:"black"}},[t._v("keyboard_arrow_down")])],1)]}}])},[a("v-list",{staticClass:"down-menu",class:{"before-scrolled":!t.scrolled&&t.isIndex}},t._l(this.config.partner,function(e,i){return a("v-list-tile",{key:i},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/partner/"+e.url}},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)}),1)],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/client"}},[a("v-card-text",{staticClass:"header"},[t._v("CLIENT")])],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/story"}},[a("v-card-text",{staticClass:"header"},[t._v("STORY")])],1)],1),a("v-flex",{staticClass:"nav-major-item"},[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/team"}},[a("v-card-text",{staticClass:"header"},[t._v("ABOUT & CONTACT")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=a("2ef0"),u=a.n(c),d={config_url:"https://raw.githubusercontent.com/duowebmaster/duowebresources/master/config.json",baseurl:"/duoweb/"},h=d,p={data:function(){return{scrolled:!1,isIndex:!0,config:h}},methods:{listendScrolled:function(t){var e=window.scrollY;this.scrolled=e>100},toPhotography:function(){this.$router.push({path:"/photography"})},handleRouteChange:function(){"/"==this.$route.path?this.isIndex=!0:this.isIndex=!1}},mounted:function(){window.addEventListener("scroll",u.a.throttle(this.listendScrolled,100)),this.handleRouteChange()},watch:{$route:"handleRouteChange"}},f=p,v=(a("44fa"),a("2877")),m=a("6544"),g=a.n(m),x=a("99d9"),b=a("a523"),y=a("0e8f"),w=a("132d"),_=a("a722"),C=a("8860"),V=a("ba95"),S=a("5d23"),k=a("e449"),T=a("9910"),I=a("71d9"),O=Object(v["a"])(f,o,l,!1,null,"23e50cad",null),$=O.exports;g()(O,{VCardText:x["a"],VContainer:b["a"],VFlex:y["a"],VIcon:w["a"],VLayout:_["a"],VList:C["a"],VListTile:V["a"],VListTileTitle:S["a"],VMenu:k["a"],VSpacer:T["a"],VToolbar:I["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile-top-bar"},[a("v-navigation-drawer",{attrs:{temporary:"",fixed:"",transition:"slide-y-transition",height:"auto",width:t.width+"px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{flat:"",height:"30"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-title",{staticClass:"mobile"},[a("b",[t._v("DUO")]),t._v("建筑影像\n      ")]),a("v-spacer")],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/"}},[a("v-card-text",{staticClass:"header"},[t._v("HOME")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/photography"}},[a("v-list-tile-title",[t._v("PHOTOGRAPHY")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/motion"}},[a("v-list-tile-title",[t._v("MOTION")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/partner"}},[a("v-list-tile-title",[t._v("PARTNER")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/client"}},[a("v-list-tile-title",[t._v("CLIENT")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/story"}},[a("v-list-tile-title",[t._v("STORY")])],1)],1),a("v-list-tile",[a("router-link",{staticStyle:{"z-index":"1000"},attrs:{to:"/team"}},[a("v-list-tile-title",[t._v("ABOUT & CONTACT")])],1)],1)],1),a("v-toolbar",{class:{"before-scrolled":!t.scrolled&&t.isIndex},attrs:{fixed:"",height:"30"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-title",{staticClass:"mobile"},[a("b",[t._v("DUO")]),t._v("建筑影像\n    ")]),a("v-spacer")],1)],1)},E=[],M={data:function(){return{scrolled:!1,drawer:null,isIndex:!0,height:0,width:0,config:h}},methods:{listendScrolled:function(t){var e=window.scrollY;this.scrolled=e>100},handleRouteChange:function(){"/"==this.$route.path?this.isIndex=!0:this.isIndex=!1}},mounted:function(){window.addEventListener("scroll",u.a.throttle(this.listendScrolled,100)),this.handleRouteChange(),this.width=window.innerWidth}},N=M,H=(a("d6e2"),a("f774")),L=a("706c"),A=a("2a7f"),W=Object(v["a"])(N,j,E,!1,null,null,null),z=W.exports;g()(W,{VCardText:x["a"],VListTile:V["a"],VListTileTitle:S["a"],VNavigationDrawer:H["a"],VSpacer:T["a"],VToolbar:I["a"],VToolbarSideIcon:L["a"],VToolbarTitle:A["a"]});var D={name:"App",components:{TopBar:$,MobileTopBar:z},data:function(){return{}}},P=D,R=(a("034f"),a("7496")),F=Object(v["a"])(P,r,n,!1,null,null,null),G=F.exports;g()(F,{VApp:R["a"]});var U=a("8c4f"),Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"story-wrapper"},[a("v-container",{class:{"story-inner-wrapper":!t.isStory}},[t.displayList||t.isStory?t._e():a("v-btn",{attrs:{color:"gray",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.showMenu}},[a("v-icon",[t._v("menu")])],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(this.config.story,function(e,i){var s;return a("v-flex",t._b({key:i},"v-flex",(s={},s["xs12"]=t.isMobile&&t.isStory,s["xs6"]=!t.isMobile&&t.isStory,s["xs3"]=!t.isStory,s),!1),[a("div",{staticClass:"profile-wrapper"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var s=i.hover;return a("v-card",{staticClass:"mx-auto",class:"elevation-"+(s?8:2),attrs:{height:t.cardHeight},on:{click:function(a){return t.toArticle(e.url)}}},[a("v-img",{attrs:{src:e.images[0],height:t.height}}),a("v-card-text",[a("p",{staticClass:"card-text-style"},[t._v(t._s(e.title))])])],1)}}],null,!0)})],1)])}),1)],1),t.displayList&&!t.isStory?a("div",{staticClass:"placeholder"}):t._e(),a("router-view",{staticClass:"ifram-wrapper"})],1)},B=[],J={data:function(){return{displayList:!0,isStory:!0,renderedText:"",isMobile:!1,config:h}},methods:{toArticle:function(t){this.$router.push(t)},onScroll:function(){"/story"!==this.$route&&"/story/"!==this.$route?window.innerWidth<1230?this.displayList=!1:window.document.documentElement.scrollTop>20?this.displayList=!1:window.document.documentElement.scrollTop<300&&(this.displayList=!0):this.displayList=!1},onResize:function(){window.innerWidth<1230?(this.displayList=!1,this.isMobile=!0):this.isMobile=!1},showMenu:function(){window.scrollTo(0,0)}},mounted:function(){"/story"==this.$route.path&&(this.isStory=!0),"/story/article/"!=this.$route.path&&"/story/article"!=this.$route.path||(this.isStory=!1),window.innerWidth<1230&&(this.isMobile=!0),document.querySelector("body").classList.add("story_body")},destroyed:function(){document.querySelector("body").classList.remove("story_body")},computed:{height:function(){return window.innerWidth<1230?200:this.isStory?400:200},cardHeight:function(){return this.isStory?null:280},mobileShow:function(){return!(window.innerWidth<1231&&-1!==this.$route.path.indexOf("/story/article"))}},watch:{$route:function(t,e){"/story/"!=t.path&&"/story"!=t.path||(this.isStory=!0),"/story/article/"==t.path&&(this.isStory=!1)}}},q=J,X=(a("247b"),a("8336")),K=a("b0af"),Z=a("ce87"),Q=a("adda"),tt=a("269a"),et=a.n(tt),at=a("0d3d"),it=a("acdd"),st=Object(v["a"])(q,Y,B,!1,null,"8be0dd1c",null),rt=st.exports;g()(st,{VBtn:X["a"],VCard:K["a"],VCardText:x["a"],VContainer:b["a"],VFlex:y["a"],VHover:Z["a"],VIcon:w["a"],VImg:Q["a"],VLayout:_["a"]}),et()(st,{Resize:at["a"],Scroll:it["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photography-wrapper"},[a("v-toolbar",{staticClass:"tab-fix",attrs:{fixed:""}},[a("v-tabs",{attrs:{centered:"","show-arrows":""},on:{change:t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},t._l(t.config.photography,function(e,i){return a("v-tab",{key:i,attrs:{href:e.url}},[t._v(t._s(e.name))])}),1)],1),a("MyWaterFall",{attrs:{items:t.displayedItems}})],1)},ot=[],lt=(a("a481"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"40px"}},[t.mobile?t._e():a("v-dialog",{attrs:{width:800},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedItem?a("ImageViewDesktop",{attrs:{item:t.selectedItem}}):t._e()],1),t.mobile?a("v-dialog",{attrs:{width:"100%",height:"100%","content-class":"image_dialog",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedItem?a("ImageViewMobile",{attrs:{items:t.selectedItem.detail}}):t._e(),a("div",{staticClass:"button-wrapper"},[a("v-btn",{attrs:{flat:"",icon:"",dark:"",large:"",color:"black"},on:{click:function(e){t.dialog=!1}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)],1)],1):t._e(),0!=t.displayedItems.length?a("Waterfall",{attrs:{gutterWidth:20,gutterHeight:20}},t._l(t.displayedItems,function(e,i){return a("WaterfallItem",{key:i,attrs:{width:300}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var s=i.hover;return a("v-card",{staticClass:"mx-auto",class:"elevation-"+(s?8:2),on:{click:function(a){return t.goToDetail(e)}}},[a("v-img",{attrs:{src:e.cover,contain:""}}),a("v-card-text",[a("p",{staticClass:"card-head mb-0"},[t._v(t._s(e.title))])])],1)}}],null,!0)})],1)}),1):t._e()],1)}),ct=[],ut=a("eae8"),dt=a("9029"),ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("v-layout",{attrs:{row:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.item.title))]),a("span",{staticClass:"grey--text"},[t._v(t._s(t.item.description))])])]),t.item?a("Lingallery",{staticClass:"inner",attrs:{items:t.item.detail,width:800}}):t._e()],1)],1)],1)},pt=[],ft=a("039c"),vt=a.n(ft),mt={props:["item"],components:{Lingallery:vt.a}},gt=mt,xt=(a("86e3"),a("12b2")),bt=Object(v["a"])(gt,ht,pt,!1,null,null,null),yt=bt.exports;g()(bt,{VCard:K["a"],VCardTitle:xt["a"],VLayout:_["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{ref:"imageShow",attrs:{height:"100%",interval:"60000000000000000000","hide-delimiters":"","active-class":"image-active"},on:{change:t.inputNewValue}},t._l(t.items,function(t,e){return a("v-carousel-item",{key:e,staticClass:"image-view-item",attrs:{"active-class":"image-active",src:t.src,contain:""}})}),1),a("v-card-text",{staticClass:"image-counter"},[t._v(t._s(t.currentIndex+1)+"/"+t._s(t.items.length))])],1)},_t=[],Ct={props:["items"],data:function(){return{dialog:!0,currentIndex:1}},methods:{inputNewValue:function(t){this.currentIndex=t},exit:function(){this.dialog=!1}}},Vt=Ct,St=(a("adc9"),a("5e66")),kt=a("3e35"),Tt=Object(v["a"])(Vt,wt,_t,!1,null,null,null),It=Tt.exports;g()(Tt,{VCardText:x["a"],VCarousel:St["a"],VCarouselItem:kt["a"]});var Ot={props:["items"],data:function(){return{selectedItem:void 0,dialog:!1}},components:{Waterfall:ut["Waterfall"],WaterfallItem:ut["WaterfallItem"],ImageViewDesktop:yt,ImageViewMobile:It},computed:{displayedItems:function(){return this.items},mobile:function(){return dt["isMobile"]}},loaded:function(){},methods:{goToDetail:function(t){this.selectedItem=t,this.selectedItem.transformed||(this.selectedItem.detail=t.detail.map(function(t){return{thumbnail:t,src:t}}),this.selectedItem.transformed=!0),this.dialog=!0}},watch:{dialog:function(t,e){!0===e&&(this.selectedItem=void 0)}}},$t=Ot,jt=(a("beab"),a("169a")),Et=Object(v["a"])($t,lt,ct,!1,null,null,null),Mt=Et.exports;g()(Et,{VBtn:X["a"],VCard:K["a"],VCardText:x["a"],VDialog:jt["a"],VHover:Z["a"],VIcon:w["a"],VImg:Q["a"]});var Nt={components:{MyWaterFall:Mt},data:function(){return{tabName:"",displayedItems:[],config:h,tab:void 0}},methods:{switchTab:function(){this.$router.push("#".concat(this.tabName))},getTab:function(){for(var t=0;t<this.config.photography.length;t++)if(this.config.photography[t].url==this.$route.hash)return this.config.photography[t]},load:function(){this.tab=this.getTab(),this.displayedItems=this.tab.projects,this.tabName=this.$route.hash.replace("#","")}},mounted:function(){""==this.$route.hash&&this.$router.push({hash:this.config.photography[0].url}),this.load()},watch:{$route:function(){""==this.$route.hash&&this.$router.push({hash:this.config.photography[0].url}),this.load()}}},Ht=Nt,Lt=(a("e3e7"),a("71a3")),At=a("fe57"),Wt=Object(v["a"])(Ht,nt,ot,!1,null,"44ba4b70",null),zt=Wt.exports;g()(Wt,{VTab:Lt["a"],VTabs:At["a"],VToolbar:I["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.listenedScrolled,expression:"listenedScrolled"}]},[a("img",{staticClass:"logo-img",attrs:{src:t.config.logo.src}}),a("carousal"),a("div",{staticClass:"holder-div",style:t.holderStyle}),a("v-content",[a("v-container",[a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs12:""}},[a("MyWaterFall",{attrs:{items:t.displayedItems}})],1)],1)],1)],1)],1)},Pt=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{staticClass:"fixed-carousel",attrs:{"hide-delimiters":""}},t._l(t.config.slides,function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src}})}),1)],1)},Ft=[],Gt={data:function(){return{config:h}},methods:{goToDetail:function(){this.$router.push("detail")}},computed:{fullHeight:function(){return window.innerWidth>1025?window.innerHeight:500}}},Ut=Gt,Yt=(a("03cd"),Object(v["a"])(Ut,Rt,Ft,!1,null,"65bc2f0e",null)),Bt=Yt.exports;g()(Yt,{VCarousel:St["a"],VCarouselItem:kt["a"]});var Jt={components:{Carousal:Bt,MyWaterFall:Mt},data:function(){return{items:[],displayedItems:[],config:h}},computed:{fullHeight:function(){return window.innerHeight},holderStyle:function(){return{height:this.fullHeight+"px"}}},mounted:function(){for(var t=0;t<h.partner.length;t++)this.items=this.items.concat(h.partner[t].projects);this.items=this.items.reverse();for(var e=Math.min(this.items.length,10),a=0;a<e;a++)this.displayedItems.push(this.items.pop())},methods:{listenedScrolled:function(){if(this.scrolled=window.scrollY,this.viewHeight=window.innerHeight,this.bodyHeight=document.body.clientHeight,this.scrolled+this.viewHeight>.9*this.bodyHeight)for(var t=Math.min(this.items.length,10),e=0;e<t;e++)this.displayedItems.push(this.items.pop())}}},qt=Jt,Xt=(a("0fc8"),a("549c")),Kt=Object(v["a"])(qt,Dt,Pt,!1,null,null,null),Zt=Kt.exports;g()(Kt,{VContainer:b["a"],VContent:Xt["a"],VFlex:y["a"],VLayout:_["a"]}),et()(Kt,{Scroll:it["a"]});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"team-wrapper"},[a("v-layout",t._b({attrs:{"justify-space-around":""}},"v-layout",{row:!t.isMobile,column:t.isMobile},!1),[a("v-flex",{attrs:{xs8:""}},[a("p",{staticClass:"sub_title"},[t._v("Who we are")]),a("p",{staticClass:"sub_content"},[t._v("\n       Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography\n      ")]),a("p",{staticClass:"sub_title"},[t._v("What different do we make")]),a("p",{staticClass:"sub_content"},[t._v("\n       Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography\n      ")])]),t.isMobile?t._e():a("v-flex",{staticClass:"sub_intro",attrs:{xs2:""}},[a("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/3/3_files/640",contain:""}}),a("div",{staticClass:"intro_line"}),a("p",{staticClass:"intro_p"},[t._v("GUANGYUAN XIE")]),a("p",{staticClass:"intro_p"},[t._v("城市设计师")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),a("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/4/4_files/640",contain:""}}),a("div",{staticClass:"intro_line"}),a("p",{staticClass:"intro_p"},[t._v("HONGGUO ZHUO")]),a("p",{staticClass:"intro_p"},[t._v("景观设计师")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")])],1)],1),t.isMobile?a("v-layout",{staticClass:"mobile-profile",attrs:{column:""}},[a("v-flex",{staticClass:"sub_intro",attrs:{xs12:""}},[t.isMobile?a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/3/3_files/640",contain:""}})],1),a("v-flex",{attrs:{xs6:""}},[a("div",{staticClass:"intro_line"}),a("p",{staticClass:"intro_p"},[t._v("GUANGYUAN XIE")]),a("p",{staticClass:"intro_p"},[t._v("城市设计师")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")])])],1):t._e()],1),a("v-flex",{staticClass:"sub_intro",attrs:{xs12:""}},[t.isMobile?a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-img",{staticClass:"intro_img",attrs:{src:"http://article.duo-visual.com/4/4_files/640",contain:""}})],1),a("v-flex",{attrs:{xs6:""}},[a("div",{staticClass:"intro_line"}),a("p",{staticClass:"intro_p"},[t._v("HONGGUO ZHUO")]),a("p",{staticClass:"intro_p"},[t._v("景观设计师")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")]),a("p",{staticClass:"intro_p"},[t._v("xxxxxx")])])],1):t._e()],1)],1):t._e(),a("div",{staticClass:"copyright"},[t._v(" ©2019 DUO All Rights Reserved ")])],1)},te=[],ee={data:function(){return{isMobile:!1}},mounted:function(){window.innerWidth<1230&&(this.isMobile=!0)}},ae=ee,ie=(a("9e6c"),Object(v["a"])(ae,Qt,te,!1,null,"afc66428",null)),se=ie.exports;g()(ie,{VContainer:b["a"],VFlex:y["a"],VImg:Q["a"],VLayout:_["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photography-wrapper"},[a("v-toolbar",{staticClass:"tab-fix",attrs:{fixed:""}},[a("v-tabs",{attrs:{centered:"","show-arrows":""},on:{change:t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},t._l(t.config.partner,function(e,i){return a("v-tab",{key:i,attrs:{href:e.url}},[t._v(t._s(e.name))])}),1)],1),a("MyWaterFall",{attrs:{items:t.displayedItems}})],1)},ne=[],oe={components:{MyWaterFall:Mt},data:function(){return{tabName:"",displayedItems:[],config:h,tab:void 0}},methods:{switchTab:function(){this.$router.push("#".concat(this.tabName))},getTab:function(){for(var t=0;t<this.config.partner.length;t++)if(this.config.partner[t].url==this.$route.hash)return this.config.partner[t]},load:function(){this.tab=this.getTab(),this.displayedItems=this.tab.projects,this.tabName=this.$route.hash.replace("#","")}},mounted:function(){""==this.$route.hash&&this.$router.push({hash:this.config.partner[0].url}),this.load()},watch:{$route:function(){""==this.$route.hash&&this.$router.push({hash:this.config.partner[0].url}),this.load()}}},le=oe,ce=(a("9717"),Object(v["a"])(le,re,ne,!1,null,"3af987b2",null)),ue=ce.exports;g()(ce,{VTab:Lt["a"],VTabs:At["a"],VToolbar:I["a"]});var de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"motion-wrapper"},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(9,function(e){return a("v-flex",{key:e},[a("div",{staticClass:"video-wrapper"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return a("v-card",{staticClass:"mx-auto",class:"elevation-"+(i?8:2),on:{click:t.goToVideo}},[a("v-img",{attrs:{src:"http://archexist.lianxiangmu.com/For8Hq2JJoh4agXntOV6xPKFQU5Y",height:"200",width:"300px",contain:""}},[a("v-expand-transition",[i?a("div",{staticClass:"d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[a("v-icon",[t._v("play_circle_outline")])],1):t._e()])],1),a("v-card-text",[a("p",{staticClass:"card-text-style"},[t._v("Kangaroo Valley Safari")])])],1)}}],null,!0)})],1)])}),1),a("v-dialog",{attrs:{persistent:"","max-width":"960px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-btn",{staticClass:"close-button",attrs:{flat:"",dark:"",fab:"",color:"pink"},on:{click:t.closeVideo}},[a("v-icon",[t._v("add")])],1),a("video",{ref:"video",attrs:{controls:"",width:"960px",name:"media"}},[a("source",{attrs:{src:"http://archexist.lianxiangmu.com/luHVR_A94s0IsPO3fF1fWWFGcG1z",type:"video/mp4"}})])],1)],1)},he=[],pe={data:function(){return{showDialog:!1}},methods:{goToVideo:function(){this.showDialog=!0},closeVideo:function(){this.$refs.video.pause(),this.showDialog=!1}}},fe=pe,ve=(a("7143"),a("0789")),me=Object(v["a"])(fe,de,he,!1,null,"af5bc960",null),ge=me.exports;g()(me,{VBtn:X["a"],VCard:K["a"],VCardText:x["a"],VContainer:b["a"],VDialog:jt["a"],VExpandTransition:ve["a"],VFlex:y["a"],VHover:Z["a"],VIcon:w["a"],VImg:Q["a"],VLayout:_["a"]});var xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"view-wrapper"},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-flex",{staticClass:"header-flex",attrs:{xs12:""}},[a("p",{staticClass:"client-header"},[t._v("PROFILE")])]),a("v-container",[a("v-layout",{attrs:{row:"","justify-space-between":"",wrap:"","fill-height":""}},[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"intro",style:this.config.profile.content.style},[t._v(t._s(this.content))])])],1)],1),a("v-flex",{staticClass:"header-flex",attrs:{xs12:""}},[a("p",{staticClass:"client-header"},[t._v("CLIENTS")])]),a("v-container",{staticStyle:{"text-align":"center"}},[a("v-layout",{attrs:{row:"",justify:"center"}},[a("v-img",{style:this.config.profile.clients.style,attrs:{src:this.config.profile.clients.src}})],1)],1)],1)],1)],1)},be=[],ye=a("bc3a"),we=a.n(ye),_e={data:function(){return{isMobile:!0,config:h}},asyncComputed:{content:{get:function(){return we.a.get(h.profile.content.src).then(function(t){return t.status>=200&&t.status<300?t.data:"Network Error"}).catch(function(t){return t})},default:""}}},Ce=_e,Ve=(a("3818"),Object(v["a"])(Ce,xe,be,!1,null,"25430822",null)),Se=Ve.exports;g()(Ve,{VContainer:b["a"],VFlex:y["a"],VImg:Q["a"],VLayout:_["a"]});var ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrapper"},[a("iframe",{attrs:{src:t.url}})])},Te=[],Ie={data:function(){return{text:"",url:"",renderedText:""}},mounted:function(){this.url="http://article.duo-visual.com/".concat(this.$route.hash.replace("#",""),"/").concat(this.$route.hash.replace("#",""),".html"),window.innerWidth>1230&&window.scrollTo(0,300)},watch:{$route:function(t,e){-1!=t.path.indexOf("/story/article")&&(this.url="http://article.duo-visual.com/".concat(this.$route.hash.replace("#",""),"/").concat(this.$route.hash.replace("#",""),".html"))}}},Oe=Ie,$e=(a("7703"),Object(v["a"])(Oe,ke,Te,!1,null,null,null)),je=$e.exports,Ee=a("b1fa"),Me=a.n(Ee),Ne=(a("d601"),a("3003")),He=function(t){if(!t)return"[]";var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},Le={httpGetSync:He},Ae=JSON.parse(Le.httpGetSync(h.config_url).toString());Object.keys(Ae).map(function(t){h[t]=Ae[t]});for(var We=0;We<h.photography.length;We++)h.photography[We].projects=JSON.parse(Le.httpGetSync(h.photography[We].projects).toString());for(var ze=0;ze<h.partner.length;ze++)h.partner[ze].projects=JSON.parse(Le.httpGetSync(h.partner[ze].projects).toString());i["default"].use(Me.a),i["default"].config.productionTip=!1,i["default"].use(U["a"]),i["default"].use(Ne["a"]);var De=[{path:"/",component:Zt},{path:"/photography",component:zt,children:[{path:"detail",component:void 0}]},{path:"/story",component:rt,children:[{path:"article",component:je}]},{path:"/team",component:se},{path:"/partner",component:ue},{path:"/detail",component:zt},{path:"/motion",component:ge},{path:"/client",component:Se}],Pe=new U["a"]({mode:"history",base:h.baseurl,routes:De});new i["default"]({render:function(t){return t(G)},router:Pe}).$mount("#app")},"68b8":function(t,e,a){},7143:function(t,e,a){"use strict";var i=a("1a9d"),s=a.n(i);s.a},7703:function(t,e,a){"use strict";var i=a("1899"),s=a.n(i);s.a},"77eb":function(t,e,a){},7852:function(t,e,a){},"86e3":function(t,e,a){"use strict";var i=a("f7c4"),s=a.n(i);s.a},9717:function(t,e,a){"use strict";var i=a("7852"),s=a.n(i);s.a},"9e6c":function(t,e,a){"use strict";var i=a("0b65"),s=a.n(i);s.a},a9a1:function(t,e,a){},ac1b:function(t,e,a){},adc9:function(t,e,a){"use strict";var i=a("4b5f"),s=a.n(i);s.a},b8d9:function(t,e,a){},beab:function(t,e,a){"use strict";var i=a("31cb"),s=a.n(i);s.a},d6e2:function(t,e,a){"use strict";var i=a("68b8"),s=a.n(i);s.a},e3e7:function(t,e,a){"use strict";var i=a("ac1b"),s=a.n(i);s.a},f7c4:function(t,e,a){},fe86:function(t,e,a){}});
//# sourceMappingURL=app.e817ce29.js.map