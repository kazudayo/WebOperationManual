(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{263:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("36b005b6",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("28ab6045",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4e6a7360",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);var r=n(446),o=n(445),c=n(199),l=n(167),f=n(197),d=n(131),m=n(33),h=n(443),v=n(441),y=n(286),w=(n(9),n(52),n(58),n(45),n(42),n(28),n(3),n(24),n(41),n(39),n(43),n(23));n(73);function _(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var k={name:"HomeHeader",data:function(){return{image_src:n(415),drawer:null,md:[],items:[]}},fetch:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json").where({extension:".json"}).fetch();case 2:n=e.sent,r=_(n);try{for(r.s();!(o=r.n()).done;)c=o.value,t.items.push({icon:"mdi-music-note",title:c.model,to:"/model"})}catch(t){r.e(t)}finally{r.f()}case 5:case"end":return e.stop()}}),e)})))()},methods:{selectDrawer:function(t){"/model"===t.to?this.$router.push("".concat(t.title)):this.$router.push("".concat(t.to))}}},j=(n(416),n(62)),component=Object(j.a)(k,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"header",attrs:{"clipped-left":"",color:"white",flat:"",app:""}},[e("router-link",{attrs:{to:"/"}},[e(l.a,{staticClass:"mx-2",attrs:{src:t.image_src,"max-height":"120","max-width":"120",contain:""}})],1),t._v(" "),e("div",{staticClass:"pt-3 pl-3"},[t._v(t._s(t.$route.params.model))]),t._v(" "),e(v.a),t._v(" "),e(y.a,[e(o.a,{attrs:{text:"",to:"/"}},[t._v("home")]),t._v(" "),e(h.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e(o.a,t._g({attrs:{text:""}},r),[t._v("デジタルピアノ"),e(c.a,[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),e(f.a,t._l(t.items,(function(n,i){return e(d.a,{key:i,attrs:{router:"",exact:""},on:{click:function(e){return e.stopPropagation(),t.selectDrawer(n)}}},[e(m.a,[e(m.b,[t._v(t._s(n.title))])],1)],1)})),1)],1)],1)],1)}),[],!1,null,"bb97b384",null);e.default=component.exports},289:function(t,e,n){"use strict";var r=n(439),o=n(447),c=n(197),l=n(131),f=n(33),d=n(440),m=n(444),h=(n(9),n(52),n(58),n(45),n(42),n(28),n(3),n(24),n(41),n(39),n(43),n(23));n(73);function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var w={data:function(){return{md:[],items:[]}},fetch:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",{deep:!0}).where({model:"CA901",extension:".md"}).fetch();case 2:return n=e.sent,t.md=n,t.$store.dispatch("setMd",t.md),e.next=7,t.$content("json").where({extension:".json"}).fetch();case 7:r=e.sent,o=v(r);try{for(o.s();!(c=o.n()).done;)l=c.value,t.items.push({icon:"mdi-music-note",title:l.model,to:"/model"})}catch(t){o.e(t)}finally{o.f()}case 10:case"end":return e.stop()}}),e)})))()},methods:{selectDrawer:function(t){"/model"===t.to?this.$router.push("".concat(t.title)):this.$router.push("".concat(t.to))}}},_=n(62),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,[e("MainHeader"),t._v(" "),e(m.a,{attrs:{clipped:"",app:""}},[e(c.a,t._l(t.items,(function(n,i){return e(l.a,{key:i,attrs:{router:"",exact:""},on:{click:function(e){return e.stopPropagation(),t.selectDrawer(n)}}},[e(f.a,[e(f.b,[t._v(t._s(n.title))])],1)],1)})),1)],1),t._v(" "),e(d.a,[e(o.a,[e("Nuxt")],1)],1),t._v(" "),e("MainFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MainHeader:n(282).default,MainFooter:n(429).default})},290:function(t,e,n){"use strict";var r=n(439),o=n(447),c=n(197),l=n(200),f=n(131),d=n(33),m=n(440),h=n(444),v=(n(9),n(52),n(58),n(45),n(42),n(28),n(24),n(41),n(39),n(43),n(23));n(73),n(88),n(3);function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _={name:"PageLayouts",data:function(){return{modelName:"",sectionName:"",lists:[],list:""}},fetch:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json").where({extension:".json"}).fetch();case 2:n=e.sent,r=y(n);try{for(r.s();!(o=r.n()).done;)c=o.value,t.lists.push(c)}catch(t){r.e(t)}finally{r.f()}t.modelName=t.$route.params.model,l=t.lists.find((function(data){return data.model===t.modelName})),t.list=l[t.modelName];case 8:case"end":return e.stop()}}),e)})))()},methods:{selectItem:function(section){this.sectionName=section.markdown,this.$nuxt.$emit("updateSectionName",this.sectionName)}}},x=n(62),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,[e("MainHeader"),t._v(" "),e(h.a,{attrs:{clipped:"",app:""}},[e(c.a,{attrs:{nav:"",dense:""}},t._l(t.list,(function(n,i){return e(l.a,{key:i,scopedSlots:t._u([{key:"activator",fn:function(){return[e(d.a,[e(d.b,[t._v(t._s(n.text))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(n.content,(function(section,n){return e(f.a,{key:n},[e(d.a,[e(d.b,{staticClass:"pl-3",on:{click:function(e){return t.selectItem(section)}}},[t._v(t._s(section.text))])],1)],1)}))],2)})),1)],1),t._v(" "),e(m.a,[e(o.a,[e("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MainHeader:n(282).default})},294:function(t,e,n){n(295),t.exports=n(296)},358:function(t,e,n){"use strict";n(263)},359:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),r.locals={},t.exports=r},362:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5135230c",content,!0,{sourceMap:!1})},363:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'body,html{border:none;margin:0;padding:0;-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:auto;font-family:"Baskerville","Times New Roman","klee",sans-serif;width:100%}body,html{height:100%;overscroll-behavior:none;position:relative}body{-webkit-touch-callout:none;-moz-user-select:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;background-color:var(--CA-black3);overflow-x:hidden}::-webkit-scrollbar{color:transparent;display:none;width:0}.main{display:flex}.title{font-weight:lighter;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.user--img{height:100%;-o-object-fit:contain;object-fit:contain;position:absolute;right:0;width:100%}.text-style{white-space:pre-line}',""]),r.locals={},t.exports=r},415:function(t,e,n){t.exports=n.p+"img/kawailogo_red.f1a337b.svg"},416:function(t,e,n){"use strict";n(270)},417:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".header[data-v-bb97b384]{border-bottom:2px solid #e11922!important}",""]),r.locals={},t.exports=r},420:function(t,e,n){"use strict";n(271)},421:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".footer[data-v-47c6bcd3]{font-size:12px;padding:7px}",""]),r.locals={},t.exports=r},422:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c}));var r=function(){return{md:null}},o={setMd:function(t,e){t.md=e}},c={setMd:function(t,e){(0,t.commit)("setMd",e)}}},429:function(t,e,n){"use strict";n.r(e);var r=n(442),o=n(441),c={name:"HomeFooter"},l=(n(420),n(62)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"footer",attrs:{dark:"",fixed:"",color:"#323232",app:""}},[e("a",{staticClass:"white--text text-decoration-none",attrs:{href:"https://www.kawai.co.jp/privacy/"}},[t._v(" 個人情報保護方針について ")]),t._v(" "),e(o.a),t._v(" "),e("strong",{staticClass:"text-right"},[t._v("© Kawai Musical Instruments Mfg. Co., Ltd. All Rights Reserved.")])],1)}),[],!1,null,"47c6bcd3",null);e.default=component.exports},86:function(t,e,n){"use strict";var r=n(439),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(358),n(62)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[294,7,1,8]]]);