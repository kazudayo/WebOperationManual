(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{263:function(t,e,o){var content=o(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("36b005b6",content,!0,{sourceMap:!1})},270:function(t,e,o){var content=o(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("ef24e246",content,!0,{sourceMap:!1})},271:function(t,e,o){var content=o(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("4e6a7360",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";o.r(e);var n=o(451),r=o(450),l=o(199),m=o(167),c=o(197),d=o(131),f=o(33),h=o(448),v=o(446),_=o(286),x=(o(9),o(53),o(59),o(45),o(42),o(28),o(3),o(24),o(41),o(39),o(43),o(23));o(73);function w(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,m=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){m=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(m)throw r}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var y={name:"HomeHeader",data:function(){return{image_src:o(420),drawer:null,md:[],items:[]}},fetch:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var o,n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json",{deep:!0}).where({extension:".json"}).fetch();case 2:o=e.sent,n=w(o);try{for(n.s();!(r=n.n()).done;)l=r.value,t.items.push({icon:"mdi-music-note",title:l.model,to:"/model"})}catch(t){n.e(t)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})))()},methods:{selectDrawer:function(t){this.$nuxt.$emit("selectModel",t),localStorage.setItem("sectionTitle","はじめに"),"/model"===t.to?(localStorage.setItem("model",t.title),localStorage.removeItem("pageTitle"),this.$router.push("/".concat(t.title)+"/はじめに")):this.$router.push("".concat(t.to))}}},j=(o(421),o(50)),component=Object(j.a)(y,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"header",attrs:{"clipped-left":"",color:"white",flat:"",app:""}},[e("router-link",{attrs:{to:"/"}},[e(m.a,{staticClass:"mx-2",attrs:{src:t.image_src,"max-height":"120","max-width":"120",contain:""}})],1),t._v(" "),e("div",{staticClass:"pt-3 pl-3"},[t._v(t._s(t.$route.params.model))]),t._v(" "),e(v.a),t._v(" "),e(_.a,[e(r.a,{attrs:{text:"",to:"/"}},[t._v("home")]),t._v(" "),e(h.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e(r.a,t._g({attrs:{text:""}},n),[t._v("デジタルピアノ"),e(l.a,[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),e(c.a,t._l(t.items,(function(o,i){return e(d.a,{key:i,attrs:{router:"",exact:""},on:{click:function(e){return e.stopPropagation(),t.selectDrawer(o)}}},[e(f.a,[e(f.b,[t._v("\n      "+t._s(o.title)+"\n    ")])],1)],1)})),1)],1)],1)],1)}),[],!1,null,"db7e38f8",null);e.default=component.exports},289:function(t,e,o){"use strict";var n=o(444),r=o(452),l=o(197),m=o(131),c=o(33),d=o(445),f=o(449),h=(o(9),o(53),o(59),o(45),o(42),o(28),o(3),o(24),o(41),o(39),o(43),o(23));o(73);function v(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,m=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){m=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(m)throw r}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var x={data:function(){return{md:[],items:[]}},fetch:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var o,n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json",{deep:!0}).where({extension:".json"}).fetch();case 2:o=e.sent,n=v(o);try{for(n.s();!(r=n.n()).done;)l=r.value,t.items.push({title:l.model,to:"/model"})}catch(t){n.e(t)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){if(localStorage.getItem("visited")){var t=localStorage.getItem("model"),section=localStorage.getItem("sectionTitle");this.$router.push("".concat(t)+"/".concat(section)),localStorage.removeItem("visited")}},methods:{selectDrawer:function(t){localStorage.setItem("sectionTitle","はじめに"),"/model"===t.to?(localStorage.setItem("model",t.title),localStorage.removeItem("pageTitle"),this.$router.push("/".concat(t.title)+"/はじめに")):this.$router.push("".concat(t.to))}}},w=o(50),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e(n.a,[e("MainHeader"),t._v(" "),e(f.a,{attrs:{clipped:"",app:""}},[e(l.a,t._l(t.items,(function(o,i){return e(m.a,{key:i,attrs:{router:"",exact:""},on:{click:function(e){return e.stopPropagation(),t.selectDrawer(o)}}},[e(c.a,[e(c.b,[t._v(t._s(o.title))])],1)],1)})),1)],1),t._v(" "),e(d.a,[e(r.a,[e("Nuxt")],1)],1),t._v(" "),e("MainFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MainHeader:o(282).default,MainFooter:o(434).default})},290:function(t,e,o){"use strict";var n=o(444),r=o(452),l=o(197),m=o(200),c=o(131),d=o(33),f=o(445),h=o(449),v=(o(9),o(53),o(59),o(45),o(42),o(28),o(24),o(41),o(39),o(43),o(23));o(73),o(88),o(3);function _(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,m=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){m=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(m)throw r}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var w={name:"PageLayouts",data:function(){return{modelName:"",pageTitle:"",lists:[],list:""}},fetch:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json").where({extension:".json"}).fetch();case 2:o=e.sent,n=_(o);try{for(n.s();!(r=n.n()).done;)l=r.value,t.lists.push(l)}catch(t){n.e(t)}finally{n.f()}t.modelName=t.$route.params.model,m=t.lists.find((function(data){return data.model===t.modelName})),t.list=m[t.modelName];case 8:case"end":return e.stop()}}),e)})))()},created:function(){this.setListener()},methods:{selectItem:function(t){this.pageTitle=t.markdown,localStorage.setItem("sectionTitle","".concat(t.section)),this.$nuxt.$emit("updatePageTitle",this.pageTitle),this.$router.push("/".concat(this.$route.params.model)+"/".concat(t.section))},setListener:function(){this.$nuxt.$on("selectModel",this.setPageModel)},setPageModel:function(t){var e=this.lists.find((function(data){return data.model===t.title}));this.list=e[t.title]}}},k=o(50),component=Object(k.a)(w,(function(){var t=this,e=t._self._c;return e(n.a,[e("MainHeader"),t._v(" "),e(h.a,{attrs:{clipped:"",app:""}},[e(l.a,{attrs:{nav:"",dense:""}},t._l(t.list,(function(o,i){return e(m.a,{key:i,scopedSlots:t._u([{key:"activator",fn:function(){return[e(d.a,[e(d.b,[t._v(t._s(o.text))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(o.content,(function(o,n){return e(c.a,{key:n},[e(d.a,[e(d.b,{staticClass:"pl-3",on:{click:function(e){return t.selectItem(o)}}},[t._v(t._s(o.text))])],1)],1)}))],2)})),1)],1),t._v(" "),e(f.a,[e(r.a,[e("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MainHeader:o(282).default})},291:function(t,e,o){"use strict";var n=o(50),component=Object(n.a)({},(function(){return(0,this._self._c)("nuxt")}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,o){o(296),t.exports=o(297)},359:function(t,e,o){"use strict";o(263)},360:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),n.locals={},t.exports=n},363:function(t,e,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5135230c",content,!0,{sourceMap:!1})},364:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'body,html{border:none;margin:0;padding:0;-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:auto;font-family:"Baskerville","Times New Roman","klee",sans-serif;width:100%}body,html{height:100%;overscroll-behavior:none;position:relative}body{-webkit-touch-callout:none;-moz-user-select:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;background-color:var(--CA-black3);overflow-x:hidden}::-webkit-scrollbar{color:transparent;display:none;width:0}.main{display:flex}.title{font-weight:lighter;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.user--img{height:100%;-o-object-fit:contain;object-fit:contain;position:absolute;right:0;width:100%}.text-style{white-space:pre-line}',""]),n.locals={},t.exports=n},365:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("17bc9ac2",content,!0,{sourceMap:!1})},366:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),n.push([t.i,'.print-area{background-color:#fff;height:296.5mm;margin-bottom:40px;overflow:hidden;page-break-after:always;position:relative;width:210mm;z-index:0}.print-area--tombo{height:340.9mm;margin-bottom:150px;margin-top:80px;width:241.5mm}.page{font-family:"Noto Sans",sans-serif;height:296.5mm;left:0;padding:12mm 15mm;position:absolute;top:0;width:210mm}.page--tombo{left:15.75mm;top:22.2mm}.page:lang(en),.page:lang(ja){font-family:"Noto Sans JP",sans-serif}@media screen{.print-area{box-shadow:0 .5mm 2mm rgba(0,0,0,.3);left:50%;transform:translate3d(-50%,0,0)}}@media print{.no-print{display:none}body{margin:0;padding:0}.print-area{left:0;margin-bottom:0;margin-top:0;top:0}.v-main{padding-top:0!important}.container{padding:0!important}.v-application{background:#fff!important}}@page{size:A4 portrait;margin:0}.split-L,.split-R{width:49%}.split-3,.split-L,.split-R{display:inline-block;position:relative;vertical-align:top}.split-3{width:32.5%}.page-number{bottom:7mm;font-size:.75rem;font-weight:700;position:absolute}.page-number__left{left:7mm}.page-number__right{right:7mm}.section{font-size:.75rem;font-weight:400;position:absolute;top:5mm}.section__left{left:5mm}.section__right{right:5mm}.thumbIndex{color:#fff;font-size:.7rem;font-weight:600;height:53mm;line-height:9mm;position:absolute;text-align:center;vertical-align:middle;width:12.45mm;writing-mode:vertical-rl}.thumbIndex__posi1{background-color:var(--B2);top:16mm}.thumbIndex__posi2{background-color:var(--G1);top:69mm}.thumbIndex__posi3{background-color:var(--G3);top:122mm}.thumbIndex__posi4{background-color:var(--G4);top:175mm}.thumbIndex__posi5{background-color:var(--G5);top:228mm}.thumbIndex__left{left:-3.45mm}.thumbIndex__right{right:-3.45mm}.thumbIndex__left .thumbIndex__text{height:100%;position:absolute;right:0;width:9mm}.thumbIndex__right .thumbIndex__text{height:100%;left:0;position:absolute;width:9mm}.tombo{background-color:#fff;height:328mm;left:0;position:absolute;top:6.2mm;width:100%;z-index:-1}.tombo-mark{border:1px solid #000;height:12.3mm;position:absolute;width:12.3mm;z-index:100}.tombo-mark__top-left-vertical{border-left:none;border-top:none;left:10px;top:0}.tombo-mark__top-left-width{border-left:none;border-top:none;left:0;top:10px}.tombo-mark__top-center-vertical{top:0;width:1px}.tombo-mark__top-center-vertical,.tombo-mark__top-center-width{background-color:#000;border:none;left:50%;transform:translate3d(-50%,0,0)}.tombo-mark__top-center-width{height:.5px;top:6.15mm;width:24.6mm}.tombo-mark__top-center-circle{border-radius:6.15mm;height:6.15mm;left:50%;top:6.15mm;transform:translate3d(-50%,-50%,0);width:6.15mm}.tombo-mark__top-right-vertical{border-right:none;border-top:none;right:10px;top:0}.tombo-mark__top-right-width{border-right:none;border-top:none;right:0;top:10px}.tombo-mark__middle-left-width{background-color:#000;border:none;height:24.6mm;left:6.15mm;top:50%;transform:translate3d(0,-50%,0);width:1px}.tombo-mark__middle-left-vertical{background-color:#000;border:none;height:.5px;left:6.15mm;top:50%;transform:translate3d(-50%,0,0)}.tombo-mark__middle-left-circle{border-radius:6.15mm;height:6.15mm;left:6.15mm;top:50%;transform:translate3d(-50%,-50%,0);width:6.15mm}.tombo-mark__middle-right-width{background-color:#000;border:none;height:24.6mm;right:6.15mm;top:50%;transform:translate3d(0,-50%,0);width:1px}.tombo-mark__middle-right-vertical{background-color:#000;border:none;height:.5px;right:6.15mm;top:50%;transform:translate3d(50%,0,0)}.tombo-mark__middle-right-circle{border-radius:6.15mm;height:6.15mm;right:6.15mm;top:50%;transform:translate3d(50%,-50%,0);width:6.15mm}.tombo-mark__bottom-left-vertical{border-bottom:none;border-left:none;bottom:0;left:10px}.tombo-mark__bottom-left-width{border-bottom:none;border-left:none;bottom:10px;left:0}.tombo-mark__bottom-center-vertical{bottom:0;width:1px}.tombo-mark__bottom-center-vertical,.tombo-mark__bottom-center-width{background-color:#000;border:none;left:50%;transform:translate3d(-50%,0,0)}.tombo-mark__bottom-center-width{bottom:6.15mm;height:.5px;width:24.6mm}.tombo-mark__bottom-center-circle{border-radius:6.15mm;bottom:6.15mm;height:6.15mm;left:50%;transform:translate3d(-50%,50%,0);width:6.15mm}.tombo-mark__bottom-right-vertical{border-bottom:none;border-right:none;bottom:0;right:10px}.tombo-mark__bottom-right-width{border-bottom:none;border-right:none;bottom:10px;right:0}.tombo-line-checker{background-color:rgba(0,0,0,.02);height:303.4mm;left:12.3mm;position:absolute;top:12.3mm;width:216.9mm;z-index:1}',""]),n.locals={},t.exports=n},367:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("498e2b5c",content,!0,{sourceMap:!1})},368:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,':root{--B1:#221814;--B2:#251e1b;--B3:#3e3a39;--G1:#595757;--G2:#7d7c7d;--G3:#888889;--G4:#b4b5b5;--G5:#c9c9ca;--G6:#dcdcdd;--W:#fff}.nuxt-content h1{background:#b4b5b5;background:var(--G4);border-radius:1mm;color:#fff;color:var(--W);font-size:1.75rem;font-weight:700;margin:7mm 0 3mm;padding:1mm 3mm;position:relative}.h1-L,.h1-R{height:49.55px}.h1-R{background-color:hsla(0,0%,100%,0)!important}.h3-title{border-bottom:.2mm solid #595757;border-bottom:.2mm solid var(--G1);font-size:1rem!important;font-weight:700!important;margin:7mm 3mm 3mm!important;position:relative!important}.h3-title:before{background:#595757;background:var(--G1);border-left:2.5mm solid;content:"";margin:0 2.35mm 0 0;padding:0}.nuxt-content h4{border-bottom:.2mm solid #595757;border-bottom:.2mm solid var(--G1)}.nuxt-content h4,.nuxt-content h5{font-weight:700}.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{font-size:1rem;margin:7mm 3mm 3mm;position:relative}.nuxt-content h6{font-weight:400}.nuxt-content p{padding:0 3mm}.nuxt-content p,.nuxt-content ul{font-size:.75rem;font-weight:400;margin:1mm 3mm}.nuxt-content ul{padding-left:3mm;padding-right:3mm}.nuxt-content li,.nuxt-content table{font-size:.75rem;font-weight:400}.nuxt-content table{border-collapse:collapse;left:3mm;line-height:1rem;position:relative;vertical-align:center;width:calc(100% - 6mm)}.nuxt-content table th{background:#7d7c7d;background:var(--G2);border:.088mm solid #7d7c7d;border:.088mm solid var(--G2);border-left:none;border-right:none;color:#fff;color:var(--W);padding:1mm}.nuxt-content tr:nth-child(2n){background:#dcdcdd;background:var(--G6)}.nuxt-content table td{border:.088mm solid #7d7c7d;border:.088mm solid var(--G2);border-left:none;border-right:none;padding:1mm}.nuxt-content td:first-of-type{white-space:nowrap}.nuxt-content i{background-color:#3e3a39;background-color:var(--B3);color:#fff;color:var(--W);font-size:18px;padding:3px}.nuxt-content .memo{background-color:rgba(0,153,255,.267);border:1px solid #09f;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .memo:before{background-image:url(/icon/memo.svg);background-repeat:no-repeat;background-size:contain;content:"MEMO";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content .check-area{background-color:rgba(255,204,0,.6);border:1px solid #a58400;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .check-area:before{background-image:url(/icon/check.svg);background-repeat:no-repeat;background-size:contain;content:"CHECK";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content .caution{background-color:rgba(255,0,0,.467);border:1px solid red;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .caution:before{background-image:url(/icon/beware.svg);background-size:contain;content:"CAUTION";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content code{background-color:transparent!important;font-size:.7rem!important;font-weight:400;line-height:1!important;padding:0!important}.nuxt-content .language-text{margin:0!important;padding-right:0!important}.nuxt-content .memo-page{border:2px solid #b4b5b5;border-color:var(--G4);border-radius:.5rem;height:260mm;margin-top:6mm;width:174mm}.nuxt-content .memo-page,.nuxt-content .memo-page:before{left:50%;position:absolute;transform:translate3d(-50%,0,0)}.nuxt-content .memo-page:before{color:#b4b5b5;color:var(--G4);content:"MEMO";display:inline;font-size:2rem;font-weight:400;letter-spacing:2rem;line-height:3rem;text-align:center;top:3mm;vertical-align:middle}.nuxt-content .gesture-icon{height:30px;line-height:30px;margin-bottom:12px;vertical-align:middle;width:30px}.nuxt-content .gesture-icon,.van__img{-o-object-fit:contain;object-fit:contain;position:relative}.van__img{height:100mm;left:50%;transform:translate3d(-50%,0,0);width:100%}.van__icon{display:block;height:30px;margin:auto;-o-object-fit:contain;object-fit:contain;width:30px}.van__table-icon{background-color:#3e3a39;background-color:var(--B3);height:20px;padding:3px;vertical-align:middle}.van__table-icon,.vtlna__img{-o-object-fit:contain;object-fit:contain;position:relative}.vtlna__img{height:100mm;left:50%;transform:translate3d(-50%,0,0);width:100%}.vtlna__icon{display:block;height:30px;margin:auto;-o-object-fit:contain;object-fit:contain;width:30px}.vtlna__inline-icon,.vtlna__inline-icon--dark{height:20px;-o-object-fit:contain;object-fit:contain;padding:3px;position:relative;vertical-align:middle}.vtlna__inline-icon--dark{background-color:#3e3a39;background-color:var(--B3)}.no-header-table th{display:none}.vtlna__table table{border:.088mm solid #7d7c7d!important;border:.088mm solid var(--G2)!important;margin-bottom:3mm;margin-top:3mm;width:99%!important}.vtlna__table tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table td:first-of-type{font-size:8mm;height:20mm;width:20mm}.vtlna__table img{height:12mm;-o-object-fit:contain;object-fit:contain;vertical-align:middle}.icon-description td:first-of-type{height:auto}.vtlna__table-single table{border:.088mm solid #7d7c7d!important;border:.088mm solid var(--G2)!important;margin-bottom:3mm;margin-top:3mm;width:93%!important}.vtlna__table-single tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table-single td:first-of-type{height:20mm;white-space:normal;width:20mm}.vtlna__table-single img{height:12mm;-o-object-fit:contain;object-fit:contain;vertical-align:middle}.vtlna__table-underline table{width:98%!important}.vtlna__table-underline tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table-underline td:first-of-type{height:10mm;width:10mm}.vtlna__table-underline img{display:inline-block;vertical-align:top}.spec-sheet th{background-color:#595757!important;background-color:var(--G1)!important;border:.088mm solid #b4b5b5!important;border:.088mm solid var(--G4)!important;font-weight:900;line-height:1rem}.spec-sheet td:first-of-type{background-color:#7d7c7d;background-color:var(--G2);color:#fff;color:var(--W);font-weight:600;width:30mm!important}.spec-sheet td{border:.088mm solid #b4b5b5!important;border:.088mm solid var(--G4)!important;line-height:1rem}.safety-mark{display:inline-block;padding:1mm}.safety-mark,.safety-title{font-size:1.75rem;font-weight:700;line-height:10mm;margin-left:3mm;text-align:center;vertical-align:middle}.safety-title{border:.5mm solid #888889;border:.5mm solid var(--G3)}.piano-img{height:40mm;left:50%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 40%;object-position:50% 40%;position:relative;transform:translate3d(-50%,0,0);width:60%}.music-img,.sounds-img{height:15mm;left:50%;-o-object-fit:contain;object-fit:contain;position:relative;transform:translate3d(-50%,0,0);width:100%}table{display:inline-table!important}img{display:inline}',""]),n.locals={},t.exports=n},420:function(t,e,o){t.exports=o.p+"img/kawailogo_red.f1a337b.svg"},421:function(t,e,o){"use strict";o(270)},422:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".header[data-v-db7e38f8]{border-bottom:2px solid #e11922!important}.c-p[data-v-db7e38f8]{cursor:pointer}",""]),n.locals={},t.exports=n},425:function(t,e,o){"use strict";o(271)},426:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".footer[data-v-47c6bcd3]{font-size:12px;padding:7px}",""]),n.locals={},t.exports=n},427:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"getters",(function(){return r})),o.d(e,"mutations",(function(){return l})),o.d(e,"actions",(function(){return m}));var n=function(){return{}},r={},l={},m={}},434:function(t,e,o){"use strict";o.r(e);var n=o(447),r=o(446),l={name:"HomeFooter"},m=(o(425),o(50)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"footer",attrs:{dark:"",fixed:"",color:"#323232",app:""}},[e("a",{staticClass:"white--text text-decoration-none",attrs:{href:"https://www.kawai.co.jp/privacy/"}},[t._v(" 個人情報保護方針について ")]),t._v(" "),e(r.a),t._v(" "),e("strong",{staticClass:"text-right"},[t._v("© Kawai Musical Instruments Mfg. Co., Ltd. All Rights Reserved.")])],1)}),[],!1,null,"47c6bcd3",null);e.default=component.exports},86:function(t,e,o){"use strict";var n=o(444),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(o(359),o(50)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[295,6,1,7]]]);